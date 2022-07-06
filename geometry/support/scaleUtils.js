/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{inchesPerMeter as t,getMetersPerUnitForSR as n}from"../../core/unitUtils.js";const e=96;function r(r,i){const o=i||r.extent,c=r.width,u=n(o&&o.spatialReference);return o&&c?o.width/c*u*t*e:0}function i(r,i){return r/(n(i)*t*e)}function o(r,i){return r*(n(i)*t*e)}function c(t,n){const e=t.extent,r=t.width,o=i(n,e.spatialReference);return e.clone().expand(o*r/e.width)}export{c as getExtentForScale,i as getResolutionForScale,r as getScale,o as getScaleForResolution};
