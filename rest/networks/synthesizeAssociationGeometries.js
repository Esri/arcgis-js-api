/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../request.js";import{parseUrl as o,encode as e,asValidOptions as s}from"../utils.js";import n from"./support/AssociationGeometriesResult.js";async function r(n,r,c){const f=o(n),a={...r.toJSON(),f:"json"},m=e({...f.query,...a});c?c.method="post":c={method:"post"};const u=s(m,c),p=`${f.path}/synthesizeAssociationGeometries`;return t(p,u).then((t=>i(t,r.outSpatialReference)))}function i(t,o){const{data:e}=t;if(!e)return null;const s=n.fromJSON(e);if(o)for(const n of s.associations)n.geometry.spatialReference=o.clone();return s}export{r as synthesizeAssociationGeometries};
