/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","../../chunks/vec3","../../chunks/vec3f64"],(function(e,t,n,o){"use strict";function c(e,t,o){const c=n.dot(e,t)/n.dot(e,e);return n.scale(o,e,c)}function r(e,t){return n.dot(e,t)/n.length(e)}function s(e,o){const c=n.dot(e,o)/(n.length(e)*n.length(o));return-t.acosClamped(c)}function i(e,o,c){n.normalize(u,e),n.normalize(a,o);const r=n.dot(u,a),s=t.acosClamped(r),i=n.cross(u,u,a);return n.dot(i,c)<0?2*Math.PI-s:s}const u=o.create(),a=o.create();e.angle=s,e.angleAroundAxis=i,e.projectPoint=c,e.projectPointSignedLength=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
