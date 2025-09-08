import { PrismaClient } from "@prisma/client";
import type { ITask } from "../interfaces/task.interfaces.js";
import { connect } from "http2";

export class TaskRepository implements ITask {
    constructor(private prisma: PrismaClient) { }

    async findAll(userID: number) {
        const alltasks = await this.prisma.task.findMany({
            where: {
                autorid:userID
                },
            select: {
                nome: true
            }
        })
        return alltasks
    }

    async createTask(nome: string, descricao: string, autor:number) {
        const newTask = await this.prisma.task.create({
            data: {
                nome,
                descricao,
                autor:{
                    connect:{id: autor}
                }
            },include: {
                autor: true
            }
        })
        return newTask
    }
}