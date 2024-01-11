import { manager } from "..";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";
import { render } from "../utils/render";

import authImage from "../../img/notebook.png";
import Alert from "../utils/alert";
import { validateEmail, validatePhone } from "../utils/validation";
import axios from "axios";
import { BaseURL } from "../api/FetchController";

const language = manager.getStatePosition("language");
const dictionary = manager.getStatePosition("dictionary");

const SignIn = async () => {

    render("main-homepage", `
        <div class="image-auth">
            <img src="${authImage}" alt="" class="auth__preview">
            <a href="/signin/" class="link__auth">${dictionary.orCreateAccount}</a>
        </div>
        <div class="container-form__auth">
            <form id="form__auth" action="null">
                <label class="label-input">${dictionary.personalInformation}</label>
                <input type="text" class="input__form" name="first_name" placeholder="${dictionary.name}" />
                <input type="text" class="input__form" name="last_name" placeholder="${dictionary.lastName}" />
                <label for="imageProperty" id="imageLabel">${dictionary.avatar}</label>
                <input type="file" class="input__form" name="avatar" id="imageProperty" accept="image/png, image/gif, image/jpeg" />

                <label class="label-input">${dictionary.registerInformation}</label>
                <input type="email" class="input__form" name="email" placeholder="Email" />
                <input type="text" class="input__form" name="phone" placeholder="${dictionary.phone}" />
                <input type="password" class="input__form" name="password" placeholder="${dictionary.password}" />
                <button type="submit" class="submit__form">${dictionary.signIn}</button>
            </form>

        </div>
    `);

    const imageInput = document.getElementById("imageProperty") as HTMLInputElement;
    imageInput.addEventListener("change", () => {
        const imageLabel: HTMLElement | null = document.getElementById("imageLabel");
        if (imageInput.files != null && imageInput.files?.length >= 1) {
            const [file] = imageInput.files;

            if (imageLabel != null && file) {
                imageLabel.innerHTML = `<a class="fileLink" href="${URL.createObjectURL(file)}">Вы загрузили</a>`
            }
        }


    }, true)
    
    const form = document.getElementById("form__auth") as HTMLFormElement;
    form.action = "null"
    form?.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const validationData = Object.fromEntries(data.entries());

        if (validateEmail(validationData.email as string) == null) {
            Alert(dictionary.incorrectEmail);
            return;
        }
        if (validatePhone(validationData.phone as string) == null) {
            Alert(dictionary.incorrectPhone);
            return;
        }
        console.log(validationData);
        
        axios({
            method: "post",
            url: `${BaseURL}${"auth/register/"}`,
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        }).then((r) => {
            localStorage.setItem("authenticated", "true");
            console.log(r.data);
            localStorage.setItem("user", JSON.stringify(r.data))
            window.location.replace("/");
        }).catch((r) => {
            console.log(r);
            Alert(dictionary.invalidLoginData);
        });        
    })

};

SignIn();
HeaderWithSubHeader(language, dictionary);
Footer(dictionary);
