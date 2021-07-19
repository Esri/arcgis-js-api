/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./UpdateVertices"],(function(t,e,i){"use strict";let n=function(t){function i(e,i,n,s){var o;return(o=t.call(this,e)||this).dx=i,o.dy=n,o.dz=s,o}e._inheritsLoose(i,t);var n=i.prototype;return n.move=function(t,e,i,n){this.helper.addDelta(t.pos,e,i,n)},n.apply=function(t){this.move(t,this.dx,this.dy,this.dz)},n.undo=function(t){this.move(t,-this.dx,-this.dy,-this.dz)},n.canAccumulate=function(t){return t instanceof i},n.accumulate=function(t,e){this.move(t,e.dx,e.dy,e.dz)},n.accumulateParams=function(t){this.dx+=t.dx,this.dy+=t.dy,this.dz+=t.dz},i}(i.PerVertexOperation);t.MoveVertex=n,Object.defineProperty(t,"__esModule",{value:!0})}));
