/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3f64","../../../../geometry/projectionEllipsoid","../../../../geometry/projection","../../../../chunks/mat4f64"],(function(t,e,o,n,a){"use strict";function r(t,n,a){const r=e.create(),c=t[3],i=2**(4*Math.ceil(Math.log(c)*Math.LOG2E/4)+1);if(a.isGeographic){const e=i/o.getReferenceEllipsoid(a).radius*180/Math.PI,n=Math.round(t[1]/e),c=Math.max(-90,Math.min(90,n*e)),s=e/Math.cos((Math.abs(c)-e/2)/180*Math.PI),u=Math.round(t[0]/s)*s;r[0]=u,r[1]=c}else{const e=Math.round(t[0]/i),o=Math.round(t[1]/i);r[0]=e*i,r[1]=o*i}const s=t[2]+n,u=Math.round(s/i);return r[2]=u*i,r}t.computeGlobalTransformation=function(t,e,o,c){const i=r(t,e,o),s=a.create();return n.computeLinearTransformation(o,i,s,c),s},t.getLocalOrigin=r,Object.defineProperty(t,"__esModule",{value:!0})}));
