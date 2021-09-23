/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./object"],(function(e,t){"use strict";const n=/\{([^\}]+)\}/g;function r(e){return null==e?"":e}function c(e,c){return e.replace(n,"object"==typeof c?(e,n)=>r(t.getDeepValue(n,c)):(e,t)=>r(c(t)))}function o(e,t){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(e=>t&&-1!==t.indexOf(e)?e:`\\${e}`))}function u(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}function i(e){return(new DOMParser).parseFromString(e||"","text/html").body.innerText||""}e.escapeRegExpString=o,e.numericHash=u,e.replace=c,e.stripHTML=i,Object.defineProperty(e,"__esModule",{value:!0})}));
