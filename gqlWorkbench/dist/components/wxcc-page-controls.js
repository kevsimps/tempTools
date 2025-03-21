import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const wxccPageControlsCss = ".controls {\r\n    width: 100%;\r\n    background-color: #555;\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 36px;\r\n    margin: auto;\r\n    height: 8vh;\r\n    overflow: hidden;\r\n    /* position: relative; */\r\n    /* display: grid; */\r\n    /* display:flex; */\r\n\r\n    /* justify-content: center; */\r\n    /* align-items: center; */\r\n    font-family:Arial, Helvetica, sans-serif;\r\n\r\n}\r\n\r\nbutton {\r\n    padding: 14px 28px;\r\n    margin: 15px;\r\n    width: 20%\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    padding: 5px 28px;\r\n    margin: 1.5vh;\r\n    width: 15%;\r\n    background: #998f8f;\r\n    cursor: pointer;\r\n    border-radius: 30px\r\n        /* height: 4vh; */\r\n\r\n}\r\n\r\nspan:hover {\r\n    /* background: #0c0a0a; */\r\n    background: #2196F3;\r\n    ;\r\n\r\n}\r\n\r\n.tools {\r\n    margin-top: -2vh;\r\n    /* padding: 5px 28px; */\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 18%;\r\n    background: #998f8f;\r\n    /* left: 21.65%; */\r\n    left: 31.33%;\r\n    display: none;\r\n    overflow: hidden;\r\n    /* transition: display ease-out 5s; */\r\n    font-size: 32px;\r\n\r\n}\r\n@media(width <= 1440px){\r\n    .tools{\r\n        left: 30.33%;\r\n        width: 19%;\r\n\r\n    }\r\n}\r\n\r\n.nav {\r\n    width: 5%\r\n}\r\n\r\n#tools:hover {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n.mag:hover~.tools {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n\r\n\r\n.controls:has(.tools:hover) #tools {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n\r\n.tools:hover {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n    transition: block ease-in-out 2s;\r\n}";

const PageControls = /*@__PURE__*/ proxyCustomElement(class PageControls extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.wxccGuidePageTurn = createEvent(this, "wxccGuidePageTurn", 7);
        this.toggleGuide = createEvent(this, "toggleGuide", 7);
        this.wxccTimeWidget = createEvent(this, "wxccTimeWidget", 7);
        this.wxccAuthPop = createEvent(this, "wxccAuthPop", 7);
        this.vidPop = createEvent(this, "vidPop", 7);
        this.vodTog = createEvent(this, "vodTog", 7);
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
    static get style() { return wxccPageControlsCss; }
}, [1, "wxcc-page-controls", {
        "currentPage": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wxcc-page-controls"];
    components.forEach(tagName => { switch (tagName) {
        case "wxcc-page-controls":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PageControls);
            }
            break;
    } });
}

const WxccPageControls = PageControls;
const defineCustomElement = defineCustomElement$1;

export { WxccPageControls, defineCustomElement };
//# sourceMappingURL=wxcc-page-controls.js.map

//# sourceMappingURL=wxcc-page-controls.js.map