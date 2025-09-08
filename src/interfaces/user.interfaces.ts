import type { User } from "@prisma/client"

export interface IUser {
    findAll(email: string): Promise<User>
    create(nome: string, email: string, senha: string): Promise<User>

}
