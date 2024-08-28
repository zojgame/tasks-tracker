import { SelectContainer, TaskContainer } from "./components";
import { observer } from "mobx-react-lite";

function App() {
    

    return (        
        <section className="h-screen flex justify-center items-start bg-black p-4 gap-4">
            <div className="p-4 border-white border relative w-1/2 h-full flex flex-col justify-center">              
                <SelectContainer  />
            </div>
            <TaskContainer />
            
        </section>
    );
}

export default observer(App);
