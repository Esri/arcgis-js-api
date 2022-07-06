/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../request.js";import{associationTypeKebabDict as e}from"../../networks/support/typeUtils.js";import{parseUrl as o,encode as r,asValidOptions as s}from"../utils.js";import n from"./support/QueryAssociationsResult.js";function i(t){const{returnDeletes:o,elements:r,gdbVersion:s,moment:n}=t.toJSON();return{returnDeletes:o,elements:JSON.stringify(r.map((t=>({globalId:t.globalId,networkSourceId:t.networkSourceId,terminalId:t.terminalId})))),types:JSON.stringify(t.associationTypes.map((t=>e.toJSON(t)))),gdbVersion:s,moment:n}}async function m(e,m,u){const a=o(e),p={...i(m),f:"json"},l=r({...a.query,...p}),f=s(l,{...u,method:"post"}),c=`${a.path}/associations/query`,{data:d}=await t(c,f);if(!d)return null;return n.fromJSON(d)}export{m as queryAssociations};
