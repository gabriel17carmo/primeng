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
var datagriddemo_1 = require("./datagriddemo");
var datagriddemo_routing_module_1 = require("./datagriddemo-routing.module");
var datagrid_1 = require("../../../components/datagrid/datagrid");
var panel_1 = require("../../../components/panel/panel");
var dialog_1 = require("../../../components/dialog/dialog");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var DataGridDemoModule = (function () {
    function DataGridDemoModule() {
    }
    return DataGridDemoModule;
}());
DataGridDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            datagriddemo_routing_module_1.DataGridDemoRoutingModule,
            datagrid_1.DataGridModule,
            panel_1.PanelModule,
            dialog_1.DialogModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            datagriddemo_1.DataGridDemo
        ]
    })
], DataGridDemoModule);
exports.DataGridDemoModule = DataGridDemoModule;
//# sourceMappingURL=datagriddemo.module.js.map