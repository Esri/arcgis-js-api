/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../request.js";import{parseUrl as n,asValidOptions as o}from"../utils.js";async function r(r,s,e){const a=n(r),i={...a.query,f:"json",...s.toJSON()},c=o(i,e);return t(a.path+"/distance",c).then((({data:t})=>t&&t.distance))}export{r as distance};
