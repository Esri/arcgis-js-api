/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../request.js";import{ensureType as o}from"../../core/accessorSupport/ensureType.js";import{getJsonType as t}from"../../geometry/support/jsonUtils.js";import{parseUrl as e,asValidOptions as s}from"../utils.js";import{decodeGeometries as p}from"./utils.js";import m from"../support/ProjectParameters.js";const i=o(m);async function n(o,m,n){m=i(m);const u=e(o),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=t(m.geometries[0]),f=s(c,n);return r(u.path+"/project",f).then((({data:{geometries:r}})=>p(r,a,j)))}export{n as project};
