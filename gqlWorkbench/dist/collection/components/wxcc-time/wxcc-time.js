import { h } from "@stencil/core";
export class wxccTime {
    constructor() {
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
    static get is() { return "wxcc-time"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["wxcc-time.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["wxcc-time.css"]
        };
    }
    static get states() {
        return {
            "td": {},
            "fd": {},
            "toSelected": {},
            "fromSelected": {},
            "tTime": {},
            "tDate": {},
            "fTime": {},
            "fDate": {},
            "to": {},
            "from": {},
            "hide": {},
            "tab": {},
            "lupStamp": {},
            "tStamp": {}
        };
    }
    static get listeners() {
        return [{
                "name": "wxccTimeWidget",
                "method": "onToggle",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=wxcc-time.js.map
