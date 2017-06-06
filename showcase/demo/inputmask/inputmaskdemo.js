"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InputMaskDemo = (function () {
    function InputMaskDemo() {
    }
    return InputMaskDemo;
}());
InputMaskDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/inputmask/inputmaskdemo.html',
        styles: ["\n        .ui-g-12 > span {\n            display: block;\n            margin-bottom: 4px;\n        }\n    "]
    })
], InputMaskDemo);
exports.InputMaskDemo = InputMaskDemo;
//# sourceMappingURL=inputmaskdemo.js.map