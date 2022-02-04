const { withoutToken, notEditCategory } = require('../../err/errorMenssages');
const { formatPostUpdate } = require('../../helpers/formatResponseUpdate');
const { verifyOwner } = require('../../helpers/verifyOwner');

const updatebyIdService = async (authorization, id, inputs) => {
  const { categoryIds } = inputs;
  if (!authorization) throw withoutToken;
  if (categoryIds) throw notEditCategory;
  await verifyOwner(authorization, id);
  const response = await formatPostUpdate(inputs, id);
  return response;
};

module.exports = { updatebyIdService };