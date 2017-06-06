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
var forms_1 = require("@angular/forms");
var gmapdemo_1 = require("./gmapdemo");
var gmapdemo_routing_module_1 = require("./gmapdemo-routing.module");
var gmap_1 = require("../../../components/gmap/gmap");
var growl_1 = require("../../../components/growl/growl");
var checkbox_1 = require("../../../components/checkbox/checkbox");
var dialog_1 = require("../../../components/dialog/dialog");
var button_1 = require("../../../components/button/button");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var GMapDemoModule = (function () {
    function GMapDemoModule() {
    }
    return GMapDemoModule;
}());
GMapDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            gmapdemo_routing_module_1.GMapDemoRoutingModule,
            gmap_1.GMapModule,
            growl_1.GrowlModule,
            checkbox_1.CheckboxModule,
            dialog_1.DialogModule,
            button_1.ButtonModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            gmapdemo_1.GMapDemo
        ]
    })
], GMapDemoModule);
exports.GMapDemoModule = GMapDemoModule;
//# sourceMappingURL=gmapdemo.module.js.map