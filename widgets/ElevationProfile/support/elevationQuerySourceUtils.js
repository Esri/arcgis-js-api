/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../../Ground.js";import{last as n,min as t}from"../../../core/arrayUtils.js";import{isNone as o,isSome as e}from"../../../core/maybe.js";import{getMetersPerUnitForSR as i}from"../../../core/unitUtils.js";function l(t){if(o(t))return null;if(t instanceof r)return u(t);const e=t.tileInfo;if(o(e))return null;const l=n(e.lods);return o(l)?null:l.resolution*i(e.spatialReference)}function u(r){if(o(r))return null;const n=r.layers.items.map(f).filter(e);return t(n)??null}function f(r){return"tileInfo"in r?l(r):null}export{u as getGroundMinDemResolution,l as getQuerySourceMinDemResolution};
