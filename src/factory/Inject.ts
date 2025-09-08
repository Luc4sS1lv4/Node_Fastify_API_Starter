import { UserRepository } from "../repository/user.repository.js";
import Prisma from "../../prisma/index.js";
import { UserService } from "../services/user.service.js";
import { UserController } from "../controllers/user.controller.js";
import { SessionController } from "../controllers/session.controller.js";
import { SessionService } from "../services/session.service.js";
import { AuthSession } from "../middlewares/User.middleware.js";
import TaskService from "../services/task.service.js";
import { TaskRepository } from "../repository/task.repository.js";
import TaskController from "../controllers/task.create.controller.js";
import TaskListController from "../controllers/task.list.controller.js";



// Rota de criar login
const userRepo = new UserRepository(Prisma)
const userService = new UserService(userRepo)
const userController = new UserController(userService)

//Rota de sessão
const sessioService = new SessionService(userRepo)
const sessionController = new SessionController(sessioService)
const sessionAuth = new AuthSession()

//Rota de Task create
const taskRepo = new TaskRepository(Prisma)
const taskService = new TaskService(taskRepo)
const taskControllerCreat = new TaskController(taskService)
const taskListController = new TaskListController(taskService) 


export { userController, sessionController, sessionAuth, taskControllerCreat, taskListController }