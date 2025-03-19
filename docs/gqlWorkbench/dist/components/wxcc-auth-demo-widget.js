import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const wxccAuthDemoWidgetCss = ".frame{position:absolute;z-index:5;height:25vh;background:#ccc;left:20%;top:50%;padding:2em;width:60%}h1{text-align:center}.hidden{display:none}";

const wxccAuth = /*@__PURE__*/ proxyCustomElement(class wxccAuth extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.hide = true;
        this.showResponse = false;
    }
    async burp(x) {
        console.log(x);
        const code = x.slice(x.search("=") + 1, x.search("&"));
        // console.log(code)
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // let urlencoded = new URLSearchParams();
        // urlencoded.append("grant_type", "authorization_code")
        // urlencoded.append("redirect_uri", this.callbackUrl)
        // urlencoded.append("client_id", "C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f")
        // urlencoded.append("client_secret", "49aad1cd3ed0758755c69d818baf897923876854423dbc01d608fc8255d14044")
        // urlencoded.append("code", code)
        let urlencoded = { "grant_type": "authorization_code", "redirect_uri": this.callbackUrl, "client_id": "C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f", "client_secret": "49aad1cd3ed0758755c69d818baf897923876854423dbc01d608fc8255d14044", "code": code };
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(urlencoded)
        };
        // console.log(urlencoded.toString())
        this.request = urlencoded; //.toString() //.replace(/["&"]/g,"\r\n")
        let response = await fetch("https://webexapis.com/v1/access_token", requestOptions);
        this.deets = await response.json();
        // console.log(await this.deets)
        this.token = "Bearer " + this.deets.access_token;
        this.expStamp = new Date(Date.now() + (this.deets.expires_in * 1000));
        // sessionStorage.setItem("token", this.token)
        // sessionStorage.setItem("expStamp", this.expStamp)
        // console.log(this.token)
        // console.log(this.expStamp)
        this.hide = false;
        this.showResponse = false;
    }
    onGetAuth() {
        if (+new Date(sessionStorage.getItem("expStamp")) > Date.now()) {
            this.token = sessionStorage.getItem("token");
            this.hide = false;
            this.showResponse = false;
        }
        else {
            window.open(`https://webexapis.com/v1/authorize?response_type=code&client_id=C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f&state=new&scope=cjp%3Aconfig%20cjp%3Aconfig_read%20cjp%3Aconfig_write&redirect_uri=${this.callbackUrl}`, "steve", "popup");
        }
    }
    render() {
        let tok;
        if (this.request) {
            tok = h("p", { key: '76cfff11222876b763227b5cf8ae6036148954c0' }, h("h1", { key: '6fb95434270d6a2fe0093af8ab5f9193a184fef2' }, "The code is sent with this information from the app "), "grant_type: ", this.request.grant_type, h("br", { key: '74bfb40589468a84122e33bad349e118af032ce7' }), "redirect_uri: ", this.request.redirect_uri, h("br", { key: 'f29b4667a6b7c0a26c24bafb8c461ecf0a2946bc' }), "client_id: ", this.request.client_id, h("br", { key: 'a1a7691b92bf1348769e29efb1f492fc2f25d414' }), "client_secret: ", this.request.client_secret, h("br", { key: 'c9732e2a0b149fb74d3989354d7731cb61b21595' }), h("strong", { key: '80e2bc17d5919db1eb261e50350fd3e376ae6d61' }, "code:", this.request.code), h("br", { key: '386edaf72a6d4fec7a6d5da6173374b1bd690d13' }));
            if (this.showResponse) {
                tok = h("p", { key: '5bb0e2432bde6822b821ad442a654b8ce8d4bf81' }, h("h1", { key: 'aca73ca9dbf95f11e49be060531e1d5a79c85142' }, "This is the response with the token information "), "access_token: ", this.deets.access_token, h("br", { key: '80a67649cacc1c5c12554e73d4309ed623be2c03' }), "expires_in: ", this.deets.expires_in, h("br", { key: '0be235acf34bf1de24d5f3949ee09cee5e05b9e7' }), "refresh_token: ", this.deets.refresh_token, h("br", { key: 'f8c8cafdba4944aa50e3b3193eae5c7aabf76924' }), "refresh_token_expires_in: ", this.deets.refresh_token_expires_in, h("br", { key: 'd4dccec318508e4b02611af4ce60bbf4a3f5423b' }), "token_type: ", this.deets.token_type, h("br", { key: '34f77777f333b27ec60eeb05256b77e19fb8a951' }), "scope: ", this.deets.scope);
            }
        }
        // deets: ${JSON.stringify(this.deets)}
        // {
        //     "headers":{
        //     "Authorization":"${this.token}"
        //     }
        // }`
        return [
            h("div", { key: '7d0d0b7a97804b99564a5939a6d64fb9ad48b397', class: "frame" + (this.hide ? " hidden" : "") }, h("p", { key: 'cbf5252bffb015e4a6b0704f48b9120dc8700fda' }, tok), h("button", { key: '7254d54eaf39767d2df54c273a3efd44c7a467bf', onClick: () => { this.showResponse = !this.showResponse; } }, this.showResponse ? "Show Request" : "Show Response"), h("button", { key: '52b2c2aec29e4b488dfc11bff736a6b82ae33556', onClick: () => { this.hide = !this.hide; } }, "close"))
        ];
    }
    static get style() { return wxccAuthDemoWidgetCss; }
}, [1, "wxcc-auth-demo-widget", {
        "callbackUrl": [1, "callback-url"],
        "token": [32],
        "expStamp": [32],
        "hide": [32],
        "deets": [32],
        "request": [32],
        "showResponse": [32],
        "burp": [64]
    }, [[16, "wxccAuthPop", "onGetAuth"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wxcc-auth-demo-widget"];
    components.forEach(tagName => { switch (tagName) {
        case "wxcc-auth-demo-widget":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, wxccAuth);
            }
            break;
    } });
}

const WxccAuthDemoWidget = wxccAuth;
const defineCustomElement = defineCustomElement$1;

export { WxccAuthDemoWidget, defineCustomElement };
//# sourceMappingURL=wxcc-auth-demo-widget.js.map

//# sourceMappingURL=wxcc-auth-demo-widget.js.map