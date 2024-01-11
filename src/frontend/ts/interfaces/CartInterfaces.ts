import PluralResponseBase from "./ResponseInterfaces";


interface CartInterface{
    id: string;
    user_id: string;
    is_closed: string;
}

interface CartPluralInterface extends PluralResponseBase{
    results: Array<CartInterface>;
}

export {type CartInterface, type CartPluralInterface};