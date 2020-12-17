/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/jsonUtils","../../geometry","../../request","../utils"],(function(e,t,r,s,n){"use strict";e.cut=async function(e,r,i,o){const u=n.parseUrl(e),a=r[0].spatialReference,c={...o,query:{...u.query,f:"json",sr:JSON.stringify(a),target:JSON.stringify({geometryType:t.getJsonType(r[0]),geometries:r}),cutter:JSON.stringify(i)}},y=await s(u.path+"/cut",c),{cutIndexes:f,geometries:g=[]}=y.data;return{cutIndexes:f,geometries:g.map((e=>{const r=t.fromJSON(e);return r.spatialReference=a,r}))}},Object.defineProperty(e,"__esModule",{value:!0})}));
