import type { FastifyInstance } from "fastify"
import {userController, sessionController, sessionAuth} from "../factory/Inject.js"


async function RouterRout(fastify: FastifyInstance){

    fastify.post("/signup", userController.createUser)

    fastify.post("/session", sessionController.session)
    
    fastify.post("/tasks", sessionAuth.authLogin)

}
export default RouterRout