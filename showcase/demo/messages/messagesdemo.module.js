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
var messagesdemo_1 = require("./messagesdemo");
var messagesdemo_routing_module_1 = require("./messagesdemo-routing.module");
var messages_1 = require("../../../components/messages/messages");
var button_1 = require("../../../components/button/button");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var MessagesDemoModule = (function () {
    function MessagesDemoModule() {
    }
    return MessagesDemoModule;
}());
MessagesDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            messagesdemo_routing_module_1.MessagesDemoRoutingModule,
            messages_1.MessagesModule,
            button_1.ButtonModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            messagesdemo_1.MessagesDemo
        ]
    })
], MessagesDemoModule);
exports.MessagesDemoModule = MessagesDemoModule;
//# sourceMappingURL=messagesdemo.module.js.map