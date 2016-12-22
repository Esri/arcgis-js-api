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

define(["require","exports"],function(i,t){var e=Array.prototype.splice,o=function(){function i(i,t){void 0===i&&(i=50),void 0===t&&(t=50),this.allocationSize=t,this.pool=[],this.index=-1;for(var e=i;e>0;--e)this.pool.push([]);this.index=i-1}return i.prototype.acquire=function(){if(-1===this.index){for(var i=this.allocationSize;i>0;--i)this.pool.push([]);this.index+=this.allocationSize}return this.index=this.index-1,this.pool.pop()},i.prototype.copy=function(i){var t=this.acquire();return i.unshift(0,0),e.apply(t,i),i.splice(0,2),t},i.prototype.release=function(i){i&&(i.length=0,this.index=this.index+1,this.pool[this.index]=i)},i.acquire=function(){return n.acquire()},i.copy=function(i){return n.copy(i)},i.release=function(i){return n.release(i)},i}(),n=new o(100);return o});