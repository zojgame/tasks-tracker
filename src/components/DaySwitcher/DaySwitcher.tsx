import { observer } from "mobx-react-lite";
import { Button, Theme } from "../../shared";
import { NightIcon, SunIcon } from "../../icons";
import { themeStore } from "../../store/ThemeStore";

const DaySwitcherContainer = () => {
    const { theme, setTheme } = themeStore;
    const handleClick = () => {
        if(theme === Theme.LIGHT){
            setTheme(Theme.DARK);
        }else{
            setTheme(Theme.LIGHT);
        }
    };
    
    return (
        <Button 
            className="absolute top-2 right-2 primary-theme min-w-10 min-h-10" 
            rounded 
            onClick={handleClick}>
            <div className={`transition-all duration-300 ease-in-out absolute top-2 right-2 ${theme === Theme.LIGHT ? 'opacity-0' : 'opacity-100'}`}>
                <NightIcon />
            </div>
            <div className={`transition-all duration-300 ease-in-out absolute top-2 right-2 ${theme === Theme.LIGHT ? 'opacity-100' : 'opacity-0'}`}>
                <SunIcon />
            </div>
        </Button>
    );

};

export const DaySwitcher = observer(DaySwitcherContainer) as typeof DaySwitcherContainer;