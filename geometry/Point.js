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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","../SpatialReference","./Geometry","../srUtils"],function(t,e,i,s,n,a,r,h){function o(t){return t*y}function c(t){return t*p}function u(t,e){e>89.99999?e=89.99999:-89.99999>e&&(e=-89.99999);var i=c(e);return[c(t)*l,l/2*Math.log((1+Math.sin(i))/(1-Math.sin(i)))]}function f(t,e,i){var s=o(t/l);return i?[s,o(d/2-2*Math.atan(Math.exp(-1*e/l)))]:[s-360*Math.floor((s+180)/360),o(d/2-2*Math.atan(Math.exp(-1*e/l)))]}var l=6378137,d=3.141592653589793,y=57.29577951308232,p=.017453292519943,x={type:"point",x:0,y:0},M=t(r,{declaredClass:"esri.geometry.Point",constructor:function(t,i,s){e.mixin(this,x),e.isArray(t)?(this.x=t[0],this.y=t[1],this.spatialReference=i):e.isObject(t)?(e.mixin(this,t),n.isDefined(this.latitude)&&(this.y=this.latitude),n.isDefined(this.longitude)&&(this.x=this.longitude),this.spatialReference&&(this.spatialReference=h.createSpatialReference(this.spatialReference))):(this.x=t,this.y=i,this.spatialReference=s),this.verifySR()},offset:function(t,e){return new this.constructor(this.x+t,this.y+e,this.spatialReference)},setX:function(t){return this.x=t,this.clearCache(),this},setY:function(t){return this.y=t,this.clearCache(),this},setLongitude:function(t){var e=this.spatialReference;return e&&(e._isWebMercator()?this.setX(u(t,this.y)[0]):4326===e.wkid&&this.setX(t)),this},setLatitude:function(t){var e=this.spatialReference;return e&&(e._isWebMercator()?this.setY(u(this.x,t)[1]):4326===e.wkid&&this.setY(t)),this},getLongitude:function(){var t,e=this.spatialReference;return e&&(e._isWebMercator()?t=f(this.x,this.y)[0]:4326===e.wkid&&(t=this.x)),t},getLatitude:function(){var t,e=this.spatialReference;return e&&(e._isWebMercator()?t=f(this.x,this.y)[1]:4326===e.wkid&&(t=this.y)),t},update:function(t,e){return this.x=t,this.y=e,this.clearCache(),this},normalize:function(){var t=this.x,e=this.spatialReference;if(e){var i=e._getInfo();if(i){var s,n=i.valid[0],a=i.valid[1],r=2*a;t>a?(s=Math.ceil(Math.abs(t-a)/r),t-=s*r):n>t&&(s=Math.ceil(Math.abs(t-n)/r),t+=s*r)}}return new this.constructor(t,this.y,e)},toJson:function(){var t={x:this.x,y:this.y},e=this.spatialReference;return e&&(t.spatialReference=e.toJson()),t}});return M.lngLatToXY=u,M.xyToLngLat=f,M.defaultProps=x,i("extend-esri")&&(e.setObject("geometry.Point",M,s),s.geometry.defaultPoint=x),M});