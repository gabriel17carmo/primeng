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
var inputswitchdemo_1 = require("./inputswitchdemo");
var inputswitchdemo_routing_module_1 = require("./inputswitchdemo-routing.module");
var inputswitch_1 = require("../../../components/inputswitch/inputswitch");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var InputSwitchDemoModule = (function () {
    function InputSwitchDemoModule() {
    }
    return InputSwitchDemoModule;
}());
InputSwitchDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            inputswitchdemo_routing_module_1.InputSwitchDemoRoutingModule,
            inputswitch_1.InputSwitchModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            inputswitchdemo_1.InputSwitchDemo
        ]
    })
], InputSwitchDemoModule);
exports.InputSwitchDemoModule = InputSwitchDemoModule;
//# sourceMappingURL=inputswitchdemo.module.js.map