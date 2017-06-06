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
var stepsdemo_1 = require("./stepsdemo");
var stepsdemo_routing_module_1 = require("./stepsdemo-routing.module");
var steps_1 = require("../../../components/steps/steps");
var growl_1 = require("../../../components/growl/growl");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var StepsDemoModule = (function () {
    function StepsDemoModule() {
    }
    return StepsDemoModule;
}());
StepsDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            stepsdemo_routing_module_1.StepsDemoRoutingModule,
            steps_1.StepsModule,
            growl_1.GrowlModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            stepsdemo_1.StepsDemo
        ]
    })
], StepsDemoModule);
exports.StepsDemoModule = StepsDemoModule;
//# sourceMappingURL=stepsdemo.module.js.map