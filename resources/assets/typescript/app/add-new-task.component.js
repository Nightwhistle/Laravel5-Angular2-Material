"use strict";
var core_1 = require("@angular/core");
var task_1 = require("./task");
var tasks_service_1 = require("./tasks.service");
var AddNewTaskComponent = (function () {
    function AddNewTaskComponent(tasksService) {
        this.tasksService = tasksService;
        this.taskErrors = [];
    }
    AddNewTaskComponent.prototype.createTask = function (createTaskString) {
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AddNewTaskComponent.prototype, "tasksList", void 0);
    AddNewTaskComponent = __decorate([
        core_1.Component({
            selector: "todo-add-new-todo",
            template: require("./add-new-task.component.html"),
        }), 
        __metadata('design:paramtypes', [tasks_service_1.TasksService])
    ], AddNewTaskComponent);
    return AddNewTaskComponent;
}());
exports.AddNewTaskComponent = AddNewTaskComponent;
git;
//# sourceMappingURL=add-new-task.component.js.map