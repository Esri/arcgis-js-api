/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../request.js";import{fromJSON as e}from"../../geometry/support/jsonUtils.js";import{parseUrl as r,asValidOptions as s}from"../utils.js";import{encodeGeometries as o}from"./utils.js";async function i(i,n,m){const f=n[0].spatialReference,p=r(i),a={...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(o(n))},u=s(a,m);return t(p.path+"/convexHull",u).then((({data:t})=>e(t.geometry).set({spatialReference:f})))}export{i as convexHull};
