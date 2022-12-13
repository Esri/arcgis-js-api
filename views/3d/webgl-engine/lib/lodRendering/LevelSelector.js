/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../Camera"],(function(e,t){"use strict";let r=function(){function e(e,r){this.thresholdScale=1,this._camera=new t.Camera,this._worldSpaceRadius=e,this._thresholds=r.map((e=>e))}var r=e.prototype;return r.updateCamera=function(e){this._camera.copyFrom(e)},r.selectLevel=function(e,t){const r=this._camera.computeScreenPixelSizeAt(e),o=this._worldSpaceRadius*t/r,a=this._thresholds;let s=-1;for(let i=0;i<a.length;++i)o>=a[i]*this.thresholdScale&&(s=i);return s},e}();e.LevelSelector=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
