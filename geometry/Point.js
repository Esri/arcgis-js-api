// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","../SpatialReference","./Geometry","../srUtils"],function(t,e,i,n,s,r,a,o){function h(t){return t*_}function u(t){return t*g}function c(t,e){e>89.99999?e=89.99999:e<-89.99999&&(e=-89.99999);var i=u(e);return[u(t)*x,x/2*Math.log((1+Math.sin(i))/(1-Math.sin(i)))]}function l(t,e,i){var n=h(t/x);return i?[n,h(d/2-2*Math.atan(Math.exp(-1*e/x)))]:[n-360*Math.floor((n+180)/360),h(d/2-2*Math.atan(Math.exp(-1*e/x)))]}function f(){}function y(){}function p(t){var e=t._json;if(t._unquantizeFn){var i=t._unquantizeFn({x:e.x,y:e.y});t._xVal=i.x,t._yVal=i.y,t._unquantizeFn=null}else t._xVal=e.x,t._yVal=e.y;t._json=null}var x=6378137,d=3.141592653589793,_=57.29577951308232,g=.017453292519943,M={type:"point",x:0,y:0},v=t(a,{declaredClass:"esri.geometry.Point",type:"point",x:0,y:0,constructor:function(t,i,n){e.isArray(t)?(this.x=t[0],this.y=t[1],this.spatialReference=i):s.isObject(t)?(s.mixin(this,t),null!=this.latitude&&(this.y=this.latitude),null!=this.longitude&&(this.x=this.longitude),this.spatialReference&&(this.spatialReference=o.createSpatialReference(this.spatialReference))):(this.x=t,this.y=i,this.spatialReference=n),this.verifySR()},offset:function(t,e){return new this.constructor(this.x+t,this.y+e,this.spatialReference)},setX:function(t){return this.x=t,this.clearCache(),this},setY:function(t){return this.y=t,this.clearCache(),this},setLongitude:function(t){var e=this.spatialReference;return e&&(e._isWebMercator()?this.setX(c(t,this.y)[0]):4326===e.wkid&&this.setX(t)),this},setLatitude:function(t){var e=this.spatialReference;return e&&(e._isWebMercator()?this.setY(c(this.x,t)[1]):4326===e.wkid&&this.setY(t)),this},getLongitude:function(){var t,e=this.spatialReference;return e&&(e._isWebMercator()?t=l(this.x,this.y)[0]:4326===e.wkid&&(t=this.x)),t},getLatitude:function(){var t,e=this.spatialReference;return e&&(e._isWebMercator()?t=l(this.x,this.y)[1]:4326===e.wkid&&(t=this.y)),t},update:function(t,e){return this.x=t,this.y=e,this.clearCache(),this},normalize:function(){var t=this.x,e=this.spatialReference;if(e){var i=e._getInfo();i&&(t=this._normalizeX(t,i))}return new this.constructor(t,this.y,e)},_normalizeX:function(t,e){var i,n=e.valid[0],s=e.valid[1],r=2*s;return t>s?(i=Math.ceil(Math.abs(t-s)/r),t-=i*r):t<n&&(i=Math.ceil(Math.abs(t-n)/r),t+=i*r),t},toJson:function(){var t={x:this.x,y:this.y},e=this.spatialReference;return e&&(t.spatialReference=e.toJson()),t}});return f.prototype=v.prototype,y.prototype=new f,Object.defineProperty(y.prototype,"x",{get:function(){return this._json&&p(this),this._xVal},set:function(t){this._xVal=t}}),Object.defineProperty(y.prototype,"y",{get:function(){return this._json&&p(this),this._yVal},set:function(t){this._yVal=t}}),y.prototype.setupLazyUnquantization=function(t,e){this._unquantizeFn=t,this._json=e},v.simpleConstructor=f,v.accessorConstructor=y,v.lngLatToXY=c,v.xyToLngLat=l,v.defaultProps=M,v.metersPerDegree=x*Math.PI/180,i("extend-esri")&&(e.setObject("geometry.Point",v,n),n.geometry.defaultPoint=M),v});