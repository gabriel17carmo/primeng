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
var datascrollerdemo_1 = require("./datascrollerdemo");
var datascrollersubmenu_1 = require("./datascrollersubmenu");
var datascrollerinfinitedemo_1 = require("./datascrollerinfinitedemo");
var datascrollerinlinedemo_1 = require("./datascrollerinlinedemo");
var datascrollerloaderdemo_1 = require("./datascrollerloaderdemo");
var datascrollerdemo_routing_module_1 = require("./datascrollerdemo-routing.module");
var datascroller_1 = require("../../../components/datascroller/datascroller");
var dialog_1 = require("../../../components/dialog/dialog");
var button_1 = require("../../../components/button/button");
var growl_1 = require("../../../components/growl/growl");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var DataScrollerDemoModule = (function () {
    function DataScrollerDemoModule() {
    }
    return DataScrollerDemoModule;
}());
DataScrollerDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            datascrollerdemo_routing_module_1.DatascrollerDemoRoutingModule,
            datascroller_1.DataScrollerModule,
            dialog_1.DialogModule,
            button_1.ButtonModule,
            growl_1.GrowlModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            datascrollerdemo_1.DataScrollerDemo,
            datascrollerinfinitedemo_1.DataScrollerInfiniteDemo,
            datascrollerinlinedemo_1.DataScrollerInlineDemo,
            datascrollerloaderdemo_1.DataScrollerLoaderDemo,
            datascrollersubmenu_1.DataScrollerSubMenu
        ]
    })
], DataScrollerDemoModule);
exports.DataScrollerDemoModule = DataScrollerDemoModule;
//# sourceMappingURL=datascrollerdemo.module.js.map