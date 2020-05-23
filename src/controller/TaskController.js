const projects = require("../services/projects");

module.exports = {
  store(req, res) {
    const { id } = req.params;
    const { task } = req.body;

    const project = projects.map((project) => {
      if (project.id === id) {
        project.tasks = [...project.tasks, task];
        return project;
      }
    });

    return res.json(project);
  },
};
