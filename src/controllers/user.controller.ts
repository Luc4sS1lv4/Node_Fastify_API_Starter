import { UserService } from "../services/user.service.js";

export class UserController{
    constructor(private userService: UserService){}

    createUser = async (req:any, reply: any)=>{
        try{
        const {nome, email, senha,} = req.body
        const newUser = await this.userService.createUserService(nome, email, senha)
        return reply.status(200).send(newUser)

        }catch(e: any){
            return reply.status(400).send({erro: e.message})
        }
        
    }
}