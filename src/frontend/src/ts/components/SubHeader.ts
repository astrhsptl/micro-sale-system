import homeIcon from "../../svg/home_icon.svg";
import searchIcon from "../../svg/search_icon.svg";
import cartIcon from "../../svg/cart_icon.svg";
import orderListIcon from "../../svg/orderlist_icon.svg";
import { render } from "../utils/render";
import { AvailableLanguagesType } from "..";

export const SubHeader = (language: AvailableLanguagesType): void => {

    render("navigation-sub", `
        <div class="container container-navigation">
            <a href="/"><img src="${homeIcon}" alt="" class="navigation-sub__home"></a>
            <a href="/products/"><img src="${searchIcon}" alt="" class="navigation-sub__products"></a>
            <a href="/cart/"><img src="${cartIcon}" alt="" class="navigation-sub__cart"></a>
            <a href="/order/"><img src="${orderListIcon}" alt="" class="navigation-sub__order"></a>
            <span class="language-switcher">${language}</span>
        </div>
    `)
}