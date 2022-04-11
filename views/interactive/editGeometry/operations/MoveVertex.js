/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=function(){function t(t,e,i,n){this.helper=t,this.dx=e,this.dy=i,this.dz=n}var e=t.prototype;return e._move=function(t,e,i,n){this.helper.addDelta(t.pos,e,i,n)},e.apply=function(t){this._move(t,this.dx,this.dy,this.dz)},e.undo=function(t){this._move(t,-this.dx,-this.dy,-this.dz)},e.canAccumulate=function(e){return e instanceof t},e.accumulate=function(t,e){this._move(t,e.dx,e.dy,e.dz)},e.accumulateParams=function(t){this.dx+=t.dx,this.dy+=t.dy,this.dz+=t.dz},t}();t.MoveVertex=e,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
