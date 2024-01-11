import { AvailableDictionaryType, manager } from "..";
import FetchController from "../api/FetchController";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";
import { CartRow } from "../components/helpers/CartRow";
import { CartInterface, CartPluralInterface } from "../interfaces/CartInterfaces";
import { ProductQuantityPluralInterface } from "../interfaces/ProductQuantityInterface";
import { User } from "../interfaces/UserInterface";
import Alert from "../utils/alert";
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
    await preRenderRows(user, cartFetchController, productQUantityFetchController)
};

const preRenderRows = async (user: User, cartFetchController: FetchController, PQFetchController: FetchController) => {
    let rowContent = "";
    let totalCost = 0; 

    let carts: CartPluralInterface = await cartFetchController.fetchList(1,1,{
        user_id: user.id,
        is_closed: false,
    })
    carts = carts.results;
    let currentCart: CartInterface = carts[0]

    let productList: ProductQuantityPluralInterface = await PQFetchController.fetchList(1,50, {
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

    const incrementButtons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByClassName("button-increment"); 
    const dencrementButtons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByClassName("button-decrement");

    Array.from(incrementButtons).forEach((btn: HTMLElement) => {
        btn.addEventListener("click", async (e: Event) => {
            let data = (e.target as HTMLElement).dataset.theme;

            if (data) {
                data = JSON.parse(data)
                const cartFetchController = new FetchController("cart/");
                const productQUantityFetchController = new FetchController("product/quantity/");

                await productQUantityFetchController.update(data?.pq_id, data={
                    quantity: data?.quantity + 1,
                    cart_id: data?.cart_id,
                    product_id: data?.product_id,
                })

                await preRenderRows(user, cartFetchController, productQUantityFetchController);
            }

        })
    })

    Array.from(dencrementButtons).forEach((btn: HTMLElement) => {
        btn.addEventListener("click", async (e: Event) => {
            let data = (e.target as HTMLElement).dataset.theme;

            if (data) {
                data = JSON.parse(data)
                const cartFetchController = new FetchController("cart/");
                const productQUantityFetchController = new FetchController("product/quantity/");

                if (data?.quantity > 1) {
                    console.log(data?.quantity);
                    

                    await productQUantityFetchController.update(data?.pq_id, data={
                        quantity: data?.quantity - 1,
                        cart_id: data?.cart_id,
                        product_id: data?.product_id,
                    })

                    await preRenderRows(user, cartFetchController, productQUantityFetchController);
                } else {
                    Alert(dictionary.lowQuantity);
                    await preRenderRows(user, cartFetchController, productQUantityFetchController);
                }
                
            }


        })
    })

}

await Cart();
HeaderWithSubHeader(language, dictionary);
await Footer(dictionary);
