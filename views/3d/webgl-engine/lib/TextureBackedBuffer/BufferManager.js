/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./ManagedTextureBackedBuffer"],(function(e,t){"use strict";let f=function(){function e(e,t=1){this.rctx=e,this.fieldCount=t,this.buffers=[]}var f=e.prototype;return f.garbageCollect=function(){this.buffers=this.buffers.filter((e=>0!==e.activeCount||(e.dispose(),!1)))},f.destroy=function(){this.buffers.forEach((e=>e.dispose())),this.buffers=[]},f.getBuffer=function(e){for(const t of this.buffers)if(t.availableCount>=e)return t;if(e>t.MAX_INDEX_COUNT)return null;const f=new t.ManagedTextureBackedBuffer(this.rctx,this.fieldCount);return this.buffers.push(f),f},f.updateTextures=function(){for(const e of this.buffers)e.textureBuffer.updateTexture()},e}();e.BufferManager=f,Object.defineProperty(e,"__esModule",{value:!0})}));
