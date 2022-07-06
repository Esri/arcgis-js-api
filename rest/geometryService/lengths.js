/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../request.js";import{parseUrl as r,asValidOptions as o}from"../utils.js";import{lengthsToRESTParameters as s}from"../operations/lengths.js";import e from"../support/LengthsParameters.js";async function n(n,m,p){m=e.from(m);const a=s(m),f=r(n),i={...f.query,f:"json",...a},u=o(i,p);return t(f.path+"/lengths",u).then((({data:t})=>t))}export{n as lengths};
