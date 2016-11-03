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
    createTaskUrl = "api/tasks/createnew";
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
                data.forEach(child => this.tasks.push(child));
            });
        return this.tasks;
    }

    deleteTask(t: Task) {
        var response: Task = new Task();
        this.http.delete(this.deleteTaskUrl + t.id)
            .subscribe(data => {
            });
    }

    updateTask(task: Task): any {
        let observable = this.http.put(this.updateTasksUrl + task.id, task, this.headers)
            .map(a => a.json());
        return observable;
    }

    createTask(task: Task): any {
        let observable = this.http.post(this.createTaskUrl, task, this.headers)
            .map(a => a.json());
        return observable;
    }

}