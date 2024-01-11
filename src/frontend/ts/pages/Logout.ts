import { AvailableDictionaryType, manager } from "..";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";
import { removeUser } from "../utils/removeUser";
import { render } from "../utils/render";

const language = manager.getStatePosition("language");
const dictionary: AvailableDictionaryType = manager.getStatePosition("dictionary");

const Logout = async () => {
    render("main-homepage", `
        <h2 class="text-logout">${dictionary.sureLogout}</h2>
        <div class="container-button">
            <button class="button-logout" id="button-submit">${dictionary.logoutApprove}</button>
            <button class="button-logout" id="button-reject">${dictionary.logoutReject}</button>
        </div>
    `);

    const buttonApprove = document.getElementById("button-submit");
    const buttonReject = document.getElementById("button-reject");

    buttonApprove?.addEventListener("click", ()=>{
        removeUser();
        window.location.replace("/");
    });

    buttonReject?.addEventListener("click", () => {
        window.location.replace("/");
    })
};

Logout();
HeaderWithSubHeader(language, dictionary);
Footer(dictionary);
