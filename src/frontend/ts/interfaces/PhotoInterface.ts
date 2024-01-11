import PluralResponseBase from "./ResponseInterfaces";


interface PhotoInterface{
    id: string;
    image: string;
}

interface PhotoPluralInterface extends PluralResponseBase{
    results: Array<PhotoInterface>;
}

export {type PhotoInterface, type PhotoPluralInterface};