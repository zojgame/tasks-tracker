import { tasksStore } from "../../store/TasksStore";
import { TreeNode } from "./TreeNode";
import { observer } from "mobx-react-lite";

const SelectContainer = observer(() => { 
    const { treeNodes } = tasksStore;     
    
    return (
        <div className="absolute top-4 left-0 w-[calc(100%-16px)]">
            {treeNodes.map((node) => 
                <TreeNode
                    key={node.id}
                    node={node}
                />
            )}            
        </div>
    );

});

export { SelectContainer };