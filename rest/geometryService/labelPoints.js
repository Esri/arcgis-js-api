/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../request.js";import{fromJSON as e}from"../../geometry/support/jsonUtils.js";import{parseUrl as o,asValidOptions as s}from"../utils.js";function r(r,i,n){const p=i.map((t=>t.toJSON())),a=i[0].spatialReference,f=o(r),l={...f.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(p)},m=s(l,n);return t(f.path+"/labelPoints",m).then((({data:t})=>(t.labelPoints||[]).map((t=>e(t).set({spatialReference:a})))))}export{r as labelPoints};
