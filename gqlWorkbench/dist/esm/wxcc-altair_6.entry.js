import { r as registerInstance, h, c as createEvent } from './index-Dq4ocYaD.js';

const wxccAltairCss = "#frame{height:92vh;bottom:0}";

const wxccAltair = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '2c61a09b55eacd0b6bb1038d1edacaf2d14841cc', id: "frame" }, h("iframe", { key: '75b282f3c84c55a971e66401d8fe39d8ec16df24', src: "https://altair-gql.sirmuel.design/", height: "100%", width: "100%", frameborder: "0", loading: "lazy" })));
    }
};
wxccAltair.style = wxccAltairCss;

const wxccAuthWidgetCss = ".frame{position:absolute;z-index:5;height:25vh;background:#ccc;left:20%;top:50%;padding:2em;border-radius:30px}h1{text-align:center}.hidden{display:none}button{cursor:pointer;border-radius:30px;padding:14px 28px;margin:15px;width:20%;font-size:medium}";

const wxccAuth = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
wxccAuth.style = wxccAuthWidgetCss;

const wxccGuidePanelCss = "aside{position:fixed;bottom:0;right:-100%;width:40rem;max-width:34%;height:92vh;background:#d6c5c5;box-shadow:0 2px 8px rgba(0, 0, 0, 0.27);transition:right 1.3s ease-out;z-index:2;overflow:scroll}:host([flip]) aside{position:fixed;bottom:0;left:-100%;width:40rem;max-width:34%;height:92vh;background:#d6c5c5;box-shadow:0 2px 8px rgba(0, 0, 0, 0.27);transition:left 1.3s ease-out;z-index:2;overflow:scroll}:host([opened]) aside{right:0}:host([opened][flip]) aside{left:0;}main slot{margin:1rem}.flipper{float:right}.post-header{display:none;}header{display:block;padding:1rem;background:#2196F3;position:fixed;top:8%;width:31.75%}h1.post-title{font-size:1.5rem;color:white;margin:0}.md-content,.post-content{margin:1em}h1{font-size:1.5rem;margin:0}header button{position:absolute;top:0;right:0;padding:1rem;color:white;background:transparent;font-size:1.5rem;border:none}header button:focus{outline:none}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;padding-top:4rem}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid  #2196F3;font:inherit;padding:0.15rem 0}#tabs :nth-child(1){border-top-left-radius:20px;border-bottom-left-radius:20px}#tabs :nth-last-child(1){border-top-right-radius:20px;border-bottom-right-radius:20px}#tabs button.active,#tabs button:hover,#tabs button:active{background:#2196F3;color:white;border:1px solid #2196F3}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.md-toggle,.md-header__inner,.md-skip,.md-header--shadow,.md-footer,.md-overlay,.site-header,.site-footer,.book-header,.book-summary,.search-results{display:none}ul.nav{margin:1em;padding:0;list-style:none}li.nav{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li.nav:hover,li.nav:active{background:#2196F3;color:white}svg{fill:#c0c0c0;height:20px;width:80px}svg:hover{fill:#f0efef;}.btn{border-radius:30px;padding:5px 10px;border:1px #2196F3}.btn:hover{background:#2196F3;color:white}table td,table th{border:1px solid #404040}table{border-collapse:collapse}";

const SideDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showNav = false;
        this.lessons = [];
        this.lastScroll = 0;
    }
    async componentWillLoad() {
        const response = await fetch(this.lList);
        // sessionStorage.setItem("lessons", await response.text())
        const lessons = await response.json();
        this.lessons = await lessons.map(match => {
            return { title: match["title"], url: match["address"] };
        });
    }
    // onCloseDrawer(){
    //     this.opened=false;
    // }
    onContentChange(content) {
        this.showNav = content === "nav";
        // console.log(content)
    }
    // @Method()
    // async open(){
    //   this.opened=true 
    // }
    onToggle(event) {
        console.log(event.detail);
        this.opened = !this.opened;
    }
    onNext(event) {
        //  console.log(event.detail)
        let url;
        const iHere = this.lessons.findIndex(x => x.title === this.currentPage);
        if (!iHere) {
            this.currentPage = this.lessons[0].title;
        }
        //  console.log(this.currentPage)
        //  console.log(iHere)
        // this.currentPage = this.lessons[iHere + 1].title
        if (event.detail === "next") {
            url = this.lessons[iHere + 1].url;
            this.currentPage = this.lessons[iHere + 1].title;
            this.lastScroll = document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop;
            document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop = 0;
        }
        else {
            url = this.lessons[iHere - 1].url;
            this.currentPage = this.lessons[iHere - 1].title;
            document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop = this.lastScroll;
        }
        this.getHTML(url)
            .then(html => {
            if (html !== null) {
                this.content = html;
                this.content = h("div", { innerHTML: this.content });
                // console.log(html);
            }
        });
        this.showNav = false;
    }
    onChoice(url) {
        this.getHTML(url)
            .then(html => {
            if (html !== null) {
                this.content = html;
                this.content = h("div", { innerHTML: this.content });
                this.currentPage = this.lessons[this.lessons.findIndex(x => x.url === url)].title;
                this.showNav = false;
            }
        });
    }
    async getHTML(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const html = await response.text();
            return html;
        }
        catch (error) {
            console.error("Error during fetch:", error);
            return null;
        }
    }
    componentDidUpdate() {
        Array.from(document.querySelector("wxcc-guide-panel").shadowRoot.querySelectorAll("textarea")).forEach((element) => { element.value = element.value.replaceAll("\\", ""); });
        // document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop=0 
        // Remove style css from jekyll site
        document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("link[rel=stylesheet]").remove();
    }
    render() {
        const fIcon = h("svg", { key: 'a3e5e7de31cfbbdce5e21311ce829fab8bff6c41', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: 'e8c135d8bc853d2e7b393df2e8de546863ac8dfc', d: "M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z" }));
        let mainContent = this.content || h("slot", { key: 'a814fa10d7d2e083fd36f1cf4e39edf8e19a5fee' });
        if (this.showNav) {
            mainContent = h("ul", { key: 'fb78cfd1c56f2995fd3b381ce43133ea424060cf', class: "nav" }, this.lessons.map(lesson => (h("li", { class: "nav", onClick: this.onChoice.bind(this, lesson.url) }, h("strong", null, lesson.title)))));
        }
        return [
            // <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}/>,
            h("aside", { key: '746329257cf2c307abab6d28909acb03d6a680a7' }, h("header", { key: '39dcd752c479fa4565e5c31109c15a4663cf1464' }, h("h1", { key: '5f962cec0a4daefcb4e9834a2cd451dd77e034c2', class: "post-title" }, this.currentPage || this.arttitle, " ", h("span", { key: 'db47231f5dc8c004415b751601e1adeb38c39a0b', class: "flipper", onClick: () => this.flip = !this.flip }, fIcon))), h("section", { key: '9284ebc4ff8a5205fea5bcaa37c8348551f0950c', id: "tabs" }, h("button", { key: '47920a9f19c9054eb2ab4bda880c09992de28510', class: !this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "lesson") }, "Lesson"), h("button", { key: 'f975201f1be38c972b5a36a9eb93363b69834d30', class: this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation")), h("main", { key: '4935fcf7072e30ece77f161886b19c77b49398bc' }, mainContent))
        ];
    }
};
SideDrawer.style = wxccGuidePanelCss;

const wxccPageControlsCss = ".controls {\r\n    width: 100%;\r\n    background-color: #555;\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 36px;\r\n    margin: auto;\r\n    height: 8vh;\r\n    overflow: hidden;\r\n    /* position: relative; */\r\n    /* display: grid; */\r\n    /* display:flex; */\r\n\r\n    /* justify-content: center; */\r\n    /* align-items: center; */\r\n    font-family:Arial, Helvetica, sans-serif;\r\n\r\n}\r\n\r\nbutton {\r\n    padding: 14px 28px;\r\n    margin: 15px;\r\n    width: 20%\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    padding: 5px 28px;\r\n    margin: 1.5vh;\r\n    width: 15%;\r\n    background: #998f8f;\r\n    cursor: pointer;\r\n    border-radius: 30px\r\n        /* height: 4vh; */\r\n\r\n}\r\n\r\nspan:hover {\r\n    /* background: #0c0a0a; */\r\n    background: #2196F3;\r\n    ;\r\n\r\n}\r\n\r\n.tools {\r\n    margin-top: -2vh;\r\n    /* padding: 5px 28px; */\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 18%;\r\n    background: #998f8f;\r\n    /* left: 21.65%; */\r\n    left: 31.33%;\r\n    display: none;\r\n    overflow: hidden;\r\n    /* transition: display ease-out 5s; */\r\n    font-size: 32px;\r\n\r\n}\r\n@media(width <= 1440px){\r\n    .tools{\r\n        left: 30.33%;\r\n        width: 19%;\r\n\r\n    }\r\n}\r\n\r\n.nav {\r\n    width: 5%\r\n}\r\n\r\n#tools:hover {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n.mag:hover~.tools {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n\r\n\r\n.controls:has(.tools:hover) #tools {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n\r\n.tools:hover {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n    transition: block ease-in-out 2s;\r\n}";

const PageControls = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.wxccGuidePageTurn = createEvent(this, "wxccGuidePageTurn");
        this.toggleGuide = createEvent(this, "toggleGuide");
        this.wxccTimeWidget = createEvent(this, "wxccTimeWidget");
        this.wxccAuthPop = createEvent(this, "wxccAuthPop");
        this.vidPop = createEvent(this, "vidPop");
        this.vodTog = createEvent(this, "vodTog");
    }
    onToggleGuide() {
        this.toggleGuide.emit();
    }
    onNext() {
        // let iHere = this.lessons.findIndex(x => x.title === this.currentPage)
        // if (!iHere){
        //     this.currentPage = this.lessons[0].title
        // }
        // console.log(this.currentPage)
        // console.log(iHere)
        // this.currentPage = this.lessons[iHere + 1].title
        // const url = this.lessons[iHere + 1].address
        // this.wxccGuidePageTurn.emit(url)
        this.wxccGuidePageTurn.emit("next");
    }
    onBack() {
        // let iHere = this.lessons.findIndex(x => x.title === this.currentPage)
        // if (!iHere){
        //     this.currentPage = this.lessons[0].title
        // }
        // console.log(this.currentPage)
        // console.log(iHere)
        // this.currentPage = this.lessons[iHere - 1].title
        // const url = this.lessons[iHere - 1].address
        // this.wxccGuidePageTurn.emit(url)
        this.wxccGuidePageTurn.emit("back");
    }
    onTimeWidget() {
        this.wxccTimeWidget.emit();
    }
    render() {
        // console.log(this.lessons[0])
        return (h("div", { key: 'a52a526e8fae61b5ed8c6a4b72372c5d7954e181', class: "controls" }, h("span", { key: '8a28315a2ecc7b1dd3e6db37d9b46c2be40dc623', id: "back", onClick: this.onBack.bind(this), class: "nav btn" }, "Back"), h("span", { key: '0f2078fa9f323861b94b2e60093596f37cd2f229', id: "tools", class: "mag btn" }, "Tools"), h("div", { key: '9c7f1a6a7485dd614ac2e6efdf057a35d1fe9d20', class: "tools" }, h("span", { key: 'fcad6d4ff10f0b2ed8738b880f0f38f1315aec42', onClick: this.onTimeWidget.bind(this) }, "Time Widget"), h("span", { key: '398621b652e100952f2f87d8a6a82f4c3bb7e142', onClick: () => { this.vodTog.emit(); } }, "Toggle Video"), h("span", { key: '0aee41395f6377ca543d24d759dece64e85a0f5b', onClick: () => { this.wxccAuthPop.emit(); } }, "Authorization")), h("span", { key: 'd3b29c00a94d02fad4001cd8706719078be138cb', class: "btn", id: "guide", onClick: this.onToggleGuide.bind(this) }, "Guide"), h("span", { key: '359993fbf6a958c577f8e3ce6c08e065a50ab8ba', id: "next", onClick: this.onNext.bind(this), class: "nav btn" }, "Next")));
    }
};
PageControls.style = wxccPageControlsCss;

