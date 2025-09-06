import { PrismaClient } from "@prisma/client";
import type { ITask } from "../interfaces/task.interfaces.js";

export class TaskRepository implements ITask{
    constructor(private prisma: PrismaClient){}
    
    async findAll (userID: number){
        const alltasks = await this.prisma.task.findMany({
            where:{
                autorid: userID
            },
            select:{
                nome:true
            }
        })
        return alltasks
    }
    
        async createTask(nome: string, descricao: string, autorid:number){
            const newTask = await this.prisma.task.create({data:{
                nome,
                descricao,
                autorid
            }})
            return newTask
        }
}