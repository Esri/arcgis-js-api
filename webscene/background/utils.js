/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./Background","./ColorBackground"],(function(e,r,t){"use strict";const n={base:r,key:"type",typeMap:{color:t}};function o(e){return(r,t,n)=>{if(!r)return r;for(const o in e.typeMap)if(r.type===o){const t=new e.typeMap[o];return t.read(r,n),t}}}const c={types:n,json:{read:o(n),write:{overridePolicy:(e,r,t)=>({enabled:!t||!t.isPresentation})}}};e.backgroundProperty=c,Object.defineProperty(e,"__esModule",{value:!0})}));
