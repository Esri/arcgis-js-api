/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../geometry.js";import{parseUrl as t}from"../utils.js";import{executeQueryForExtent as o}from"./operations/query.js";import r from"../support/Query.js";import e from"../../geometry/Extent.js";async function m(m,n,s){const p=t(m);return o(p,r.from(n),{...s}).then((t=>({count:t.data.count,extent:e.fromJSON(t.data.extent)})))}export{m as executeForExtent};
