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
;
var spinnerdemo_1 = require("./spinnerdemo");
var spinnerdemo_routing_module_1 = require("./spinnerdemo-routing.module");
var spinner_1 = require("../../../components/spinner/spinner");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var SpinnerDemoModule = (function () {
    function SpinnerDemoModule() {
    }
    return SpinnerDemoModule;
}());
SpinnerDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            spinnerdemo_routing_module_1.SpinnerDemoRoutingModule,
            spinner_1.SpinnerModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            spinnerdemo_1.SpinnerDemo
        ]
    })
], SpinnerDemoModule);
exports.SpinnerDemoModule = SpinnerDemoModule;
//# sourceMappingURL=spinnerdemo.module.js.map