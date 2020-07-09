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

define(["require","exports","../util/serializationUtils","../util/Writer"],(function(e,t,r,s){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.displayObjects=e,this.vertexVectorsMap=t}return Object.defineProperty(e.prototype,"vertexBuffersMap",{get:function(){if(!this._vertexBuffersMap){this._vertexBuffersMap={};for(var e=0;e<this.vertexVectorsMap.length;e++)this._vertexBuffersMap[e]=this.vertexVectorsMap[e].intoBuffers();this.vertexVectorsMap=null}return this._vertexBuffersMap},enumerable:!0,configurable:!0}),e.prototype.get=function(e){return this.vertexVectorsMap[e]},e.prototype.pushDisplayObject=function(e){this.displayObjects.push(e)},e.prototype.encode=function(e,t){var i=r.serializeList(new s.default(Uint32Array,this._guessSize()),this.displayObjects).buffer(),n={};t.push(i);for(var o=0;o<this.vertexVectorsMap.length;o++){var a=this.vertexVectorsMap[o];n[o]={},a.transfer(n[o],t)}e.displayObjects=i,e.vertexBuffersMap=n,this.destroy()},e.prototype.destroy=function(){this.vertexVectorsMap=null,this.displayObjects=null},e.prototype._guessSize=function(){for(var e=this.displayObjects,t=Math.min(e.length,4),r=0,s=0;s<t;s++)r=Math.max(r,e[s].displayRecords.length);return 2*(12*e.length+e.length*r*40)},e}();t.MeshData=i}));