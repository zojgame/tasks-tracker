import { useCallback, useMemo } from "react";
import { TreeNode } from "..";
import { tasksStore } from "../../store/TasksStore";

function useTasks() {
    const { setTreeNodes, treeNodes } = tasksStore;

    const setNodes = useCallback((nodes: TreeNode[]) => {
        setTreeNodes(nodes);
        localStorage.setItem("nodesData", JSON.stringify(nodes));
    }, []);

    const nodes = useMemo(() => {
        const localNodesData = localStorage.getItem("nodesData");
        if (localNodesData) {
            const nodesData = JSON.parse(localNodesData);
            return nodesData;
        }
    },[treeNodes]);

    return { setTreeNodes: setNodes, treeNodes: nodes };
}

export { useTasks };