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

define(["require","exports","../../../../core/compilerUtils","./ComponentUtils","./geometryDataUtils","../../../webgl/Util"],function(t,e,i,n,r,a){function s(t){switch(t){case 5120:return Int8Array;case 5126:return Float32Array;case 5124:return Int32Array;case 5122:return Int16Array;case 5121:return Uint8Array;case 5125:return Uint32Array;case 5123:return Uint16Array;default:return void i.neverReached(t)}}return function(){function t(e,i,o,u,f){void 0===o&&(o=null),void 0===u&&(u=t.DefaultOffsets),void 0===f&&(f=t.DefaultIndices),this.preinterleaved=!0,this.primitiveType="triangle",this._positionData=null;var d=a.getStride(i)/4,l=e.length/d;this._hasDefaultIndices=f===t.DefaultIndices,this.indexCount=f.length,this._hasDefaultIndices&&(f=r.generateDefaultIndexArray(l),this.indexCount=l);for(var h={},c=0,p=i;c<p.length;c++){var y=p[c],_=new(s(y.type))(e.buffer),g=a.getBytesPerElement(y.type),D=y.count,x=y.offset/g,b=y.stride/g;h[y.name]={data:_,size:D,offsetIdx:x,strideIdx:b}}o&&(this._positionData=o,h.position={data:o.data,size:3,offsetIdx:0,strideIdx:3}),this._id=r.getNewId(),this._vertexData=e,this._vertexAttributes=h,this._layout=i,this._indexData=f,this._componentOffsets=n.createOffsets(u),this._gpuMemoryUsage=e.byteLength+(this._hasDefaultIndices?0:f.byteLength)}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layout",{get:function(){return this._layout},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"componentOffsets",{get:function(){return this._componentOffsets},enumerable:!0,configurable:!0}),t.prototype.toRenderData=function(){var t={id:this._id.toString(),preinterleaved:!0,indexData:this._hasDefaultIndices?null:this._indexData,indexCount:this.indexCount,vertexData:this._vertexData,layout:this._layout};return this._vertexData=null,this._indexData=null,this._vertexAttributes={position:this._vertexAttributes.position},t},t.prototype.getIndices=function(t){return"position"===t&&this._positionData?this._positionData.indices:this._indexData},t.prototype.getAttribute=function(t){return this._vertexAttributes[t]},t.prototype.estimateGpuMemoryUsage=function(){return this._gpuMemoryUsage},Object.defineProperty(t.prototype,"hasPositionData",{get:function(){return!!this._positionData},enumerable:!0,configurable:!0}),t.DefaultOffsets=new Uint32Array(0),t.DefaultIndices=new Uint32Array(0),t}()});