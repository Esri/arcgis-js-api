/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{parseUrl as r}from"../utils.js";import{JSONFeatureSetParserContext as e}from"./operations/pbfJSONFeatureSet.js";import{executeQueryPBF as t}from"./operations/query.js";import o from"../support/FeatureSet.js";import a from"../support/Query.js";async function s(r,e,t){const s=await n(r,a.from(e),t);return o.fromJSON(s)}async function n(o,s,n){const p=r(o),i={...n},u=a.from(s),m=!u.quantizationParameters,{data:f}=await t(p,u,new e({sourceSpatialReference:u.sourceSpatialReference,applyTransform:m}),i);return f}export{s as executeQueryPBF,n as executeRawQueryPBF};
