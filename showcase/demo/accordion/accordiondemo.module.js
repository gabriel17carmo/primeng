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
var accordiondemo_1 = require("./accordiondemo");
var accordiondemo_routing_module_1 = require("./accordiondemo-routing.module");
var accordion_1 = require("../../../components/accordion/accordion");
var tabview_1 = require("../../../components/tabview/tabview");
var growl_1 = require("../../../components/growl/growl");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var AccordionDemoModule = (function () {
    function AccordionDemoModule() {
    }
    return AccordionDemoModule;
}());
AccordionDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            accordiondemo_routing_module_1.AccordionDemoRoutingModule,
            accordion_1.AccordionModule,
            tabview_1.TabViewModule,
            growl_1.GrowlModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            accordiondemo_1.AccordionDemo
        ]
    })
], AccordionDemoModule);
exports.AccordionDemoModule = AccordionDemoModule;
//# sourceMappingURL=accordiondemo.module.js.map