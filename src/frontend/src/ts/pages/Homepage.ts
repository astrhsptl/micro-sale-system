import { manager } from "..";
// import FetchController from "../api/FetchController";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";
import { CategorySwitcher } from "../components/helpers/CategorySwitcher";
import { render } from "../utils/render";


const HomePage = async () => {
    const language = manager.getStatePosition("language");
    const dictionary = manager.getStatePosition("dictionary");
    // const fetchMaster = new FetchController("category/");
    // console.log(await fetchMaster.fetchList());
    let categories = [
        {id: 1, title: "C"},
        {id: 2, title: "Cat"},
        {id: 1, title: "C", current: true},
    ];
    
    manager.register("categories", categories);


    HeaderWithSubHeader(language, dictionary);
    Footer(dictionary);    

    render("main-homepage", `
        <h2 class="page-title" id="most-popular">${dictionary.mostPopular}</h2>
        <div id="container-category__switchable"></div>
    `);

    await CategorySwitcher(manager);
};

HomePage();
