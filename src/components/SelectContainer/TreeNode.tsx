import { Button, TreeNode as TreeNodeType } from "../../shared";
import { CheckIcon, ChevronDownIcon, SquaresIcon } from "../../icons";
import { tasksStore } from "../../store/TasksStore";
import { observer } from "mobx-react-lite";
import { updateIsOpenTreeNodeById, updateIsOpenAllNodes } from "../../shared";
import { useEffect, useState } from "react";
import { isAllOpen } from "../../shared/calculate";

type TreeNodeProps = {
    node: TreeNodeType;
}

const TreeNode = observer(( { node } : TreeNodeProps) => {
    const { isOpen } = node;    
    const { setCurrentTreeNode, treeNodes, setTreeNodes } = tasksStore;
    const [isAllChildrenSelected, setIsAllChildrenSelected] = useState(false);

    useEffect(() => {
        const isAllSelected = isAllOpen(node);
        setIsAllChildrenSelected(isAllSelected);
    }, [node]);

    const handleToggle = () => {
        const updatedNodes = updateIsOpenTreeNodeById(treeNodes, node.id, !isOpen);
        setTreeNodes(updatedNodes);
    };

    const handleOnToggleAll = () => {       
        if (!node.children) return;
        const updatedNodes = updateIsOpenAllNodes(treeNodes, node, !isOpen);
        setTreeNodes(updatedNodes);
    };

    const handleOnSelect = () => {
        setCurrentTreeNode(node);
    };

    return (
        <div className="pl-5 transition-none duration-300 ease-in-out">
            <div
                className="cursor-pointer border border-b-0 last:border-b flex w-full primary-theme select-none items-center">
                {
                    node.children && node.children.length > 0 &&
                    <Button 
                        onClick={handleOnToggleAll} 
                        title="Toggle" 
                        className={`${isAllChildrenSelected ? "opacity-100" : "opacity-0"}`}>
                        <CheckIcon />
                    </Button>
                }
                {
                    node.children && node.children.length > 0 &&
                    <Button 
                        title="Развернуть/Свернуть"
                        className={`${isOpen ? "rotate-0" : '-rotate-90'}`}
                        onClick={handleToggle} >
                        <ChevronDownIcon />
                    </Button>
                }
                <span className="w-full p-2">
                    {node.label}
                </span>
                <Button 
                    title="Выбрать"
                    onClick={handleOnSelect} >
                    <SquaresIcon />
                </Button>
            </div>
            
            {node.children && (
                <div 
                    className={`border-t transition-all duration-300 ease-in-out overflow-hidden 
                        ${isOpen && node.children ? 'max-h-[1500px]' : 'max-h-0'}`}>
                    {node.children.map(child => (
                        <TreeNode 
                            key={child.id} 
                            node={child}  />
                    ))}
                </div>
            )}
            

        </div>
    );

});

export { TreeNode };