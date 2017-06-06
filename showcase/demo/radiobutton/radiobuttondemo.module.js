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
var radiobuttondemo_1 = require("./radiobuttondemo");
var radiobuttondemo_routing_module_1 = require("./radiobuttondemo-routing.module");
var radiobutton_1 = require("../../../components/radiobutton/radiobutton");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var RadioButtonDemoModule = (function () {
    function RadioButtonDemoModule() {
    }
    return RadioButtonDemoModule;
}());
RadioButtonDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            radiobuttondemo_routing_module_1.RadioButtonDemoRoutingModule,
            radiobutton_1.RadioButtonModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            radiobuttondemo_1.RadioButtonDemo
        ]
    })
], RadioButtonDemoModule);
exports.RadioButtonDemoModule = RadioButtonDemoModule;
//# sourceMappingURL=radiobuttondemo.module.js.map