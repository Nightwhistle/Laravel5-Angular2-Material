import {Component} from "@angular/core";
import {TasksService} from "./tasks.service";
import {Task} from "./task";
/**
 * Created by vivify on 10/28/16.
 */

@Component({
    selector: 'tasks',
    template: require('./tasks.component.html'),
    providers: [TasksService]
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

    updateTask(task: Task, event: Event) {
        this.tasksService.updateTask(task);
    }

    createTask(createTaskString: string): void {
        var task: Task = new Task();
        task.task = createTaskString;
        var response: Task;
        response = this.tasksService.createTask(task);
        console.log(JSON.stringify(response));
        this.tasksList.unshift(response);
    }
}