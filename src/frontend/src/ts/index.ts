import { StateManager } from "./state/state";
import enDictionary from "../lang/en.json";
import ruDictionary from "../lang/ru.json";

const manager = new StateManager();

const languageConfig = {
    "en": enDictionary,
    "ru": ruDictionary
} as const;

type AvailableLanguagesType = keyof typeof languageConfig;
type AvailableDictionaryType = typeof enDictionary;


const setUpLanguage = () => {
    const currentLanguage = localStorage.getItem("lang") as AvailableLanguagesType;

    if (currentLanguage == null) {
        switchLanguage("en");
    } else {
        manager.register("language", currentLanguage);
        manager.register("dictionary", languageConfig[currentLanguage]);
    }
}

const setUpUser = () => {
    const currentUser = localStorage.getItem("user");
    manager.register("user", JSON.parse(currentUser!)); 
}

const switchLanguage = (newLanguage: AvailableLanguagesType) => {
    localStorage.setItem("lang", newLanguage);
    manager.register("language", newLanguage);
    manager.register("dictionary", languageConfig[newLanguage]);
    window.location.reload()
}

setUpUser();
setUpLanguage();

console.log(manager.state);


export {
    manager, languageConfig, switchLanguage,
    type AvailableLanguagesType, type AvailableDictionaryType
};