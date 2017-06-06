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
var inputmaskdemo_1 = require("./inputmaskdemo");
var inputmaskdemo_routing_module_1 = require("./inputmaskdemo-routing.module");
var inputmask_1 = require("../../../components/inputmask/inputmask");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var InputMaskDemoModule = (function () {
    function InputMaskDemoModule() {
    }
    return InputMaskDemoModule;
}());
InputMaskDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            inputmaskdemo_routing_module_1.InputMaskDemoRoutingModule,
            inputmask_1.InputMaskModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            inputmaskdemo_1.InputMaskDemo
        ]
    })
], InputMaskDemoModule);
exports.InputMaskDemoModule = InputMaskDemoModule;
//# sourceMappingURL=inputmaskdemo.module.js.map