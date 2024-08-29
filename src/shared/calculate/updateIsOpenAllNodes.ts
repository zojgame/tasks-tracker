import { TreeNode } from "..";

function updateIsOpenAllNodes(nodeToUpdate: TreeNode,
    nodes: TreeNode[],
    isOpen: boolean): TreeNode[] {
    const updatedTreeNodes = nodes.map((node) => {
        if (node.id === nodeToUpdate.id || node.children?.some(child => child.id === nodeToUpdate.id)) {
            return {
                ...node,
                isOpen,
                children: node.children ? updateIsOpenAllNodes(nodeToUpdate, node.children, isOpen) : [],
            };
        }
        if (node.children) {
            return {
                ...node,
                children: updateIsOpenAllNodes(nodeToUpdate, node.children, isOpen),
            };
        }
        return node;
    });

    return updatedTreeNodes;
}


export { updateIsOpenAllNodes };