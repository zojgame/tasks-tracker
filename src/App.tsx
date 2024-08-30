import { observer } from "mobx-react-lite";
import { AddSubTaskModal, SelectContainer, TaskContainer } from "./components";
import { modalStore } from "./store/ModalStore";
import { themeStore } from "./store/ThemeStore";
import { useEffect } from "react";
import { Theme } from "./shared";

function App() {
    const { theme } = themeStore;

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if(theme === Theme.DARK){ 
            const primaryColor = `var(--${Theme.DARK}-color)`;
            const secondaryColor = `var(--${Theme.LIGHT}-color)`;

            document.documentElement.style.setProperty('--primary-color', primaryColor);
            document.documentElement.style.setProperty('--secondary-color', secondaryColor);
            
        }
        else if(theme === Theme.LIGHT){
            const primaryColor = `var(--${Theme.LIGHT}-color)`;
            const secondaryColor = `var(--${Theme.DARK}-color)`;

            document.documentElement.style.setProperty('--primary-color', primaryColor);
            document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        }
        
    }, [theme]);

    const { setIsModalOpen } = modalStore;

    const handleOnModalClose = () => {
        setIsModalOpen(false);        
    };

    return (        
        <section className="h-screen flex justify-center items-start primary-theme p-4 gap-4">                  
            <SelectContainer  />
            <TaskContainer />  
            <AddSubTaskModal handleOnClose={handleOnModalClose}/>          
        </section>
    );
}

export default observer(App);
