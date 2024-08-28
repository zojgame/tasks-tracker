import { TreeNode } from "..";

/**
 * Обновляет поле `isOpen` для ноды по `id`.
 *
 * @param {TreeNode[]} treeNodes - Узлы дерева, в котором нужно обновить поле по `id`.
 * @param {string} id - id нода, для которого нужно обновить поле `isOpen`.
 * @param {boolean} isOpen - isOpen новое значение.
 * @return {TreeNode[]} - Возвращаемый массив нод дерева с обновленным полем `isOpen`.
 */
function updateIsOpenTreeNodeById(treeNodes: TreeNode[], id: string, isOpen: boolean): TreeNode[] {
    const updatedTreeNodes = treeNodes.map(node => {
        if (node.id === id) {
            return { ...node, isOpen };
        }
        if (node.children) {
            return { ...node, children: updateIsOpenTreeNodeById(node.children, id, isOpen) };
        }
        return node;
    });

    return updatedTreeNodes;
}

export { updateIsOpenTreeNodeById };