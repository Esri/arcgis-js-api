/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/Polygon","../../geometry","../../request","../utils"],(function(e,t,r,n,s){"use strict";e.buffer=async function(e,r,o){const a=s.parseUrl(e),i={...a.query,f:"json",...r.toJSON()},f=r.outSpatialReference||r.geometries[0].spatialReference,u=s.asValidOptions(i,o);return n(a.path+"/buffer",u).then((e=>(e.data.geometries||[]).map((({rings:e})=>new t({spatialReference:f,rings:e})))))},Object.defineProperty(e,"__esModule",{value:!0})}));
