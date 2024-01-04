import { StateManager } from "../../state/state";
import { render } from "../../utils/render";

interface CategoryTitle{
    id: string | number;
    title: string;
    current?: boolean
}

export const CategorySwitcher = async (manager: StateManager) => {
    let categoryArray = manager.getStatePosition("categories") as Array<CategoryTitle>;
    let content = "";

    categoryArray.forEach(category => {
        content += `<span class="switcher-category${
            category.current == true ?
            " switcher-category__current" :
        ""}">${category.title}</span>`
    });

    render("container-category__switchable", content);

    let mouseDown = false;
    let startX, scrollLeft;
    const slider = document.querySelector('#container-category__switchable');
    const categoryList = Array.from(document.getElementsByClassName("switcher-category"));

    slider?.addEventListener('mousemove', (e: Event) => {
        e.preventDefault();
        if(!mouseDown) { return; }
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
        if (e.deltaY > 0) {
            slider.scrollLeft += 100;
        } else {
            slider.scrollLeft -= 100;
        }
    });

    categoryList.forEach(c => {
        c.addEventListener("click", (e: Event) => {
            const target = e.target;
            console.log(e);
            
        })
    });
};
