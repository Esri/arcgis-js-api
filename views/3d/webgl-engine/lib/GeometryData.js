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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./ComponentUtils","./geometryDataUtils","./Util"],function(t,e,i,r,n){function s(t){var e=n.getFirstObjectValue(t);return e.data.length/e.size}return function(){function t(e,n,o,u){void 0===n&&(n=t.DefaultIndices),void 0===o&&(o=t.DefaultOffsets),void 0===u&&(u="triangle"),this.preinterleaved=!1;var a={};for(var f in e){var c=e[f],d=c.data,p=c.size;a[f]={data:d,size:p,offsetIdx:0,strideIdx:p}}if(n===t.DefaultIndices){var h=s(a),l=r.generateDefaultIndexArray(h);n={};for(var g in a)n[g]=l}this._id=r.getNewId(),this._vertexAttributes=a,this._indices=n,this._componentOffsets=i.createOffsets(o),this._primitiveType=u}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"vertexAttributes",{get:function(){return this._vertexAttributes},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"indices",{get:function(){return this._indices},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"componentOffsets",{get:function(){return this._componentOffsets},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"indexCount",{get:function(){return n.getFirstObjectValue(this._indices).length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"primitiveType",{get:function(){return this._primitiveType},enumerable:!0,configurable:!0}),t.prototype.getVertexAttr=function(){return this.vertexAttributes},t.prototype.toRenderData=function(){return{id:this._id.toString(),preinterleaved:!1,indices:this._indices,vertexAttr:this._vertexAttributes}},t.prototype.getIndices=function(t){return this._indices[t]},t.prototype.getAttribute=function(t){return this._vertexAttributes[t]},t.prototype.estimateGpuMemoryUsage=function(){var t=0;if(this._indices[n.VertexAttrConstants.POSITION]){var e=3;t+=this._indices[n.VertexAttrConstants.POSITION].length*e*4}if(this._indices[n.VertexAttrConstants.NORMAL]){var e=3;t+=this._indices[n.VertexAttrConstants.NORMAL].length*e*4}if(this._indices[n.VertexAttrConstants.UV0]){var e=2;t+=this._indices[n.VertexAttrConstants.UV0].length*e*4}if(this._indices[n.VertexAttrConstants.COLOR]){var e=1;t+=this._indices[n.VertexAttrConstants.COLOR].length*e*4}return t},t.DefaultIndices={},t.DefaultOffsets=new Uint32Array(0),t}()});