/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../request.js";import{parseUrl as t,encode as r,asValidOptions as o}from"../utils.js";import a from"./support/TraceResult.js";async function n(a,n,g){const i=t(a),c=n.toJSON();c.traceLocations=JSON.stringify(n.traceLocations),n.resultTypes&&(c.resultTypes=JSON.stringify(n.resultTypes));const l={...c,f:"json"},p=r({...i.query,...l}),u=o(p,g),m=`${i.path}/trace`;return e(m,u).then((e=>s(e,n.outSpatialReference)))}function s(e,t){const{data:r}=e;if(!r)return null;const o=a.fromJSON(r.traceResults);return o.aggregatedGeometry&&t&&(o.aggregatedGeometry.line&&(o.aggregatedGeometry.line.spatialReference=t.clone()),o.aggregatedGeometry.multipoint&&(o.aggregatedGeometry.multipoint.spatialReference=t.clone()),o.aggregatedGeometry.polygon&&(o.aggregatedGeometry.polygon.spatialReference=t.clone())),o}export{n as trace};
