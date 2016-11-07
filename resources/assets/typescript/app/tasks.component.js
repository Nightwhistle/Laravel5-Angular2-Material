"use strict";
var core_1 = require("@angular/core");
var tasks_service_1 = require("./tasks.service");
var TasksComponent = (function () {
    function TasksComponent(tasksService) {
        this.tasksService = tasksService;
        this.newChecklist = '';
        this.checklists = [];
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
        }, function (error) {
            var errorJson = JSON.parse(error._body);
            task.errors = errorJson.task;
        });
    };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            template: require('./tasks.component.html'),
        }), 
        __metadata('design:paramtypes', [tasks_service_1.TasksService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map