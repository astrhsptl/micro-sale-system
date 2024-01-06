import { manager } from "..";
import FetchController from "../api/FetchController";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";
import { CategorySwitcher } from "../components/helpers/CategorySwitcher";
import { ProductsRender } from "../components/helpers/ProductsRender";
import { CategoryPluralInterface } from "../interfaces/CategoryInterfaces";
import { type ProductInterface } from "../interfaces/ProductInterfaces";
import { render } from "../utils/render";

const language = manager.getStatePosition("language");
const dictionary = manager.getStatePosition("dictionary");

const Products = async () => {
    const fetchMaster = new FetchController("category/");
    const fetchControllerProducts = new FetchController("product/");
    let categories: CategoryPluralInterface = await fetchMaster.fetchList();
    let products: Array<ProductInterface> = await fetchControllerProducts.fetchList();
    manager.register("categories", categories.results);

    render("main-homepage", `
        <div id="container-input-search">
            <img src="../svg/magnifier.svg" alt="" class="search-magnifier">
            <input id="input-search" type="text" name="search" placeholder="Search...">
        </div>
        <div id="container-category__switchable"></div>
        <div id="container-product"></div>
    `);

    const searchInput: HTMLElement = document.getElementById("input-search") as HTMLElement;
    searchInput.oninput = async (e: Event) => {
        const element = e.target as HTMLInputElement;
        
        if (element.value == "") {
            const fetchResult = await fetchControllerProducts.fetchList(1, 50, {category_id: manager.getStatePosition("currentCategory")});
            products = fetchResult.results;
        } else {
            const fetchResult = await fetchControllerProducts.fetchList(1, 50, {search: element.value});
            products = (fetchResult.results);
        }
        await ProductsRender(products);
    }
    
};

await Products();
await CategorySwitcher(manager);
HeaderWithSubHeader(language, dictionary);
await Footer(dictionary);