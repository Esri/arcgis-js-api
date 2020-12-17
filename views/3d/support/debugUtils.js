/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../geometry/Point","../../../geometry","../../../symbols/SimpleMarkerSymbol","../../../chunks/symbols","../../../Graphic"],(function(e,i,t,o,r,s,n){"use strict";const c={red:[255,0,0],green:[0,255,0],blue:[0,0,255]};let h=function(){function e(e,i){this.graphics=e,this._symbol=new r({color:c[i],outline:{color:[255,255,255],width:2}})}var o=e.prototype;return o.showPoint=function(e,o){if(i.isNone(o))return;this.remove();const r=new t({x:e[0],y:e[1],z:e[2],spatialReference:o});this._graphic=new n({geometry:r,symbol:this._symbol}),this.graphics.add(this._graphic)},o.remove=function(){i.isSome(this._graphic)&&(this.graphics.remove(this._graphic),this._graphic=null)},e}();e.GraphicsHandle=h,Object.defineProperty(e,"__esModule",{value:!0})}));
