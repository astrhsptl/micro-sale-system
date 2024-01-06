import { insertableRender } from '../utils/render'

export const ProductCard = (img: string, title: string, price: number): string => {
    return  insertableRender(`
    <div class="container-card-product">
        <img src="${img}" alt="" class="product-image">
        <p class="product-title">${title}</p>
        <p class="product-price">${price}$</p>
    </div>
`)
}
