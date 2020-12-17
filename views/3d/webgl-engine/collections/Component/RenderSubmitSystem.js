/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./DepthRange"],(function(e,t){"use strict";let s=function(){function e(e){this._objects=e}var s=e.prototype;return s.submit=function(e,t){this._objects.preSubmit(t);const s=this._objects.visibleObjects;for(let t=0;t<s.length;t++){const i=s[t];i.renderable.material.submit(e,i)}},s.queryShadowCasterDepthRange=function(e){return this._objects.visibleObjects.length?t.computeDepthRange(e,this._objects.visibleObjects):null},e}();e.RenderSubmitSystem=s,Object.defineProperty(e,"__esModule",{value:!0})}));
