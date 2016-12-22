// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../../core/declare","./HeapSort"],function(t,h){var a=t([],{constructor:function(t,h){if(this.data=new Array(t),this.length=0,h){for(var a=0;t>a;a++)this.data[a]=h(a);this._allocator=h,this._hasAllocator=!0}else this._allocator=this._nullAllocator,this._hasAllocator=!1},_nullAllocator:function(){return null},grow:function(t){for(;this.data.length<t;)this.data.push(this._allocator(this.data.length))},next:function(){return this._hasAllocator?(this.data.length===this.length&&this.grow(2*this.length),this.data[this.length++]):null},swap:function(t,h){var a=this.data[t];this.data[t]=this.data[h],this.data[h]=a},push:function(t){this.data.length===this.length&&this.grow(2*this.length),this.data[this.length++]=t},pushArray:function(t){var h=this.length+t.length;h>=this.data.length&&this.grow(Math.max(2*this.length,h));for(var a=0;a<t.length;a++)this.data[this.length++]=t[a]},pushEither:function(t){Array.isArray(t)?this.pushArray(t):this.push(t)},pop:function(){if(0===this.length)return null;var t=this.data[--this.length];return this._hasAllocator||(this.data[this.length]=null),t},slice:function(t,h){return void 0===h&&(h=this.length),this.data.slice(t,h)},clear:function(){if(!this._hasAllocator)for(var t=0;t<this.length;t++)this.data[t]=null;this.length=0},peek:function(){return 0===this.length?null:this.data[this.length-1]},sort:function(t){return h.sort(this.data,0,this.length,t),this}});return a});