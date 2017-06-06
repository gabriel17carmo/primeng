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
var validationdemo_1 = require("./validationdemo");
var validationdemo_routing_module_1 = require("./validationdemo-routing.module");
var growl_1 = require("../../../components/growl/growl");
var panel_1 = require("../../../components/panel/panel");
var dropdown_1 = require("../../../components/dropdown/dropdown");
var inputtext_1 = require("../../../components/inputtext/inputtext");
var inputtextarea_1 = require("../../../components/inputtextarea/inputtextarea");
var button_1 = require("../../../components/button/button");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var ValidationDemoModule = (function () {
    function ValidationDemoModule() {
    }
    return ValidationDemoModule;
}());
ValidationDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            validationdemo_routing_module_1.ValidationDemoRoutingModule,
            growl_1.GrowlModule,
            panel_1.PanelModule,
            dropdown_1.DropdownModule,
            inputtext_1.InputTextModule,
            inputtextarea_1.InputTextareaModule,
            button_1.ButtonModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            validationdemo_1.ValidationDemo
        ]
    })
], ValidationDemoModule);
exports.ValidationDemoModule = ValidationDemoModule;
//# sourceMappingURL=validationdemo.module.js.map