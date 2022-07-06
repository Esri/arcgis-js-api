/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{parseUrl as o}from"../utils.js";import{executeQueryForCount as r}from"./operations/query.js";import t from"../support/Query.js";async function n(n,s,m){const p=o(n);return r(p,t.from(s),{...m}).then((o=>o.data.count))}export{n as executeForCount};
