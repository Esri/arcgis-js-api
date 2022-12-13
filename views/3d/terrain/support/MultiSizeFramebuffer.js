/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../webgl/enums","../../../webgl/FramebufferObject"],(function(e,t,o){"use strict";let r=function(){function e(e){this._rctx=e,this._fbos=new Map}var r=e.prototype;return r.get=function(e){return this._getPool(e)},r.dispose=function(){this._fbos.forEach((e=>e.dispose())),this._fbos.clear()},r._getPool=function(e){const r=this._fbos.get(e);if(r)return r;const i=new o.FramebufferObject(this._rctx,{colorTarget:t.TargetType.TEXTURE,depthStencilTarget:t.DepthStencilTargetType.DEPTH_RENDER_BUFFER,width:e,height:e});return this._fbos.set(e,i),i},e}();e.MultiSizeFramebuffer=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
