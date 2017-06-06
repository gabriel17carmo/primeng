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
var griddemo_1 = require("./griddemo");
var griddemo_routing_module_1 = require("./griddemo-routing.module");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var GridDemoModule = (function () {
    function GridDemoModule() {
    }
    return GridDemoModule;
}());
GridDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            griddemo_routing_module_1.GridDemoRoutingModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            griddemo_1.GridDemo
        ]
    })
], GridDemoModule);
exports.GridDemoModule = GridDemoModule;
//# sourceMappingURL=griddemo.module.js.map