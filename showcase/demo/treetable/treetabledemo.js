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
var nodeservice_1 = require("../service/nodeservice");
var TreeTableDemo = (function () {
    function TreeTableDemo(nodeService) {
        this.nodeService = nodeService;
    }
    TreeTableDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.nodeService.getFilesystem().then(function (files) { return _this.files1 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files2 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files3 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files4 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files5 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files6 = files; });
        this.nodeService.getLazyFilesystem().then(function (files) { return _this.lazyFiles = files; });
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewNode(_this.selectedFile2); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.deleteNode(_this.selectedFile2); } }
        ];
    };
    TreeTableDemo.prototype.nodeSelect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    };
    TreeTableDemo.prototype.nodeUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    };
    TreeTableDemo.prototype.nodeExpand = function (event) {
        if (event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFilesystem().then(function (nodes) { return event.node.children = nodes; });
        }
    };
    TreeTableDemo.prototype.viewNode = function (node) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: node.data.name });
    };
    TreeTableDemo.prototype.deleteNode = function (node) {
        node.parent.children = node.parent.children.filter(function (n) { return n.data !== node.data; });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Deleted', detail: node.data.name });
    };
    return TreeTableDemo;
}());
TreeTableDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/treetable/treetabledemo.html'
    }),
    __metadata("design:paramtypes", [nodeservice_1.NodeService])
], TreeTableDemo);
exports.TreeTableDemo = TreeTableDemo;
//# sourceMappingURL=treetabledemo.js.map