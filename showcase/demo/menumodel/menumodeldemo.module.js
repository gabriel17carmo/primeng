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
var menumodeldemo_1 = require("./menumodeldemo");
var menumodeldemo_routing_module_1 = require("./menumodeldemo-routing.module");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var MenuModelDemoModule = (function () {
    function MenuModelDemoModule() {
    }
    return MenuModelDemoModule;
}());
MenuModelDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            menumodeldemo_routing_module_1.MenuModelDemoRoutingModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            menumodeldemo_1.MenuModelDemo
        ]
    })
], MenuModelDemoModule);
exports.MenuModelDemoModule = MenuModelDemoModule;
//# sourceMappingURL=menumodeldemo.module.js.map