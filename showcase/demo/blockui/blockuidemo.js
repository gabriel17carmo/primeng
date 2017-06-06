"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BlockUIDemo = (function () {
    function BlockUIDemo() {
        this.blockedPanel = false;
        this.blockedDocument = false;
    }
    BlockUIDemo.prototype.blockDocument = function () {
        var _this = this;
        this.blockedDocument = true;
        setTimeout(function () {
            _this.blockedDocument = false;
        }, 3000);
    };
    return BlockUIDemo;
}());
BlockUIDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/blockui/blockuidemo.html'
    })
], BlockUIDemo);
exports.BlockUIDemo = BlockUIDemo;
//# sourceMappingURL=blockuidemo.js.map