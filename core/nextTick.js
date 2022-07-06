/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const o=[];function t(t){o.push(t),1===o.length&&queueMicrotask((()=>{const t=o.slice();o.length=0;for(const o of t)o()}))}export{t as nextTick};
