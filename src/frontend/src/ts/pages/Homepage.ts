import { manager } from "..";
import FetchController from "../api/FetchController";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";
import { CategoryPreview } from "../components/helpers/CategoryPreview";
import { CategorySwitcher } from "../components/helpers/CategorySwitcher";
import { type CategoryPluralInterface } from "../interfaces/CategoryInterfaces";
import { render } from "../utils/render";

const HomePage = async () => {
    const language = manager.getStatePosition("language");
    const dictionary = manager.getStatePosition("dictionary");
    const fetchMaster = new FetchController("category/");
    let categories: CategoryPluralInterface = await fetchMaster.fetchList();
    
    manager.register("categories", categories.results);


    HeaderWithSubHeader(language, dictionary);
    Footer(dictionary);    

    render("main-homepage", `
        <div id="container-category__preview"></div>
        <h2 class="page-title" id="most-popular">${dictionary.mostPopular}</h2>
        <div id="container-category__switchable"></div>
    `);

    await CategorySwitcher(manager);
    await CategoryPreview(categories.results.slice(0, 3));
};

await HomePage();
