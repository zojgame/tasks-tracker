import { Select, TaskContainer } from "./components";
import { tasksStore } from "./store/TasksStore";
import { observer } from "mobx-react-lite";

function App() {
    const { treeNodes } = tasksStore;

    return (        
        <section className="h-screen flex justify-center items-start bg-black p-4 gap-4">
            <div className="p-4 border-white border relative w-1/2 h-full flex flex-col justify-center">              
                <Select treeNodes={treeNodes} />
            </div>
            <TaskContainer />
            
        </section>
    );
}

export default observer(App);
