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
var toolbardemo_1 = require("./toolbardemo");
var toolbardemo_routing_module_1 = require("./toolbardemo-routing.module");
var toolbar_1 = require("../../../components/toolbar/toolbar");
var button_1 = require("../../../components/button/button");
var splitbutton_1 = require("../../../components/splitbutton/splitbutton");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var ToolbarDemoModule = (function () {
    function ToolbarDemoModule() {
    }
    return ToolbarDemoModule;
}());
ToolbarDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            toolbardemo_routing_module_1.ToolbarDemoRoutingModule,
            toolbar_1.ToolbarModule,
            button_1.ButtonModule,
            splitbutton_1.SplitButtonModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            toolbardemo_1.ToolbarDemo
        ]
    })
], ToolbarDemoModule);
exports.ToolbarDemoModule = ToolbarDemoModule;
//# sourceMappingURL=toolbardemo.module.js.map