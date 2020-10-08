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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../WGLDisplayObject","../WGLDisplayRecord","../collisions/Metric","../util/Reader","../util/serializationUtils","../util/Writer"],(function(t,e,s,r,i,u,c,f){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MeshData=void 0;var a=function(){function t(t,e){this.vertexVectorsMap=t,this._currentIndex=-1,this._currentRecordOffset=0,this._currentMetricOffset=0;var s=4*(4*e.features+1),r=4*(8*e.records+1),i=4*(20*e.metrics+1);this._bufDisplayObjects=new f.default(Uint32Array,s+4),this._bufDisplayRecords=new f.default(Uint32Array,r+4),this._bufMetrics=new f.default(Uint32Array,i+4),this._bufDisplayObjects.push(0),this._bufDisplayRecords.push(0),this._bufMetrics.push(0)}return Object.defineProperty(t.prototype,"vertexBuffersMap",{get:function(){if(!this._vertexBuffersMap){this._vertexBuffersMap={};for(var t=0;t<this.vertexVectorsMap.length;t++)this._vertexBuffersMap[t]=this.vertexVectorsMap[t].intoBuffers();this.vertexVectorsMap=null}return this._vertexBuffersMap},enumerable:!1,configurable:!0}),t.prototype.get=function(t){return this.vertexVectorsMap[t]},t.prototype.currentDisplayRecordCount=function(){return this._bufDisplayRecords[this._currentRecordOffset]},t.prototype.writeDisplayObject=function(t,e){this._bufDisplayObjects.incr(0),this._currentIndex=this._bufDisplayObjects.push(t),this._bufDisplayObjects.push(e),this._bufDisplayObjects.push(0),this._bufDisplayObjects.push(0),this._currentRecordOffset=0,this._currentMetricOffset=0},t.prototype.hasDisplayRecords=function(){return!(0===this._currentRecordOffset)},t.prototype.endDisplayObject=function(){this.hasDisplayRecords()||this._rollbackDisplayObject()},t.prototype.writeDisplayRecord=function(t,e,s,r,i,u,c,f){void 0===c&&(c=0),void 0===f&&(f=0),0===this._currentRecordOffset&&(this._currentRecordOffset=this._bufDisplayRecords.push(0),this._bufDisplayObjects.setValue(this._currentIndex+2,this._currentRecordOffset)),this._bufDisplayRecords.incr(this._currentRecordOffset),this._bufDisplayRecords.push(t),this._bufDisplayRecords.push(e),this._bufDisplayRecords.push(s),this._bufDisplayRecords.push(r),this._bufDisplayRecords.push(i),this._bufDisplayRecords.push(u),this._bufDisplayRecords.push(c),this._bufDisplayRecords.push(f)},t.prototype.writeMetrics=function(t){0===this._currentMetricOffset&&(this._bufDisplayObjects.setValue(this._currentIndex+3,this._bufMetrics.length),this._currentMetricOffset=this._bufMetrics.length),c.serializeList(this._bufMetrics,t)},t.deserializeDisplayObjects=function(t){var e=t.bufDisplayObjects,f=t.bufMetrics,a=t.bufRecords,p=new u.default(e),n=new u.default(a),h=new u.default(f),o=[],l=p.readInt32();for(n.readInt32(),h.readInt32();l--;){var b=p.readInt32(),d=p.readInt32(),y=p.readInt32(),_=p.readInt32(),D=new s(b);0!==d&&(D.insertAfter=d),0!==y&&(D.displayRecords=c.deserializeList(n,r,{id:b})),0!==_&&(D.metrics=c.deserializeList(h,i.default)),o.push(D)}return o},t.prototype.encode=function(t,e){for(var s={},r=0;r<this.vertexVectorsMap.length;r++){var i=this.vertexVectorsMap[r];s[r]={},i.transfer(s[r],e)}t.bufDisplayObjects=this._bufDisplayObjects.buffer(),t.bufRecords=this._bufDisplayRecords.buffer(),t.bufMetrics=this._bufMetrics.buffer(),e.push(t.bufDisplayObjects),e.push(t.bufMetrics),e.push(t.bufRecords),t.vertexBuffersMap=s,this.destroy()},t.prototype.destroy=function(){this.vertexVectorsMap=null,this._bufDisplayObjects=null,this._bufDisplayRecords=null,this._bufMetrics=null},t.prototype._rollbackDisplayObject=function(){this._bufDisplayObjects.decr(0),this._bufDisplayObjects.seek(this._bufDisplayObjects.length-4),this._currentIndex=this._bufDisplayObjects.length},t}();e.MeshData=a}));