"use strict";
var core_1 = require("@angular/core");
var tasks_service_1 = require("./tasks.service");
var TasksComponent = (function () {
    function TasksComponent(tasksService) {
        this.tasksService = tasksService;
        this.newChecklist = '';
        this.checklists = [];
        this.tasksList = tasksService.getTasks();
        console.log(this.tasksList);
    }
    TasksComponent.prototype.saveChecklist = function () {
        if (this.newChecklist) {
            this.checklists.push(this.newChecklist);
            this.newChecklist = '';
        }
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