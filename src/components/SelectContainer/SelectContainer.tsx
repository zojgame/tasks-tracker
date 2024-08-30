import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { tasksStore } from "../../store/TasksStore";
import { TreeNode } from "./TreeNode";
import { nodesInitialData } from "../../shared";
import { DaySwitcher } from "..";

const SelectContainer = observer(() => { 
    const { treeNodes } = tasksStore; 
    
    useEffect(() => {
        const localNodesData = localStorage.getItem("nodesData");
        if (localNodesData) {
            const nodesData = JSON.parse(localNodesData);
            tasksStore.setTreeNodes(nodesData);
        }
        else{
            tasksStore.setTreeNodes(nodesInitialData);
            localStorage.setItem("nodesData", JSON.stringify(nodesInitialData));
        }
    }, []);

    return (
        <div className="p-4 primary-theme relative w-1/2 h-full flex flex-col justify-center border-r">
            <DaySwitcher />   
            <div className="absolute top-14 left-0 w-[calc(100%-16px)]">
                {treeNodes.map((node) => 
                    <TreeNode
                        key={node.id}
                        node={node}
                    />
                )}            
            </div>
        </div>
    );

});

export { SelectContainer };