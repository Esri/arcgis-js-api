/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./object"],(function(e,t){"use strict";const n=/\{([^\}]+)\}/g;function r(e){return null==e?"":e}function o(e,o){return e.replace(n,"object"==typeof o?(e,n)=>r(t.getDeepValue(n,o)):(e,t)=>r(o(t)))}function u(e,t){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(e=>t&&-1!==t.indexOf(e)?e:`\\${e}`))}function c(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}function i(e){return(new DOMParser).parseFromString(e||"","text/html").body.innerText||""}e.escapeRegExpString=u,e.numericHash=c,e.replace=o,e.stripHTML=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
