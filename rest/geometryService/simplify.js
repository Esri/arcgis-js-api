/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../request.js";import{urlToObject as t}from"../../core/urlUtils.js";import{getJsonType as i}from"../../geometry/support/jsonUtils.js";import{encodeGeometries as s,decodeGeometries as e}from"./utils.js";async function o(o,m,f){const n="string"==typeof o?t(o):o,p=m[0].spatialReference,a=i(m[0]),u={...f,query:{...n.query,f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify(s(m))}},{data:y}=await r(n.path+"/simplify",u);return e(y.geometries,a,p)}export{o as simplify};
