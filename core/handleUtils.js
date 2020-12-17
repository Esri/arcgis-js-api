/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./maybe"],(function(e,n){"use strict";function o(e){return{remove:()=>{e&&(e(),e=void 0)}}}e.asyncHandle=function(e,t){let r=!1,u=null;return e.then((e=>{r?e.remove():u=e})),o((()=>{r=!0,n.isSome(u)?u.remove():n.isSome(t)&&(t.abort(),t=null)}))},e.destroyHandle=function(e){return o(n.isSome(e)?()=>e.destroy():void 0)},e.handlesGroup=function(e){return o((()=>e.forEach((e=>n.isSome(e)&&e.remove()))))},e.makeHandle=o,e.refHandle=function(e){return o((()=>{const o=e();n.isSome(o)&&o.remove()}))},e.timeoutHandle=function(e,n){const t=setTimeout(e,n);return o((()=>clearTimeout(t)))},Object.defineProperty(e,"__esModule",{value:!0})}));
