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

define(["./SpatialReference","./Geometry","./support/webMercatorUtils","./support/spatialReferenceUtils"],function(t,e,i,s){var n=[0,0],r=i.lngLatToXY,a=i.xyToLngLat,h=e.createSubclass({declaredClass:"esri.geometry.Point",normalizeCtorArgs:function(e,i,s,a,h){var l;if(Array.isArray(e))l=e,h=i,e=l[0],i=l[1],s=l[2],a=l[3];else if(e&&"object"==typeof e){if(l=e,e=null!=l.x?l.x:l.longitude,i=null!=l.y?l.y:l.latitude,s=null!=l.z?l.z:l.altitude,a=l.m,h=l.spatialReference,h&&"esri.SpatialReference"!==h.declaredClass&&(h=new t(h)),!l.declaredClass&&h&&h.isWebMercator&&null!=l.longitude&&null!=l.latitude){var u=r(l.longitude,l.latitude,!1,n);e=u[0],i=u[1]}}else this.isSR(s)?(h=s,s=null):this.isSR(a)&&(h=a,a=null);var c={x:e,y:i};return null!=h&&(c.spatialReference=h),null!=s&&(c.z=s),null!=a&&(c.m=a),c},properties:{cache:{dependsOn:["x","y","z","m"]},hasM:{dependsOn:["m"],get:function(){return void 0!==this.m},set:function(t){var e=this._get("hasM");t!==e&&(this._set("m",t?0:void 0),this._set("hasM",t))}},hasZ:{dependsOn:["z"],get:function(){return void 0!==this.z},set:function(t){var e=this._get("hasZ");t!==e&&(this._set("z",t?0:void 0),this._set("hasZ",t))}},latitude:{dependsOn:["y"],get:function(){var t=this._get("spatialReference");if(t){if(t.isWebMercator)return a(this.x,this.y,!1,n)[1];if(4326===t.wkid)return this._get("y")}return null},set:function(t){var e=this._get("spatialReference");e&&(e.isWebMercator?this._set("y",r(this.x,t,!1,n)[1]):4326===e.wkid&&this._set("y",t),this._set("latitude",t))}},longitude:{dependsOn:["x"],get:function(){var t=this._get("spatialReference");if(t){if(t.isWebMercator)return a(this._get("x"),this._get("y"),!1,n)[0];if(4326===t.wkid)return this._get("x")}return null},set:function(t){var e=this._get("spatialReference");e&&(e.isWebMercator?this._set("x",r(t,this._get("y"),!1,n)[0]):4326===e.wkid&&this._set("x",t),this._set("longitude",t))}},x:0,y:0,z:void 0,m:void 0,type:"point"},clone:function(){var t=new h;return t.x=this.x,t.y=this.y,t.z=this.z,t.m=this.m,t.spatialReference=this.spatialReference,t},copy:function(t){return h.copy(t,this),this},equals:function(t){if(!t)return!1;var e=this.x,i=this.y,s=this.z,n=this.m,h=this.spatialReference,l=t.x,u=t.y,c=t.z,o=t.m,f=t.spatialReference;if(!h.equals(f))if(h.isWebMercator&&4326===f.wkid){var d=r(l,u);l=d[0],u=d[1],f=h}else{if(4326!==h.wkid||!f.isWebMercator)return!1;var y=a(l,u);l=y[0],u=y[1],f=h}return e===l&&i===u&&s===c&&n===o&&h.wkid===f.wkid},offset:function(t,e,i){return this.x=this.x+t,this.y=this.y+e,null!=i&&this.hasZ&&(this.z=this.z+i),this},normalize:function(){var t=this.x,e=this.spatialReference;if(e){var i=s.getInfo(e);if(i){var n,r=i.valid[0],a=i.valid[1],h=2*a;t>a?(n=Math.ceil(Math.abs(t-a)/h),t-=n*h):r>t&&(n=Math.ceil(Math.abs(t-r)/h),t+=n*h)}}return this._set("x",t),this},distance:function(t){return h.distance(this,t)},toArray:function(){var t=this.hasZ,e=this.hasM;return t&&e?[this.x,this.y,this.z,this.m]:t?[this.x,this.y,this.z]:e?[this.x,this.y,this.m]:[this.x,this.y]},toJSON:function(){var t=this.spatialReference,e={x:this.x,y:this.y};return this.hasZ&&(e.z=this.z),this.hasM&&(e.m=this.m),e.spatialReference=t&&t.toJSON(),e}});return h.lngLatToXY=r,h.xyToLngLat=a,h.copy=function(t,e){e.x=t.x,e.y=t.y,e.z=t.z,e.m=t.m,e.spatialReference=Object.isFrozen(t.spatialReference)?t.spatialReference:t.spatialReference.clone()},h.distance=function(t,e){var i=t.x-e.x,s=t.y-e.y,n=t.hasZ&&e.hasZ?t.z-e.z:0;return Math.sqrt(i*i+s*s+n*n)},h});