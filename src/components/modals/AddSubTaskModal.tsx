import { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Input, TreeNode } from "../../shared";
import { CloseIcon, PlusIcon } from "../../icons";
import { ModalWrapper } from "./ModalWrapper";
import { modalStore } from "../../store/ModalStore";
import { tasksStore } from "../../store/TasksStore";
import { useTasks } from "../../shared";
import { addNewNodeToEndOfKeyNode } from "../../shared/calculate";

interface ModalProps {
    handleOnClose: () => void;
}

const AddSubTaskModal = observer(({handleOnClose} : ModalProps) => {
    const { isModalOpen } = modalStore;
    const { currentTreeNode } = tasksStore;
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const {setTreeNodes, treeNodes} = useTasks();

    const modalRef = useRef(null);

    const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const handleOnChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleOnSubmit = () => {
        if(!currentTreeNode) return;

        const newSubTask: TreeNode = {
            id: String(Date.now()),
            label: title,
            description: description,
            isOpen: false,
            children: [],
        };

        const updatedNodes = addNewNodeToEndOfKeyNode(treeNodes, currentTreeNode.id, newSubTask);
        setTreeNodes(updatedNodes);
        
        handleOnClose();
    };

    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => e.key === 'Escape' ? handleOnClose() : null;
    
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleOnClose]);

    if (!isModalOpen) return null;

    return (
        <ModalWrapper wrapperId="add-sub-task-modal-container">
            <div
                ref={modalRef}  
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden transition-all duration-300 ease-in-out z-[9999] p-6">
                <div className="w-[600px] h-1/2 bg-slate-700 text-white flex items-center justify-start relative p-4 flex-col gap-10">
                    <Button onClick={handleOnClose} className="absolute top-0 right-0">
                        <CloseIcon />
                    </Button>
                    <h2 className="font-bold text-2xl">Добавить подзадачу к задаче: {currentTreeNode?.label}</h2>
                    <div className="flex flex-col gap-4 self-start">
                        <Input placeholder="Название подзадачи" 
                            label="Подзадача" 
                            onChange={handleOnChangeTitle} />

                        <Input placeholder="Описание подзадачи" 
                            label="Описание" 
                            onChange={handleOnChangeDescription} />
                    </div>
                    <Button title="Добавить подзадачу" onClick={handleOnSubmit}><PlusIcon /></Button>
                </div>
            </div>
        </ModalWrapper>
    );

});

export { AddSubTaskModal };