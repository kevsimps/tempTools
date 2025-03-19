import { r as registerInstance, h } from './index-f1a1248c.js';

const wxccAuthWidgetCss = ".frame{position:absolute;z-index:5;height:25vh;background:#ccc;left:20%;top:50%;padding:2em}h1{text-align:center}.hidden{display:none}";
const WxccAuthWidgetStyle0 = wxccAuthWidgetCss;

const wxccAuth = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.token = undefined;
        this.expStamp = undefined;
        this.hide = true;
        this.callbackUrl = undefined;
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
            h("div", { key: 'c98637edf2bb946730bbabca6668470f4dbbe742', class: "frame" + (this.hide ? " hidden" : "") }, h("h1", { key: 'c996f9dfba2122296ce6da43036ad63a2b4289b5' }, "Copy this text into your Global Environment Variable"), h("p", { key: '6896c243d64f9504ac53ce5ccff20eac27d0f199' }, tok), h("button", { key: 'de4bfa82b0a90ee6bd338a4118cbdf52d1df3d9d', onClick: () => { this.hide = !this.hide; } }, "close"))
        ];
    }
};
wxccAuth.style = WxccAuthWidgetStyle0;

export { wxccAuth as wxcc_auth_widget };

//# sourceMappingURL=wxcc-auth-widget.entry.js.map