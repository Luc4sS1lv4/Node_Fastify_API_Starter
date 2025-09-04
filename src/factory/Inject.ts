import { UserRepository } from "../repository/user.repository.js";
import Prisma from "../../prisma/index.js";
import { UserService } from "../services/user.service.js";
import { UserController } from "../controllers/user.controller.js";

const userRepo = new UserRepository(Prisma)
const userService = new UserService(userRepo)
const userController = new UserController(userService)


export default userController