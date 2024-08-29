import { observer } from "mobx-react-lite";
import { AddSubTaskModal, SelectContainer, TaskContainer } from "./components";
import { modalStore } from "./store/ModalStore";

function App() {
    const { setIsModalOpen } = modalStore;

    const handleOnModalClose = () => {
        setIsModalOpen(false);        
    };

    return (        
        <section className="h-screen flex justify-center items-start bg-black p-4 gap-4">
            <div className="p-4 border-white border relative w-1/2 h-full flex flex-col justify-center">              
                <SelectContainer  />
            </div>
            <TaskContainer />  
            <AddSubTaskModal handleOnClose={handleOnModalClose}/>          
        </section>
    );
}

export default observer(App);
