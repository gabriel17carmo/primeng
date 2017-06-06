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
var treedemo_1 = require("./treedemo");
var treedemo_routing_module_1 = require("./treedemo-routing.module");
var tree_1 = require("../../../components/tree/tree");
var growl_1 = require("../../../components/growl/growl");
var button_1 = require("../../../components/button/button");
var contextmenu_1 = require("../../../components/contextmenu/contextmenu");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var TreeDemoModule = (function () {
    function TreeDemoModule() {
    }
    return TreeDemoModule;
}());
TreeDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            treedemo_routing_module_1.TreeDemoRoutingModule,
            tree_1.TreeModule,
            growl_1.GrowlModule,
            button_1.ButtonModule,
            contextmenu_1.ContextMenuModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            treedemo_1.TreeDemo
        ]
    })
], TreeDemoModule);
exports.TreeDemoModule = TreeDemoModule;
//# sourceMappingURL=treedemo.module.js.map