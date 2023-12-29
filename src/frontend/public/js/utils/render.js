define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.render = void 0;
    function render(htmlCode, mountPoint) {
        mountPoint.innerHTML = htmlCode;
    }
    exports.render = render;
});
//# sourceMappingURL=render.js.map