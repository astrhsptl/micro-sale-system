import { ProductInterface } from "../../interfaces/ProductInterfaces";
import { render } from "../../utils/render";
import { ProductCard } from "../ProductCard";

export const ProductsRender = async (products: Array<ProductInterface>)=> {
    let content = "";
    
    products.forEach(product => {
        content += ProductCard(product.preview, product.name, product.cost)
    })
    render("container-product", content)
}
