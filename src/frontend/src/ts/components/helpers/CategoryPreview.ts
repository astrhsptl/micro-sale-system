import { CategoryInterface } from "../../interfaces/CategoryInterfaces";
import { render } from "../../utils/render";

export const CategoryPreview = async (categories: Array<CategoryInterface>) => {
    let content = "";

    categories.forEach(category => {
        content += `
        <div id="category-top__preview">${category.title}</div>
        `
    })

    render("container-category__preview", content);
};