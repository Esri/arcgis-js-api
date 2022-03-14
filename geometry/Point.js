// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","../SpatialReference","./Geometry","../srUtils"],(function(t,e,i,n,s,r,a,o){var h=3.141592653589793;function u(t){return 57.29577951308232*t}function c(t){return.017453292519943*t}function l(t,e){e>89.99999?e=89.99999:e<-89.99999&&(e=-89.99999);var i=c(e);return[6378137*c(t),3189068.5*Math.log((1+Math.sin(i))/(1-Math.sin(i)))]}function f(t,e,i){var n=u(t/6378137);return i?[n,u(h/2-2*Math.atan(Math.exp(-1*e/6378137)))]:[n-360*Math.floor((n+180)/360),u(h/2-2*Math.atan(Math.exp(-1*e/6378137)))]}var y={type:"point",x:0,y:0},p=t(a,{declaredClass:"esri.geometry.Point",type:"point",x:0,y:0,constructor:function(t,i,n){e.isArray(t)?(this.x=t[0],this.y=t[1],this.spatialReference=i):s.isObject(t)?(s.mixin(this,t),null!=this.latitude&&(this.y=this.latitude),null!=this.longitude&&(this.x=this.longitude),this.spatialReference&&(this.spatialReference=o.createSpatialReference(this.spatialReference))):(this.x=t,this.y=i,this.spatialReference=n),this.verifySR()},offset:function(t,e){return new this.constructor(this.x+t,this.y+e,this.spatialReference)},setX:function(t){return this.x=t,this.clearCache(),this},setY:function(t){return this.y=t,this.clearCache(),this},setLongitude:function(t){var e=this.spatialReference;return e&&(e._isWebMercator()?this.setX(l(t,this.y)[0]):4326===e.wkid&&this.setX(t)),this},setLatitude:function(t){var e=this.spatialReference;return e&&(e._isWebMercator()?this.setY(l(this.x,t)[1]):4326===e.wkid&&this.setY(t)),this},getLongitude:function(){var t,e=this.spatialReference;return e&&(e._isWebMercator()?t=f(this.x,this.y)[0]:4326===e.wkid&&(t=this.x)),t},getLatitude:function(){var t,e=this.spatialReference;return e&&(e._isWebMercator()?t=f(this.x,this.y)[1]:4326===e.wkid&&(t=this.y)),t},update:function(t,e){return this.x=t,this.y=e,this.clearCache(),this},normalize:function(){var t=this.x,e=this.spatialReference;if(e){var i=e._getInfo();i&&(t=this._normalizeX(t,i))}return new this.constructor(t,this.y,e)},_normalizeX:function(t,e){var i=e.valid[0],n=e.valid[1],s=2*n;return t>n?t-=Math.ceil(Math.abs(t-n)/s)*s:t<i&&(t+=Math.ceil(Math.abs(t-i)/s)*s),t},toJson:function(){var t={x:this.x,y:this.y},e=this.spatialReference;return e&&(t.spatialReference=e.toJson()),t}});function x(){}function d(){}function _(t){var e=t._json;if(t._unquantizeFn){var i=t._unquantizeFn({x:e.x,y:e.y});t._xVal=i.x,t._yVal=i.y,t._unquantizeFn=null}else t._xVal=e.x,t._yVal=e.y;t._json=null}return x.prototype=p.prototype,d.prototype=new x,Object.defineProperty(d.prototype,"x",{get:function(){return this._json&&_(this),this._xVal},set:function(t){this._xVal=t}}),Object.defineProperty(d.prototype,"y",{get:function(){return this._json&&_(this),this._yVal},set:function(t){this._yVal=t}}),d.prototype.setupLazyUnquantization=function(t,e){this._unquantizeFn=t,this._json=e},p.simpleConstructor=x,p.accessorConstructor=d,p.lngLatToXY=l,p.xyToLngLat=f,p.defaultProps=y,p.metersPerDegree=6378137*Math.PI/180,i("extend-esri")&&(e.setObject("geometry.Point",p,n),n.geometry.defaultPoint=y),p}));