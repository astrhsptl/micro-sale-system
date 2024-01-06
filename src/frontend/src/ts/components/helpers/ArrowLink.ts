import arrowLinkSvg from "../../../svg/arrow-link.svg";
import { insertableRender } from "../../utils/render";


export const ArrowLink = (to: string, text: string) => {
    return insertableRender(`
        <a href="${to}" class="arrow-link__link">
            <span class="arrow-link__text">${text}</span>
            <img src="${arrowLinkSvg}" alt="" class="arrow-link-svg">
        </a>
    `)
};