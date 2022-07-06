/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as t}from"../../../../chunks/mat4f64.js";import{c as o}from"../../../../chunks/vec3f64.js";import{computeTranslationToOriginAndRotation as r}from"../../../../geometry/projection.js";import{getReferenceEllipsoid as n}from"../../../../geometry/projectionEllipsoid.js";function a(o,n,a,s){const c=h(o,n,a),i=t();return r(a,c,i,s),i}const s=1,c=5-s;function h(t,r,a){const h=o(),i=t[3],e=2**(Math.ceil(Math.log(i)*Math.LOG2E/c)*c+s);if(a.isGeographic){const o=e/n(a).radius*180/Math.PI,r=Math.round(t[1]/o),s=Math.max(-90,Math.min(90,r*o)),c=o/Math.cos((Math.abs(s)-o/2)/180*Math.PI),i=Math.round(t[0]/c)*c;h[0]=i,h[1]=s}else{const o=Math.round(t[0]/e),r=Math.round(t[1]/e);h[0]=o*e,h[1]=r*e}const M=t[2]+r,m=Math.round(M/e);return h[2]=m*e,h}export{a as computeGlobalTransformation,h as getLocalOrigin};
