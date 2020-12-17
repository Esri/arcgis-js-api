/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/ObjectPool","../../../webgl/FramebufferObject"],(function(e,t,o){"use strict";let n=function(){function e(e){this.renderingContext=e,this._pools=new Map}var n=e.prototype;return n.acquire=function(e){return this.getPool(e).acquire()},n.release=function(e){this.getPool(e.width).release(e)},n.clear=function(){this._pools.forEach((e=>{e.destroy()})),this._pools.clear()},n.getPool=function(e){let n=this._pools.get(e);if(!n){const r=o.bind(o,this.renderingContext,{colorTarget:0,depthStencilTarget:1,width:e,height:e});n=new t(r),this._pools.set(e,n)}return n},e}();e.FBOPool=n,Object.defineProperty(e,"__esModule",{value:!0})}));
