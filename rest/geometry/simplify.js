/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../request.js";import{urlToObject as t}from"../../core/urlUtils.js";import{getJsonType as e,getGeometryType as o}from"../../geometry/support/jsonUtils.js";async function i(o,i,f){const m="string"==typeof o?t(o):o,p=i[0].spatialReference,a=e(i[0]),u={...f,query:{...m.query,f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify(s(i))}};return n((await r(m.path+"/simplify",u)).data,a,p)}function s(r){return{geometryType:e(r[0]),geometries:r.map((r=>r.toJSON()))}}function n(r,t,e){const i=o(t);return r.map((r=>{const t=i.fromJSON(r);return t.spatialReference=e,t}))}export{i as simplify};
