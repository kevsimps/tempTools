'use strict';

var index = require('./index-DRDL5yMD.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["wxcc-altair_6.cjs",[[1,"wxcc-altair"],[1,"wxcc-auth-widget",{"callbackUrl":[1,"callback-url"],"token":[32],"expStamp":[32],"hide":[32],"burp":[64]},[[16,"wxccAuthPop","onGetAuth"]]],[1,"wxcc-guide-panel",{"arttitle":[513],"opened":[1540],"flip":[1540],"lList":[513,"l-list"],"showNav":[32],"content":[32],"lessons":[32],"currentPage":[32],"lastScroll":[32]},[[16,"toggleGuide","onToggle"],[16,"wxccGuidePageTurn","onNext"]]],[1,"wxcc-page-controls",{"currentPage":[32]}],[1,"wxcc-time",{"td":[32],"fd":[32],"toSelected":[32],"fromSelected":[32],"tTime":[32],"tDate":[32],"fTime":[32],"fDate":[32],"to":[32],"from":[32],"hide":[32],"tab":[32],"lupStamp":[32],"tStamp":[32]},[[16,"wxccTimeWidget","onToggle"]]],[1,"wxcc-video-modal",{"vidId":[1537,"vid-id"],"vidBig":[32],"btnLable":[32],"backDrop":[32],"hide":[32]},[[16,"vodTog","onToggleHide"],[16,"vidPop","onVidPop"]]]]],["wxcc-auth-demo-widget.cjs",[[1,"wxcc-auth-demo-widget",{"callbackUrl":[1,"callback-url"],"token":[32],"expStamp":[32],"hide":[32],"deets":[32],"request":[32],"showResponse":[32],"burp":[64]},[[16,"wxccAuthPop","onGetAuth"]]]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map

//# sourceMappingURL=loader.cjs.js.map