/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./ManagedTextureBackedBuffer"],(function(e,t){"use strict";let f=function(){function e(e,t=1){this._rctx=e,this._fieldCount=t,this._buffers=[]}var f=e.prototype;return f.garbageCollect=function(){this._buffers=this._buffers.filter((e=>0!==e.activeCount||(e.dispose(),!1)))},f.destroy=function(){this._buffers.forEach((e=>e.dispose())),this._buffers=[]},f.getBuffer=function(e){for(const t of this._buffers)if(t.availableCount>=e)return t;if(e>t.MAX_INDEX_COUNT)return null;const f=new t.ManagedTextureBackedBuffer(this._rctx,this._fieldCount);return this._buffers.push(f),f},f.updateTextures=function(){for(const e of this._buffers)e.textureBuffer.updateTexture()},e}();e.BufferManager=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
