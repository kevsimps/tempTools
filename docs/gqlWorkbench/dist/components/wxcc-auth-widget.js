import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const wxccAuthWidgetCss = ".frame{position:absolute;z-index:5;height:25vh;background:#ccc;left:20%;top:50%;padding:2em;border-radius:30px}h1{text-align:center}.hidden{display:none}button{cursor:pointer;border-radius:30px;padding:14px 28px;margin:15px;width:20%;font-size:medium}";

const wxccAuth = /*@__PURE__*/ proxyCustomElement(class wxccAuth extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.hide = true;
    }
    async burp(x) {
        console.log(x);
        const code = x.slice(x.search("=") + 1, x.search("&"));
        // console.log(code)
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "authorization_code");
        urlencoded.append("redirect_uri", this.callbackUrl);
        urlencoded.append("client_id", "C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f");
        urlencoded.append("client_secret", "49aad1cd3ed0758755c69d818baf897923876854423dbc01d608fc8255d14044");
        urlencoded.append("code", code);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };
        // console.log(urlencoded.toString())
        let response = await fetch("https://webexapis.com/v1/access_token", requestOptions);
        let deets = await response.json();
        // console.log(deets)
        this.token = "Bearer " + deets.access_token;
        this.expStamp = new Date(Date.now() + (deets.expires_in * 1000));
        sessionStorage.setItem("token", this.token);
        sessionStorage.setItem("expStamp", this.expStamp);
        // console.log(this.token)
        // console.log(this.expStamp)
        this.hide = false;
    }
    onGetAuth() {
        if (+new Date(sessionStorage.getItem("expStamp")) > Date.now()) {
            this.token = sessionStorage.getItem("token");
            this.hide = false;
        }
        else {
            window.open(`https://webexapis.com/v1/authorize?response_type=code&client_id=C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f&state=new&scope=cjp%3Aconfig%20cjp%3Aconfig_read%20cjp%3Aconfig_write&redirect_uri=${this.callbackUrl}`, "steve", "popup");
        }
    }
    render() {
        let tok = `{
            "headers":{
            "Authorization":"${this.token}"
            }
        }`;
        return [
            h("div", { key: 'c98637edf2bb946730bbabca6668470f4dbbe742', class: "frame" + (this.hide ? " hidden" : "") }, h("h1", { key: 'c996f9dfba2122296ce6da43036ad63a2b4289b5' }, "Copy this text into your Global Environment Variable"), h("p", { key: '6896c243d64f9504ac53ce5ccff20eac27d0f199' }, tok), h("br", { key: 'b7ff33ad43616466635f716e022f559161aeedf2' }), h("center", { key: 'e3aea53a834ed0aff4bb5f90fc1e94bbb8197e53' }, h("button", { key: '3a2e603ae419d498ebb719b133577fd382a40db3', onClick: () => { navigator.clipboard.writeText(tok); } }, "Copy"), h("button", { key: 'f9c9b04a7cb55d2970fe5b3e24d823982aadce0f', onClick: () => { this.hide = !this.hide; } }, "Close")))
        ];
    }
    static get style() { return wxccAuthWidgetCss; }
}, [1, "wxcc-auth-widget", {
        "callbackUrl": [1, "callback-url"],
        "token": [32],
        "expStamp": [32],
        "hide": [32],
        "burp": [64]
    }, [[16, "wxccAuthPop", "onGetAuth"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wxcc-auth-widget"];
    components.forEach(tagName => { switch (tagName) {
        case "wxcc-auth-widget":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, wxccAuth);
            }
            break;
    } });
}

const WxccAuthWidget = wxccAuth;
const defineCustomElement = defineCustomElement$1;

export { WxccAuthWidget, defineCustomElement };
//# sourceMappingURL=wxcc-auth-widget.js.map

//# sourceMappingURL=wxcc-auth-widget.js.map