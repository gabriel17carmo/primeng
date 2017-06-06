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
var tristatecheckboxdemo_1 = require("./tristatecheckboxdemo");
var tristatecheckboxdemo_routing_module_1 = require("./tristatecheckboxdemo-routing.module");
var tristatecheckbox_1 = require("../../../components/tristatecheckbox/tristatecheckbox");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var TriStateCheckboxDemoModule = (function () {
    function TriStateCheckboxDemoModule() {
    }
    return TriStateCheckboxDemoModule;
}());
TriStateCheckboxDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            tristatecheckboxdemo_routing_module_1.TriStateCheckboxDemoRoutingModule,
            tristatecheckbox_1.TriStateCheckboxModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            tristatecheckboxdemo_1.TriStateCheckboxDemo
        ]
    })
], TriStateCheckboxDemoModule);
exports.TriStateCheckboxDemoModule = TriStateCheckboxDemoModule;
//# sourceMappingURL=tristatecheckboxdemo.module.js.map