/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e){return{setTimeout:(t,o)=>{const r=e.setTimeout(t,o);return{remove:()=>e.clearTimeout(r)}}}}const t=e(globalThis);export{t as clock,e as wrap};
