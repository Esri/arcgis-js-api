/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../core/mathUtils","./vec3f64","./vec3"],(function(t,e,n,o){"use strict";function r(t,e,n){const r=o.dot(t,e)/o.dot(t,t);return o.scale(n,t,r)}function c(t,e){return o.dot(t,e)/o.length(t)}function i(t,n){const r=o.dot(t,n)/(o.length(t)*o.length(n));return-e.acosClamped(r)}function a(t,n,r){o.normalize(l,t),o.normalize(s,n);const c=o.dot(l,s),i=e.acosClamped(c),a=o.cross(l,l,s);return o.dot(a,r)<0?2*Math.PI-i:i}const l=n.create(),s=n.create();var d=Object.freeze({__proto__:null,projectPoint:r,projectPointSignedLength:c,angle:i,angleAroundAxis:a});t.angle=i,t.angleAroundAxis=a,t.projectPoint=r,t.projectPointSignedLength=c,t.vectorModule=d}));
