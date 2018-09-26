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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../util/serializationUtils","../util/Writer"],function(t,e,r,s){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,r){this.displayObjects=t,this.vertexVectorsMap=e,this._materials=r}return t.prototype.get=function(t){return this.vertexVectorsMap[t]},t.prototype.pushDisplayObject=function(t){this.displayObjects.push(t)},t.prototype.encode=function(t,e){var i=r.serializeList(new s.default(Uint32Array,this._guessSize()),this.displayObjects).buffer(),a=this._materials.serialize(new s.default(Uint32Array)).buffer(),n={};e.push(i),e.push(a);for(var o in this.vertexVectorsMap){var l=this.vertexVectorsMap[o];n[o]={},l.transfer(n[o],e)}t.displayObjects=i,t.materialStore=a,t.vertexBuffersMap=n,this.destroy()},t.prototype.destroy=function(){this.vertexVectorsMap=null,this.displayObjects=null},t.prototype._guessSize=function(){for(var t=this.displayObjects,e=Math.min(t.length,4),r=0,s=0;s<e;s++)r=Math.max(r,t[s].displayRecords.length);return 2*(12*t.length+t.length*r*40)},t}();e.default=i});