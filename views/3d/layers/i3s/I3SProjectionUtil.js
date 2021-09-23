/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/mat4f64","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../geometry/projectionEllipsoid"],(function(t,o,e,n,a){"use strict";function r(t,e,a,r){const c=s(t,e,a),i=o.create();return n.computeTranslationToOriginAndRotation(a,c,i,r),i}const c=1,i=5-c;function s(t,o,n){const r=e.create(),s=t[3],u=2**(Math.ceil(Math.log(s)*Math.LOG2E/i)*i+c);if(n.isGeographic){const o=u/a.getReferenceEllipsoid(n).radius*180/Math.PI,e=Math.round(t[1]/o),c=Math.max(-90,Math.min(90,e*o)),i=o/Math.cos((Math.abs(c)-o/2)/180*Math.PI),s=Math.round(t[0]/i)*i;r[0]=s,r[1]=c}else{const o=Math.round(t[0]/u),e=Math.round(t[1]/u);r[0]=o*u,r[1]=e*u}const h=t[2]+o,M=Math.round(h/u);return r[2]=M*u,r}t.computeGlobalTransformation=r,t.getLocalOrigin=s,Object.defineProperty(t,"__esModule",{value:!0})}));
