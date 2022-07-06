/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../request.js";import{parseUrl as r,asValidOptions as n}from"../utils.js";async function o(o,s,e){const a=r(o),u={...a.query,f:"json",...s.toJSON()},f=n(u,e);return t(a.path+"/areasAndLengths",f).then((t=>t.data))}export{o as areasAndLengths};
