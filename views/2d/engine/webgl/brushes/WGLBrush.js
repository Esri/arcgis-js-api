/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define((function(){"use strict";return function(){function n(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}var t=n.prototype;return t.prepareState=function(n,t){},t.draw=function(n,t,r){},t.drawMany=function(n,t,r){for(const e of t)e.visible&&this.draw(n,e,r)},n}()}));
