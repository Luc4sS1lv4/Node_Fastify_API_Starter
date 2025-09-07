import { UserRepository } from "../repository/user.repository.js";
import Prisma from "../../prisma/index.js";
import { UserService } from "../services/user.service.js";
import { UserController } from "../controllers/user.controller.js";
import { SessionController } from "../controllers/session.controller.js";
import { SessionService } from "../services/session.service.js";

// Rota de criar login
const userRepo = new UserRepository(Prisma)
const userService = new UserService(userRepo)
const userController = new UserController(userService)

//Rota de sessão
const sessioService = new SessionService(userRepo)
const sessionController = new SessionController(sessioService)

export {userController, sessionController}