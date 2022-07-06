/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{parseUrl as r}from"../utils.js";import{executeTopFeaturesQuery as o}from"./operations/queryTopFeatures.js";import t from"../support/FeatureSet.js";import e from"../support/TopFeaturesQuery.js";async function s(s,p,u,a){const m=r(s),i={...a},{data:f}=await o(m,e.from(p),u,i);return t.fromJSON(f)}export{s as executeTopFeaturesQuery};
