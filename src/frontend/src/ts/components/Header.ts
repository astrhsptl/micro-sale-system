import logotype from "../../svg/logotype.svg";
import cartIcon from "../../svg/cart_icon.svg";
import orderListIcon from "../../svg/orderlist_icon.svg";

import { render } from "../utils/render";

export const Header = (): void => {
    render("header", `
        <div class="container container-header">
        <div class="container-logotype">
            <img src="${logotype}" class="logotype" alt="" srcset="">
        </div>
        <div class="header-button__link">
            <a href="/" class="header-link">Home</a>
            <a href="/products/" class="header-link">Products</a>
        </div>
        <div class="container-button__functional">
            <span class="language-switcher">en</span>
            <a href="/cart/"><img src="${cartIcon}" alt="" class="button-cart"></a>
            <a href="/order/"><img src="${orderListIcon}" alt="" class="button-orderlist"></a>
            <a href="/login/ " class="link-login__header">Login</a>
            <a href="/signin/"><button class="button-signin__header">Sign in</button></a>
        </div>
        </div>
    `)
}