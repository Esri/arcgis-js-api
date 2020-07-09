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

define(["require","exports","tslib","./GeometryUtils","./MemoryBuffer"],(function(t,r,i,e,n){Object.defineProperty(r,"__esModule",{value:!0});var a=new Float32Array(1),o=new Uint32Array(a.buffer),u=function(t){function r(r){var i=t.call(this,r?20:12)||this;return i._isDataDriven=r,i}return i.__extends(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,e,u,s,h,p){var v=this.array,f=n.i1616to32(t,r);v.push(f);if(f=n.i8888to32(Math.round(31*i),Math.round(31*e),Math.round(31*u),Math.round(31*s)),v.push(f),f=n.i1616to32(h,0),v.push(f),this._isDataDriven){if(!p)throw new Error("Expecting data driven values.");var c=p.color,d=c[3]*p.opacity*255;v.push(n.i8888to32(c[0]*d,c[1]*d,c[2]*d,d)),a[0]=p.size,v.push(o[0])}},r}(n);r.LineVertexBuffer=u;var s=function(t){function r(r){var i=t.call(this,r?8:4)||this;return i._isDataDriven=r,i}return i.__extends(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i){var e=this.array;if(e.push(n.i1616to32(t,r)),this._isDataDriven){if(!i)throw new Error("Expecting data driven values.");var a=i.color,o=a[3]*i.opacity*255;e.push(n.i8888to32(a[0]*o,a[1]*o,a[2]*o,o))}},r}(n);r.FillVertexBuffer=s;var h=function(t){function r(r){var i=t.call(this,r?12:8)||this;return i._isDataDriven=r,i}return i.__extends(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,e,a,o,u){var s=this.array,h=this.index,p=n.i1616to32(t,r);s.push(p);if(p=n.i8888to32(Math.round(15*i),Math.round(15*e),a,o),s.push(p),this._isDataDriven){if(!u)throw new Error("Expecting data driven values.");var v=u.color,f=v[3]*u.opacity*255;s.push(n.i8888to32(v[0]*f,v[1]*f,v[2]*f,f))}return h},r}(n);r.OutlineVertexBuffer=h;var p=function(t){function r(r){var i=t.call(this,r?28:20)||this;return i._isDataDriven=r,i}return i.__extends(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,u,s,h,p,v,f,c,d,D,l){var y=this.array,_=n.i1616to32(t,r);if(y.push(_),_=n.i1616to32(Math.round(8*i),Math.round(8*u)),y.push(_),_=n.i8888to32(s/4,h/4,0,0),y.push(_),_=n.i8888to32(Math.ceil(10*D),e.radToByte(p),10*c,Math.min(10*d,255)),y.push(_),_=n.i8888to32(v,f,0,0),y.push(_),this._isDataDriven){if(!l)throw new Error("Expecting data driven values.");var x=l.color,M=x[3]*l.opacity*255;y.push(n.i8888to32(x[0]*M,x[1]*M,x[2]*M,M)),a[0]=l.size,y.push(o[0])}},r}(n);r.SymbolVertexBuffer=p;var v=function(t){function r(){return t.call(this,16)||this}return i.__extends(r,t),r.prototype.add=function(t,r,i,e,a,o,u,s,h,p,v){var f=this.array,c=n.i1616to32(2*t+i,2*r+e);f.push(c);var d=o[3]*u*255;c=n.i8888to32(o[0]*d,o[1]*d,o[2]*d,d),f.push(c);var D=p[3]*v*255;c=n.i8888to32(p[0]*D,p[1]*D,p[2]*D,D),f.push(c),c=n.i8888to32(Math.min(32*s,255),Math.min(4*h,255),Math.min(a,255),0),f.push(c)},r}(n);r.CircleVertexBuffer=v}));