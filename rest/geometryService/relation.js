/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../request.js";import{parseUrl as o,asValidOptions as t}from"../utils.js";import{relationToRESTParameters as e}from"../operations/relation.js";import s from"../support/RelationParameters.js";async function n(n,a,i){a=s.from(a);const m=e(a),p=o(n),f={...p.query,f:"json",...m},u=t(f,i);return r(p.path+"/relation",u).then((({data:r})=>r.relations))}export{n as relation};
