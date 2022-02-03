const { User } = require('../../../models');
const { getByEmail } = require('../../helpers/getByemail');
const { jsonWebToken } = require('../../jsonWebTonken/jsonWebToken');
const { alreadyExistEmail } = require('../../err/errorMenssages');

const createUser = async (displayName, email, password, image) => {
   const emailExist = await getByEmail(email);

  if (!emailExist) {
    const obj = {
      displayName,
      email,
      password,
      image,
    };

    const useCreated = await User.create(obj);
    
    delete useCreated.dataValues.password;
    const token = jsonWebToken(useCreated.dataValues);
    return token;
  }

   throw alreadyExistEmail;
};

module.exports = { createUser };