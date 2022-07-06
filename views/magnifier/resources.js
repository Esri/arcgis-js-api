/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{throwIfAborted as a}from"../../core/promiseUtils.js";import{requestImage as t}from"../../support/requestImageUtils.js";async function s(s){const r=import("./mask-svg.js"),i=import("./overlay-svg.js"),o=t((await r).default,{signal:s}),e=t((await i).default,{signal:s}),m={mask:await o,overlay:await e};return a(s),m}export{s as loadMagnifierResources};
