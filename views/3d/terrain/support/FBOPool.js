/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../core/ObjectPool","../../../webgl/FramebufferObject"],(function(e,t,o){"use strict";let r=function(){function e(e){this._rctx=e,this._pools=new Map}var r=e.prototype;return r.acquire=function(e){return this.getPool(e).acquire()},r.release=function(e){this.getPool(e.width).release(e)},r.clear=function(){this._pools.forEach((e=>e.destroy())),this._pools.clear()},r.getPool=function(e){let r=this._pools.get(e);if(!r){const i=o.bind(o,this._rctx,{colorTarget:0,depthStencilTarget:1,width:e,height:e});r=new t(i),this._pools.set(e,r)}return r},e}();e.FBOPool=r,Object.defineProperty(e,"__esModule",{value:!0})}));
