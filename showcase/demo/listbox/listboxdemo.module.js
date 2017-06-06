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
var listboxdemo_1 = require("./listboxdemo");
var listboxdemo_routing_module_1 = require("./listboxdemo-routing.module");
var listbox_1 = require("../../../components/listbox/listbox");
var button_1 = require("../../../components/button/button");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var ListboxDemoModule = (function () {
    function ListboxDemoModule() {
    }
    return ListboxDemoModule;
}());
ListboxDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            listboxdemo_routing_module_1.ListboxDemoRoutingModule,
            listbox_1.ListboxModule,
            button_1.ButtonModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            listboxdemo_1.ListboxDemo
        ]
    })
], ListboxDemoModule);
exports.ListboxDemoModule = ListboxDemoModule;
//# sourceMappingURL=listboxdemo.module.js.map