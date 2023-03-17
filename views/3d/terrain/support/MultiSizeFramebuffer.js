/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../webgl/enums","../../../webgl/FramebufferObject"],(function(t,e,r){"use strict";let o=function(){function t(t){this._rctx=t,this._fbos=new Map}var o=t.prototype;return o.get=function(t){return this._getPool(t)},o.dispose=function(){this._fbos.forEach((t=>t.dispose())),this._fbos.clear()},o._getPool=function(t){const o=this._fbos.get(t);if(o)return o;const i=new r.FramebufferObject(this._rctx,{colorTarget:e.TargetType.TEXTURE,depthStencilTarget:e.DepthStencilTargetType.DEPTH_RENDER_BUFFER,width:t,height:t});return this._fbos.set(t,i),i},t}();t.MultiSizeFramebuffer=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
