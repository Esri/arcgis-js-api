/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../geometry.js";import r from"../../request.js";import{parseUrl as t,asValidOptions as e}from"../utils.js";import{trimExtendToRESTParameters as o}from"../operations/trimExtend.js";import m from"../support/TrimExtendParameters.js";import s from"../../geometry/Polyline.js";async function i(i,p,n){p=m.from(p);const a=o(p),f=t(i),j={...f.query,f:"json",...a},u=p.sr,y=e(j,n);return r(f.path+"/trimExtend",y).then((({data:r})=>(r.geometries||[]).map((({paths:r})=>new s({spatialReference:u,paths:r})))))}export{i as trimExtend};
