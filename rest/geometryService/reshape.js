/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../request.js";import{getJsonType as t,fromJSON as r}from"../../geometry/support/jsonUtils.js";import{parseUrl as s,asValidOptions as o}from"../utils.js";async function i(i,n,p,a){const f=n.spatialReference,m=s(i),y={...m.query,f:"json",sr:JSON.stringify(f.toJSON()),target:JSON.stringify({geometryType:t(n),geometry:n.toJSON()}),reshaper:JSON.stringify(p.toJSON())},g=o(y,a);return e(m.path+"/reshape",g).then((({data:e})=>r(e.geometry).set({spatialReference:f})))}export{i as reshape};