const wxccTimeCss = ".frame{position:absolute;z-index:5;height:250px;background:#ccc;left:40%;}label{color:black}header{background:#2196F3;color:white;text-align:center;padding:10px;margin-top:0}.widgets{padding:10px;margin-top:20px}.title{font-size:1.5rem}.widgets select,.widgets input{float:right}svg{fill:#c0c0c0}svg:hover{fill:#f0efef}.hideMe{float:left;margin-top:.25rem;cursor:pointer}.hidden{display:none}p{margin:1rem}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid  #2196F3;font:inherit;padding:0.15rem 0}#tabs :nth-child(1){border-top-left-radius:20px;border-bottom-left-radius:20px}#tabs :nth-last-child(1){border-top-right-radius:20px;border-bottom-right-radius:20px}#tabs button.active,#tabs button:hover,#tabs button:active{background:#2196F3;color:white;border:1px solid  #2196F3}#tabs button:focus{outline:none}#lup{float:left;padding:1rem}#lup button{float:right;background:white;color:black;border-radius:20px;text-align:center;border:1px solid black;font:inherit;padding:.1rem 1rem;margin-left:.25rem}#lup button:hover{background:#2196F3;color:white}#tmstp{background-color:#e9e7e7}";

const wxccTime = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.td = new Date();
        this.fd = new Date();
        this.hide = true;
        this.tab = "create";
    }
    onToSelect(zzz) {
        console.log(zzz);
        if (zzz === "from") {
            if (!this.fromSelected.value) {
                console.log(this.fDate.value + "T" + this.fTime.value);
                this.fd = new Date(this.fDate.value + "T" + this.fTime.value);
            }
            else if (this.fromSelected.value === "now") {
                this.fd = new Date(Date.now());
            }
            else {
                this.fd = new Date(Date.now() - +this.fromSelected.value);
            }
            // this.fDate.value = this.fd.toISOString().slice(0, 10)
            let month = ("0" + (this.fd.getMonth() + 1)).slice(-2, 3);
            let date = ("0" + (this.fd.getDate())).slice(-2, 3);
            // console.log(month)
            this.fDate.value = (this.fd.getFullYear() + "-" + month + "-" + date);
            this.fTime.value = this.fd.toTimeString().slice(0, 8);
            this.from = this.fd.valueOf();
        }
        else {
            if (!this.toSelected.value) {
                this.td = new Date(this.tDate.value + "T" + this.tTime.value);
            }
            else if (this.toSelected.value === "now") {
                this.td = new Date(Date.now());
            }
            else {
                this.td = new Date(Date.now() - +this.toSelected.value);
            }
            // this.tDate.value = this.td.toISOString().slice(0, 10)
            let month = ("0" + (this.td.getMonth() + 1)).slice(-2, 3);
            let date = ("0" + (this.td.getDate())).slice(-2, 3);
            // console.log(month)
            this.tDate.value = (this.td.getFullYear() + "-" + month + "-" + date);
            this.tTime.value = this.td.toTimeString().slice(0, 8);
            this.to = this.td.valueOf();
            // console.log(this.td.getDate())
        }
    }
    onManSet(zzz) {
        if (zzz === "from") {
            this.fromSelected.value = null;
        }
        else {
            this.toSelected.value = null;
        }
        this.onToSelect(zzz);
    }
    onToggle() {
        this.hide = !this.hide;
        this.tStamp = null;
    }
    epochToTime() {
        this.tStamp = new Date(+this.lupStamp.value).toString();
    }
    render() {
        const hideIcon = h("svg", { key: '21ea0bf0c551408edc82bf538d5fc795ef116097', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 640 512" }, h("path", { key: '83bc6272737df9c2636b8b81a97c1cbd7c636bbe', d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" }));
        let mainContent = h("div", { key: '7ece4eae9337db51dbdcf0aea5aa01e12675189d' }, " ", h("section", { key: '9291e6409d34f858884b355b0866c3adebd94b7a', class: "widgets" }, h("div", { key: '408c996ded550bebd258b1d00b5bf62f440d71dc' }, h("label", { key: '497bd9d4b848aecde1223e4c4edfc6f74ee1a151', id: "from" }, "From: "), h("input", { key: '090b81e9e01eb9132c8bee4fb317946176a4e0f2', type: "date", onChange: this.onManSet.bind(this, "from"), ref: el => this.fDate = el }), h("input", { key: '5fbe72415ed8562abb9948eef3e0e267259b4147', type: "time", onChange: this.onManSet.bind(this, "from"), ref: el => this.fTime = el }), h("select", { key: 'b00a37261e84d5bbc5cf072c5abe08f738e876bb', ref: el => this.fromSelected = el, onChange: this.onToSelect.bind(this, "from") }, h("option", { key: '09c2e93c6d0efa5bb1b3adecf47d148a93d02b05' }), h("option", { key: '8c8a0c5980b5953f27d6b834422bbe5ca101a3d5', value: "600000" }, "10 minutes ago"), h("option", { key: '0043708c34cf06e87be76612c82d0bf43c615cbb', value: "3600000" }, "1 hour ago"), h("option", { key: 'c6bbe47f0663d0814fc71ed480b73aa944558ed4', value: "86400000" }, "1 day ago"), h("option", { key: '8bb7e3ff79cd9542d8ee94c8cefe93236d456b89', value: "604800000" }, "1 week ago"), h("option", { key: '87ea86b9016f55f578f8c33b8671bdba3bc097cc', value: "2629800000" }, "1 month ago"))), h("br", { key: '9150d42d947a393a3fe07d343f31772c6dfb6a58' }), h("div", { key: '60ac07063ce5aaf9b7d76dbf8ef41d2f49ed124a' }, h("label", { key: 'f9748d77a0d2b42608af3423ece33de4ab81ad0e', id: "to" }, "To: "), h("input", { key: '4b5c07ad7ba3d14ec76c7521c37dd0680123b01e', type: "date", onChange: this.onManSet.bind(this, "to"), ref: el => this.tDate = el }), h("input", { key: '77ff53f551b44bbaa773c3adc699a52a38d2cd85', type: "time", onChange: this.onManSet.bind(this, "to"), ref: el => this.tTime = el }), h("select", { key: '135d7c29816a3cb180e5bedf213d2fe771e99708', ref: el => this.toSelected = el, onChange: this.onToSelect.bind(this, "to") }, h("option", { key: '15393a25678db166c62a970f92073250d364454f' }), h("option", { key: '66033dfda08526fa854212fa6603ee0cd7f1fd77', value: "now" }, "Now"), h("option", { key: 'ced2b277b00446edaa663bd9dde62add73c06992', value: "600000" }, "10 minutes ago"), h("option", { key: '144a49f19d1b5117bfd5e5be8529cc71eefb1052', value: "3600000" }, "1 hour ago"), h("option", { key: '25ad7bc2a3299f9b8a06f8dbf1f01fb25db8bec5', value: "86400000" }, "1 day ago"), h("option", { key: '4b7cab26b0dea5529b7dd796d1f1d600bad9afac', value: "604800000" }, "1 week ago")))), h("section", { key: 'e63a20d3dd2e994b050e132e75c44105f474e995' }, h("p", { key: '775a3418a74a0dd3e5a311c865490f1d9af03d95' }, "from: \"", this.from, "\"", h("br", { key: '8ff02116532ef03e93f800a82095e8dbae02657e' }), "to: \"", this.to, "\"")));
        if (this.tab == "lookup") {
            mainContent = h("div", { key: 'f197f24efb562c44b0a5ab5bd10a8be477300e14' }, h("section", { key: 'f6c5fecce1f73e6508fa6148ccdc666952190181', id: "lup" }, h("label", { key: '9acfceefa174542babe5a499723343cb1cbc43d5' }, "Epoch Timestamp: \u00A0"), h("input", { key: '7137a7bdf45e94b762b9ac035de534b61dae3dcf', ref: el => this.lupStamp = el }), h("button", { key: 'dcb8c0857e75c80629012a498851353fbadb1525', onClick: this.epochToTime.bind(this) }, "Convert")), h("section", { key: '50fcd2862375a6a19969d66229cbef369e9aa1e1' }, h("p", { key: '3d805b3384eb1d9b2c37e677509f683f90f595af' }, "Timestamp: ", h("br", { key: '1a859edba162dd64d8c102f087b02692b4b6a820' }), h("br", { key: '5e5084a808d8fd966cecce56499473db9936a3a9' }), h("div", { key: 'a300311fef70ac7356f8f3e934606fd27572e425', id: "tmstp" }, this.tStamp))));
        }
        return [
            h("div", { key: '2c6f1e737640e007b7f3cc1494728e62100c80d6', class: "frame" + (this.hide ? " hidden" : "") }, h("header", { key: 'df4edf16940735fb336797d646dc7e9e577eea94' }, h("span", { key: '6c7af841531d4aaaf87bc8cbcbb9f55707e81f5f', class: "hideMe", onClick: this.onToggle.bind(this) }, hideIcon), h("div", { key: 'd5da9f63c5bfa123a4f67f13b63b4c8f180821f9', class: "title" }, "Time Widget")), h("section", { key: '02878d909da643fd34e97f3a7ca00d753f036aa4', id: "tabs" }, h("button", { key: 'c551e0fb7558ae375c27607ea9064ccdb36739dd', class: this.tab != "lookup" ? "active" : "", onClick: () => this.tab = "create" }, "Create"), h("button", { key: 'c621bbd23a1a04c2f13b7b9a9cfa00b8aefada05', class: this.tab == "lookup" ? "active" : "", onClick: () => this.tab = "lookup" }, "Lookup")), mainContent)
        ];
    }
};
wxccTime.style = wxccTimeCss;

