import { ProductQuantityInterface } from "../../interfaces/ProductQuantityInterface"
import { insertableRender } from "../../utils/render"

export const CartRow = (pq: ProductQuantityInterface) => {
    let compressedData = JSON.stringify({
        pq_id: pq.id,
        quantity: pq.quantity,
        cart_id: pq.cart_id,
        product_id: pq.product_id,
    })

    return insertableRender(`
        <div class="cart-row">
            <div class="cart-item-container grid-position-left">
                <img class="cart-row-img" src="${pq.product.preview}" />
                <div class="item-text-container">
                <p class="cart-row-name">${pq.product.name}</p>
                <p class="cart-item-description">${pq.product.description}</p>
                </div>
            </div>
            <p class="cart-row-cost grid-position-middle">${pq.product.cost}$</p>
            <p class="cart-row-quantity grid-position-middle">
                <button class="cart-button__quantity button-decrement" data-theme=${compressedData}>-</button>    
                    ${pq.quantity}
                <button class="cart-button__quantity button-increment" data-theme=${compressedData}>+</button>    
            </p>
            <p class="cart-row-total grid-position-right">${pq.product.cost * pq.quantity}$</p>
        </div>
    `)
}