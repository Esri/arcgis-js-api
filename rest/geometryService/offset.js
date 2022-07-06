/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../request.js";import{fromJSON as t}from"../../geometry/support/jsonUtils.js";import{parseUrl as r,asValidOptions as o}from"../utils.js";import{offsetToRESTParameters as s}from"../operations/offset.js";import f from"../support/OffsetParameters.js";async function m(m,p,i){p=f.from(p);const a=s(p),n=r(m),j={...n.query,f:"json",...a},u=p.geometries[0].spatialReference,c=o(j,i);return e(n.path+"/offset",c).then((({data:e})=>(e.geometries||[]).map((e=>t(e).set({spatialReference:u})))))}export{m as offset};
