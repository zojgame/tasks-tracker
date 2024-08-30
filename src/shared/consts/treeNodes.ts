import { TreeNode } from "..";

export const nodesInitialData: TreeNode[] = [
    {
        id: '1',
        label: 'Задание 1',
        description: 'Выполнить задание 1',
        isOpen: false,
        children: [
            {
                id: '1-1',
                label: 'Задание 1-1',
                description: 'Выполнить задание 1-1',
                isOpen: false,
                children: [
                    { id: '1-1-1', label: 'Задание 1-1-1', description: 'Выполнить задание 1-1-1', isOpen: false, children: [
                        {
                            id: '1-1-1-1', label: 'Задание 1-1-1-1', description: 'Выполнить задание 1-1-1-1',
                            isOpen: false,
                            children: [                                
                                {id: '1-1-1-1-2', label: 'Задание 1-1-1-1-2', description: 'Выполнить задание 1-1-1-1-2', isOpen: false,}
                                
                            ]
                        }
                    ] },
                    { id: '1-1-2', label: 'Задание 1-1-2', description: 'Выполнить задание 1-1-2', isOpen: false, children: [
                        {id: '1-1-1-2', label: 'Задание 1-1-1-2', description: 'Выполнить задание 1-1-1-2', isOpen: false,},
                    ] },
                ],
            },
            { id: '1-2', label: 'Задание 1-2', description: 'Выполнить задание 1-2', isOpen: false, },
        ],
    },
    {
        id: '2',
        label: 'Задание 2',
        description: 'Выполнить задание 2',
        isOpen: false,
        children: [
            { id: '2-1', label: 'Задание 2-1', description: 'Выполнить задание 2-1', isOpen: false, },
            { id: '2-2', label: 'Задание 2-2', description: 'Выполнить задание 2-2', isOpen: false, },
        ],
    },
];

