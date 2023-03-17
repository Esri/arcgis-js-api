/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let i=function(){function t(t,i,e,n){this._helper=t,this.dx=i,this.dy=e,this.dz=n}var i=t.prototype;return i._move=function(t,i,e,n){this._helper.addDelta(t.pos,i,e,n)},i.apply=function(t){this._move(t,this.dx,this.dy,this.dz)},i.undo=function(t){this._move(t,-this.dx,-this.dy,-this.dz)},i.canAccumulate=function(i){return i instanceof t},i.accumulate=function(t,i){this._move(t,i.dx,i.dy,i.dz)},i.accumulateParams=function(t){this.dx+=t.dx,this.dy+=t.dy,this.dz+=t.dz},t}();t.MoveVertex=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
