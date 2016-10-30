"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var TasksService = (function () {
    function TasksService(http) {
        this.http = http;
        this.url = "/tasks";
        this.tasks = [];
    }
    TasksService.prototype.getTasks = function () {
        var _this = this;
        var a = this.http.get(this.url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return data.forEach(function (child) { return _this.tasks.push(child); }); });
        return this.tasks;
    };
    TasksService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TasksService);
    return TasksService;
}());
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map