/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../request","../../core/screenUtils"],(function(e,t,i){"use strict";function n(e,i,n){const s=e.thumbnail&&e.thumbnail.url;return s?t(s,{responseType:"image"}).then((e=>{const t=h(e.data,n);return n&&n.node?(n.node.appendChild(t),n.node):t})):e.fetchSymbol().then((e=>i(e,n)))}function h(e,t){const n=!/\\.svg$/i.test(e.src)&&t&&t.disableUpsampling,h=Math.max(e.width,e.height);let s=t&&null!=t.maxSize?i.pt2px(t.maxSize):120;n&&(s=Math.min(h,s));const o=Math.min(s,t&&null!=t.size?i.pt2px(t.size):h);if(o!==h){const t=0!==e.width&&0!==e.height?e.width/e.height:1;t>=1?(e.width=o,e.height=o/t):(e.width=o*t,e.height=o)}return e}e.previewWebStyleSymbol=n,Object.defineProperty(e,"__esModule",{value:!0})}));
