/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./maybe"],(function(e,n){"use strict";function o(e){return t((()=>e.forEach((e=>n.isSome(e)&&e.remove()))))}function t(e){return{remove:()=>{e&&(e(),e=void 0)}}}function r(e){return t((()=>{const o=e();n.isSome(o)&&o.remove()}))}function u(e){return t(n.isSome(e)?()=>e.destroy():void 0)}function i(e,n){const o=setTimeout(e,n);return t((()=>clearTimeout(o)))}function s(e,o){let r=!1,u=null;return e.then((e=>{r?e.remove():u=e})),t((()=>{r=!0,n.isSome(u)?u.remove():n.isSome(o)&&(o.abort(),o=null)}))}e.asyncHandle=s,e.destroyHandle=u,e.handlesGroup=o,e.makeHandle=t,e.refHandle=r,e.timeoutHandle=i,Object.defineProperty(e,"__esModule",{value:!0})}));
