// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Task } from './task';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TasksService {
    url = "/tasks";
    constructor(private http: Http) {}

    tasks: Task[] = [];
    getTasks(): Task[] {
        var a = this.http.get(this.url)
            .map((res: Response) => res.json())
            .subscribe(data => data.forEach(child => this.tasks.push(child)));

        return this.tasks;
    }
}