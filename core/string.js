/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getDeepValue as t}from"./object.js";const e=/\{([^\}]+)\}/g;function n(t){return null==t?"":t}function r(r,o){return r.replace(e,"object"==typeof o?(e,r)=>n(t(r,o)):(t,e)=>n(o(e)))}function o(t,e){return t.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(t=>e&&e.includes(t)?t:`\\${t}`))}function c(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return e}function u(t){return(new DOMParser).parseFromString(t||"","text/html").body.innerText||""}export{o as escapeRegExpString,c as numericHash,r as replace,u as stripHTML};
