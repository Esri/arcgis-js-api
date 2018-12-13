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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../util/serializationUtils","../util/Writer"],function(e,t,o,u){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,r){this.displayObjects=e,this.vertexVectorsMap=t,this._materials=r}return Object.defineProperty(e.prototype,"materials",{get:function(){return this._materials},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vertexBuffersMap",{get:function(){if(!this._vertexBuffersMap){this._vertexBuffersMap={};for(var e=0;e<this.vertexVectorsMap.length;e++)this._vertexBuffersMap[e]=this.vertexVectorsMap[e].intoBuffers();this.vertexVectorsMap=null}return this._vertexBuffersMap},enumerable:!0,configurable:!0}),e.prototype.get=function(e){return this.vertexVectorsMap[e]},e.prototype.pushDisplayObject=function(e){this.displayObjects.push(e)},e.prototype.encode=function(e,t){var r=o.serializeList(new u.default(Uint32Array,this._guessSize()),this.displayObjects).buffer(),s=this._materials.serialize(new u.default(Uint32Array)).buffer(),i={};t.push(r),t.push(s);for(var a=0;a<this.vertexVectorsMap.length;a++){var n=this.vertexVectorsMap[a];i[a]={},n.transfer(i[a],t)}e.displayObjects=r,e.materialStore=s,e.vertexBuffersMap=i,this.destroy()},e.prototype.destroy=function(){this.vertexVectorsMap=null,this.displayObjects=null},e.prototype._guessSize=function(){for(var e=this.displayObjects,t=Math.min(e.length,4),r=0,s=0;s<t;s++)r=Math.max(r,e[s].displayRecords.length);return 2*(12*e.length+e.length*r*40)},e}();t.default=r});