/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../request.js";import{getJsonType as t,fromJSON as r}from"../../geometry/support/jsonUtils.js";import{parseUrl as s,asValidOptions as o}from"../utils.js";import{encodeGeometries as i}from"./utils.js";async function m(m,n,p,f){const y=n[0].spatialReference,a=s(m),g={...a.query,f:"json",sr:JSON.stringify(y.toJSON()),geometries:JSON.stringify(i(n)),geometry:JSON.stringify({geometryType:t(p),geometry:p.toJSON()})},u=o(g,f);return e(a.path+"/intersect",u).then((({data:e})=>(e.geometries||[]).map((e=>r(e).set({spatialReference:y})))))}export{m as intersect};
