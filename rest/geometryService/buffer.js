/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../geometry.js";import e from"../../request.js";import{parseUrl as r,asValidOptions as t}from"../utils.js";import o from"../../geometry/Polygon.js";async function s(s,n,i){const m=r(s),a={...m.query,f:"json",...n.toJSON()},f=n.outSpatialReference||n.geometries[0].spatialReference,p=t(a,i);return e(m.path+"/buffer",p).then((e=>(e.data.geometries||[]).map((({rings:e})=>new o({spatialReference:f,rings:e})))))}export{s as buffer};
