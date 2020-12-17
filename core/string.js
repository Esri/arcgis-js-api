/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./object"],(function(e,t){"use strict";const n=/\{([^\}]+)\}/g;function r(e){return null==e?"":e}e.escapeRegExpString=function(e,t){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(e=>t&&-1!==t.indexOf(e)?e:`\\${e}`))},e.numericHash=function(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t},e.replace=function(e,c){return e.replace(n,"object"==typeof c?(e,n)=>r(t.getDeepValue(n,c)):(e,t)=>r(c(t)))},Object.defineProperty(e,"__esModule",{value:!0})}));
