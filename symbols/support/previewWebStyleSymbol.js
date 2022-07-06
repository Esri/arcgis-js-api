/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../request.js";import{pt2px as e}from"../../core/screenUtils.js";import{SymbolSizeDefaults as i}from"./previewUtils.js";function n(e,i,n){const o=e.thumbnail&&e.thumbnail.url;return o?t(o,{responseType:"image"}).then((t=>{const e=h(t.data,n);return n&&n.node?(n.node.appendChild(e),n.node):e})):e.fetchSymbol().then((t=>i(t,n)))}function h(t,n){const h=!/\\.svg$/i.test(t.src)&&n&&n.disableUpsampling,o=Math.max(t.width,t.height);let r=n&&null!=n.maxSize?e(n.maxSize):i.maxSize;h&&(r=Math.min(o,r));const s="number"==typeof n?.size?n?.size:null,m=Math.min(r,null!=s?e(s):o);if(m!==o){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=m,t.height=m/e):(t.width=m*e,t.height=m)}return t}export{n as previewWebStyleSymbol};
