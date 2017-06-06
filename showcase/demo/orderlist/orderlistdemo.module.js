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
var orderlistdemo_1 = require("./orderlistdemo");
var orderlistdemo_routing_module_1 = require("./orderlistdemo-routing.module");
var orderlist_1 = require("../../../components/orderlist/orderlist");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var OrderListDemoModule = (function () {
    function OrderListDemoModule() {
    }
    return OrderListDemoModule;
}());
OrderListDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            orderlistdemo_routing_module_1.OrderListDemoRoutingModule,
            orderlist_1.OrderListModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            orderlistdemo_1.OrderListDemo
        ]
    })
], OrderListDemoModule);
exports.OrderListDemoModule = OrderListDemoModule;
//# sourceMappingURL=orderlistdemo.module.js.map