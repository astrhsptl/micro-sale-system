define(["require", "exports", "./utils/render"], function (require, exports, render_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var header = document.getElementById("header");
    var headerRawHTML = "\n<div class=\"container container-header\">\n<div class=\"container-logotype\">\n    <img src=\"/svg/logotype.svg\" class=\"logotype\" alt=\"\" srcset=\"\">\n</div>\n<div class=\"header-button__link\">\n    <a href=\"/\" class=\"header-link\">Home</a>\n    <a href=\"/products/\" class=\"header-link\">Products</a>\n</div>\n<div class=\"container-button__functional\">\n    <span class=\"language-switcher\">en</span>\n    <a href=\"/cart/\"><img src=\"/svg/cart_icon.svg\" alt=\"\" class=\"button-cart\"></a>\n    <a href=\"/order/\"><img src=\"/svg/orderlist_icon.svg\" alt=\"\" class=\"button-orderlist\"></a>\n    <a href=\"/login/ \" class=\"link-login__header\">Login</a>\n    <a href=\"/signin/\"><button class=\"button-signin__header\">Sign in</button></a>\n</div>\n</div>\n";
    (0, render_1.render)(headerRawHTML, header);
});
//# sourceMappingURL=index.js.map