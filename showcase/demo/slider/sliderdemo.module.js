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
var sliderdemo_1 = require("./sliderdemo");
var sliderdemo_routing_module_1 = require("./sliderdemo-routing.module");
var slider_1 = require("../../../components/slider/slider");
var inputtext_1 = require("../../../components/inputtext/inputtext");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var SliderDemoModule = (function () {
    function SliderDemoModule() {
    }
    return SliderDemoModule;
}());
SliderDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            sliderdemo_routing_module_1.SliderDemoRoutingModule,
            slider_1.SliderModule,
            inputtext_1.InputTextModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            sliderdemo_1.SliderDemo
        ]
    })
], SliderDemoModule);
exports.SliderDemoModule = SliderDemoModule;
//# sourceMappingURL=sliderdemo.module.js.map