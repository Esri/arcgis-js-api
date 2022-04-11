/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../Camera"],(function(e,t){"use strict";let r=function(){function e(e,r){this.thresholdScale=1,this._camera=new t.default,this._worldSpaceRadius=e,this._thresholds=r.map((e=>e))}var r=e.prototype;return r.updateCamera=function(e){this._camera.copyFrom(e)},r.selectLevel=function(e,t){const r=this._camera.computeScreenPixelSizeAt(e),o=this._worldSpaceRadius*t/r,s=this._thresholds;let a=-1;for(let i=0;i<s.length;++i)o>=s[i]*this.thresholdScale&&(a=i);return a},e}();e.LevelSelector=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
