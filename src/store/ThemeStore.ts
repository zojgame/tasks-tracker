import { makeAutoObservable } from "mobx";
import { Theme } from "../shared";

export class ThemeStore{
    theme: Theme = Theme.LIGHT;

    constructor(){
        makeAutoObservable(this);
    }

    setTheme = (theme: Theme) => {
        this.theme = theme;
    };
}

export const themeStore = new ThemeStore();