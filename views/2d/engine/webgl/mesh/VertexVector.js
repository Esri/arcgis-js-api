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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../Utils","./VertexBuffer","../util/Writer"],(function(e,t,r,n,i){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){this.data=e,this.stride=t}return Object.defineProperty(e.prototype,"vertexCount",{get:function(){var e=this.stride/4;return this.data.length/e},enumerable:!0,configurable:!0}),e.prototype.transfer=function(e,t){var r=this.data.buffer();e.vertexCount=this.vertexCount,e.data=r,e.stride=this.stride,t.push(r)},e}();t.default=o;var s=function(){function e(e,t,n){void 0===n&&(n=!1),this.geometryType=e,this.indexVector=new i.default(Uint32Array,t),this.namedVectors={};var s=r.getStrides(e,n);for(var a in s){var u=s[a],f=void 0;switch(u%4){case 0:case 2:f=new i.default(Uint32Array,u/4*t);break;case 1:case 3:f=new i.default(Uint8Array,u*t)}this.namedVectors[a]=new o(f,u)}}return e.prototype.get=function(e){return this.namedVectors[e].data},e.prototype.getVector=function(e){return this.namedVectors[e]},e.prototype.transfer=function(e,t){var r=this.indexVector.buffer(),n={};for(var i in t.push(r),this.namedVectors){var o=this.namedVectors[i];n[i]={},o.transfer(n[i],t)}e.geometryType=this.geometryType,e.indexBuffer=r,e.namedBuffers=n,this.destroy()},e.prototype.intoBuffers=function(){var e=n.VertexBuffers.fromVertexVectors(this);return this.destroy(),e},e.prototype.destroy=function(){this.indexVector=null,this.namedVectors=null},e}();t.VertexVectors=s}));