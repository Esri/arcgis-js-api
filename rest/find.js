/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../request.js";import{parseUrl as r,encode as s,asValidOptions as o}from"./utils.js";import{findToFindRESTParameters as n}from"./operations/find.js";import e from"./support/FindParameters.js";import u from"./support/FindResult.js";async function m(u,m,i){m=e.from(m);const f=n(m),a=r(u);a.path+="/find";const c=s({...a.query,f:"json",...f}),l=o(c,i);return t(a.path,l).then(p)}function p(t){const r=t.data;r.results=r.results||[];const s={results:[]};return s.results=r.results.map((t=>u.fromJSON(t))),s}export{m as find};
