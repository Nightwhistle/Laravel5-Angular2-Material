import {Component, Input} from "@angular/core";

import {Task} from "./task";
import {TasksService} from "./tasks.service";

/**
 * Created by vivify on 11/7/16.
 */
@Component({
    selector: "todo-add-new-todo",
    template: require("./add-new-task.component.html"),
})

export class AddNewTaskComponent {

    public taskErrors: String[] = [];
    @Input() private tasksList: Task[];

    constructor(private tasksService: TasksService) {
    }

    createTask(createTaskString: string): void {
        var task: Task = new Task();
        task.task = createTaskString;
        var response: any;
        response = this.tasksService.createTask(task);
        response.subscribe(data => {
                response.id = data.id;
                response.task = data.task;
                response.priority = data.priority;
                response.done = data.done;
                response.created_at = data.created_at;
                response.updated_at = data.updated_at;
                this.tasksList.unshift(response);
                this.taskErrors = [];
                },
                           error => {
                var errorJson = JSON.parse(error._body);
                this.taskErrors = errorJson.task;
                });
    }

}git 