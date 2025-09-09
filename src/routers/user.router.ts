import type { FastifyInstance } from "fastify"
import { userController, sessionController, sessionAuth, taskControllerCreat, taskListController } from "../factory/Inject.js"




async function RouterRout(fastify: FastifyInstance) {
    

    fastify.post("/signup", userController.createUser)
    fastify.post("/session", sessionController.session)
    
    fastify.register(async (privateRoute: any) => {
        privateRoute.addHook("preHandler", sessionAuth.authLogin)

        privateRoute.post("/tasks",taskControllerCreat.creatTask)
        privateRoute.get("/tasks",taskListController.Tasklist)
    })
    

    

}
export default RouterRout 