/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{elementTypeSize as e}from"./types.js";export{m as mat3}from"../../../chunks/mat32.js";export{m as mat4}from"../../../chunks/mat42.js";export{s as scalar}from"../../../chunks/scalar.js";export{v as vec2}from"../../../chunks/vec22.js";export{v as vec3}from"../../../chunks/vec33.js";export{v as vec4}from"../../../chunks/vec43.js";function r(s,r){return new s(new ArrayBuffer(r*s.ElementCount*e(s.ElementType)))}export{r as createBuffer};
