/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{parseUrl as o}from"../utils.js";import{executeQueryForIds as r}from"./operations/query.js";import t from"../support/Query.js";async function s(s,e,m){const n=o(s);return r(n,t.from(e),{...m}).then((o=>o.data.objectIds))}export{s as executeForIds};
