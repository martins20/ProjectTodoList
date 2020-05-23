const route = require("express").Router();

const ProjectController = require("./controller/ProjectController");
const TaskController = require("./controller/TaskController");
const CheckIdMiddleware = require("./middleware/CheckId");
const RequestCount = require("./middleware/RequestCount");

route.use(RequestCount);

route.get("/projects", ProjectController.index);
route.post("/projects", ProjectController.store);
route.put("/projects/:id", CheckIdMiddleware, ProjectController.update);
route.delete("/projects/:id", CheckIdMiddleware, ProjectController.delete);

route.post("/projects/:id/tasks", CheckIdMiddleware, TaskController.store);

module.exports = route;
