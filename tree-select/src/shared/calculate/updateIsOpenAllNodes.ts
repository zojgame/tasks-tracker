import { TreeNode } from "..";
import { updateIsOpenTreeNodeById } from "..";


function updateIsOpenAllNodes(nodeToUpdate: TreeNode,
    nodes: TreeNode[],
    isOpen: boolean): TreeNode[] {
    const updatedTreeNodes = nodes.map((node) => {
        if (node.id === nodeToUpdate.id) {
            return { ...node, isOpen };
        }
        if (node.children) {
            return {
                ...node,
                children: updateIsOpenAllNodes(nodeToUpdate, node.children, isOpen),
                isOpen: node.id === nodeToUpdate.id || node.children.some(child => child.isOpen)
                    ? isOpen
                    : node.isOpen,
            };
        }
        return node;
    });

    return updatedTreeNodes;
}

// function updateIsOpenAllNodes(nodeToUpdate: TreeNode,
//     nodes: TreeNode[],
//     isOpen: boolean): TreeNode[] {
//     const updatedTreeNodes = nodes.map((node) => {
//         if(!node.children){
//             return updateIsOpenTreeNodeById()
//         }
//         if (node.id === nodeToUpdate.id) {
//             return { ...node, isOpen };
//         }
//     });
    
//     return updatedTreeNodes;
// }


export { updateIsOpenAllNodes };