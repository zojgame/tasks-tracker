import { observer } from "mobx-react-lite";
import { useState } from "react";
import { tasksStore } from "../../store/TasksStore";
import { DeleteIcon, EditIcon } from "../../icons";
import { Button, updateTitleNodesById } from "../../shared";
import { deleteNodeById } from "../../shared/calculate/deleteNodeById";

const TaskContainer = observer(() => {
    const { currentTreeNode, setTreeNodes, treeNodes, setCurrentTreeNode } = tasksStore; 
    const [isEditing, setIsEditing] = useState(false); 
    
    const handleOnEditClick = () => {
        setIsEditing(prev => !prev);
    };

    const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!currentTreeNode) return;
        const title = event.target.value;
        const updatedCurrentNode = {...currentTreeNode, label: title};
        const updatedNodes = updateTitleNodesById(treeNodes, currentTreeNode.id, title);

        setCurrentTreeNode(updatedCurrentNode);
        setTreeNodes(updatedNodes);
    };

    const handleDeleteById = () => {
        if(!currentTreeNode) return;
        const updatedNodes = deleteNodeById(treeNodes, currentTreeNode.id, true);
        setCurrentTreeNode(null);
        setTreeNodes(updatedNodes);
    };


    return (
        <div className="w-1/2 bg-white h-full p-4 text-black flex flex-col gap-4">
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
                    <Button onClick={handleDeleteById}>
                        <DeleteIcon />
                    </Button>              
                </>                
            }
        </div>
    );

});

export { TaskContainer };