const wxccVideoModalCss = "#cover{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:9;display:none;opacity:0;transition:opacity 0.5s ease-out}#cover.covered{display:block}#my-div{position:absolute;z-index:200;background-color:#f1f1f1;text-align:center;border:1px solid #d3d3d3;top:25%;left:25%}#my-div-header{padding:10px;z-index:10;background-color:#2196F3;color:#fff;height:20px}.sizeBar{float:right;cursor:pointer}.bigBoi{width:50%;height:50%}.hidden{display:none}.hideMe{float:right;cursor:pointer}#move{float:left;cursor:grab}svg{fill:#c0c0c0}svg:hover{fill:#f0efef;}";

const wxccVideoModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vidBig = true;
        this.btnLable = "Bigger";
        this.backDrop = false;
        this.hide = false;
    }
    onToggleSize() {
        this.vidBig = !this.vidBig;
        // this.btnLable =  this.vidBig ? "Smaller": "Bigger"
    }
    onToggleHide() {
        this.hide = !this.hide;
    }
    // backDrop(event: Event){
    // this.boxxie.classList.add()
    // }
    onVidPop(event) {
        console.log(event);
        if (event.detail) {
            console.log(event);
            this.vidId = event.detail;
        }
        this.hide = false;
    }
    moveIt(event) {
        event.preventDefault();
        // console.log(event)
        // console.log(this.boxxie.offsetTop)
        // console.log(this.boxxie.offsetLeft)
        this.boxxie.style.top = Math.abs(event["clientY"]) + "px";
        this.boxxie.style.left = Math.abs(event["clientX"]) + "px";
        this.backDrop = false;
    }
    render() {
        let url = `https://app.vidcast.io/share/embed/${this.vidId}`;
        this.btnLable = this.vidBig ? h("div", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { d: "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z" })), "\u2003") : h("div", null, " ", h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { d: "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" })), "\u2003");
        return [
            h("div", { key: 'a6ca71a35115a4dd0237ad51690294010b6a55e8', id: "cover", class: this.backDrop ? "covered" : "" }),
            h("div", { key: '7dac84ccb82c32a1aa1d52d31424abf1c5704df2', draggable: true, id: "my-div", ref: el => this.boxxie = el, onDragStart: () => { this.backDrop = true; }, onDragEnd: this.moveIt.bind(this), class: (this.vidBig ? "bigBoi" : "") + (this.hide ? " hidden" : "") }, h("div", { key: '0c6f56865c7897c2acb71dec030d183dfacec4ec', id: "my-div-header" }, h("span", { key: 'c89876283b0bb0380ef330534cb18c81585fa8bd', class: "hideMe", onClick: this.onToggleHide.bind(this) }, h("svg", { key: '438d8bce4df243836bffdeb6021f292ecac41a49', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 640 512" }, h("path", { key: '6dfc0f877e01af9607e159e0bb89f0465c5958ff', d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" }))), h("svg", { key: '4c6ec2f92619cdf637ce54b6f33e632eacbdb8c3', id: "move", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: 'b18c2afcf749cc015295c0eee10bce87eb84a5b9', d: "M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4V224H109.3l9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4H224V402.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V288H402.7l-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4H288V109.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z" })), h("span", { key: 'd33623c8b8b4551f406e6b03b46d4c30d73cd622', class: "sizeBar", onClick: this.onToggleSize.bind(this) }, this.btnLable)), h("iframe", { key: '14922f61b1703a6d36ea37c24125d7ec05a9659e', src: url, height: "100%", width: "100%", frameborder: "0", loading: "lazy", allowFullScreen: true }))
        ];
    }
};
wxccVideoModal.style = wxccVideoModalCss;

export { wxccAltair as wxcc_altair, wxccAuth as wxcc_auth_widget, SideDrawer as wxcc_guide_panel, PageControls as wxcc_page_controls, wxccTime as wxcc_time, wxccVideoModal as wxcc_video_modal };
//# sourceMappingURL=wxcc-altair.wxcc-auth-widget.wxcc-guide-panel.wxcc-page-controls.wxcc-time.wxcc-video-modal.entry.js.map

//# sourceMappingURL=wxcc-altair_6.entry.js.map