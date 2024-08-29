import { makeAutoObservable } from "mobx";
import { TreeNode as TreeNodeType } from "../shared";

/**
 * Глобальное хранилище заданий
 * @returns {TasksStore}
 */
export class TasksStore{
    treeNodes: TreeNodeType[] = [];
    currentTreeNode: TreeNodeType | null = null;

    constructor(){
        makeAutoObservable(this);
    }

    setCurrentTreeNode = (treeNode: TreeNodeType | null) => {
        this.currentTreeNode = treeNode;
    };

    setTreeNodes = (treeNodes: TreeNodeType[]) => {
        this.treeNodes = treeNodes;
    };
}

export const tasksStore = new TasksStore();