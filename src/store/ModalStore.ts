import { makeAutoObservable } from "mobx";

export class ModalStore{
    isModalOpen: boolean = true;

    constructor(){
        makeAutoObservable(this);
    }

    setIsModalOpen = (isOpen: boolean) => {
        this.isModalOpen = isOpen;
    };
}

export const modalStore = new ModalStore();