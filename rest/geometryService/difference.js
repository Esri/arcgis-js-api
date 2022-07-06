/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../request.js";import{getJsonType as t,fromJSON as r}from"../../geometry/support/jsonUtils.js";import{parseUrl as o}from"../utils.js";import{encodeGeometries as s}from"./utils.js";async function i(i,m,n,f){const p=m[0].spatialReference,y=o(i);let a={query:{...y.query,f:"json",sr:JSON.stringify(p.toJSON()),geometries:JSON.stringify(s(m)),geometry:JSON.stringify({geometryType:t(n),geometry:n.toJSON()})}};return f&&(a={...f,...a}),e(y.path+"/difference",a).then((({data:e})=>(e.geometries||[]).map((e=>r(e).set({spatialReference:p})))))}export{i as difference};
