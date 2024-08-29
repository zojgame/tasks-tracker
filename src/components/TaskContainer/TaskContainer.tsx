import { observer } from "mobx-react-lite";
import { useState } from "react";
import { tasksStore } from "../../store/TasksStore";
import { DeleteIcon, EditIcon, PlusIcon } from "../../icons";
import { Button, Input, updateTitleNodesById, useTasks } from "../../shared";
import { deleteNodeById } from "../../shared/calculate/deleteNodeById";
import { modalStore } from "../../store/ModalStore";
import { updateDescriptionNodesById } from "../../shared/calculate";

const TaskContainer = observer(() => {
    const { currentTreeNode, setCurrentTreeNode } = tasksStore; 
    const [isEditing, setIsEditing] = useState(false); 
    const {setTreeNodes, treeNodes} = useTasks();
    
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

    const handleOnChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!currentTreeNode) return;
        const description = event.target.value;
        const updatedNodes = updateDescriptionNodesById(treeNodes, currentTreeNode.id, description);
        setCurrentTreeNode({...currentTreeNode, description});
        setTreeNodes(updatedNodes);
    };

    const handleDeleteById = () => {
        if(!currentTreeNode) return;
        const updatedNodes = deleteNodeById(treeNodes, currentTreeNode.id);

        setCurrentTreeNode(null);
        setTreeNodes(updatedNodes);
    };

    const handleOnAddClick = () => {
        modalStore.setIsModalOpen(true);
    };


    return (
        <div className="w-1/2 bg-white h-full p-4 text-black flex flex-col gap-4">
            {currentTreeNode &&
                <>
                    <div className="flex gap-4 items-center justify-center">
                        {isEditing ? <Input placeholder="Заголовок" 
                            onChange={handleOnChangeTitle}
                            value={currentTreeNode.label}
                        /> 
                            : <h2 className="font-bold text-2xl text-center">{currentTreeNode.label}</h2>}
                        <Button onClick={handleOnEditClick} title="Редактировать">
                            <EditIcon />
                        </Button>
                    </div>
                    {isEditing ? <Input placeholder="Описание" 
                        onChange={handleOnChangeDescription}
                        value={currentTreeNode.description}
                    />  : <p className="text-xl">{currentTreeNode.description}</p>}
                    <div className="flex justify-between">
                        <Button onClick={handleDeleteById} label="Удалить подзадачу" title="Удалить">
                            <DeleteIcon />
                        </Button>              
                        <Button onClick={handleOnAddClick} label="Добавить подзадачу" title="Добавить">
                            <PlusIcon />
                        </Button>
                    </div> 
                </>                
            }
        </div>
    );

});

export { TaskContainer };