import type TaskService from "../services/task.service.js"


export default class TaskListController {
    constructor(private TaskList: TaskService) { }

    public Tasklist = async (request: any, replay: any) => {
        try {
            const { Id } = request.userId
            const listAll = await this.TaskList.listTask(Id)
            return replay.send(listAll)
        } catch (e: any) {
            return replay.status(400).send({ erro: e.message })
        }
    }
}