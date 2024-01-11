import { AvailableDictionaryType, manager } from "..";
import FetchController from "../api/FetchController";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";
import { ProductCharacteristicRender } from "../components/helpers/ProcutsCharacterusticRender";
import { ProductsRender } from "../components/helpers/ProductsRender";
import { PhotoInterface } from "../interfaces/PhotoInterface";
import { ProductCharacteristicsInterface, ProductCharacteristicsPluralInterface } from "../interfaces/ProductCharacteristicsInterface";
import { ProductInterface, ProductPluralInterface } from "../interfaces/ProductInterfaces";
import Alert from "../utils/alert";
import { render } from "../utils/render";

const language = manager.getStatePosition("language");
const dictionary: AvailableDictionaryType = manager.getStatePosition("dictionary");


const Product = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId: string | null = urlParams.get('id');
    const user = manager.getStatePosition("user");

    if (productId == null || productId == undefined) {
        window.location.replace("/products/")
    }

    const productFetchController = new FetchController("product/");
    const characteristicFetchController = new FetchController("characteristic/");
    const productQuantityFetchController = new FetchController("product/quantity/");
    const cartFetchController = new FetchController("cart/");
    
    const currentProduct: ProductInterface = await productFetchController
        .fetchOne(productId!)
        .catch(() => {
            window.location.replace("/products/")
    });

    const similarProducts: ProductPluralInterface = await productFetchController
        .fetchList(1, 3, {category_id: currentProduct.category_id!})
        .catch(() => {
            window.location.replace("/products/")
    })

    let characteristicList: Array<ProductCharacteristicsInterface> = (await
        characteristicFetchController
        .fetchList(1, 10, {product_id: productId}) as ProductCharacteristicsPluralInterface
    ).results;
    
    const getSubImages = async (product: ProductInterface) => {
        const photosFetchController = new FetchController("photo/");
        let subImages = "";

        for (let i = 0; i < product.photos.length; i++) {
            let currentPhoto: PhotoInterface = await photosFetchController.fetchOne(product.photos[i]); 
            subImages = `<img src="${currentPhoto.image}" alt="" class="image-product__sub"/>`
        };
        return subImages;
    };

    render("main-homepage", `
    <div id="container-photo-product">
        <div class="sub-image-container">
            ${await getSubImages(currentProduct)}
        </div>
        <div class="top-image-container__preview">
            <img src="${currentProduct.preview}" alt="" id="image-product__preview">
        </div>
    </div>
    <div id="container-text-product">
        <p class="title-product">${currentProduct.name}</p>
        <p class="description-product">${currentProduct.description ? currentProduct.description : "-"}</p>
        <p class="price-product">${dictionary.priceTitle} ${currentProduct.cost}$</p>
        <button id="add-to-cart">${dictionary.addToCart}</button>
    </div>
    <div id="container-similar-product">
        <p class="similar-product">${dictionary.similar}</p>
        <div id="container-product">
            ${await ProductsRender(similarProducts.results, true)}
        </div>
    </div>
    <div id="container-characteristic-product">
        <h2 class="characteristic-title">${dictionary.characteristicTitle}</h2>
        ${await ProductCharacteristicRender(characteristicList)}
    </div>
    `);

    const addButton = document.getElementById("add-to-cart");

    addButton?.addEventListener("click", async () => {
        
        let cartCheck = await cartFetchController.fetchList(1,1,{user_id: user.id})
        .catch(() => {
            localStorage.removeItem("user");
            window.location.replace("/login/")
        })

        if (cartCheck.results.length == 0) {
            await cartFetchController.create({
                user_id: user.id
            }).then((r) => {
                manager.register("cart", r)
            }).catch(() => {
                localStorage.removeItem("user");
                window.location.replace("/login/")
            });
        } else {
            manager.register("cart", cartCheck.results[0])
        }

        const cart = manager.getStatePosition("cart");

        await productQuantityFetchController.create({
            quantity: 1,
            product_id: currentProduct.id,
            cart_id: cart.id
        });
        Alert(dictionary.itemInCart)
        window.location.replace("/cart/")
    })
};

await Product();
HeaderWithSubHeader(language, dictionary);
await Footer(dictionary);