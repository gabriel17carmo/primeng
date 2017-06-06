"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SelectButtonDemo = (function () {
    function SelectButtonDemo() {
        this.selectedTypes = ['Apartment', 'Studio'];
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
    }
    SelectButtonDemo.prototype.clear = function () {
        this.selectedType = null;
        this.selectedTypes = [];
    };
    return SelectButtonDemo;
}());
SelectButtonDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/selectbutton/selectbuttondemo.html'
    }),
    __metadata("design:paramtypes", [])
], SelectButtonDemo);
exports.SelectButtonDemo = SelectButtonDemo;
//# sourceMappingURL=selectbuttondemo.js.map