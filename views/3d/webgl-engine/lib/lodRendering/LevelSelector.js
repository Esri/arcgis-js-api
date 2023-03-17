/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=function(){function e(e,t){this._worldSpaceRadius=e,this._minScreenSpaceRadii=t}return e.prototype.selectLevel=function(e,t,i){const n=i.computeScreenPixelSizeAt(e),c=this._worldSpaceRadius*t/n;let r=0;for(let o=1;o<this._minScreenSpaceRadii.length;++o)c>=this._minScreenSpaceRadii[o]&&(r=o);return r},e}();e.LevelSelector=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
