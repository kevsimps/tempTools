import { h } from "@stencil/core";
export class wxccAltair {
    render() {
        return (h("div", { key: '2c61a09b55eacd0b6bb1038d1edacaf2d14841cc', id: "frame" }, h("iframe", { key: '75b282f3c84c55a971e66401d8fe39d8ec16df24', src: "https://altair-gql.sirmuel.design/", height: "100%", width: "100%", frameborder: "0", loading: "lazy" })));
    }
    static get is() { return "wxcc-altair"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["wxcc-altair.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["wxcc-altair.css"]
        };
    }
}
//# sourceMappingURL=wxcc-altair.js.map
