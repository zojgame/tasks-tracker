import { TreeNode as TreeNodeType } from "../../shared";
import { TreeNode } from "./TreeNode";

type SelectProps = {
    treeNodes: TreeNodeType[]
}

const Select = ({ treeNodes } : SelectProps) => {      
    
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

};
export { Select };