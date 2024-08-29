import { TreeNode } from "..";

/**
 * Удаление ноды по `id`.
 *
 * @param {TreeNode[]} treeNodes - Узлы дерева, в котором нужно удалить поле по `id`.
 * @param {string} id - id ноды, которую нужно удалить.
 * @return {TreeNode[]} - Возвращаемый обновленный массив нод дерева.
 */
function deleteNodeById(treeNodes: TreeNode[], id: string): TreeNode[] {
    const updatedTreeNodes = treeNodes.filter(node => node.id !== id);

    return updatedTreeNodes.map(node => {
        if (node.children) {
            return { ...node, children: deleteNodeById(node.children, id) };
        }
        return node;
    });
}


export { deleteNodeById };