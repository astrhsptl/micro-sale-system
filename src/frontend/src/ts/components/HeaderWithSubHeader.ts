import { languageConfig, switchLanguage, AvailableLanguagesType, AvailableDictionaryType } from "..";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";

export const HeaderWithSubHeader = (language: AvailableLanguagesType, dictionary: AvailableDictionaryType): void => {

    Header(language, dictionary);
    SubHeader(language);
    
    const languageSwitchers = document.getElementsByClassName("language-switcher");

    Array.from(languageSwitchers).forEach(element => {
        element.addEventListener("click", () => {
            for (let lang of Object.keys(languageConfig)) {
                if (lang != language) {
                    switchLanguage(lang as AvailableLanguagesType);
                    break
                }
            }
        })
    })
}