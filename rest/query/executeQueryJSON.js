/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{parseUrl as r}from"../utils.js";import{executeQuery as t}from"./operations/query.js";import o from"../support/FeatureSet.js";import e from"../support/Query.js";async function s(r,t,e){const s=await a(r,t,e);return o.fromJSON(s)}async function a(o,s,a){const n=r(o),i={...a},p=e.from(s),{data:u}=await t(n,p,p.sourceSpatialReference,i);return u}export{s as executeQueryJSON,a as executeRawQueryJSON};
