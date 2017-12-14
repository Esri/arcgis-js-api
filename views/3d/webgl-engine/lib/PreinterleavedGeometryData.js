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

define(["require","exports","../../../webgl/Util","./ComponentUtils","./geometryDataUtils"],function(t,e,r,n,i){function a(t){switch(t){case 5120:return Int8Array;case 5126:return Float32Array;case 5124:return Int32Array;case 5122:return Int16Array;case 5121:return Uint8Array;case 5125:return Uint32Array;case 5123:return Uint16Array}throw new Error("Unhandled data type: "+t)}var o=function(){function t(e,o,u){void 0===u&&(u=t.DefaultOffsets),this.preinterleaved=!0,this.primitiveType="triangle";for(var s=r.getStride(o)/4,f=e.length/s,c=i.generateDefaultIndexArray(f),p={},y=0,d=o;y<d.length;y++){var l=d[y],h=new(a(l.type))(e.buffer),g=r.getBytesPerElement(l.type),b=l.count,x=l.offset/g,_=l.stride/g;p[l.name]={data:h,size:b,offsetIdx:x,strideIdx:_}}this._id=i.getNewId(),this._vertexData=e,this._vertexAttributes=p,this._layout=o,this._indexData=c,this._componentOffsets=n.createOffsets(u)}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"vertexData",{get:function(){return this._vertexData},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layout",{get:function(){return this._layout},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"indexData",{get:function(){return this._indexData},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"componentOffsets",{get:function(){return this._componentOffsets},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"indexCount",{get:function(){return this._indexData.length},enumerable:!0,configurable:!0}),t.prototype.getId=function(){return this.id},t.prototype.toRenderData=function(){var t={id:this._id.toString(),preinterleaved:!0,indexCount:this.indexCount,vertexData:this._vertexData,layout:this._layout};return t},t.prototype.getIndices=function(t){return this._indexData},t.prototype.getAttribute=function(t){return this._vertexAttributes[t]},t.prototype.estimateGpuMemoryUsage=function(){return this._vertexData.byteLength},t.DefaultOffsets=new Uint32Array(0),t}();return o});