/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../../core/mathUtils"],(function(t){"use strict";return function(){function s(t,s=0){this.capacity=0,this.count=0,this.emptySlots=[],this.emptySlotCount=0,this.id2slot=new Map,this.slot2id=[],this.layout=t,this.resize(s)}var i=s.prototype;return i.prepareAllocate=function(t){const s=this.count+t;s>this.capacity&&this.resize(s)},i.allocate=function(t){this.count>=this.capacity&&this.resize(this.count+1);const s=this.emptySlotCount>0?this.emptySlots[--this.emptySlotCount]:this.count;return this.id2slot.set(t,s),this.slot2id[s]=t,this.count++,s},i.prepareFree=function(t){this.emptySlots.length+=t},i.free=function(t){const s=this.id2slot.get(t);null!=s&&(this.emptySlots.length<=this.emptySlotCount&&(this.emptySlots.length=this.emptySlotCount+1),this.emptySlots[this.emptySlotCount++]=s,this.id2slot.delete(t),this.slot2id[s]=null,this.count--)},i.getCount=function(){return this.count},i.getSlot=function(t){return this.id2slot.get(t)},i.hasSlot=function(t){return this.id2slot.has(t)},i.getBuffer=function(){return this.buffer},i.compact=function(){if(this.emptySlotCount>0){const t=this.emptySlots;let s=this.emptySlotCount,i=this.count+s;for(t.length=s,t.sort(((t,s)=>t-s));s>0;){if(t[s-1]!==i-1){const o=i-1,e=t[s-1];this.buffer.copyFrom(this.buffer,o,e,1);const h=this.slot2id[o];this.slot2id[o]=null,this.slot2id[e]=h,this.id2slot.set(h,e)}s--,i--}}this.emptySlotCount=0,this.emptySlots.length=0,this.resize(this.count)},i.resize=function(s){const i=this.capacity;if((s=Math.max(0,s))>0&&(s=t.nextHighestPowerOfTwo(s)),s>i){const t=this.layout.createBuffer(s);this.buffer&&t.copyFrom(this.buffer,0,0,i),this.buffer=t}else if(s<i){const t=this.layout.createBuffer(s);t.copyFrom(this.buffer,0,0,s),this.buffer=t}this.buffer||(this.buffer=this.layout.createBuffer(0)),this.capacity=s,this.slot2id.length=s},s}()}));
