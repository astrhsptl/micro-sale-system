import { insertableRender } from '../utils/render'
import { ProductInterface } from "../interfaces/ProductInterfaces";

export const ProductCard = (product: ProductInterface): string => {
    return  insertableRender(`
    <a href="/product/?id=${product.id}" class="product-link">
    <div class="container-card-product">
        <img src="${product.preview}" alt="" class="product-image">
        <p class="product-title">${product.name}</p>
        <p class="product-price">${product.cost}$</p>
    </div>
    </a>
`)
}
