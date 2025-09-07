import type { FastifyInstance } from "fastify"
import {userController, sessionController} from "../factory/Inject.js"


async function RouterRout(fastify: FastifyInstance){

    fastify.post("/signup", userController.createUser)

    fastify.post("/session", sessionController.session)

}
export default RouterRout