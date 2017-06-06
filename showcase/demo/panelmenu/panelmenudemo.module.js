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
var panelmenudemo_1 = require("./panelmenudemo");
var panelmenudemo_routing_module_1 = require("./panelmenudemo-routing.module");
var panelmenu_1 = require("../../../components/panelmenu/panelmenu");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var PanelMenuDemoModule = (function () {
    function PanelMenuDemoModule() {
    }
    return PanelMenuDemoModule;
}());
PanelMenuDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            panelmenudemo_routing_module_1.PanelMenuDemoRoutingModule,
            panelmenu_1.PanelMenuModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            panelmenudemo_1.PanelMenuDemo
        ]
    })
], PanelMenuDemoModule);
exports.PanelMenuDemoModule = PanelMenuDemoModule;
//# sourceMappingURL=panelmenudemo.module.js.map