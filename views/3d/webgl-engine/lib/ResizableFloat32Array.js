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

define(["require","exports","../../../../core/mathUtils"],(function(r,e,t){Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function r(r){null==r?r=16:r<65536&&(r=t.nextHighestPowerOfTwo(r)),this._array=new Float32Array(r),this._size=0}return r.prototype.resize=function(r,e){if(this._size=r,this._size>this._array.length){for(var t=this._array.length||1;t<this._size;)t*=2;var a=new Float32Array(t);return e&&a.set(this._array),this._array=a,!0}var i=2*this._size;if(i<=this._array.length){for(t=this._array.length;t>=i;)t=Math.floor(t/2);a=new Float32Array(t);return e&&a.set(this._array.subarray(0,t)),this._array=a,!0}return!1},r.prototype.append=function(r){var e=this._size;this.resize(this._size+r.length,!0),this._array.set(r,e)},r.prototype.erase=function(r,e){for(var t=r;t<e;++t)this._array[t]=0},Object.defineProperty(r.prototype,"array",{get:function(){return this._array},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),r}();e.ResizableFloat32Array=a}));