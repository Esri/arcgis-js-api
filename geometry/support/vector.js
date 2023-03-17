/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","../../chunks/vec3","../../chunks/vec3f64"],(function(t,e,n,o){"use strict";function c(t,e,o){const c=n.dot(t,e)/n.dot(t,t);return n.scale(o,t,c)}function r(t,e){return n.dot(t,e)/n.length(t)}function i(t,o){const c=n.dot(t,o)/(n.length(t)*n.length(o));return-e.acosClamped(c)}function s(t,o,c){n.normalize(a,t),n.normalize(u,o);const r=n.dot(a,u),i=e.acosClamped(r),s=n.cross(a,a,u);return n.dot(s,c)<0?2*Math.PI-i:i}const a=o.create(),u=o.create();t.angle=i,t.angleAroundAxis=s,t.projectPoint=c,t.projectPointSignedLength=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
