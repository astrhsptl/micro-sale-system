import { preRender } from "./render";

import alertSvg from "../../svg/alert.svg";


const Alert = async (title: string) => {
    preRender("main-homepage", `
        <div class="notification">
            <img src="${alertSvg}" class="notification-image" />    
            ${title}
        </div>
    `);

    setTimeout(() => {
        const notifications =  Array.from(document.getElementsByClassName("notification"));
        notifications.forEach(notification => notification.classList.add("notification__opened"))
    }, 100);

    setTimeout(()=>{
        const notifications =  Array.from(document.getElementsByClassName("notification"));
        notifications.forEach(notification => {
            notification.classList.remove("notification__opened");
            notification.classList.add("notification__hidden");
            setInterval(() => {
                notification.remove();
            }, 300);
        })
    }, 5000);
};

export default Alert;