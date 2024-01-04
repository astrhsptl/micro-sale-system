import { manager } from "..";
import FetchController from "../api/FetchController";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";
import { render } from "../utils/render";


const HomePage = async () => {
    const language = manager.getStatePosition("language");
    const dictionary = manager.getStatePosition("dictionary");
    const fetchMaster = new FetchController("category/");

    console.log(await fetchMaster.fetchList());
    

    HeaderWithSubHeader(language, dictionary);
    Footer(dictionary);    

    render("main-homepage", `
        <h2 class="page-title" id="most-popular">${dictionary.mostPopular}</h2>
        <div id="container-category__switchable">
            <span class="switcher-category">Category</span>
            <span class="switcher-category">Category</span>
            <span class="switcher-category">Category</span>
            <span class="switcher-category">Category</span>
            <span class="switcher-category">Category</span>
            <span class="switcher-category">Category</span>
            <span class="switcher-category">Category</span>
            <span class="switcher-category">Category</span>
            <span class="switcher-category switcher-category__current">Category</span>
        </div>
    `)

};

HomePage();

