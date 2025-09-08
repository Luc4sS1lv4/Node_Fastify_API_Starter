import type { IUser } from "../interfaces/user.interfaces.js"
import { PrismaClient, type User } from "@prisma/client"

export class UserRepository implements IUser {
    constructor(public prisma: PrismaClient) { }

    async findAll(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({ where: { email } })
        return user!

    }

    async create(nome: string, email: string, senha: string): Promise<User> {

        return await this.prisma.user.create({
            data: {
                nome,
                email,
                senha,
            }
        })
    }


}