/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3f64","../../../../geometry/projectionEllipsoid","../../../../geometry/projection","../../../../chunks/mat4f64"],(function(t,e,o,n,a){"use strict";function r(t,e,o,r){const c=s(t,e,o),i=a.create();return n.computeLinearTransformation(o,c,i,r),i}const c=1,i=5-c;function s(t,n,a){const r=e.create(),s=t[3],u=2**(Math.ceil(Math.log(s)*Math.LOG2E/i)*i+c);if(a.isGeographic){const e=u/o.getReferenceEllipsoid(a).radius*180/Math.PI,n=Math.round(t[1]/e),c=Math.max(-90,Math.min(90,n*e)),i=e/Math.cos((Math.abs(c)-e/2)/180*Math.PI),s=Math.round(t[0]/i)*i;r[0]=s,r[1]=c}else{const e=Math.round(t[0]/u),o=Math.round(t[1]/u);r[0]=e*u,r[1]=o*u}const h=t[2]+n,M=Math.round(h/u);return r[2]=M*u,r}t.computeGlobalTransformation=r,t.getLocalOrigin=s,Object.defineProperty(t,"__esModule",{value:!0})}));
