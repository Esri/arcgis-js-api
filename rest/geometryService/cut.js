/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../geometry.js";import e from"../../request.js";import{getJsonType as t,fromJSON as r}from"../../geometry/support/jsonUtils.js";import{parseUrl as s}from"../utils.js";async function o(o,i,n,m){const a=s(o),p=i[0].spatialReference,u={...m,query:{...a.query,f:"json",sr:JSON.stringify(p),target:JSON.stringify({geometryType:t(i[0]),geometries:i}),cutter:JSON.stringify(n)}},c=await e(a.path+"/cut",u),{cutIndexes:f,geometries:g=[]}=c.data;return{cutIndexes:f,geometries:g.map((e=>{const t=r(e);return t.spatialReference=p,t}))}}export{o as cut};
