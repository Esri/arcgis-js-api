/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec2f64","../../../../chunks/vec2"],(function(t,e,n){"use strict";function c(t,e,c){const r=n.dot(c,e)/n.squaredLength(c);return n.scale(t,c,r)}const r=e.create(),o=e.create(),s=e.create();t.cross=function(t,e){return t[0]*e[1]-t[1]*e[0]},t.pointToLineDistance=function(t,e,c){const r=(e[0]-t[0])*(c[1]-t[1])-(e[1]-t[1])*(c[0]-t[0]);return Math.abs(r)/n.distance(e,c)},t.projectPoint=c,t.projectPointToCircle=function(t,e,c,o){n.subtract(r,e,c);const s=o/n.length(r);return n.scaleAndAdd(t,c,r,s)},t.projectPointToLine=function(t,e,u,i,a=u){return n.subtract(r,i,u),n.subtract(o,e,a),c(s,o,r),n.add(t,a,s)},Object.defineProperty(t,"__esModule",{value:!0})}));
