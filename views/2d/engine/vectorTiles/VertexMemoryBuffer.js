// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","./GeometryUtils","./MemoryBuffer"],function(t,r,i,a,n){Object.defineProperty(r,"__esModule",{value:!0});var e=new Float32Array(1),o=new Uint32Array(e.buffer),u=function(t){function r(r){var i=t.call(this,r?20:12)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,a,u,s,h,p){var v=this.array,f=n.i1616to32(t,r);v.push(f);if(f=n.i8888to32(Math.round(31*i),Math.round(31*a),Math.round(31*u),Math.round(31*s)),v.push(f),f=n.i1616to32(h,0),v.push(f),this._isDataDriven){if(!p)throw new Error("Expecting data driven values.");var c=p.color,d=c[3]*p.opacity*255;v.push(n.i8888to32(c[0]*d,c[1]*d,c[2]*d,d)),e[0]=p.size,v.push(o[0])}},r}(n);r.LineVertexBuffer=u;var s=function(t){function r(r){var i=t.call(this,r?8:4)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i){var a=this.array;if(a.push(n.i1616to32(t,r)),this._isDataDriven){if(!i)throw new Error("Expecting data driven values.");var e=i.color,o=e[3]*i.opacity*255;a.push(n.i8888to32(e[0]*o,e[1]*o,e[2]*o,o))}},r}(n);r.FillVertexBuffer=s;var h=function(t){function r(r){var i=t.call(this,r?12:8)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,a,e,o,u){var s=this.array,h=this.index,p=n.i1616to32(t,r);s.push(p);if(p=n.i8888to32(Math.round(15*i),Math.round(15*a),e,o),s.push(p),this._isDataDriven){if(!u)throw new Error("Expecting data driven values.");var v=u.color,f=v[3]*u.opacity*255;s.push(n.i8888to32(v[0]*f,v[1]*f,v[2]*f,f))}return h},r}(n);r.OutlineVertexBuffer=h;var p=function(t){function r(r){var i=t.call(this,r?24:16)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,u,s,h,p,v,f,c,d){var D=this.array,l=n.i1616to32(t,r);if(D.push(l),l=n.i1616to32(Math.round(8*i),Math.round(8*u)),D.push(l),l=n.i8888to32(s/4,h/4,0,0),D.push(l),l=n.i8888to32(Math.ceil(10*c),a.radToByte(p),10*v,Math.min(10*f,255)),D.push(l),this._isDataDriven){if(!d)throw new Error("Expecting data driven values.");var y=d.color,M=y[3]*d.opacity*255;D.push(n.i8888to32(y[0]*M,y[1]*M,y[2]*M,M)),e[0]=d.size,D.push(o[0])}},r}(n);r.SymbolVertexBuffer=p;var v=function(t){function r(){return t.call(this,16)||this}return i(r,t),r.prototype.add=function(t,r,i,a,e,o,u,s,h,p,v){var f=this.array,c=n.i1616to32(2*t+i,2*r+a);f.push(c);var d=o[3]*u*255;c=n.i8888to32(o[0]*d,o[1]*d,o[2]*d,d),f.push(c);var D=p[3]*v*255;c=n.i8888to32(p[0]*D,p[1]*D,p[2]*D,D),f.push(c),c=n.i8888to32(Math.min(32*s,255),Math.min(4*h,255),Math.min(e,255),0),f.push(c)},r}(n);r.CircleVertexBuffer=v});