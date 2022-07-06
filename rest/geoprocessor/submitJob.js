/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import o from"./GPOptions.js";import{constructRequest as r}from"./utils.js";import t from"../support/JobInfo.js";async function s(s,m,n,f){return n=o.from(n||{}),r(s,"submitJob",n,m,f).then((o=>{const r=t.fromJSON(o.data);return r.sourceUrl=s,r}))}export{s as submitJob};
