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

define(["require","exports","./Util"],function(r,t,e){var i=function(){function r(r){null==r?r=16:65536>r&&(r=e.nextHighestPowerOfTwo(r)),this.array=new Float32Array(r),this.size=0}return r.prototype.resize=function(r,t){void 0===t&&(t=!1),this.size=r;var e,i;if(this.size>this.array.length){for(e=this.array.length||1;e<this.size;)e*=2;return i=new Float32Array(e),t&&i.set(this.array),this.array=i,!0}if(this.size<=this.array.length/2){e=this.array.length;for(var a=2*this.size;e>=a;)e=Math.floor(e/2);return i=new Float32Array(e),t&&i.set(this.array.subarray(0,e)),this.array=i,!0}return!1},r.prototype.append=function(r){var t=this.size;this.resize(this.size+r.length,!0),this.array.set(r,t)},r.prototype.erase=function(r,t){for(var e=r;t>e;++e)this.array[e]=0},r.prototype.getArray=function(){return this.array},r.prototype.getSize=function(){return this.size},r}();return i});