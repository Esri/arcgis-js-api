/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./Background","./ColorBackground"],(function(e,r,t){"use strict";const o={base:r,key:"type",typeMap:{color:t}};const n={types:o,json:{read:(a=o,(e,r,t)=>{if(!e)return e;for(const r in a.typeMap)if(e.type===r){const o=new a.typeMap[r];return o.read(e,t),o}}),write:{overridePolicy:(e,r,t)=>({enabled:!t||!t.isPresentation})}}};var a;e.backgroundProperty=n,Object.defineProperty(e,"__esModule",{value:!0})}));
