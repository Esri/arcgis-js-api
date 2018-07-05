// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./SimpleIndexManager","./TextureBackedBuffer"],function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_INDEX_COUNT=65536;var i=function(){function e(e,i){void 0===i&&(i=1),this.textureBuffer=new n.TextureBackedBuffer(e,i),this.indexManager=new r.SimpleIndexManager(t.MAX_INDEX_COUNT)}return e.prototype.dispose=function(){this.textureBuffer.dispose(),this.textureBuffer=void 0},Object.defineProperty(e.prototype,"availableCount",{get:function(){return this.indexManager.availableCount},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeCount",{get:function(){return this.indexManager.activeCount},enumerable:!0,configurable:!0}),e.prototype.aquireIndex=function(){var e=this.indexManager.aquire();return this.textureBuffer.resizeToFit(e),e},e.prototype.releaseIndex=function(e){this.indexManager.release(e)},e}();t.ManagedTextureBackedBuffer=i});