// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../geometry/projection","../../../geometry/support/spatialReferenceUtils","../../../geometry/support/webMercatorUtils"],function(e,r,t,n,i,o,s){function a(e,r){var t,n,i;if(!r)return null;if("x"in r){var o={x:0,y:0};return t=e(r.x,r.y,v,0),o.x=t[0],o.y=t[1],null!=r.z&&(o.z=r.z),null!=r.m&&(o.m=r.m),o}if("xmin"in r){var o={xmin:0,ymin:0,xmax:0,ymax:0};return n=e(r.xmin,r.ymin,v,0),o.xmin=n[0],o.ymin=n[1],i=e(r.xmax,r.ymax,v,0),o.xmax=i[0],o.ymax=i[1],r.hasZ&&(o.zmin=r.zmin,o.zmax=r.zmax,o.hasZ=!0),r.hasM&&(o.mmin=r.mmin,o.mmax=r.mmax,o.hasM=!0),o}return"rings"in r?{rings:u(r.rings,e),hasM:r.hasM,hasZ:r.hasZ}:"paths"in r?{paths:u(r.paths,e),hasM:r.hasM,hasZ:r.hasZ}:"points"in r?{points:p(r.points,e),hasM:r.hasM,hasZ:r.hasZ}:void 0}function u(e,r){for(var t=[],n=0,i=e;n<i.length;n++){var o=i[n];t.push(p(o,r))}return t}function p(e,r){for(var t=[],n=0,i=e;n<i.length;n++){var o=i[n],s=r(o[0],o[1],[0,0],0);t.push(s),o.length>2&&s.push(o[2]),o.length>3&&s.push(o[3])}return t}function l(e,r){if(Array.isArray(e)){for(var o=0,s=e;o<s.length;o++){var a=s[o];if(c(a.geometry&&a.geometry.spatialReference,r))return i.isSupported()?i.load():n.reject(new t(f,"projection not supported",{inSpatialReference:e,outSpatialReference:r}))}return n.resolve()}return c(e,r)?i.isSupported()?i.load():n.reject(new t(f,"projection not supported",{inSpatialReference:e,outSpatialReference:r})):n.resolve()}function c(e,r){return!(!e||!r||o.equals(e,r)||s.canProject(e,r))}function h(e,r,t){return r&&t&&!o.equals(r,t)?s.canProject(r,t)?o.isWebMercator(t)?x(e):y(e):i.projectMany([e],r,t,null,!0)[0]:e}function m(e,r,t){return g.push(e,r,t)}Object.defineProperty(r,"__esModule",{value:!0});var f="feature-store:unsupported-query",v=[0,0];r.checkProjectionSupport=l;var x=a.bind(null,s.lngLatToXY),y=a.bind(null,s.xyToLngLat);r.project=h;var j=function(){function e(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e,r,t){var i=this;e&&e.length&&r&&t&&!o.equals(r,t)||n.resolve(e);var s={geometries:e,inSpatialReference:r,outSpatialReference:t,resolve:null};return this._jobs.push(s),n.create(function(e){s.resolve=e,null===i._timer&&(i._timer=setTimeout(i._process,10))},function(){var e=i._jobs.indexOf(s);e>-1&&i._jobs.splice(e,1)})},e.prototype._process=function(){this._timer=null;var e=this._jobs.shift();if(e){var r=e.geometries,t=e.inSpatialReference,n=e.outSpatialReference,a=e.resolve;a(s.canProject(t,n)?o.isWebMercator(n)?r.map(x):r.map(y):i.projectMany(r,t,n,null,!0)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},e}(),g=new j;r.projectMany=m});