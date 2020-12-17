/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/jsonUtils","../../request","../utils","./utils"],(function(e,t,r,s,i){"use strict";e.difference=async function(e,n,o,f){const y=n[0].spatialReference,u=s.parseUrl(e);let a={query:{...u.query,f:"json",sr:JSON.stringify(y.toJSON()),geometries:JSON.stringify(i.encodeGeometries(n)),geometry:JSON.stringify({geometryType:t.getJsonType(o),geometry:o.toJSON()})}};return f&&(a={...f,...a}),r(u.path+"/difference",a).then((({data:e})=>(e.geometries||[]).map((e=>t.fromJSON(e).set({spatialReference:y})))))},Object.defineProperty(e,"__esModule",{value:!0})}));
