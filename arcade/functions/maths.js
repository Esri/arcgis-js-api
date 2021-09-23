/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/languageUtils","../../core/number"],(function(n,t,r){"use strict";function e(n,t,r){return void 0===r||0==+r?Math[n](t):(t=+t,r=+r,isNaN(t)||"number"!=typeof r||r%1!=0?NaN:(t=t.toString().split("e"),+((t=(t=Math[n](+(t[0]+"e"+(t[1]?+t[1]-r:-r)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+r:r))))}function u(n,u){function o(n,r,e){const u=t.toNumber(n);return isNaN(u)?u:isNaN(r)||isNaN(e)||r>e?NaN:u<r?r:u>e?e:u}n.number=function(n,e){return u(n,e,(function(n,e,u){t.pcCheck(u,1,2);const o=u[0];if(t.isNumber(o))return o;if(null===o)return 0;if(t.isDate(o))return Number(o);if(t.isBoolean(o))return Number(o);if(t.isArray(o))return NaN;if(""===o)return Number(o);if(void 0===o)return Number(o);if(t.isString(o)){if(void 0!==u[1]){let n=t.multiReplace(u[1],"‰","");return n=t.multiReplace(n,"¤",""),r.parse(o,{pattern:n})}return Number(o.trim())}return Number(o)}))},n.abs=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),Math.abs(t.toNumber(e[0]))}))},n.acos=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),Math.acos(t.toNumber(e[0]))}))},n.asin=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),Math.asin(t.toNumber(e[0]))}))},n.atan=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),Math.atan(t.toNumber(e[0]))}))},n.atan2=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,2,2),Math.atan2(t.toNumber(e[0]),t.toNumber(e[1]))}))},n.ceil=function(n,r){return u(n,r,(function(n,r,u){if(t.pcCheck(u,1,2),2===u.length){let n=t.toNumber(u[1]);return isNaN(n)&&(n=0),e("ceil",t.toNumber(u[0]),-1*n)}return Math.ceil(t.toNumber(u[0]))}))},n.round=function(n,r){return u(n,r,(function(n,r,u){if(t.pcCheck(u,1,2),2===u.length){let n=t.toNumber(u[1]);return isNaN(n)&&(n=0),e("round",t.toNumber(u[0]),-1*n)}return Math.round(t.toNumber(u[0]))}))},n.floor=function(n,r){return u(n,r,(function(n,r,u){if(t.pcCheck(u,1,2),2===u.length){let n=t.toNumber(u[1]);return isNaN(n)&&(n=0),e("floor",t.toNumber(u[0]),-1*n)}return Math.floor(t.toNumber(u[0]))}))},n.cos=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),Math.cos(t.toNumber(e[0]))}))},n.isnan=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),"number"==typeof e[0]&&isNaN(e[0])}))},n.exp=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),Math.exp(t.toNumber(e[0]))}))},n.log=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),Math.log(t.toNumber(e[0]))}))},n.pow=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,2,2),t.toNumber(e[0])**t.toNumber(e[1])}))},n.random=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,0,0),Math.random()}))},n.sin=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),Math.sin(t.toNumber(e[0]))}))},n.sqrt=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),Math.sqrt(t.toNumber(e[0]))}))},n.tan=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),Math.tan(t.toNumber(e[0]))}))},n.defaultvalue=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,2,2),null===e[0]||""===e[0]||void 0===e[0]?e[1]:e[0]}))},n.isempty=function(n,r){return u(n,r,(function(n,r,e){return t.pcCheck(e,1,1),null===e[0]||(""===e[0]||void 0===e[0])}))},n.boolean=function(n,r){return u(n,r,(function(n,r,e){t.pcCheck(e,1,1);const u=e[0];return t.toBoolean(u)}))},n.constrain=function(n,r){return u(n,r,(function(n,r,e){t.pcCheck(e,3,3);const u=t.toNumber(e[1]),c=t.toNumber(e[2]);if(t.isArray(e[0])){const n=[];for(const t of e[0])n.push(o(t,u,c));return n}if(t.isImmutableArray(e[0])){const n=[];for(let t=0;t<e[0].length();t++)n.push(o(e[0].get(t),u,c));return n}return o(e[0],u,c)}))}}n.registerFunctions=u,Object.defineProperty(n,"__esModule",{value:!0})}));
