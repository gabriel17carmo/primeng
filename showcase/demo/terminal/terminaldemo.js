"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TerminalDemo = (function () {
    function TerminalDemo() {
    }
    TerminalDemo.prototype.onCommand = function (event) {
        if (event.command === 'date')
            this.response = new Date().toDateString();
        else
            this.response = 'Unknown command: ' + event.command;
    };
    return TerminalDemo;
}());
TerminalDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/terminal/terminaldemo.html'
    })
], TerminalDemo);
exports.TerminalDemo = TerminalDemo;
//# sourceMappingURL=terminaldemo.js.map