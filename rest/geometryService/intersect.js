/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/jsonUtils","../../request","../utils","./utils"],(function(e,t,s,r,i){"use strict";e.intersect=async function(e,n,o,a){const p=n[0].spatialReference,y=r.parseUrl(e),c={...y.query,f:"json",sr:JSON.stringify(p.toJSON()),geometries:JSON.stringify(i.encodeGeometries(n)),geometry:JSON.stringify({geometryType:t.getJsonType(o),geometry:o.toJSON()})},f=r.asValidOptions(c,a);return s(y.path+"/intersect",f).then((({data:e})=>(e.geometries||[]).map((e=>t.fromJSON(e).set({spatialReference:p})))))},Object.defineProperty(e,"__esModule",{value:!0})}));
