// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./BoundingInfo","./geometryDataUtils","./IdGen","./Util","./Util"],(function(t,e,n,i,r,o,u){return function(){function t(e,n,i){this._boundingInfo=null,this._id=t.__idGen.gen(n),this._data=e,this._boundingInfo=i}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return this._data},enumerable:!0,configurable:!0}),t.prototype.getIndices=function(t){return this.data.getIndices(t)},Object.defineProperty(t.prototype,"indexCount",{get:function(){return this.data.indexCount},enumerable:!0,configurable:!0}),t.prototype.getAttribute=function(t){return this.data.getAttribute(t)},Object.defineProperty(t.prototype,"vertexCount",{get:function(){return this.data.indexCount},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"faceCount",{get:function(){return this.data.indexCount/3},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boundingInfo",{get:function(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo},enumerable:!0,configurable:!0}),t.prototype.computeAttachmentOrigin=function(t){return"triangle"===this.data.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)},t.prototype.computeAttachmentOriginTriangles=function(t){var e=this.getIndices(u.VertexAttrConstants.POSITION),n=this.getAttribute(u.VertexAttrConstants.POSITION);return i.computeAttachmentOriginTriangles(n,e,t)},t.prototype.computeAttachmentOriginPoints=function(t){var e=this.getIndices(u.VertexAttrConstants.POSITION),n=this.getAttribute(u.VertexAttrConstants.POSITION);return i.computeAttachmentOriginPoints(n,e,t)},t.prototype.invalidateBoundingInfo=function(){this._boundingInfo=null},t.prototype._calculateBoundingInfo=function(){var t=this.data.getIndices(u.VertexAttrConstants.POSITION),e=this.data.getAttribute(u.VertexAttrConstants.POSITION),r="triangle"===this.data.primitiveType?3:1;if(0===t.length){t=new Uint32Array(r);for(var a=0;a<r;++a)t[a]=a}var s=t.length;o.assert(s%r==0,"Indexing error: "+s.toFixed(0)+" not divisible by "+r.toFixed(0));var c=i.generateDefaultIndexArray(s/r);return new n(c,r,t,e)},t.__idGen=new r.IdGen,t}()}));