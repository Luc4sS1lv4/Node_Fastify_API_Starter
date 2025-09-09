import type { IUser } from "../interfaces/user.interfaces.js";
import bcrypt from "bcrypt"

export class UserService {
    constructor(private userRepo: IUser) { }

    async createUserService(nome: string, email: string, senha: string) {
        

        if (!nome || !email || !senha) throw new Error("Os campos precisam estar preenchidos")

        const user = await this.userRepo.findAll(email)
        if (user) throw new Error("Email ja cadastrado, por favor insira um novo")

        const senhaHasheada = await bcrypt.hash(senha, 11)
        const newUser = await this.userRepo.create(nome, email, senhaHasheada)
        return { newUser }

    }
}