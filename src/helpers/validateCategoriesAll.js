const { Categories } = require('../../models');
const { categorieNotFound } = require('../err/errorMenssages');

const validateAllCategories = async (categorieList) => {
  const promiseResult = categorieList.map(async (categoryId) => {
    const [categorie] = await Categories.findAll({ where: { id: categoryId } });
    if (!categorie) return false;
    return true;
  });
  const resolveResult = await (Promise.all(promiseResult));
  const invalidId = resolveResult.includes(false);
  if (invalidId) throw categorieNotFound;
};

module.exports = { validateAllCategories };