/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{SimpleIndexManager as e}from"./SimpleIndexManager.js";import{TextureBackedBuffer as t}from"./TextureBackedBuffer.js";const r=65536;class i{constructor(i,a=1){this.textureBuffer=new t(i,a),this.indexManager=new e(r)}dispose(){this.textureBuffer.dispose(),this.textureBuffer=void 0}get availableCount(){return this.indexManager.availableCount}get activeCount(){return this.indexManager.activeCount}acquireIndex(){const e=this.indexManager.acquire();return this.textureBuffer.resizeToFit(e),e}releaseIndex(e){this.indexManager.release(e)}}export{r as MAX_INDEX_COUNT,i as ManagedTextureBackedBuffer};
