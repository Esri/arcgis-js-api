/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/ObjectPool","../../../webgl/enums","../../../webgl/FramebufferObject"],(function(e,t,o,r){"use strict";let i=function(){function e(e){this._rctx=e,this._pools=new Map}var i=e.prototype;return i.acquire=function(e){return this._getPool(e).acquire()},i.release=function(e){this._getPool(e.width).release(e)},i.clear=function(){this._pools.forEach((e=>e.destroy())),this._pools.clear()},i._getPool=function(e){let i=this._pools.get(e);if(!i){const n=r.FramebufferObject.bind(r.FramebufferObject,this._rctx,{colorTarget:o.TargetType.TEXTURE,depthStencilTarget:o.DepthStencilTargetType.DEPTH_RENDER_BUFFER,width:e,height:e});i=new t(n),this._pools.set(e,i)}return i},e}();e.FBOPool=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
