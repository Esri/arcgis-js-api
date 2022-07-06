/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{acosClamped as o}from"../../../../core/mathUtils.js";import{b as s,l as t,e as r}from"../../../../chunks/vec3.js";import{c}from"../../../../chunks/vec3f64.js";function n(c,n,e){c.worldUpAtPosition(n,i),s(m,e,n);const a=t(m);return 0===a?0:o(r(m,i)/a)}const i=c(),m=c();export{n as viewAngle};
