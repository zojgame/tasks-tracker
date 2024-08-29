import { TreeNode } from "..";

function updateIsOpenAllNodes(nodes: TreeNode[],
    updatedNode: TreeNode,
    isOpen: boolean, 
    isParentFound: boolean = false): TreeNode[] {
    return nodes.map(node => {
        const newIsParentFound = node.id === updatedNode.id || isParentFound;
        return ({
            ...node,
            isOpen: newIsParentFound ? isOpen : node.isOpen,
            children: node.children ? updateIsOpenAllNodes(node.children, updatedNode, isOpen, newIsParentFound) : []
        });    
    });    
}


export { updateIsOpenAllNodes };