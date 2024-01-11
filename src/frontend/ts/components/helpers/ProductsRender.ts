import { ProductInterface } from "../../interfaces/ProductInterfaces";
import { insertableRender, render } from "../../utils/render";
import { ProductCard } from "../ProductCard";

export const ProductsRender = async (products: Array<ProductInterface>, isInsertable: boolean = false)=> {
    let content = "";
    
    products.forEach(product => {
        content += ProductCard(product)
    })

    if (isInsertable) {
        return insertableRender(content);
    }
    render("container-product", content)
}
