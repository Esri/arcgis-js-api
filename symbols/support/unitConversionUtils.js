/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{meterIn as t}from"../../renderers/support/lengthUtils.js";function n(n){return null!=t[n]}function r(n){return 1/(t[n]||1)}function e(){const n=Object.keys(t);return n.sort(),n}const o=e();export{r as getMetersPerUnit,o as supportedUnits,n as supportsUnit};
