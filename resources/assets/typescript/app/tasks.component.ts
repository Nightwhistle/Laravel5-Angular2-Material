import {Component} from "@angular/core";
import {TasksService} from "./tasks.service";
import {Task} from "./task";
import {module} from "@angular/upgrade/src/angular_js";
/**
 * Created by vivify on 10/28/16.
 */

@Component({
    selector: 'tasks',
    template: require('./tasks.component.html'),
    // styleUrls: ['./tasks.component.css'],
    providers: [TasksService]
})

export class TasksComponent {
    public newChecklist: string = '';
    public checklists: string[] = [];

    public tasksList: Task[];

    constructor(private tasksService: TasksService) {
        this.tasksList = tasksService.getTasks();
        console.log(this.tasksList);
    }

    deleteTask(id: number): void {
        console.log("Deleting task number " + id);
        this.tasksService.deleteTask(id);

    }

    updateTask(task: Task) {
        console.log("Updating task number " + task.id);
        console.log("sending: " + task);
        this.tasksService.updateTask(task);
    }

    createTask(task: string): void {
        this.tasksList.unshift(this.tasksService.createTask(task));
    }
}