"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BreadcrumbDemo = (function () {
    function BreadcrumbDemo() {
    }
    BreadcrumbDemo.prototype.ngOnInit = function () {
        this.items = [];
        this.items.push({ label: 'Categories' });
        this.items.push({ label: 'Sports' });
        this.items.push({ label: 'Football' });
        this.items.push({ label: 'Countries' });
        this.items.push({ label: 'Spain' });
        this.items.push({ label: 'F.C. Barcelona' });
        this.items.push({ label: 'Squad' });
        this.items.push({ label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' });
    };
    return BreadcrumbDemo;
}());
BreadcrumbDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/breadcrumb/breadcrumbdemo.html'
    })
], BreadcrumbDemo);
exports.BreadcrumbDemo = BreadcrumbDemo;
//# sourceMappingURL=breadcrumbdemo.js.map