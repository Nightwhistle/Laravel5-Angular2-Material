"use strict";
var core_1 = require("@angular/core");
var EditComponent = (function () {
    function EditComponent() {
    }
    __decorate([
        input, 
        __metadata('design:type', Object)
    ], EditComponent.prototype, "task", void 0);
    EditComponent = __decorate([
        core_1.Component({
            selector: 'editbox',
            template: "<input name=\"task\" value=\"{{task.task}}\">\n                <button (click)=\"updateTask(); task.editing = false\">Update</button>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map