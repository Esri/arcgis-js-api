/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{create as r}from"../../../../geometry/support/ray.js";import{h as o}from"../../../../chunks/sphere.js";import{fromScreenAtEye as t}from"./ray.js";function s(r,s,p,e){const n=t(s,p,m);return o(r,n,e)}const m=r();export{s as intersectScreen};
