import PluralResponseBase from "./ResponseInterfaces";


interface ProductCharacteristicsInterface{
    id: string;
    title: string;
    value: string;
    product_id: number;
}

interface ProductCharacteristicsPluralInterface extends PluralResponseBase{
    results: Array<ProductCharacteristicsInterface>;
}

export {type ProductCharacteristicsInterface, type ProductCharacteristicsPluralInterface};