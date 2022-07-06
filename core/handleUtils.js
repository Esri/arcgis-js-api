/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"./maybe.js";function r(r){return n((()=>r.forEach((r=>e(r)&&r.remove()))))}function n(e){return{remove:()=>{e&&(e(),e=void 0)}}}function o(r){return n((()=>{const n=r();e(n)&&n.remove()}))}function t(r){return n(e(r)?()=>r.destroy():void 0)}function u(e,r){const o=setTimeout(e,r);return n((()=>clearTimeout(o)))}function i(r,o){let t=!1,u=null;return r.then((e=>{t?e.remove():u=e})),n((()=>{t=!0,e(u)?u.remove():e(o)&&(o.abort(),o=null)}))}export{i as asyncHandle,t as destroyHandle,r as handlesGroup,n as makeHandle,o as refHandle,u as timeoutHandle};
