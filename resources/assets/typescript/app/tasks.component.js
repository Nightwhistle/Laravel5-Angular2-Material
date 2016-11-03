"use strict";
var core_1 = require("@angular/core");
var tasks_service_1 = require("./tasks.service");
var task_1 = require("./task");
var TasksComponent = (function () {
    function TasksComponent(tasksService) {
        this.tasksService = tasksService;
        this.newChecklist = '';
        this.checklists = [];
        this.taskErrors = [];
        this.tasksList = tasksService.getTasks();
    }
    TasksComponent.prototype.deleteTask = function (t) {
        this.tasksService.deleteTask(t);
        this.tasksList.splice(this.tasksList.indexOf(t), 1);
    };
    TasksComponent.prototype.updateTask = function (task) {
        var response = this.tasksService.updateTask(task);
        response.subscribe(function (data) {
            task.id = data.id;
            task.task = data.task;
            task.priority = data.priority;
            task.done = data.done;
            task.created_at = data.created_at;
            task.updated_at = data.updated_at;
            task.errors = ["custom error"];
        }, function (error) {
            var errorJson = JSON.parse(error._body);
            task.errors = errorJson.task;
        });
    };
    TasksComponent.prototype.createTask = function (createTaskString) {
        var _this = this;
        var task = new task_1.Task();
        task.task = createTaskString;
        var response;
        response = this.tasksService.createTask(task);
        response.subscribe(function (data) {
            response.id = data.id;
            response.task = data.task;
            response.priority = data.priority;
            response.done = data.done;
            response.created_at = data.created_at;
            response.updated_at = data.updated_at;
            _this.tasksList.unshift(response);
            _this.taskErrors = [];
        }, function (error) {
            var errorJson = JSON.parse(error._body);
            _this.taskErrors = errorJson.task;
        });
    };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            template: require('./tasks.component.html'),
            providers: [tasks_service_1.TasksService]
        }), 
        __metadata('design:paramtypes', [tasks_service_1.TasksService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map