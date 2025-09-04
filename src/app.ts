import Fastify from "fastify";
import RouterRout from "./routers/user.router.js";
import formbody from "@fastify/formbody"
const fastify = Fastify({
    logger: true
})

await fastify.register(formbody)
await fastify.register(RouterRout)

try{
    await fastify.listen({port: 8000})
    console.log(`Server rodando na porta ${8000}`)
}catch (e:any){
    console.log({mensagem: e.message})
}

export default fastify