"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var task_1 = require('./task');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/Rx');
var TasksService = (function () {
    function TasksService(http) {
        this.http = http;
        this.getTasksUrl = "api/tasks/";
        this.createTaskUrl = "api/tasks/create/new";
        this.updateTasksUrl = "api/tasks/";
        this.deleteTaskUrl = "api/tasks/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.tasks = [];
    }
    TasksService.prototype.getTasks = function () {
        var _this = this;
        this.http.get(this.getTasksUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return data.forEach(function (child) { return _this.tasks.push(child); }); });
        return this.tasks;
    };
    TasksService.prototype.deleteTask = function (id) {
        var response = new task_1.Task();
        this.http.delete(this.deleteTaskUrl + id)
            .subscribe(function (data) { });
    };
    TasksService.prototype.updateTask = function (id, task) {
        console.log(task);
        return this.http.put(this.updateTasksUrl + id, JSON.stringify(task), this.headers)
            .subscribe(function (a) { });
    };
    TasksService.prototype.createTask = function (task) {
        var response = new task_1.Task();
        this.http.post(this.createTaskUrl, JSON.stringify(task), this.headers)
            .map(function (a) { return a.json(); })
            .subscribe(function (data) {
            response.id = data.id;
            response.task = data.task;
            response.priority = data.priority;
            response.done = data.done;
            response.created_at = data.created_at;
            response.updated_at = data.updated_at;
        });
        return response;
    };
    TasksService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TasksService);
    return TasksService;
}());
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map