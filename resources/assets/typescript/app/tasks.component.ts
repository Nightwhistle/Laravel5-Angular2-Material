import {Component, Input} from "@angular/core";
import {TasksService} from "./tasks.service";
import {Task} from "./task";
/**
 * Created by vivify on 10/28/16.
 */

@Component({
    selector: 'tasks',
    template: require('./tasks.component.html'),
})

export class TasksComponent {
    public newChecklist: string = '';
    public checklists: string[] = [];
    public tasksList: Task[];

    constructor(private tasksService: TasksService) {
        this.tasksList = tasksService.getTasks();
    }

    deleteTask(t: Task): void {
        this.tasksService.deleteTask(t);
        this.tasksList.splice(this.tasksList.indexOf(t), 1);
    }

    updateTask(task: Task): void {
        var response = this.tasksService.updateTask(task);
        response.subscribe(data => {
                task.id = data.id;
                task.task = data.task;
                task.priority = data.priority;
                task.done = data.done;
                task.created_at = data.created_at;
                task.updated_at = data.updated_at;
            },
            error => {
                var errorJson = JSON.parse(error._body);
                task.errors = errorJson.task;
            });
    }
    //
    // createTask(createTaskString: string): void {
    //     var task: Task = new Task();
    //     task.task = createTaskString;
    //     var response: any;
    //     response = this.tasksService.createTask(task);
    //     response.subscribe(data => {
    //             response.id = data.id;
    //             response.task = data.task;
    //             response.priority = data.priority;
    //             response.done = data.done;
    //             response.created_at = data.created_at;
    //             response.updated_at = data.updated_at;
    //             this.tasksList.unshift(response);
    //             this.taskErrors = [];
    //         },
    //         error => {
    //             var errorJson = JSON.parse(error._body);
    //             this.taskErrors = errorJson.task;
    //         });
    // }
}