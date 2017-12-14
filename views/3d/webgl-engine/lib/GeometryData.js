// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./ComponentUtils","./geometryDataUtils","./Util"],function(e,t,i,r,n){function s(e){var t=n.getFirstObjectValue(e),i=t.data.length/t.size;return i}var o=function(){function e(t,n,o,u){void 0===n&&(n=e.DefaultIndices),void 0===o&&(o=e.DefaultOffsets),void 0===u&&(u="triangle"),this.preinterleaved=!1;var a={};for(var c in t){var f=t[c],d=f.data,p=f.size;a[c]={data:d,size:p,offsetIdx:0,strideIdx:p}}if(n===e.DefaultIndices){var h=s(a),l=r.generateDefaultIndexArray(h);n={};for(var g in a)n[g]=l}this._id=r.getNewId(),this._vertexAttributes=a,this._indices=n,this._componentOffsets=i.createOffsets(o),this._primitiveType=u}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vertexAttributes",{get:function(){return this._vertexAttributes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indices",{get:function(){return this._indices},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"componentOffsets",{get:function(){return this._componentOffsets},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indexCount",{get:function(){return n.getFirstObjectValue(this._indices).length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"primitiveType",{get:function(){return this._primitiveType},enumerable:!0,configurable:!0}),e.prototype.getId=function(){return this.id},e.prototype.getVertexAttr=function(){return this.vertexAttributes},e.prototype.toRenderData=function(){var e={id:this._id.toString(),preinterleaved:!1,indices:this._indices,vertexAttr:this._vertexAttributes};return e},e.prototype.getIndices=function(e){return this._indices[e]},e.prototype.getAttribute=function(e){return this._vertexAttributes[e]},e.prototype.estimateGpuMemoryUsage=function(){var e=0;if(this._indices.position){var t=3;e+=this._indices.position.length*t*4}if(this._indices.normal){var t=3;e+=this._indices.normal.length*t*4}if(this._indices.uv0){var t=2;e+=this._indices.uv0.length*t*4}if(this._indices.color){var t=1;e+=this._indices.color.length*t*4}return this._indices.terrain&&(e+=2*this._indices.terrain.length,e+=4*this._vertexAttributes.terrain.data.length),e},e.DefaultIndices={},e.DefaultOffsets=new Uint32Array(0),e}();return o});