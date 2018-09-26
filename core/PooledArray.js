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

define(["require","exports","./arrayUtils","./HeapSort"],function(t,i,h,a){var n=2;return function(){function t(t){var i=this;if(this.data=[],this._length=0,this._allocator=null,this._deallocator=function(t,h){return i.data[h]=void 0},this._shrink=function(){},this._hint=new h.RemoveHint,t){if(t.initialSize&&(this.data=new Array(t.initialSize)),t.allocator&&(this._allocator=t.allocator,this._deallocator=t.deallocator,t.initialSize))for(var a=0;a<t.initialSize;++a)this.data[a]=this._allocator(a);t.shrink&&(this._shrink=function(){i.data.length>n*i.length&&(i.data.length=i.length)})}}return t.prototype.toArray=function(){return this.data.slice(0,this.length)},Object.defineProperty(t.prototype,"length",{get:function(){return this._length},set:function(t){if(this._allocator)for(;this.data.length<t;)this.data.push(this._allocator(this.data.length));if(this._deallocator)for(var i=t;i<this._length;++i)this._deallocator(this.data[i],i);this._length=t,this._shrink()},enumerable:!0,configurable:!0}),t.prototype.clear=function(){this.length=0},t.prototype.equal=function(t){return h.equals(this.data,t.data)},t.prototype.push=function(t){return this.data.length===this.length&&this._grow((this.length+1)*n),this.data[this.length++]=t,t},t.prototype.pushArray=function(t){var i=this.length+t.length;i>=this.data.length&&this._grow(Math.max(this.length*n,i));for(var h=0;h<t.length;h++)this.data[this._length++]=t[h];return this.back()},t.prototype.pushNew=function(){return this.data.length===this.length&&this._grow((this.length+1)*n),++this._length,this.back()},t.prototype.pop=function(){if(0!==this.length){var t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}},t.prototype.removeMany=function(t){var i=this,h=[];return this.data=this.data.filter(function(a,n){return!(n>=i.length)&&(t.indexOf(a)<0||(h.push(a),!1))}),this._length=this.data.length,h},t.prototype.removeUnordered=function(t){var i=h.removeUnordered(this.data,t,this.length,this._hint);return void 0!==i&&(this.length=this.length-1),i},t.prototype.removeUnorderedMany=function(t){var i=h.removeUnorderedMany(this.data,t,this.length,this._hint);return this.length=this.length-i.length,i},t.prototype.front=function(){if(0!==this.length)return this.data[0]},t.prototype.back=function(){if(0!==this.length)return this.data[this.length-1]},t.prototype.swapElements=function(t,i){var h;t>=this.length||i>=this.length||(h=[this.data[i],this.data[t]],this.data[t]=h[0],this.data[i]=h[1])},t.prototype.sort=function(t){a.sort(this.data,0,this.length,t)},t.prototype.some=function(t,i){for(var h=0;h<this.length;++h)if(t.call(i,this.data[h],h,this.data))return!0;return!1},t.prototype.find=function(t,i){for(var h=0;h<this.length;++h){var a=this.data[h];if(t.call(i,a,h,this.data))return a}},t.prototype.filter=function(i,h,a){a=a||new t;for(var n=0;n<this.length;++n)i.call(h,this.data[n],n,this.data)&&a.push(this.data[n]);return a},t.prototype.forEach=function(t,i){for(var h=0;h<this.length;++h)t.call(i,this.data[h],h,this.data)},t.prototype.map=function(t,i){for(var h=new Array(this.length),a=0;a<this.length;++a)h[a]=t.call(i,this.data[a],a,this.data);return h},t.prototype._grow=function(t){if(this._allocator)for(;this.data.length<t;)this.data.push(this._allocator(this.data.length))},t}()});