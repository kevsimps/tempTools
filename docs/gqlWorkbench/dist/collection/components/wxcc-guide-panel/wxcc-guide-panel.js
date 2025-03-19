import { h } from "@stencil/core";
export class SideDrawer {
    constructor() {
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
    static get is() { return "wxcc-guide-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["wxcc-guide-panel.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["wxcc-guide-panel.css"]
        };
    }
    static get properties() {
        return {
            "arttitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "arttitle",
                "reflect": true
            },
            "opened": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "opened",
                "reflect": true
            },
            "flip": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "flip",
                "reflect": true
            },
            "lList": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "l-list",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "showNav": {},
            "content": {},
            "lessons": {},
            "currentPage": {},
            "lastScroll": {}
        };
    }
    static get listeners() {
        return [{
                "name": "toggleGuide",
                "method": "onToggle",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "wxccGuidePageTurn",
                "method": "onNext",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=wxcc-guide-panel.js.map
