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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./Util"],function(t,s,e){return function(){function t(t,s){null==s&&(s=4);var i=e.nextHighestPowerOfTwo(s*t);this.array=new Float32Array(i),this.zeroItem=new Float32Array(t),this.endSlot=0,this.perInstanceDataSize=t,this.emptySlots=[],this.emptySlotsIdx=0,this.id2slot={},this.slot2id=new Array(s)}return t.prototype.prepareFree=function(t){this.emptySlots.length+=t},t.prototype.free=function(t){var s=this.id2slot[t];null!=s&&(this.emptySlots[this.emptySlotsIdx++]=s,this.slot2id[s]=void 0)},t.prototype.prepareAllocate=function(t){var s=t-this.emptySlotsIdx;s>0&&this._resizeArray((this.endSlot+s)*this.perInstanceDataSize)},t.prototype.allocate=function(t){var s;return s=this.emptySlotsIdx>0?this.emptySlots[--this.emptySlotsIdx]:this.endSlot++,this.id2slot[t]=s,this.slot2id[s]=t,s},t.prototype.getSlot=function(t){return this.id2slot[t]},t.prototype.getOffset=function(t){return t*this.perInstanceDataSize},t.prototype.getArray=function(){return this.array},t.prototype.fill=function(t,s,e){this.array.set(e,t*this.perInstanceDataSize+s)},t.prototype.compact=function(){if(this.emptySlotsIdx>0){for(this.emptySlots.length=this.emptySlotsIdx,this.emptySlots.sort(function(t,s){return t-s});this.emptySlotsIdx>0&&this.emptySlots[this.emptySlotsIdx-1]===this.endSlot;)this.emptySlotsIdx--,this.endSlot--;for(;this.emptySlotsIdx>0;){this.emptySlotsIdx--;var t=this.endSlot-1,s=this.emptySlots[this.emptySlotsIdx],e=t*this.perInstanceDataSize,i=s*this.perInstanceDataSize;this.array.set(this.array.subarray(e,e+this.perInstanceDataSize),i),this.array.set(this.zeroItem,e);var r=this.slot2id[t];this.slot2id[t]=void 0,this.slot2id[s]=r,this.id2slot[r]=s,this.endSlot--}}return this._resizeArray(this.endSlot*this.perInstanceDataSize),this.emptySlots.length=0,this.array},t.prototype._resizeArray=function(t){var s,e;if(t>this.array.length){for(s=this.array.length||1;s<t;)s*=2;e=new Float32Array(s),e.set(this.array),this.array=e}else if(t<=this.array.length/2){s=this.array.length;for(var i=2*t;s>=i;)s/=2;e=new Float32Array(s),e.set(this.array.subarray(0,s)),this.array=e}},t}()});