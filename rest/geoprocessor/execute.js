/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import s from"./GPOptions.js";import{constructRequest as t,decode as r}from"./utils.js";import e from"../support/GPMessage.js";async function o(o,m,a,p){return a=s.from(a||{}),t(o,"execute",a,m,p).then((s=>{const t=s.data.results||[],o=s.data.messages||[];return{results:t.map(r),messages:o.map((s=>e.fromJSON(s)))}}))}export{o as execute};
