/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/mat4f64","../../../../chunks/vec3f64","../../../../geometry/ellipsoidUtils","../../../../geometry/projection"],(function(t,o,e,n,a){"use strict";function r(t,e,n,r){const i=s(t,e,n),c=o.create();return a.computeTranslationToOriginAndRotation(n,i,c,r),c}const i=1,c=5-i;function s(t,o,a){const r=e.create(),s=t[3],u=2**(Math.ceil(Math.log(s)*Math.LOG2E/c)*c+i);if(a.isGeographic){const o=u/n.getReferenceEllipsoid(a).radius*180/Math.PI,e=Math.round(t[1]/o),i=Math.max(-90,Math.min(90,e*o)),c=o/Math.cos((Math.abs(i)-o/2)/180*Math.PI),s=Math.round(t[0]/c)*c;r[0]=s,r[1]=i}else{const o=Math.round(t[0]/u),e=Math.round(t[1]/u);r[0]=o*u,r[1]=e*u}const h=t[2]+o,l=Math.round(h/u);return r[2]=l*u,r}t.computeGlobalTransformation=r,t.getLocalOrigin=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
