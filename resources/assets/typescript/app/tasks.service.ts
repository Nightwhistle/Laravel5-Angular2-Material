// Imports
import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Task} from "./task";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/Rx";
// Import RxJs required methods


@Injectable()
export class TasksService {
    getTasksUrl = "api/tasks/";
    createTaskUrl = "api/tasks/create/new";
    updateTasksUrl = "api/tasks/";
    deleteTaskUrl = "api/tasks/";

    public headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    tasks: Task[] = [];

    getTasks(): Task[] {
        this.http.get(this.getTasksUrl)
            .map((res: Response) => res.json())
            .subscribe(data => {
                data.data.forEach(child => this.tasks.push(child));
            });
        return this.tasks;
    }

    deleteTask(t: Task) {
        var response: Task = new Task();
        this.http.delete(this.deleteTaskUrl + t.id)
            .subscribe(data => {});
    }

    updateTask(task: Task): Task {
        var response: Task = new Task();
        this.http.put(this.updateTasksUrl + task.id, task, this.headers)
            .map(a => a.json())
            .subscribe(data => {
                response.id = data.id;
                response.task = data.task;
                response.priority = data.priority;
                response.done = data.done;
                response.created_at = data.created_at;
                response.updated_at = data.updated_at;
            });
        return response;
    }

    createTask(task: string): Task {
        var response: Task = new Task();
        this.http.post(this.createTaskUrl, JSON.stringify(task), this.headers)
            .map(a => a.json())
            .subscribe(data => {
                response.id = data.id;
                response.task = data.task;
                response.priority = data.priority;
                response.done = data.done;
                response.created_at = data.created_at;
                response.updated_at = data.updated_at;
            });
        return response;
    }
}