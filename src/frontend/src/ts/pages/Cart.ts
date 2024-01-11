import { AvailableDictionaryType, manager } from "..";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";
import { render } from "../utils/render";

const language = manager.getStatePosition("language");
const dictionary: AvailableDictionaryType = manager.getStatePosition("dictionary");

const Cart = async () => {
    render("main-homepage", `
        <h2 class="title-cart">${dictionary.cart}</h2>
        <div class="cart-quantity-container">
            <div class="cart-title-container">
                <p class="position-title">${dictionary.itemTitle}</p>
                <p class="position-title">${dictionary.priceTitle}</p>
                <p class="position-title">${dictionary.quantityTitle}</p>
                <p class="position-title">${dictionary.totalTitle}</p>
            </div>
            <div class="cart-product-container">
                <p class="position-title">${dictionary.itemTitle}</p>
                <p class="position-title">${dictionary.priceTitle}</p>
                <p class="position-title">${dictionary.quantityTitle}</p>
                <p class="position-title">${dictionary.totalTitle}</p>
            </div>
            <div class="cart-total-container">
                <p class="position-title">${dictionary.itemTitle}$</p>
            </div>
        </div>
    `)
};

await Cart();
HeaderWithSubHeader(language, dictionary);
await Footer(dictionary);
