"use strict";
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var button_1 = require("@angular2-material/button");
var input_1 = require("@angular2-material/input");
require("rxjs/add/operator/map");
var app_component_1 = require("./app.component");
var tasks_component_1 = require("./tasks.component");
var http_1 = require("@angular/http");
var ng2_pagination_1 = require('ng2-pagination');
core_1.enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, input_1.MdInputModule, button_1.MdButtonModule, http_1.HttpModule, ng2_pagination_1.Ng2PaginationModule],
            declarations: [app_component_1.AppComponent, tasks_component_1.TasksComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map