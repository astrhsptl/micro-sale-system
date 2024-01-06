import FetchController from "../../api/FetchController";
import { StateManager } from "../../state/state";
import { render } from "../../utils/render";
import { ProductsRender } from "./ProductsRender";

interface CategoryTitle{
    id: string | number;
    title: string;
    current?: boolean
}

export const CategorySwitcher = async (manager: StateManager) => {
    let categoryArray = manager.getStatePosition("categories") as Array<CategoryTitle>;
    let currentCategory = manager.getStatePosition("currentCategory");
    let fetchController = new FetchController("product/");

    if (!currentCategory) {
        manager.register("currentCategory", categoryArray[0].id);
        currentCategory = categoryArray[0].id;
    }

    let content = "";

    categoryArray.forEach(category => {
        content += `<span data-id=${category.id} class="switcher-category${
            currentCategory === category.id ?
            " switcher-category__current" :
        ""}">${category.title}</span>`
    });

    render("container-category__switchable", content);

    let products = await fetchController.fetchList(1, 50, {category_id: currentCategory});
    await ProductsRender(products.results);


    let mouseDown = false;
    let startX, scrollLeft;
    const slider = document.querySelector('#container-category__switchable');
    const categoryList = Array.from(document.getElementsByClassName("switcher-category"));

    slider?.addEventListener('mousemove', (e: Event) => {
        e.preventDefault();
        if(!mouseDown) return;
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider!.scrollLeft = scrollLeft - scroll;
    });
    slider?.addEventListener('mousedown', (e: Event) => {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider?.addEventListener('mouseup', () => {mouseDown = false});
    slider?.addEventListener('mouseleave', () => {mouseDown = false});
    slider?.addEventListener('wheel', (e: WheelEventInit) => {
        if (e.deltaY! > 0) {
            slider.scrollLeft += 100;
        } else {
            slider.scrollLeft -= 100;
        }
    });

    categoryList.forEach(c => {
        c.addEventListener("click", async (e: Event) => {
            const target = e.target as HTMLElement;
            manager.register("currentCategory", target.dataset.id!);
            CategorySwitcher(manager);
            let products = await fetchController.fetchList(1, 50, {category_id: target.dataset.id!});
            products = products.results;
            await ProductsRender(products);
        })
    });
};
