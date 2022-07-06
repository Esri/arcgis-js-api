/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{MAX_INDEX_COUNT as t,ManagedTextureBackedBuffer as e}from"./ManagedTextureBackedBuffer.js";class r{constructor(t,e=1){this.rctx=t,this.fieldCount=e,this.buffers=[]}garbageCollect(){this.buffers=this.buffers.filter((t=>0!==t.activeCount||(t.dispose(),!1)))}destroy(){this.buffers.forEach((t=>t.dispose())),this.buffers=[]}getBuffer(r){for(const t of this.buffers)if(t.availableCount>=r)return t;if(r>t)return null;const s=new e(this.rctx,this.fieldCount);return this.buffers.push(s),s}updateTextures(){for(const t of this.buffers)t.textureBuffer.updateTexture()}}export{r as BufferManager};
