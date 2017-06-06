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
var lightboxdemo_1 = require("./lightboxdemo");
var lightboxdemo_routing_module_1 = require("./lightboxdemo-routing.module");
var lightbox_1 = require("../../../components/lightbox/lightbox");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var LightboxDemoModule = (function () {
    function LightboxDemoModule() {
    }
    return LightboxDemoModule;
}());
LightboxDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            lightboxdemo_routing_module_1.LightboxDemoRoutingModule,
            lightbox_1.LightboxModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            lightboxdemo_1.LightboxDemo
        ]
    })
], LightboxDemoModule);
exports.LightboxDemoModule = LightboxDemoModule;
//# sourceMappingURL=lightboxdemo.module.js.map