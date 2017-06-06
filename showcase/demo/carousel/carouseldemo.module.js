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
var carouseldemo_1 = require("./carouseldemo");
var carouseldemo_routing_module_1 = require("./carouseldemo-routing.module");
var carousel_1 = require("../../../components/carousel/carousel");
var button_1 = require("../../../components/button/button");
var growl_1 = require("../../../components/growl/growl");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var CarouselDemoModule = (function () {
    function CarouselDemoModule() {
    }
    return CarouselDemoModule;
}());
CarouselDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            carouseldemo_routing_module_1.CarouselDemoRoutingModule,
            carousel_1.CarouselModule,
            button_1.ButtonModule,
            growl_1.GrowlModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            carouseldemo_1.CarouselDemo
        ]
    })
], CarouselDemoModule);
exports.CarouselDemoModule = CarouselDemoModule;
//# sourceMappingURL=carouseldemo.module.js.map