export interface TreeNode {
    id: string;
    label: string;
    children?: TreeNode[];
    description?: string;
    isOpen: boolean;
}