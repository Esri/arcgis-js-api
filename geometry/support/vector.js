/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{acosClamped as n}from"../../core/mathUtils.js";import{e as t,g as o,l as r,n as s,f as c}from"../../chunks/vec3.js";import{c as u}from"../../chunks/vec3f64.js";function e(n,r,s){const c=t(n,r)/t(n,n);return o(s,n,c)}function f(n,o){return t(n,o)/r(n)}function a(o,s){const c=t(o,s)/(r(o)*r(s));return-n(c)}function i(o,r,u){s(m,o),s(h,r);const e=t(m,h),f=n(e),a=c(m,m,h);return t(a,u)<0?2*Math.PI-f:f}const m=u(),h=u();export{a as angle,i as angleAroundAxis,e as projectPoint,f as projectPointSignedLength};
