/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../../../../../chunks/vec3f64","../../../../webgl/doublePrecisionUtils"],(function(e,t,n,o){"use strict";function r(e,n){return t.isNone(e)&&(e=[]),e.push(n),e}function c(e,n){if(t.isNone(e))return null;const o=e.filter((e=>e!==n));return 0===o.length?null:o}function s(e,t,n,r,c){u[0]=e.get(t,0),u[1]=e.get(t,1),u[2]=e.get(t,2),o.encodeDoubleArray(u,i,3),n.set(c,0,i[0]),r.set(c,0,i[1]),n.set(c,1,i[2]),r.set(c,1,i[3]),n.set(c,2,i[4]),r.set(c,2,i[5])}const u=n.create(),i=new Float32Array(6);e.addObject3DStateID=r,e.encodeDoubleVec3=s,e.removeObject3DStateID=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
