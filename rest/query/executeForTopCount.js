/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{parseUrl as o}from"../utils.js";import{executeQueryForTopCount as r}from"./operations/queryTopFeatures.js";import t from"../support/TopFeaturesQuery.js";async function s(s,e,p){const u=o(s);return(await r(u,t.from(e),{...p})).data.count}export{s as executeForTopCount};
