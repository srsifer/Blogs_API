const express = require('express');
const { userRouter } = require('./src/routers/user');
const { errorHandler } = require('./src/err/handleError');
const { loguinRouter } = require('./src/routers/loguinRouter');
const { categoryRouter } = require('./src/routers/categoryRouter');

const app = express();
app.use(express.json());
app.use('/user', userRouter);
app.use('/login', loguinRouter);
app.use('/categories', categoryRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));