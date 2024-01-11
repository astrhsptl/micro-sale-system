import { AvailableDictionaryType, manager } from "..";
import FetchController from "../api/FetchController";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";
import { CartRow } from "../components/helpers/CartRow";
import { CartInterface, CartPluralInterface } from "../interfaces/CartInterfaces";
import { ProductQuantityPluralInterface } from "../interfaces/ProductQuantityInterface";
import { User } from "../interfaces/UserInterface";
import { preRender, render } from "../utils/render";

const language = manager.getStatePosition("language");
const dictionary: AvailableDictionaryType = manager.getStatePosition("dictionary");

const Cart = async () => {
    const user = manager.getStatePosition("user")
    const cartFetchController = new FetchController("cart/");
    const productQUantityFetchController = new FetchController("product/quantity/");

    render("main-homepage", `
        <h2 class="title-cart">${dictionary.cart}</h2>
        <div class="cart-quantity-container" id="rows-render-place">
        </div>
    `)
    totalCost = await preRenderRows(user, cartFetchController, productQUantityFetchController)

    const incrementButton = document.querySelector("#button-increment"); 
    const dencrementButton = document.querySelector("#button-decrement");

};

const preRenderRows = async (user: User, cartFetchController: FetchController, PQFetchController: FetchController): Promise<number> => {
    let rowContent = "";
    let totalCost = 0; 

    let carts: CartPluralInterface = await cartFetchController.fetchList(1,1,{
        user_id: user.id,
        is_closed: false,
    })
    carts = carts.results;
    let currentCart: CartInterface = carts[0]

    let productList: ProductQuantityPluralInterface = await PQFetchController.fetchList(1,1, {
        cart_id: currentCart.id
    })

    productList.results.forEach((pq) => {
        rowContent += CartRow(pq);
        totalCost += pq.product.cost * pq.quantity
    })

    render("rows-render-place", `
        <div class="cart-title-container">
            <p class="position-title grid-position-left">${dictionary.itemTitle}</p>
            <p class="position-title grid-position-middle">${dictionary.priceTitle}</p>
            <p class="position-title grid-position-middle">${dictionary.quantityTitle}</p>
            <p class="position-title grid-position-right">${dictionary.totalTitle}</p>
        </div>
        <div class="cart-product-container">
            ${ rowContent }
        </div>
        <div class="cart-total-container">
            <p class="position-title">${totalCost}$</p>
        </div>
    `);

    return totalCost
}

await Cart();
HeaderWithSubHeader(language, dictionary);
await Footer(dictionary);
