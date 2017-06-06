"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StepsDemo = (function () {
    function StepsDemo() {
        this.msgs = [];
        this.activeIndex = 1;
    }
    StepsDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [{
                label: 'Personal',
                command: function (event) {
                    _this.activeIndex = 0;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'First Step', detail: event.item.label });
                }
            },
            {
                label: 'Seat',
                command: function (event) {
                    _this.activeIndex = 1;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
                }
            },
            {
                label: 'Payment',
                command: function (event) {
                    _this.activeIndex = 2;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
                }
            },
            {
                label: 'Confirmation',
                command: function (event) {
                    _this.activeIndex = 3;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            }
        ];
    };
    return StepsDemo;
}());
StepsDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/steps/stepsdemo.html',
        styles: ["\n        .ui-steps .ui-steps-item {\n            width: 25%;\n        }\n        \n        .ui-steps.steps-custom {\n            margin-bottom: 30px;\n        }\n         \n        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {\n            height: 10px;\n            padding: 0 1em;\n            overflow: visible;\n        }\n         \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {\n            background-color: #0081c2;\n            color: #FFFFFF;\n            display: inline-block;\n            width: 36px;\n            border-radius: 50%;\n            margin-top: -14px;\n            margin-bottom: 10px;\n        }\n        \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {\n            color: #555555;\n        }\n    "],
        encapsulation: core_1.ViewEncapsulation.None
    })
], StepsDemo);
exports.StepsDemo = StepsDemo;
//# sourceMappingURL=stepsdemo.js.map