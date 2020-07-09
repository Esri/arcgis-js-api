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

define(["require","exports","tslib","../../../core/Error","../../../core/promiseUtils","../../../geometry/projection","../../../geometry/geometryAdapters/json","../../../geometry/support/spatialReferenceUtils","../../../geometry/support/webMercatorUtils"],(function(e,r,t,n,i,o,s,a,u){Object.defineProperty(r,"__esModule",{value:!0});var p=[0,0];function c(e,r){var t,n,i;if(!r)return null;if("x"in r){var o={x:0,y:0};return t=e(r.x,r.y,p),o.x=t[0],o.y=t[1],null!=r.z&&(o.z=r.z),null!=r.m&&(o.m=r.m),o}if("xmin"in r){o={xmin:0,ymin:0,xmax:0,ymax:0};return n=e(r.xmin,r.ymin,p),o.xmin=n[0],o.ymin=n[1],i=e(r.xmax,r.ymax,p),o.xmax=i[0],o.ymax=i[1],r.hasZ&&(o.zmin=r.zmin,o.zmax=r.zmax,o.hasZ=!0),r.hasM&&(o.mmin=r.mmin,o.mmax=r.mmax,o.hasM=!0),o}return"rings"in r?{rings:l(r.rings,e),hasM:r.hasM,hasZ:r.hasZ}:"paths"in r?{paths:l(r.paths,e),hasM:r.hasM,hasZ:r.hasZ}:"points"in r?{points:h(r.points,e),hasM:r.hasM,hasZ:r.hasZ}:void 0}function l(e,r){for(var t=[],n=0,i=e;n<i.length;n++){var o=i[n];t.push(h(o,r))}return t}function h(e,r){for(var t=[],n=0,i=e;n<i.length;n++){var o=i[n],s=r(o[0],o[1],[0,0]);t.push(s),o.length>2&&s.push(o[2]),o.length>3&&s.push(o[3])}return t}function f(e,r){return!(!a.isValid(e)||!a.isValid(r)||a.equals(e,r)||u.canProject(e,r))}r.doesBrowserSupportProjection=function(e,r){return!f(e,r)||o.isSupported()},r.checkProjectionSupport=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var i,s,a;return t.__generator(this,(function(t){if(!r)return[2];if(Array.isArray(e)){for(i=0,s=e;i<s.length;i++)if(f((a=s[i]).geometry&&a.geometry.spatialReference,r)){if(o.isSupported())return[2,o.load()];throw new n("feature-store:unsupported-query","projection not supported",{inSpatialReference:e,outSpatialReference:r})}return[2]}if(!f(e,r))return[2];if(o.isSupported())return[2,o.load()];throw new n("feature-store:unsupported-query","projection not supported",{inSpatialReference:e,outSpatialReference:r})}))}))};var m=c.bind(null,u.lngLatToXY),d=c.bind(null,u.xyToLngLat);r.project=function(e,r,t){return e?(t||(t=r,r=e.spatialReference),a.isValid(r)&&a.isValid(t)&&!a.equals(r,t)?u.canProject(r,t)?a.isWebMercator(t)?m(e):d(e):o.projectMany(s.jsonAdapter,[e],r,t,null)[0]:e):e};var _=new(function(){function e(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e,r,n){return t.__awaiter(this,void 0,void 0,(function(){var o,s=this;return t.__generator(this,(function(t){return e&&e.length&&r&&n&&!a.equals(r,n)||i.resolve(e),o={geometries:e,inSpatialReference:r,outSpatialReference:n,resolve:null},this._jobs.push(o),[2,i.create((function(e){o.resolve=e,null===s._timer&&(s._timer=setTimeout(s._process,10))}))]}))}))},e.prototype._process=function(){this._timer=null;var e=this._jobs.shift();if(e){var r=e.geometries,t=e.inSpatialReference,n=e.outSpatialReference,i=e.resolve;u.canProject(t,n)?a.isWebMercator(n)?i(r.map(m)):i(r.map(d)):i(o.projectMany(s.jsonAdapter,r,t,n,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},e}());r.projectMany=function(e,r,n){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,_.push(e,r,n)]}))}))}}));