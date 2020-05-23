const projects = require("../services/projects");

const Middleware = (req, res, next) => {
  const { id } = req.params;

  console.log(req.params);

  // Verifica se o Id Existe
  const project = projects.find((value) => value.id === id);

  if (!project) {
    return res.status(400).json({ message: `cannot find the project: ${id}` });
  }

  return next();
};

module.exports = Middleware;
