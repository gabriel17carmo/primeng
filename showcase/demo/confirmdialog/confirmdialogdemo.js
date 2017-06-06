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
var api_1 = require("../../../components/common/api");
var ConfirmDialogDemo = (function () {
    function ConfirmDialogDemo(confirmationService) {
        this.confirmationService = confirmationService;
        this.msgs = [];
    }
    ConfirmDialogDemo.prototype.confirm1 = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: function () {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            }
        });
    };
    ConfirmDialogDemo.prototype.confirm2 = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            }
        });
    };
    return ConfirmDialogDemo;
}());
ConfirmDialogDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/confirmdialog/confirmdialogdemo.html',
        providers: [api_1.ConfirmationService]
    }),
    __metadata("design:paramtypes", [api_1.ConfirmationService])
], ConfirmDialogDemo);
exports.ConfirmDialogDemo = ConfirmDialogDemo;
//# sourceMappingURL=confirmdialogdemo.js.map