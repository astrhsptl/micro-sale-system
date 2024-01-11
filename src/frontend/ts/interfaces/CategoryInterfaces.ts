import PluralResponseBase from "./ResponseInterfaces";


interface CategoryInterface{
    id: string;
    title: string;
    description: string;
    background: string;
}

interface CategoryPluralInterface extends PluralResponseBase{
    results: Array<CategoryInterface>;
}

export {type CategoryInterface, type CategoryPluralInterface};