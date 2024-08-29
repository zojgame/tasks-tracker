import { TreeNode } from "..";

/**
 * Добавление новой ноды в конец ключевой ноды.
 *
 * @param {TreeNode[]} treeNodes - Узлы дерева, в котором нужно добавить новую ноду.
 * @param {string} keyNodeId - id ключевой ноды, в которую нужно добавить новую ноду.
 * @param {TreeNode} newNode - новая нода, которую нужно добавить.
 * @return {TreeNode[]} - Возвращаемый обновленный массив нод дерева.
 */
function addNewNodeToEndOfKeyNode(treeNodes: TreeNode[], keyNodeId: string, newNode: TreeNode): TreeNode[] {
    const updatedTreeNodes = treeNodes.map(node => {
        if (node.id === keyNodeId) {
            return { ...node, children: [...(node.children || []), newNode] };
        }
        if (node.children) {
            return { ...node, children: addNewNodeToEndOfKeyNode(node.children, keyNodeId, newNode) };
        }
        return node;
    });

    return updatedTreeNodes;
}

export { addNewNodeToEndOfKeyNode };
