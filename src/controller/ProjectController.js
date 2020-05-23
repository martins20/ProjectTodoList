const projects = require("../services/projects");

module.exports = {
  index(req, res) {
    res.json(projects);
  },
  store(req, res) {
    const { id, title } = req.body;

    projects.push({ id, title, tasks: [] });

    return res.json({ id, title, tasks: [] });
  },
  update(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.map((project) => {
      if (project.id === id) {
        project.title = title;
        return project;
      }
    });

    return res.json(project);
  },

  delete(req, res) {
    const { id } = req.params;

    projects.splice({ id: projects.id }, 1);

    return res.json();
  },
};
