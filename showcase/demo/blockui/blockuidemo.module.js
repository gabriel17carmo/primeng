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
var blockuidemo_1 = require("./blockuidemo");
var blockuidemo_routing_module_1 = require("./blockuidemo-routing.module");
var blockui_1 = require("../../../components/blockui/blockui");
var button_1 = require("../../../components/button/button");
var panel_1 = require("../../../components/panel/panel");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var BlockUIDemoModule = (function () {
    function BlockUIDemoModule() {
    }
    return BlockUIDemoModule;
}());
BlockUIDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            blockuidemo_routing_module_1.BlockUIDemoRoutingModule,
            blockui_1.BlockUIModule,
            button_1.ButtonModule,
            panel_1.PanelModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            blockuidemo_1.BlockUIDemo
        ]
    })
], BlockUIDemoModule);
exports.BlockUIDemoModule = BlockUIDemoModule;
//# sourceMappingURL=blockuidemo.module.js.map