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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","./GeometryUtils","./MemoryBuffer"],(function(t,r,i,e,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.CircleVertexBuffer=r.SymbolVertexBuffer=r.OutlineVertexBuffer=r.FillVertexBuffer=r.LineVertexBuffer=void 0;var a=new Float32Array(1),o=new Uint32Array(a.buffer),u=function(t){function r(r){var i=t.call(this,r?20:12)||this;return i._isDataDriven=r,i}return i.__extends(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,e,u,s,h,f){var p=this.array,v=n.i1616to32(t,r);p.push(v);if(v=n.i8888to32(Math.round(31*i),Math.round(31*e),Math.round(31*u),Math.round(31*s)),p.push(v),v=n.i1616to32(h,0),p.push(v),this._isDataDriven){if(!f)throw new Error("Expecting data driven values.");var c=f.color,d=c[3]*f.opacity*255;p.push(n.i8888to32(c[0]*d,c[1]*d,c[2]*d,d)),a[0]=f.size,p.push(o[0])}},r}(n);r.LineVertexBuffer=u;var s=function(t){function r(r){var i=t.call(this,r?8:4)||this;return i._isDataDriven=r,i}return i.__extends(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i){var e=this.array;if(e.push(n.i1616to32(t,r)),this._isDataDriven){if(!i)throw new Error("Expecting data driven values.");var a=i.color,o=a[3]*i.opacity*255;e.push(n.i8888to32(a[0]*o,a[1]*o,a[2]*o,o))}},r}(n);r.FillVertexBuffer=s;var h=function(t){function r(r){var i=t.call(this,r?12:8)||this;return i._isDataDriven=r,i}return i.__extends(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,e,a,o,u){var s=this.array,h=this.index,f=n.i1616to32(t,r);s.push(f);if(f=n.i8888to32(Math.round(15*i),Math.round(15*e),a,o),s.push(f),this._isDataDriven){if(!u)throw new Error("Expecting data driven values.");var p=u.color,v=p[3]*u.opacity*255;s.push(n.i8888to32(p[0]*v,p[1]*v,p[2]*v,v))}return h},r}(n);r.OutlineVertexBuffer=h;var f=function(t){function r(r){var i=t.call(this,r?24:16)||this;return i._isDataDriven=r,i}return i.__extends(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,u,s,h,f,p,v,c,d,l){var D=this.array,y=n.i1616to32(t,r);if(D.push(y),y=n.i1616to32(Math.round(8*i),Math.round(8*u)),D.push(y),y=n.i8888to32(s/4,h/4,p,v),D.push(y),y=n.i8888to32(0,e.radToByte(f),10*c,Math.min(10*d,255)),D.push(y),this._isDataDriven){if(!l)throw new Error("Expecting data driven values.");var _=l.color,x=_[3]*l.opacity*255;D.push(n.i8888to32(_[0]*x,_[1]*x,_[2]*x,x)),a[0]=l.size,D.push(o[0])}},r}(n);r.SymbolVertexBuffer=f;var p=function(t){function r(){return t.call(this,16)||this}return i.__extends(r,t),r.prototype.add=function(t,r,i,e,a,o,u,s,h,f,p){var v=this.array,c=n.i1616to32(2*t+i,2*r+e);v.push(c);var d=o[3]*u*255;c=n.i8888to32(o[0]*d,o[1]*d,o[2]*d,d),v.push(c);var l=f[3]*p*255;c=n.i8888to32(f[0]*l,f[1]*l,f[2]*l,l),v.push(c),c=n.i8888to32(Math.min(32*s,255),Math.min(4*h,255),Math.min(a,255),0),v.push(c)},r}(n);r.CircleVertexBuffer=p}));