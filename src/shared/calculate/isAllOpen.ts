import { TreeNode } from "../types/treeNode";

/**
 * Проверяет истино ли isOpen для получаемой TreeNode и ее children
 *
 * @param {TreeNode} node - Нода, для которой нужно проверить isOpen
 * @return {boolean} - true если isOpen для получаемой TreeNode и ее children
 */
export const isAllOpen = (node: TreeNode): boolean => {
    const isNodeOpen = node.isOpen;
    if (!isNodeOpen) return false;
    if(!node.children || node.children.length === 0) return isNodeOpen;
    return node.children.every(child => isAllOpen(child));
};