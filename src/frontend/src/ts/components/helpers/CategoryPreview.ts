import { CategoryInterface } from "../../interfaces/CategoryInterfaces";
import { render } from "../../utils/render";
import { ArrowLink } from "./ArrowLink";

export const CategoryPreview = async (categories: Array<CategoryInterface>) => {
    let content = "";

    categories.forEach(category => {
        content += `
        <div
            class="category-top__preview"
            style="background-image: url(${category.background});"
        >
            <p
                class="category-description__preview"
            >
                ${category.description}
            </p>
            ${ArrowLink(`category/?category=${category.id}`, category.title)}
        </div>
        `
    })

    render("container-category__preview", content);
};