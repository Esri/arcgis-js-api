/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./Background","./ColorBackground"],(function(e,t,o){"use strict";const r={base:t,key:"type",typeMap:{color:o}};function n(e){return(t,o,r)=>{if(!t)return t;for(const n in e.typeMap)if(t.type===n){const o=new e.typeMap[n];return o.read(t,r),o}}}const i={types:r,json:{read:n(r),write:{overridePolicy:(e,t,o)=>({enabled:!o||!o.isPresentation})}}};e.backgroundProperty=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
