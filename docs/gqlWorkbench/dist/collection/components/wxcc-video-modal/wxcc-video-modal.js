import { h } from "@stencil/core";
export class wxccVideoModal {
    constructor() {
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
    static get is() { return "wxcc-video-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["wxcc-video-modal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["wxcc-video-modal.css"]
        };
    }
    static get properties() {
        return {
            "vidId": {
                "type": "string",
                "mutable": true,
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
                "attribute": "vid-id",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "vidBig": {},
            "btnLable": {},
            "backDrop": {},
            "hide": {}
        };
    }
    static get listeners() {
        return [{
                "name": "vodTog",
                "method": "onToggleHide",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "vidPop",
                "method": "onVidPop",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=wxcc-video-modal.js.map
