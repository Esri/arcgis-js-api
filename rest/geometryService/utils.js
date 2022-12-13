/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/jsonUtils"],(function(e,t){"use strict";function o(e){return{geometryType:t.getJsonType(e[0]),geometries:e.map((e=>e.toJSON()))}}function r(e,o,r){const n=t.getGeometryType(o);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=r,t}))}e.decodeGeometries=r,e.encodeGeometries=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
