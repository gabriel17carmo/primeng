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
var terminaldemo_1 = require("./terminaldemo");
var terminaldemo_routing_module_1 = require("./terminaldemo-routing.module");
var terminal_1 = require("../../../components/terminal/terminal");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var TerminalDemoModule = (function () {
    function TerminalDemoModule() {
    }
    return TerminalDemoModule;
}());
TerminalDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            terminaldemo_routing_module_1.TerminalDemoRoutingModule,
            terminal_1.TerminalModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            terminaldemo_1.TerminalDemo
        ]
    })
], TerminalDemoModule);
exports.TerminalDemoModule = TerminalDemoModule;
//# sourceMappingURL=terminaldemo.module.js.map