import type { ITask } from "../interfaces/task.interfaces.js";

export default class TaskService {
    constructor(private Taskrepository: ITask) { }

    public createtask = async (nome: string, descricao: string, autorid: number) => {
        if (!nome) throw new Error("Preencha o campo de nome tarefa")

        const newtask = await this.Taskrepository.createTask(nome, descricao, autorid)
        return newtask
    }

    public listTask = async (id: number)=>{
        const allUser = await this.Taskrepository.findAll(id)
        return allUser
    }

}