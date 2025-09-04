import type { FastifyInstance } from "fastify"
import userController from "../factory/Inject.js"


async function RouterRout(fastify: FastifyInstance){

    fastify.post("/signup", userController.createUser)

}
export default RouterRout