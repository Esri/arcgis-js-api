/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./Background","./ColorBackground"],(function(e,t,r){"use strict";const o={base:t,key:"type",typeMap:{color:r}};function n(e){return(t,r,o)=>{if(!t)return t;for(const n in e.typeMap)if(t.type===n){const r=new e.typeMap[n];return r.read(t,o),r}}}const i={types:o,json:{read:n(o),write:{overridePolicy:(e,t,r)=>({enabled:!r||!r.isPresentation})}}};e.backgroundProperty=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
