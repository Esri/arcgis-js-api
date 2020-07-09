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

define(["require","exports","./geometryDataUtils","./Util"],(function(t,e,i,r){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(e,n,s){void 0===n&&(n=t.DefaultIndices),void 0===s&&(s="triangle");var o={};for(var u in e){var a=e[u],c=a.data,d=a.size;o[u]={data:c,size:d,offsetIdx:0,strideIdx:d}}if(n===t.DefaultIndices){var f=function(t){var e=r.getFirstObjectValue(t);if(null==e)return 0;return e.data.length/e.size}(o),p=i.generateDefaultIndexArray(f);for(var l in n={},o)n[l]=p}this._id=i.getNewId(),this._vertexAttributes=o,this._indices=n,this._primitiveType=s}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"vertexAttributes",{get:function(){return this._vertexAttributes},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"indices",{get:function(){return this._indices},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"indexCount",{get:function(){var t=r.getFirstObjectValue(this._indices);return null==t?0:t.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"primitiveType",{get:function(){return this._primitiveType},enumerable:!0,configurable:!0}),t.prototype.getVertexAttr=function(){return this.vertexAttributes},t.prototype.toRenderData=function(){return{id:this._id.toString(),indices:this._indices,vertexAttr:this._vertexAttributes}},t.prototype.getIndices=function(t){return this._indices[t]},t.prototype.getAttribute=function(t){return this._vertexAttributes[t]},t.prototype.estimateGpuMemoryUsage=function(){var t=0;if(this._indices[r.VertexAttrConstants.POSITION]){var e=3;t+=this._indices[r.VertexAttrConstants.POSITION].length*e*4}if(this._indices[r.VertexAttrConstants.NORMAL]){e=3;t+=this._indices[r.VertexAttrConstants.NORMAL].length*e*4}if(this._indices[r.VertexAttrConstants.UV0]){e=2;t+=this._indices[r.VertexAttrConstants.UV0].length*e*4}if(this._indices[r.VertexAttrConstants.COLOR]){e=1;t+=this._indices[r.VertexAttrConstants.COLOR].length*e*4}return t},t.DefaultIndices={},t}();e.GeometryData=n}));