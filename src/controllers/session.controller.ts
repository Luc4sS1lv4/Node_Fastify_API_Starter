import { SessionService } from "../services/session.service.js";

export class SessionController{
    constructor(private sessionServi: SessionService){}
    session = async (req: any, replay: any)=>{
        try {
        const {email, senha} = req.body
           const token = await this.sessionServi.session(email, senha)
           return replay.status(200).send(token)
    }    
     catch (error:any) {
        return replay.status(400).send({erro: error.message})
    }
    }
}