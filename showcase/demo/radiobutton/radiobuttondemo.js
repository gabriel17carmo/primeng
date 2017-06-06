"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RadioButtonDemo = (function () {
    function RadioButtonDemo() {
        this.val2 = 'Option 2';
    }
    return RadioButtonDemo;
}());
RadioButtonDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/radiobutton/radiobuttondemo.html',
        styles: ["\n        .ui-grid label {\n            display: inline-block;\n            margin: 3px 0px 0px 4px;\n        }\n    "]
    })
], RadioButtonDemo);
exports.RadioButtonDemo = RadioButtonDemo;
//# sourceMappingURL=radiobuttondemo.js.map