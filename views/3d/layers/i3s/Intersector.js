/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{IntersectorType as e}from"../../webgl-engine/lib/IntersectorInterfaces.js";import{isValidIntersectorResult as t}from"../../webgl-engine/lib/intersectorUtils.js";function r(r){return t(r)&&r.intersector===e.PCL&&!!r.target}function n(r){return t(r)&&r.intersector===e.I3S&&!!r.target}export{n as isI3sIntersectorResult,r as isPclIntersectorResult};
