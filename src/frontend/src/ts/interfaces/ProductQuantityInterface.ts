import { ProductInterface } from "./ProductInterfaces";
import PluralResponseBase from "./ResponseInterfaces";


interface ProductQuantityInterface{
    id: string;
    product: ProductInterface;
    quantity: number;
    cart_id: string;
    product_id: number;
}

interface ProductQuantityPluralInterface extends PluralResponseBase{
    results: Array<ProductQuantityInterface>;
}

export {type ProductQuantityInterface, type ProductQuantityPluralInterface};