/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../request","../../core/screenUtils","./previewUtils","./utils"],(function(e,t,i,n,l){"use strict";function h(e,i,n){const h=e.thumbnail&&e.thumbnail.url;return h?t(h,{responseType:"image"}).then((e=>{const t=s(e.data,n);return n&&n.node?(n.node.appendChild(t),n.node):t})):l.fetchWebStyleSymbol(e).then((e=>e?i(e,n):null))}function s(e,t){const l=!/\\.svg$/i.test(e.src)&&t&&t.disableUpsampling,h=Math.max(e.width,e.height);let s=t&&null!=t.maxSize?i.pt2px(t.maxSize):n.SymbolSizeDefaults.maxSize;l&&(s=Math.min(h,s));const o="number"==typeof t?.size?t?.size:null,r=Math.min(s,null!=o?i.pt2px(o):h);if(r!==h){const t=0!==e.width&&0!==e.height?e.width/e.height:1;t>=1?(e.width=r,e.height=r/t):(e.width=r*t,e.height=r)}return e}e.previewWebStyleSymbol=h,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
