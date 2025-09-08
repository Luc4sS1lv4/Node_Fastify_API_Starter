import type { IUser } from "../interfaces/user.interfaces.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class SessionService {
    constructor(private repositoryUser: IUser) { }

    session = async (email: string, senha: string) => {
        const userExist = await this.repositoryUser.findAll(email)

        if (!userExist) throw new Error("Email não encontrado")

        const senhaVerificada = await bcrypt.compare(senha, userExist.senha)
        if (!senhaVerificada) throw new Error("Senha incorreta")

        const token = jwt.sign({ id: userExist.id }, "lucas132")

        return token
    }
}