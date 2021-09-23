/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","../../chunks/vec3","../../chunks/vec3f64"],(function(t,e,n,o){"use strict";function c(t,e,o){const c=n.dot(t,e)/n.dot(t,t);return n.scale(o,t,c)}function r(t,e){return n.dot(t,e)/n.length(t)}function s(t,o){const c=n.dot(t,o)/(n.length(t)*n.length(o));return-e.acosClamped(c)}function i(t,o,c){n.normalize(u,t),n.normalize(a,o);const r=n.dot(u,a),s=e.acosClamped(r),i=n.cross(u,u,a);return n.dot(i,c)<0?2*Math.PI-s:s}const u=o.create(),a=o.create();t.angle=s,t.angleAroundAxis=i,t.projectPoint=c,t.projectPointSignedLength=r,Object.defineProperty(t,"__esModule",{value:!0})}));
