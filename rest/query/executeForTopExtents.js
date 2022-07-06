/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../geometry.js";import{parseUrl as t}from"../utils.js";import{executeQueryForTopExtents as o}from"./operations/queryTopFeatures.js";import r from"../support/TopFeaturesQuery.js";import e from"../../geometry/Extent.js";async function m(m,s,n){const p=t(m),a=await o(p,r.from(s),{...n});return{count:a.data.count,extent:e.fromJSON(a.data.extent)}}export{m as executeForTopExtents};
