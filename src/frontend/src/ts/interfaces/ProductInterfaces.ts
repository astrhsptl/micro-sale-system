import PluralResponseBase from "./ResponseInterfaces";


interface ProductInterface{
    id: number;
    name: string;
    preview: string;
    description: string;
    cost: number;
    seller_id: string;
    category_id: string;
    photos: Array<string>;
}

interface ProductPluralInterface extends PluralResponseBase{
    results: Array<ProductInterface>;
}

export {type ProductInterface, type ProductPluralInterface};
