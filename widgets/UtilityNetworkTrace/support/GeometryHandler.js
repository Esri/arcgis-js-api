/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{cut as e,planarLength as t}from"../../../geometry/geometryEngine.js";import r from"../../../geometry/Polyline.js";import{project as n,load as o}from"../../../geometry/projection.js";class s{getPercentageAlong(r,o,s){let i=r;const a=this._createPolyline(r.paths,s.wkid);if("point"===o.type){const r=o.x-50,c=o.x+50,l=[[r,o.y-50],[c,o.y+50]];i=this._createPolyline(l,o.spatialReference.wkid);i=n(i,s);const p=e(a,i);if(p.length>0){const e=t(a,"feet");let r;r=p[0].paths[0][0][0]===a.paths[0][0][0]?t(p[0],"feet"):t(p[1],"feet");return[r/e]}return[.5]}i=n(o,s);const c=e(a,i);if(c.length>0){const e=t(a,"feet");return[t(c[0],"feet")/e]}return[.5]}async projectGeometry(e,t){return await o(),n(e,t)}_createPolyline(e,t){return new r({hasZ:!1,hasM:!0,paths:e,spatialReference:{wkid:t}})}}export{s as GeometryHandler};
