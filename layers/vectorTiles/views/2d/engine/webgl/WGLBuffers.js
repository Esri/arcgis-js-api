// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","./enums","./Utils","../../../webgl/BufferObject"],function(e,r,t,f,a){Object.defineProperty(r,"__esModule",{value:!0});var o=new f.KeysGetter,i=function(){function e(e){this._usage=e,this.geometryMap=new Map}return e.prototype.dispose=function(){for(var e=o.getKeys(this.geometryMap),r=0,t=e;r<t.length;r++){var f=t[r],a=this.geometryMap.get(f);a.vao&&a.vao.dispose(),a.indexBuffer&&a.indexBuffer.dispose();for(var i in a.vertexBufferMap)a.vertexBufferMap[i]&&a.vertexBufferMap[i].dispose()}this.geometryMap.clear()},Object.defineProperty(e.prototype,"usage",{get:function(){return this._usage},enumerable:!0,configurable:!0}),e.prototype.ensureBuffers=function(e,r,i){for(var u=o.getKeys(this.geometryMap),n=0,p=u;n<p.length;n++){var s=p[n];if(-1===r.indexOf(s)){var v=this.geometryMap.get(s);v.vao&&v.vao.dispose(),v.indexBuffer&&v.indexBuffer.dispose();for(var g in v.vertexBufferMap)v.vertexBufferMap[g]&&v.vertexBufferMap[g].dispose()}this.geometryMap.delete(s)}for(var M=0,y=r;M<y.length;M++){var _=y[M],d=void 0;this.geometryMap.has(_)?(d=this.geometryMap.get(_),d.vao&&(d.vao.dispose(),d.vao=null)):(d={vertexBufferMap:{},indexBuffer:null,vao:null},this.geometryMap.set(_,d));var x=void 0;_===t.WGLGeometryType.FILL?x=i?f.C_FILL_VERTEX_NAMES_VV:f.C_FILL_VERTEX_NAMES:_===t.WGLGeometryType.LINE?x=i?f.C_LINE_VERTEX_NAMES_VV:f.C_LINE_VERTEX_NAMES:_===t.WGLGeometryType.MARKER?x=i?f.C_ICON_VERTEX_NAMES_VV:f.C_ICON_VERTEX_NAMES:_===t.WGLGeometryType.TEXT&&(x=i?f.C_TEXT_VERTEX_NAMES_VV:f.C_TEXT_VERTEX_NAMES);for(var E in d.vertexBufferMap)-1===x.indexOf(E)&&d.vertexBufferMap[E]&&(d.vertexBufferMap[E].dispose(),d.vertexBufferMap[E]=null);for(var h=0,B=x;h<B.length;h++){var l=B[h];d.vertexBufferMap[l]||(d.vertexBufferMap[l]=a.createVertex(e,this._usage))}d.indexBuffer||(d.indexBuffer=a.createIndex(e,this._usage))}},e.prototype.get=function(e){return this.geometryMap.get(e)},e.prototype.has=function(e){return this.geometryMap.has(e)},e.prototype.upload=function(e,r,t,f){for(var a=0,o=r;a<o.length;a++){var i=o[a],u=this.geometryMap.get(i);if(u){if(f){var n=e.geometries[i].indexBuffer.buffer;u.indexBuffer&&n.byteLength>0&&u.indexBuffer.setData(n)}for(var p=0,s=t;p<s.length;p++){var v=s[p],g=e.geometries[i].vertexBuffer[v];if(g){var M=g.data.buffer;u.vertexBufferMap[v]&&M.byteLength>0&&u.vertexBufferMap[v].setData(M)}}}}},e}();r.default=i});