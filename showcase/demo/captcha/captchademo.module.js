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
var captchademo_1 = require("./captchademo");
var captchademo_routing_module_1 = require("./captchademo-routing.module");
var captcha_1 = require("../../../components/captcha/captcha");
var growl_1 = require("../../../components/growl/growl");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var CaptchaDemoModule = (function () {
    function CaptchaDemoModule() {
    }
    return CaptchaDemoModule;
}());
CaptchaDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            captchademo_routing_module_1.CaptchaDemoRoutingModule,
            captcha_1.CaptchaModule,
            tabview_1.TabViewModule,
            growl_1.GrowlModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            captchademo_1.CaptchaDemo
        ]
    })
], CaptchaDemoModule);
exports.CaptchaDemoModule = CaptchaDemoModule;
//# sourceMappingURL=captchademo.module.js.map