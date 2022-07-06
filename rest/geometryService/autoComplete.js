/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../geometry.js";import e from"../../request.js";import{parseUrl as t,asValidOptions as r}from"../utils.js";import{encodeGeometries as o}from"./utils.js";import s from"../../geometry/Polygon.js";async function i(i,n,m,p){const g=n[0].spatialReference,f=t(i),a={...f.query,f:"json",sr:JSON.stringify(g.toJSON()),polygons:JSON.stringify(o(n).geometries),polylines:JSON.stringify(o(m).geometries)},y=r(a,p);return e(f.path+"/autoComplete",y).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new s({spatialReference:g,rings:e})))))}export{i as autoComplete};
