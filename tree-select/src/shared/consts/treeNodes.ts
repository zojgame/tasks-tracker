import { TreeNode } from "..";

export const nodesInitialData: TreeNode[] = [
    {
        id: '1',
        label: 'Задание 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque nam repellat a rem quia accusantium aut nisi magnam ut!',
        isOpen: false,
        children: [
            {
                id: '1-1',
                label: 'Задание 1-1',
                isOpen: false,
                children: [
                    { id: '1-1-1', label: 'Задание 1-1-1', isOpen: false, children: [
                        {
                            id: '1-1-1-1', label: 'Задание 1-1-1-1',
                            isOpen: false,
                            children: [                                
                                {id: '1-1-1-1-2', label: 'Задание 1-1-1-1-2', isOpen: false,}
                                
                            ]
                        }
                    ] },
                    { id: '1-1-2', label: 'Задание 1-1-2', isOpen: false, children: [
                        {id: '1-1-1-2', label: 'Задание 1-1-1-2', isOpen: false,},
                    ] },
                ],
            },
            { id: '1-2', label: 'Задание 1-2', isOpen: false, },
        ],
    },
    {
        id: '2',
        label: 'Задание 2',
        isOpen: false,
        children: [
            { id: '2-1', label: 'Задание 2-1', isOpen: false, },
            { id: '2-2', label: 'Задание 2-2', isOpen: false, },
        ],
    },
];

