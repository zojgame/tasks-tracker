import { observer } from "mobx-react-lite";
import { tasksStore } from "../../store/TasksStore";
import { EditIcon } from "../../icons";
import { Button, updatedTitleNodesById } from "../../shared";
import { useState } from "react";

const TaskContainer = observer(() => {
    const { currentTreeNode, setTreeNodes, treeNodes, setCurrentTreeNode } = tasksStore; 
    const [isEditing, setIsEditing] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');  
    
    const handleOnEditClick = () => {
        // if(isEditing) {
            
        // }
        setIsEditing(prev => !prev);
    };

    const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!currentTreeNode) return;
        const title = event.target.value;
        const updatedCurrentNode = {...currentTreeNode, label: title};
        const updatedNodes = updatedTitleNodesById(treeNodes, currentTreeNode.id, title);

        setCurrentTreeNode(updatedCurrentNode);
        setTreeNodes(updatedNodes);
    };


    return (
        <div className="w-1/2 bg-white h-full p-4 text-black">
            {currentTreeNode &&
                <>
                    <div className="flex gap-4 items-center justify-center">
                        {isEditing ? <input 
                            onChange={handleOnChangeTitle}
                            className="bg-white focus:border-none focus:outer-none text-2xl" 
                            defaultValue={currentTreeNode.label} /> 
                            : <h2 className="font-bold text-2xl text-center">{currentTreeNode.label}</h2>}
                        <Button onClick={handleOnEditClick}>
                            <EditIcon />
                        </Button>
                    </div>
                    <p className="text-xl">{currentTreeNode.description}</p>                
                </>
            }
        </div>
    );

});

export { TaskContainer };