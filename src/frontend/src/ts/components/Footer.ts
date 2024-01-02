import { render } from "../utils/render"
import githubQRCode from "../../img/github.png"


export const Footer = () => {
    render("footer", `
    <div class="container container-footer">
        <div class="container-footer__sub">
            <div class="block-info-title">О создателе <img src="./svg/arrow_down.svg" alt="" class="footer-arrow__down" /></div>
            <ul class="footer-block-link footer-block-link__hidden">
                <a href="https://vk.com/aneiky" class="block-info-link"><li class="block-info-data">VK</li></a>
                <a href="https://github.com/astrhsptl/" class="block-info-link"><li class="block-info-data">Github</li></a>
                <a href="https://gitlab.com/xoria-x" class="block-info-link"><li class="block-info-data">Gitlab</li></a>
                <a href="https://t.me/jus2_nOb0dY" class="block-info-link"><li class="block-info-data">Telegram</li></a>
            </ul>
        </div>

        <div class="container-footer__sub">
            <div class="block-info-title">О проекте <img src="./svg/arrow_down.svg" alt="" class="footer-arrow__down" /></div>
            <ul class="footer-block-link footer-block-link__hidden">
                <a href="https://github.com/astrhsptl/micro-sale-system#%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B" class="block-info-link"><li class="block-info-data">Описание</li></a>
                <a href="https://miro.com/app/board/uXjVN-4E00I=/?share_link_id=603069348521" class="block-info-link"><li class="block-info-data">Стек</li></a>
                <a href="https://www.figma.com/file/nGUP4eJGqIejCaOUPKSZF3/Untitled?type=design&node-id=0%3A1&mode=design&t=j7UqiIadjO1tcqkc-1" class="block-info-link"><li class="block-info-data">Дизайн</li></a>
                <a href="https://miro.com/app/board/uXjVN-4E00I=/?share_link_id=603069348521" class="block-info-link"><li class="block-info-data">Сис. аналитика</li></a>
                <a href="https://github.com/astrhsptl/micro-sale-system#%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B" class="block-info-link"><li class="block-info-data">Репозиторий</li></a>
            </ul>
        </div>

        <div class="container-footer__sub">
            <div class="block-info-title">О платформе <img src="./svg/arrow_down.svg" alt="" class="footer-arrow__down" /></div>
            <ul class="footer-block-link footer-block-link__hidden">
                <a href="#" class="block-info-link"><li class="block-info-data">Как купить?</li></a>
                <a href="#" class="block-info-link"><li class="block-info-data">Как происходит доставка?</li></a>
                <a href="#" class="block-info-link"><li class="block-info-data">Как происходит оплата?</li></a>
            </ul>
        </div>

        <div class="container-footer__sub">
            <div class="block-info-title">О чем-те еще <img src="./svg/arrow_down.svg" alt="" class="footer-arrow__down" /></div>
            <ul class="footer-block-link footer-block-link__hidden">
                <a href="#" class="block-info-link"><li class="block-info-data">Как купить?</li></a>
                <a href="#" class="block-info-link"><li class="block-info-data">Как происходит доставка?</li></a>
                <a href="#" class="block-info-link"><li class="block-info-data">Как происходит оплата?</li></a>
            </ul>
        </div>
        
        <div class="container-footer__sub github-data-container">
            <img src="${githubQRCode}" alt="" class="footer-github">
            <p class="block-info-data signature-github">Github проекта</p>
        </div>
    </div>
    <div class="container footer-confirm">
        <span class="footer-confirm-data">Пользовательское соглашение</span>
        <span class="footer-confirm-data">Пользовательское соглашение</span>
    </div>
    `);

    const dropDownClasses: HTMLCollectionOf<Element> = document.getElementsByClassName("container-footer__sub");


    Array.from(dropDownClasses).forEach(element => {
        if (!element.classList.contains("github-data-container")) {
            element.addEventListener("click", (e: Event) => {
                const parentTarget = e.currentTarget as HTMLElement;
                const arrow = parentTarget.firstChild?.nextSibling?.lastChild as HTMLElement;
                arrow.classList.toggle("footer-arrow__down-rotated");
            
                const linkList = parentTarget.lastElementChild as HTMLElement; 
            
            
                if (linkList.classList.contains("footer-block-link__hidden")) {
                    linkList.classList.add("footer-block-link__opened");
                    linkList.classList.remove("footer-block-link__hidden");
                } else {
                    linkList.classList.remove("footer-block-link__opened");
                    linkList.classList.add("footer-block-link__hidden");
                }
            });
        }
    });

}
