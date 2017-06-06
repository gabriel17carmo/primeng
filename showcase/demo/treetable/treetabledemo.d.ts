import { OnInit } from '@angular/core';
import { NodeService } from '../service/nodeservice';
import { Message, TreeNode, MenuItem } from '../../../components/common/api';
export declare class TreeTableDemo implements OnInit {
    private nodeService;
    msgs: Message[];
    files1: TreeNode[];
    files2: TreeNode[];
    files3: TreeNode[];
    files4: TreeNode[];
    files5: TreeNode[];
    files6: TreeNode[];
    lazyFiles: TreeNode[];
    selectedFile: TreeNode;
    selectedFile2: TreeNode;
    selectedFiles: TreeNode[];
    selectedFiles2: TreeNode[];
    items: MenuItem[];
    constructor(nodeService: NodeService);
    ngOnInit(): void;
    nodeSelect(event: any): void;
    nodeUnselect(event: any): void;
    nodeExpand(event: any): void;
    viewNode(node: TreeNode): void;
    deleteNode(node: TreeNode): void;
}
