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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./MemoryBuffer","./GeometryUtils"],function(t,r,i,e,a,n){Object.defineProperty(r,"__esModule",{value:!0});var o=new Float32Array(1),u=new Uint32Array(o.buffer),s=function(t){function r(r){var i=t.call(this,r?20:12)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,e,n,s,h,p){var v=this.array,f=a.i1616to32(t,r);v.push(f);var c=31;if(f=a.i8888to32(Math.round(c*i),Math.round(c*e),Math.round(c*n),Math.round(c*s)),v.push(f),f=a.i1616to32(h,0),v.push(f),this._isDataDriven){if(!p)throw new Error("Expecting data driven values.");var D=p.color,d=D[3]*p.opacity*255;v.push(a.i8888to32(D[0]*d,D[1]*d,D[2]*d,d)),o[0]=p.size,v.push(u[0])}},r}(a);r.LineVertexBuffer=s;var h=function(t){function r(r){var i=t.call(this,r?8:4)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i){var e=this.array;if(e.push(a.i1616to32(t,r)),this._isDataDriven){if(!i)throw new Error("Expecting data driven values.");var n=i.color,o=n[3]*i.opacity*255;e.push(a.i8888to32(n[0]*o,n[1]*o,n[2]*o,o))}},r}(a);r.FillVertexBuffer=h;var p=function(t){function r(r){var i=t.call(this,r?12:8)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,e,n,o,u){var s=this.array,h=this.index,p=a.i1616to32(t,r);s.push(p);var v=15;if(p=a.i8888to32(Math.round(v*i),Math.round(v*e),n,o),s.push(p),this._isDataDriven){if(!u)throw new Error("Expecting data driven values.");var f=u.color,c=f[3]*u.opacity*255;s.push(a.i8888to32(f[0]*c,f[1]*c,f[2]*c,c))}return h},r}(a);r.OutlineVertexBuffer=p;var v=function(t){function r(r){var i=t.call(this,r?24:16)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,e,s,h,p,v,f,c,D){var d=this.array,l=a.i1616to32(t,r);if(d.push(l),l=a.i1616to32(Math.round(32*i),Math.round(32*e)),d.push(l),l=a.i8888to32(s/4,h/4,0,0),d.push(l),l=a.i8888to32(Math.ceil(10*c),n.radToByte(p),10*v,Math.min(10*f,255)),d.push(l),this._isDataDriven){if(!D)throw new Error("Expecting data driven values.");var y=D.color,_=y[3]*D.opacity*255;d.push(a.i8888to32(y[0]*_,y[1]*_,y[2]*_,_)),o[0]=D.size,d.push(u[0])}},r}(a);r.SymbolVertexBuffer=v});