/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/urlUtils","../../geometry/support/jsonUtils","../../request"],(function(e,t,r,n){"use strict";function s(e){return{geometryType:r.getJsonType(e[0]),geometries:e.map((e=>e.toJSON()))}}e.simplify=async function(e,i,o){const u="string"==typeof e?t.urlToObject(e):e,p=i[0].spatialReference,y=r.getJsonType(i[0]),f={...o,query:{...u.query,f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify(s(i))}};return function(e,t,n){const s=r.getGeometryType(t);return e.map((e=>{const t=s.fromJSON(e);return t.spatialReference=n,t}))}((await n(u.path+"/simplify",f)).data,y,p)},Object.defineProperty(e,"__esModule",{value:!0})}));
