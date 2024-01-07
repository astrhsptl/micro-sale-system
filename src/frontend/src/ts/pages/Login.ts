import { manager } from "..";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";
import { render } from "../utils/render";

import authImage from "../../img/notebook.png";
import axios from "axios";
import { BaseURL } from "../api/FetchController";
import Alert from "../utils/alert";
import { validateEmail } from "../utils/validation";

const language = manager.getStatePosition("language");
const dictionary = manager.getStatePosition("dictionary");

const Product = async () => {

    render("main-homepage", `
        <div class="image-auth">
            <img src="${authImage}" alt="" class="auth__preview">
            <a href="/signin/" class="link__auth">${dictionary.orCreateAccount}</a>
        </div>
        <div class="container-form__auth">
            <form id="form__auth" action="">
                <label for="email" class="label-input">Email</label>
                <input type="email" class="input__form" name="email" placeholder="Email" />
                <label for="password" class="label-input">${dictionary.password}</label>
                <input type="password" class="input__form" name="password" placeholder="${dictionary.password}" />
                <button type="submit" class="submit__form">${dictionary.login}</button>
            </form>
        </div>
    `);

    const form = document.getElementById("form__auth");
    form?.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const validationData = Object.fromEntries(data.entries());

        if (validateEmail(validationData.email as string) == null) {
            Alert(dictionary.incorrectEmail);
        } else {
            axios({
                method: "post",
                url: `${BaseURL}${"auth/login/"}`,
                data: data,
                headers: { "Content-Type": "multipart/form-data" },
            }).then((r) => {
                localStorage.setItem("authenticated", "true");
                axios({
                    method: "get",
                    url: `${BaseURL}${"auth/user/by/token"}`,
                    headers: { "Content-Type": "application/json", "AUTHORIZATION": `Bearer ${r.data.access}` },
                }).then((r) => {
                    localStorage.setItem("user", JSON.stringify(r.data))
                    window.location.replace("/");
                }).catch(() => {
                    Alert(dictionary.invalidLoginData);
                });
            }).catch(() => {
                Alert(dictionary.invalidLoginData);
            });
        }
    })

};

await Product();
HeaderWithSubHeader(language, dictionary);
await Footer(dictionary);
