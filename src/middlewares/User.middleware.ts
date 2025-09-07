import  Jwt from "jsonwebtoken";


export class AuthSession{

    authLogin = async (request:any, reply:any)=>{
        const Token = request.headers['authorization'].split(" ")[1]

        if(!Token)throw new Error("Token inexistente")

            const decoded = Jwt.verify(Token, "lucas132") as {id: number}
            request.userId = decoded.id
            
            return reply.send(request.userId)
    }

}