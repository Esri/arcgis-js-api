/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../../core/maybe.js";import{throwIfAborted as r}from"../../core/promiseUtils.js";import t from"../Mesh.js";import{georeference as o,ungeoreference as n}from"./meshUtils/georeference.js";import{merge as s}from"./meshUtils/merge.js";async function i(e,t,o){const n=await import("./meshUtils/elevation.js");return r(o),n.create(e,t,o)}async function m(e,r){await e.load();return(await import("./meshUtils/elevationSampler.js")).create(e,r)}function a(e,r,t){return o(e,r,t)}function c(e,r,t){return n(e,r,t)}function f(r){const o=s(r);return e(o)?new t(o):null}export{m as createElevationSampler,i as createFromElevation,a as georeference,f as merge,c as ungeoreference};
