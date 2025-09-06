import type { Task } from "@prisma/client";

export interface ITask{
    findAll(autorid: number): Promise<{nome: string}[]>
    createTask(nome: string, descricao: string, autorid: number): Promise<Task>
}