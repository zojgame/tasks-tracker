import { TreeNode } from "..";

/**
 * Обновляет поле `description` для ноды по `id`.
 * @param {TreeNode[]} treeNodes - Узлы дерева, в котором нужно обновить поле `description`.
 * @param {string} description - description новое значение.
 * @return {TreeNode[]} - Возвращаемый массив нод дерева с обновленным полем `description`.
 */
function updateDescriptionNodesById(treeNodes: TreeNode[], id: string, description: string): TreeNode[] {
    const updatedTreeNodes = treeNodes.map(node => {
        if (node.id === id) {
            return { ...node, description };
        }
        if (node.children) {
            return { ...node, children: updateDescriptionNodesById(node.children, id, description) };
        }

        return node;
    });

    return updatedTreeNodes;
}

export { updateDescriptionNodesById };
