/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"./Background.js";import r from"./ColorBackground.js";const o={base:e,key:"type",typeMap:{color:r}};function t(e){return(r,o,t)=>{if(!r)return r;for(const n in e.typeMap)if(r.type===n){const o=new e.typeMap[n];return o.read(r,t),o}}}const n={types:o,json:{read:t(o),write:{overridePolicy:(e,r,o)=>({enabled:!o||!o.isPresentation})}}};export{n as backgroundProperty};
