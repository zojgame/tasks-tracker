import { TreeNode } from "..";

/**
 * Обновляет поле `label` для ноды по `id`.
 * @param {TreeNode[]} treeNodes - Узлы дерева, в котором нужно обновить поле `title`.
 * @param {boolean} title - title новое значение.
 * @return {TreeNode[]} - Возвращаемый массив нод дерева с обновленным полем `title`.
 */
function updatedTitleNodesById(treeNodes: TreeNode[], id: string, title: string): TreeNode[] {
    const updatedTreeNodes = treeNodes.map(node => {
        if (node.id === id) {
            return { ...node, label: title };
        }
        if (node.children) {
            return { ...node, children: updatedTitleNodesById(node.children, id, title) };
        }
        return node;
    });

    return updatedTreeNodes;
}

export { updatedTitleNodesById };