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

define(["require","exports","./tsSupport/generatorHelper","./arrayUtils","./HeapSort"],function(t,e,a,i,n){return function(){function t(t){var e=this;this.data=[],this._length=0,this._allocator=null,this._deallocator=function(){},this._shrink=function(){},this._hint=new i.RemoveHint,t&&(t.initialSize&&(this.data=new Array(t.initialSize)),t.allocator?(this._allocator=t.allocator,this._deallocator=t.deallocator):"deallocator"in t&&(this._deallocator=t.deallocator),t.shrink&&(this._shrink=function(){e.data.length>2*e.length&&(e.data.length=e.length)}))}return t.prototype.toArray=function(){return this.data.slice(0,this.length)},Object.defineProperty(t.prototype,"length",{get:function(){return this._length},set:function(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}return void(this._length=t)}if(this._deallocator)for(var e=t;e<this._length;++e)this.data[e]=this._deallocator(this.data[e]);this._length=t,this._shrink()},enumerable:!0,configurable:!0}),t.prototype.clear=function(){this.length=0},t.prototype.equal=function(t){return i.equals(this.data,t.data)},t.prototype.push=function(t){return this.data[this._length++]=t,t},t.prototype.pushArray=function(t){for(var e=0;e<t.length;e++)this.data[this._length++]=t[e];return this.back()},t.prototype.pushNew=function(){return this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length])),++this._length,this.back()},t.prototype.pop=function(){if(0!==this.length){var t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}},t.prototype.removeMany=function(t){var e=this,a=[];return this.data=this.data.filter(function(i,n){return!(n>=e.length)&&(t.indexOf(i)<0||(a.push(i),!1))}),this._length=this.data.length,a},t.prototype.iterableRemoveMany=function(t,e){var i,n;return a(this,function(a){switch(a.label){case 0:i=[],n=0,a.label=1;case 1:return n<this.length?e()?[4]:[3,3]:[3,5];case 2:a.sent(),a.label=3;case 3:if(n>=this.length)return[3,5];t.indexOf(this.data[n])<0&&i.push(this.data[n]),a.label=4;case 4:return++n,[3,1];case 5:return this.data=i,this._length=this.data.length,[2]}})},t.prototype.removeUnordered=function(t){var e=i.removeUnordered(this.data,t,this.length,this._hint);return void 0!==e&&(this.length=this.length-1),e},t.prototype.removeUnorderedMany=function(t){var e=i.removeUnorderedMany(this.data,t,this.length,this._hint);return this.length=this.length-e.length,e},t.prototype.front=function(){if(0!==this.length)return this.data[0]},t.prototype.back=function(){if(0!==this.length)return this.data[this.length-1]},t.prototype.swapElements=function(t,e){var a;t>=this.length||e>=this.length||(a=[this.data[e],this.data[t]],this.data[t]=a[0],this.data[e]=a[1])},t.prototype.sort=function(t){n.sort(this.data,0,this.length,t)},t.prototype.iterableSort=function(t,e){return n.iterableSort(this.data,0,this.length,t,e)},t.prototype.some=function(t,e){for(var a=0;a<this.length;++a)if(t.call(e,this.data[a],a,this.data))return!0;return!1},t.prototype.find=function(t,e){for(var a=0;a<this.length;++a){var i=this.data[a];if(t.call(e,i,a,this.data))return i}},t.prototype.filter=function(e,a,i){i=i||new t;for(var n=0;n<this.length;++n)e.call(a,this.data[n],n,this.data)&&i.push(this.data[n]);return i},t.prototype.forEach=function(t,e){for(var a=0;a<this.length;++a)t.call(e,this.data[a],a,this.data)},t.prototype.iterableForEach=function(){var t;return a(this,function(e){switch(e.label){case 0:t=0,e.label=1;case 1:return t<this.length?[4,this.data[t]]:[3,4];case 2:e.sent(),e.label=3;case 3:return++t,[3,1];case 4:return[2]}})},t.prototype.map=function(t,e){for(var a=new Array(this.length),i=0;i<this.length;++i)a[i]=t.call(e,this.data[i],i,this.data);return a},t}()});