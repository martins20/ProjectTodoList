let repeat = 0;

const RequestCount = (req, res, next) => {
  repeat++;

  console.log(`Numeros de Requisições feitas: ${repeat}`);

  return next();
};

module.exports = RequestCount;
