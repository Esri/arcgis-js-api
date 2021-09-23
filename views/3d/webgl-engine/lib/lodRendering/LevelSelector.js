/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../Camera"],(function(e,t){"use strict";let r=function(){function e(e,r){this.thresholdScale=1,this._camera=new t,this._worldSpaceRadius=e,this._thresholds=r.map((e=>e))}var r=e.prototype;return r.updateCamera=function(e){this._camera.copyFrom(e)},r.selectLevel=function(e,t){const r=this._camera.computeScreenPixelSizeAt(e),s=this._worldSpaceRadius*t/r,o=this._thresholds;let i=-1;for(let a=0;a<o.length;++a)s>=o[a]*this.thresholdScale&&(i=a);return i},e}();e.LevelSelector=r,Object.defineProperty(e,"__esModule",{value:!0})}));
