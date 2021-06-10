/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/urlUtils","../../geometry/support/jsonUtils","../../request"],(function(e,t,r,n){"use strict";async function s(e,s,u){const p="string"==typeof e?t.urlToObject(e):e,y=s[0].spatialReference,f=r.getJsonType(s[0]),c={...u,query:{...p.query,f:"json",sr:y.wkid?y.wkid:JSON.stringify(y),geometries:JSON.stringify(i(s))}};return o((await n(p.path+"/simplify",c)).data,f,y)}function i(e){return{geometryType:r.getJsonType(e[0]),geometries:e.map((e=>e.toJSON()))}}function o(e,t,n){const s=r.getGeometryType(t);return e.map((e=>{const t=s.fromJSON(e);return t.spatialReference=n,t}))}e.simplify=s,Object.defineProperty(e,"__esModule",{value:!0})}));
