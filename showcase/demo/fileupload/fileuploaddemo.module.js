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
var fileuploaddemo_1 = require("./fileuploaddemo");
var fileuploaddemo_routing_module_1 = require("./fileuploaddemo-routing.module");
var fileupload_1 = require("../../../components/fileupload/fileupload");
var growl_1 = require("../../../components/growl/growl");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var FileUploadDemoModule = (function () {
    function FileUploadDemoModule() {
    }
    return FileUploadDemoModule;
}());
FileUploadDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            fileuploaddemo_routing_module_1.FileUploadDemoRoutingModule,
            fileupload_1.FileUploadModule,
            growl_1.GrowlModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            fileuploaddemo_1.FileUploadDemo
        ]
    })
], FileUploadDemoModule);
exports.FileUploadDemoModule = FileUploadDemoModule;
//# sourceMappingURL=fileuploaddemo.module.js.map