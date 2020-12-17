/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/screenUtils","../../request"],(function(e,t,i){"use strict";e.previewWebStyleSymbol=function(e,n,h){const s=e.thumbnail&&e.thumbnail.url;return s?i(s,{responseType:"image"}).then((e=>{const i=function(e,i){const n=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,h=Math.max(e.width,e.height);let s=i&&null!=i.maxSize?t.pt2px(i.maxSize):120;n&&(s=Math.min(h,s));const o=Math.min(s,i&&null!=i.size?t.pt2px(i.size):h);if(o!==h){const t=0!==e.width&&0!==e.height?e.width/e.height:1;t>=1?(e.width=o,e.height=o/t):(e.width=o*t,e.height=o)}return e}(e.data,h);return h&&h.node?(h.node.appendChild(i),h.node):i})):e.fetchSymbol().then((e=>n(e,h)))},Object.defineProperty(e,"__esModule",{value:!0})}));
