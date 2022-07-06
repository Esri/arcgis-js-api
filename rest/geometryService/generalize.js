/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../request.js";import{fromJSON as r}from"../../geometry/support/jsonUtils.js";import{parseUrl as t,asValidOptions as o}from"../utils.js";import{generalizeToRESTParameters as s}from"../operations/generalize.js";import i from"../support/GeneralizeParameters.js";async function m(m,a,p){const n=(a=i.from(a)).toJSON(),f=s(a),j=t(m),l={...j.query,f:"json",...f},u=n.geometries[0].spatialReference,c=o(l,p);return e(j.path+"/generalize",c).then((({data:e})=>(e.geometries||[]).map((e=>r(e).set({spatialReference:u})))))}export{m as generalize};
