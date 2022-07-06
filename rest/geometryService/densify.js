/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../request.js";import{fromJSON as t}from"../../geometry/support/jsonUtils.js";import{parseUrl as r,asValidOptions as s}from"../utils.js";async function o(o,i,n){const m=i.geometries[0].spatialReference,p=r(o),a={...p.query,f:"json",...i.toJSON()},f=s(a,n);return e(p.path+"/densify",f).then((({data:e})=>(e.geometries||[]).map((e=>t(e).set({spatialReference:m})))))}export{o as densify};
