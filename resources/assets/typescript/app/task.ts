/**
 * Created by vivify on 10/28/16.
 */

export class Task {
    id: number;
    task: string;
    priority: number;
    done: boolean = false;
    created_at: string;
    updated_at: string;
    editing: boolean = false;
    errors: {};
    hasError: number = 0;
}