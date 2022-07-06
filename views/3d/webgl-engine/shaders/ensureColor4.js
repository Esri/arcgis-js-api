/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as o}from"../../../../core/maybe.js";import{s as r}from"../../../../chunks/vec4.js";import{Z as s,c}from"../../../../chunks/vec4f64.js";function t(c){return o(c)?s:4===c.length?c:r(e,c[0],c[1],c[2],1)}const e=c();export{t as ensureColor4};
