/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../core/arrayUtils","../../../../chunks/vec2"],(function(t,n,e){"use strict";let i=function(){function t(t,n,e=0){this.origin=t,this.angle=n,this.accumulationType=e}var i=t.prototype;return i.rotate=function(t,n){e.rotate(t.pos,t.pos,this.origin,n)},i.apply=function(t){this.rotate(t,this.angle)},i.undo=function(t){this.rotate(t,-this.angle)},i.canAccumulate=function(e){return e instanceof t&&n.equals(this.origin,e.origin)},i.accumulate=function(t,n){const e=1===n.accumulationType;this.rotate(t,e?n.angle-this.angle:n.angle)},i.accumulateParams=function(t){const n=1===t.accumulationType;this.angle=n?t.angle:this.angle+t.angle},t}();t.RotateVertex=i,Object.defineProperty(t,"__esModule",{value:!0})}));
