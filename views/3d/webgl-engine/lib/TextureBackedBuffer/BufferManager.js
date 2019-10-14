// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./ManagedTextureBackedBuffer"],function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){void 0===t&&(t=1),this.rctx=e,this.fieldCount=t,this.buffers=[]}return e.prototype.garbageCollect=function(){this.buffers=this.buffers.filter(function(e){return 0!==e.activeCount||(e.dispose(),!1)})},e.prototype.getBuffer=function(e){for(var t=0,u=this.buffers;t<u.length;t++){var f=u[t];if(f.availableCount>=e)return f}if(e>r.MAX_INDEX_COUNT)return null;var n=new r.ManagedTextureBackedBuffer(this.rctx,this.fieldCount);return this.buffers.push(n),n},e.prototype.updateTextures=function(){for(var e=0,t=this.buffers;e<t.length;e++){t[e].textureBuffer.updateTexture()}},e}();t.BufferManager=u});