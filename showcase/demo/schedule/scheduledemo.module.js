"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var scheduledemo_1 = require("./scheduledemo");
var scheduledemo_routing_module_1 = require("./scheduledemo-routing.module");
var schedule_1 = require("../../../components/schedule/schedule");
var dialog_1 = require("../../../components/dialog/dialog");
var inputtext_1 = require("../../../components/inputtext/inputtext");
var calendar_1 = require("../../../components/calendar/calendar");
var checkbox_1 = require("../../../components/checkbox/checkbox");
var button_1 = require("../../../components/button/button");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var ScheduleDemoModule = (function () {
    function ScheduleDemoModule() {
    }
    return ScheduleDemoModule;
}());
ScheduleDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            scheduledemo_routing_module_1.ScheduleDemoRoutingModule,
            schedule_1.ScheduleModule,
            dialog_1.DialogModule,
            inputtext_1.InputTextModule,
            calendar_1.CalendarModule,
            checkbox_1.CheckboxModule,
            button_1.ButtonModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            scheduledemo_1.ScheduleDemo
        ]
    })
], ScheduleDemoModule);
exports.ScheduleDemoModule = ScheduleDemoModule;
//# sourceMappingURL=scheduledemo.module.js.map