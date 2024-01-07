import { ProductCharacteristicsInterface } from "../../interfaces/ProductCharacteristicsInterface";
import { insertableRender } from "../../utils/render";

export const ProductCharacteristicRender = async (productCharacteristics: Array<ProductCharacteristicsInterface>) => {
    let content = "";

    productCharacteristics.forEach(characteristic => 
        content += ProductCharacteristicLi(characteristic)
    );

    content = `<ul>${content}</ul>`
    
    return insertableRender(content);
}

export const ProductCharacteristicLi = (productCharacteristic: ProductCharacteristicsInterface) => {
    return insertableRender(`
        <li class="container-characteristic">
            <p class="characteristic-name">${productCharacteristic.title}</p>
            <p class="characteristic-value">${productCharacteristic.value}</p>
        </li>
    `)
}
