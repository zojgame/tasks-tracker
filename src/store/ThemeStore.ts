import { makeAutoObservable } from "mobx";
import { Theme } from "../shared";

export class ThemeStore{
    theme: Theme = (localStorage.getItem('theme') ?? Theme.LIGHT) as Theme;

    constructor(){
        makeAutoObservable(this);
    }

    setTheme = (theme: Theme) => {
        this.theme = theme;
    };
}

export const themeStore = new ThemeStore();