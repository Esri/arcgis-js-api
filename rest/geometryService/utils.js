/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/jsonUtils"],(function(e,t){"use strict";e.decodeGeometries=function(e,o,r){const n=t.getGeometryType(o);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=r,t}))},e.encodeGeometries=function(e){return{geometryType:t.getJsonType(e[0]),geometries:e.map((e=>e.toJSON()))}},Object.defineProperty(e,"__esModule",{value:!0})}));
