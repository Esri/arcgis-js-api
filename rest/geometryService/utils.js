/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getJsonType as e,getGeometryType as t}from"../../geometry/support/jsonUtils.js";function r(t){return{geometryType:e(t[0]),geometries:t.map((e=>e.toJSON()))}}function o(e,r,o){const n=t(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}export{o as decodeGeometries,r as encodeGeometries};
