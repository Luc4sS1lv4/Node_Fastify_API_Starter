import type { FastifyInstance } from "fastify"
import { userController, sessionController, sessionAuth, taskControllerCreat, taskListController } from "../factory/Inject.js"


async function RouterRout(fastify: FastifyInstance) {

    fastify.post("/signup", userController.createUser)

    fastify.post("/session", sessionController.session)

    fastify.post("/tasks",{preHandler: sessionAuth.authLogin}, taskControllerCreat.creatTask)

    fastify.get("/tasks",{preHandler: sessionAuth.authLogin}, taskListController.Tasklist)

}
export default RouterRout