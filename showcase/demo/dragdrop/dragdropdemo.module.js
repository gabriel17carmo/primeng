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
var dragdropdemo_1 = require("./dragdropdemo");
var dragdropdemo_routing_module_1 = require("./dragdropdemo-routing.module");
var dragdrop_1 = require("../../../components/dragdrop/dragdrop");
var panel_1 = require("../../../components/panel/panel");
var datatable_1 = require("../../../components/datatable/datatable");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var DragDropDemoModule = (function () {
    function DragDropDemoModule() {
    }
    return DragDropDemoModule;
}());
DragDropDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            dragdropdemo_routing_module_1.DragDropDemoRoutingModule,
            dragdrop_1.DragDropModule,
            panel_1.PanelModule,
            datatable_1.DataTableModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            dragdropdemo_1.DragDropDemo
        ]
    })
], DragDropDemoModule);
exports.DragDropDemoModule = DragDropDemoModule;
//# sourceMappingURL=dragdropdemo.module.js.map