// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./MemoryBuffer","./GeometryUtils"],function(t,r,n,o,e,u){Object.defineProperty(r,"__esModule",{value:!0});var i=function(t){function r(){return t.call(this,12)||this}return n(r,t),r.prototype.add=function(t,r,n,o,u,i,a){var h=this.array,s=this.index,f=e.i1616to32(t,r);h.push(f);var p=31;return f=e.i8888to32(Math.round(p*n),Math.round(p*o),Math.round(p*u),Math.round(p*i)),h.push(f),f=e.i1616to32(a,0),h.push(f),s},r}(e);r.LineMemoryBuffer=i;var a=function(t){function r(){return t.call(this,4)||this}return n(r,t),r.prototype.add=function(t,r){var n=this.index;return this.array.push(e.i1616to32(t,r)),n},r}(e);r.LineJoinMemoryBuffer=a;var h=function(t){function r(){return t.call(this,4)||this}return n(r,t),r.prototype.add=function(t,r){this.array.push(e.i1616to32(t,r))},r}(e);r.PolygonMemoryBuffer=h;var s=function(t){function r(){return t.call(this,8)||this}return n(r,t),r.prototype.add=function(t,r,n,o,u,i){var a=this.array,h=this.index,s=e.i1616to32(t,r);a.push(s);var f=15;return s=e.i8888to32(Math.round(f*n),Math.round(f*o),u,i),a.push(s),h},r}(e);r.PolygonOutlineMemoryBuffer=s;var f=function(t){function r(){return t.call(this,16)||this}return n(r,t),r.prototype.add=function(t,r,n,o,i,a,h,s,f,p){var d=this.array,c=this.index,y=e.i1616to32(t,r);return d.push(y),y=e.i1616to32(Math.round(32*n),Math.round(32*o)),d.push(y),y=e.i8888to32(i/4,a/4,0,0),d.push(y),y=e.i8888to32(Math.ceil(10*p),u.radToByte(h),10*s,10*Math.min(f,25)),d.push(y),c},r}(e);r.SymbolMemoryBuffer=f});