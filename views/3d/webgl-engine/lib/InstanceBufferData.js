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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/mathUtils"],function(t,i,o){return function(){function t(t,i){void 0===i&&(i=0),this.capacity=0,this.count=0,this.emptySlots=[],this.emptySlotCount=0,this.id2slot=new Map,this.slot2id=[],this.layout=t,this.resize(i)}return t.prototype.prepareAllocate=function(t){var i=this.count+t;i>this.capacity&&this.resize(i)},t.prototype.allocate=function(t){this.count>=this.capacity&&this.resize(this.count+1);var i=this.emptySlotCount>0?this.emptySlots[--this.emptySlotCount]:this.count;return this.id2slot.set(t,i),this.slot2id[i]=t,this.count++,i},t.prototype.prepareFree=function(t){this.emptySlots.length+=t},t.prototype.free=function(t){var i=this.id2slot.get(t);null!=i&&(this.emptySlots.length<=this.emptySlotCount&&(this.emptySlots.length=this.emptySlotCount+1),this.emptySlots[this.emptySlotCount++]=i,this.id2slot.delete(t),this.slot2id[i]=null,this.count--)},t.prototype.getCount=function(){return this.count},t.prototype.getSlot=function(t){return this.id2slot.get(t)},t.prototype.hasSlot=function(t){return this.id2slot.has(t)},t.prototype.getBuffer=function(){return this.buffer},t.prototype.compact=function(){if(this.emptySlotCount>0){var t=this.emptySlots,i=this.emptySlotCount,o=this.count+i;for(t.length=i,t.sort(function(t,i){return t-i});i>0;){if(t[i-1]!==o-1){var e=o-1,s=t[i-1];this.buffer.copyFrom(this.buffer,e,s,1);var h=this.slot2id[e];this.slot2id[e]=null,this.slot2id[s]=h,this.id2slot.set(h,s)}i--,o--}}this.emptySlotCount=0,this.emptySlots.length=0,this.resize(this.count)},t.prototype.resize=function(t){var i=this.capacity;if(t=Math.max(0,t),t>0&&(t=o.nextHighestPowerOfTwo(t)),t>i){var e=this.layout.createBuffer(t);this.buffer&&e.copyFrom(this.buffer,0,0,i),this.buffer=e}else if(t<i){var e=this.layout.createBuffer(t);e.copyFrom(this.buffer,0,0,t),this.buffer=e}this.buffer||(this.buffer=this.layout.createBuffer(0)),this.capacity=t,this.slot2id.length=t},t}()});