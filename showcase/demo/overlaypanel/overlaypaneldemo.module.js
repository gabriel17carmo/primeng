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
var overlaypaneldemo_1 = require("./overlaypaneldemo");
var overlaypaneldemo_routing_module_1 = require("./overlaypaneldemo-routing.module");
var overlaypanel_1 = require("../../../components/overlaypanel/overlaypanel");
var button_1 = require("../../../components/button/button");
var datatable_1 = require("../../../components/datatable/datatable");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var OverlayPanelDemoModule = (function () {
    function OverlayPanelDemoModule() {
    }
    return OverlayPanelDemoModule;
}());
OverlayPanelDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            overlaypaneldemo_routing_module_1.OverlayPanelDemoRoutingModule,
            overlaypanel_1.OverlayPanelModule,
            button_1.ButtonModule,
            datatable_1.DataTableModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            overlaypaneldemo_1.OverlayPanelDemo
        ]
    })
], OverlayPanelDemoModule);
exports.OverlayPanelDemoModule = OverlayPanelDemoModule;
//# sourceMappingURL=overlaypaneldemo.module.js.map