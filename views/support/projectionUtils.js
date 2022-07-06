/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{throwIfAborted as e}from"../../core/promiseUtils.js";import{isLoaded as r,canProjectWithoutEngine as t,project as o,load as i}from"../../geometry/projection.js";let n,s=null;async function c(r){s||(s=import("../../portal/support/geometryServiceUtils.js").then((e=>n=e))),await s,e(r)}async function p(e,s,a,m){if(!e)return null;const l=e.spatialReference;return r()||t(l,s)?o(e,s):n?n.projectGeometry(e,s,a,m):(await Promise.race([c(m),i(m)]),p(e,s,a,m))}export{p as projectWithEngineOrService};
