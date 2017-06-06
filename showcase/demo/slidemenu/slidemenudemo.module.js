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
var slidemenudemo_1 = require("./slidemenudemo");
var slidemenudemo_routing_module_1 = require("./slidemenudemo-routing.module");
var slidemenu_1 = require("../../../components/slidemenu/slidemenu");
var button_1 = require("../../../components/button/button");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var SlideMenuDemoModule = (function () {
    function SlideMenuDemoModule() {
    }
    return SlideMenuDemoModule;
}());
SlideMenuDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            slidemenudemo_routing_module_1.SlideMenuDemoRoutingModule,
            slidemenu_1.SlideMenuModule,
            button_1.ButtonModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            slidemenudemo_1.SlideMenuDemo
        ]
    })
], SlideMenuDemoModule);
exports.SlideMenuDemoModule = SlideMenuDemoModule;
//# sourceMappingURL=slidemenudemo.module.js.map