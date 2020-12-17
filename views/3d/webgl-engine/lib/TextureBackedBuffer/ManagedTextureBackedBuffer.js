/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./SimpleIndexManager","./TextureBackedBuffer"],(function(e,t,n,r){"use strict";let i=function(){function e(e,t=1){this.textureBuffer=new r.TextureBackedBuffer(e,t),this.indexManager=new n.SimpleIndexManager(65536)}var i=e.prototype;return i.dispose=function(){this.textureBuffer.dispose(),this.textureBuffer=void 0},i.acquireIndex=function(){const e=this.indexManager.acquire();return this.textureBuffer.resizeToFit(e),e},i.releaseIndex=function(e){this.indexManager.release(e)},t._createClass(e,[{key:"availableCount",get:function(){return this.indexManager.availableCount}},{key:"activeCount",get:function(){return this.indexManager.activeCount}}]),e}();e.MAX_INDEX_COUNT=65536,e.ManagedTextureBackedBuffer=i,Object.defineProperty(e,"__esModule",{value:!0})}));
