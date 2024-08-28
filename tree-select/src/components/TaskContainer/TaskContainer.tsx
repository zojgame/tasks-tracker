import { observer } from "mobx-react-lite";
import { tasksStore } from "../../store/TasksStore";
import { EditIcon } from "../../icons";
import { Button } from "../../shared";
import { useState } from "react";

const TaskContainer = observer(() => {
    const { currentTreeNode } = tasksStore; 
    const [isEditing, setIsEditing] = useState(false);  
    
    const handleOnEditClick = () => {
        setIsEditing(prev => !prev);
    };

    return (
        <div className="w-1/2 bg-white h-full p-4 text-black">
            {currentTreeNode &&
                <>
                    <div className="flex gap-4 items-center justify-center">
                        {isEditing ? <input className="bg-white focus:border-none focus:outer-none text-2xl" value={currentTreeNode.label} /> : <h2 className="font-bold text-2xl text-center">{currentTreeNode.label}</h2>}
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