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
var tree_1 = require("../../../components/tree/tree");
var api_1 = require("../../../components/common/api");
var TreeDemo = (function () {
    function TreeDemo(nodeService) {
        this.nodeService = nodeService;
    }
    TreeDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.nodeService.getFiles().then(function (files) { return _this.filesTree1 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.filesTree2 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.filesTree3 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.filesTree4 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.filesTree5 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.filesTree6 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.filesTree7 = files; });
        this.filesTree8 = [
            {
                label: "Backup",
                data: "Backup Folder",
                expandedIcon: "fa-folder-open",
                collapsedIcon: "fa-folder"
            }
        ];
        this.filesTree9 = [
            {
                label: "Storage",
                data: "Storage Folder",
                expandedIcon: "fa-folder-open",
                collapsedIcon: "fa-folder"
            }
        ];
        this.nodeService.getFiles().then(function (files) { return _this.filesTree10 = files; });
        this.nodeService.getFiles().then(function (files) {
            _this.filesTree11 = [{
                    label: 'Root',
                    children: files
                }];
        });
        this.nodeService.getLazyFiles().then(function (files) { return _this.lazyFiles = files; });
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewFile(_this.selectedFile2); } },
            { label: 'Unselect', icon: 'fa-close', command: function (event) { return _this.unselectFile(); } }
        ];
    };
    TreeDemo.prototype.nodeSelect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    };
    TreeDemo.prototype.nodeUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    };
    TreeDemo.prototype.nodeExpandMessage = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Expanded', detail: event.node.label });
    };
    TreeDemo.prototype.nodeExpand = function (event) {
        if (event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFiles().then(function (nodes) { return event.node.children = nodes; });
        }
    };
    TreeDemo.prototype.viewFile = function (file) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected with Right Click', detail: file.label });
    };
    TreeDemo.prototype.unselectFile = function () {
        this.selectedFile2 = null;
    };
    TreeDemo.prototype.expandAll = function () {
        var _this = this;
        this.filesTree10.forEach(function (node) {
            _this.expandRecursive(node, true);
        });
    };
    TreeDemo.prototype.collapseAll = function () {
        var _this = this;
        this.filesTree10.forEach(function (node) {
            _this.expandRecursive(node, false);
        });
    };
    TreeDemo.prototype.expandRecursive = function (node, isExpand) {
        var _this = this;
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.expandRecursive(childNode, isExpand);
            });
        }
    };
    return TreeDemo;
}());
__decorate([
    core_1.ViewChild('expandingTree'),
    __metadata("design:type", tree_1.Tree)
], TreeDemo.prototype, "expandingTree", void 0);
TreeDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/tree/treedemo.html',
        styles: ["\n        h4 {\n            text-align: center;\n            margin: 0 0 8px 0;\n        }\n    "],
        providers: [api_1.TreeDragDropService]
    }),
    __metadata("design:paramtypes", [nodeservice_1.NodeService])
], TreeDemo);
exports.TreeDemo = TreeDemo;
//# sourceMappingURL=treedemo.js.map