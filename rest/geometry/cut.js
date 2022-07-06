/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../geometry.js";import e from"../../request.js";import{urlToObject as t}from"../../core/urlUtils.js";import{getJsonType as r,fromJSON as s}from"../../geometry/support/jsonUtils.js";async function o(o,i,n,m){const p="string"==typeof o?t(o):o,a=i[0].spatialReference,u={...m,query:{...p.query,f:"json",sr:JSON.stringify(a),target:JSON.stringify({geometryType:r(i[0]),geometries:i}),cutter:JSON.stringify(n)}},c=await e(p.path+"/cut",u),{cutIndexes:f,geometries:g=[]}=c.data;return{cutIndexes:f,geometries:g.map((e=>{const t=s(e);return t.spatialReference=a,t}))}}export{o as cut};
