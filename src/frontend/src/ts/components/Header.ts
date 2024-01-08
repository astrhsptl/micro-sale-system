import logotype from "../../svg/logotype.svg";
import cartIcon from "../../svg/cart_icon.svg";
import orderListIcon from "../../svg/orderlist_icon.svg";
import { render } from "../utils/render";
import { AvailableDictionaryType, AvailableLanguagesType, manager } from "..";

export const Header = (language: AvailableLanguagesType, dictionary: AvailableDictionaryType): void => {
    const user = manager.getStatePosition("user");
    
    render("header", `
        <div class="container container-header">
        <div class="container-logotype">
            <img src="${logotype}" class="logotype" alt="" srcset="">
        </div>
        <div class="header-button__link">
            <a href="/" class="header-link">${dictionary.homePage}</a>
            <a href="/products/" class="header-link">${dictionary.productsPage}</a>
        </div>
        <div class="container-button__functional">
            <span class="language-switcher" id="language-switcher-button">${language}</span>
            <a href="/cart/"><img src="${cartIcon}" alt="" class="button-cart"></a>
            <a href="/order/"><img src="${orderListIcon}" alt="" class="button-orderlist"></a>
            ${
                user ?
                `<a href="/logout/"><button class="button-signin__header">${dictionary.logout}</button></a>` :
                `
                <a href="/login/ " class="link-login__header">${dictionary.login}</a>
                <a href="/signin/"><button class="button-signin__header">${dictionary.signIn}</button></a>
                `
            }
            
        </div>
        </div>
    `)
}