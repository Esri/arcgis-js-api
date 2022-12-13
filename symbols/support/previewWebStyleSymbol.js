/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../request","../../core/screenUtils","./previewUtils"],(function(e,t,i,n){"use strict";function l(e,i,n){const l=e.thumbnail&&e.thumbnail.url;return l?t(l,{responseType:"image"}).then((e=>{const t=h(e.data,n);return n&&n.node?(n.node.appendChild(t),n.node):t})):e.fetchSymbol().then((e=>e?i(e,n):null))}function h(e,t){const l=!/\\.svg$/i.test(e.src)&&t&&t.disableUpsampling,h=Math.max(e.width,e.height);let s=t&&null!=t.maxSize?i.pt2px(t.maxSize):n.SymbolSizeDefaults.maxSize;l&&(s=Math.min(h,s));const o="number"==typeof t?.size?t?.size:null,u=Math.min(s,null!=o?i.pt2px(o):h);if(u!==h){const t=0!==e.width&&0!==e.height?e.width/e.height:1;t>=1?(e.width=u,e.height=u/t):(e.width=u*t,e.height=u)}return e}e.previewWebStyleSymbol=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
