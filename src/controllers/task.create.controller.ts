import TaskService from "../services/task.service.js";

export default class TaskController {
    constructor(private taskServic: TaskService) { }

    public creatTask = async (request: any, rep: any) => {
        try {
            const { nome, descricao } = request.body
            const id  = request.userId
            const newTask = await this.taskServic.createtask(nome, descricao, id)
            return rep.status(200).send(newTask)
        } catch (e: any) {
            return rep.status(400).send({ error: e.message })
        }
    }

}