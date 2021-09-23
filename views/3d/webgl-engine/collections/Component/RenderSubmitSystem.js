/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./DepthRange"],(function(e,t){"use strict";let i=function(){function e(e){this._objects=e}var i=e.prototype;return i.submit=function(e,t){this._objects.preSubmit(t),this._objects.visibleObjects.forAll((t=>t.renderable.material.submit(e,t)))},i.queryShadowCasterDepthRange=function(e){return this._objects.visibleObjects.length?t.computeDepthRange(e,this._objects.visibleObjects):null},e}();e.RenderSubmitSystem=i,Object.defineProperty(e,"__esModule",{value:!0})}));
