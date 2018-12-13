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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../geometry/projection","../../../geometry/support/spatialReferenceUtils","../../../geometry/support/webMercatorUtils"],function(e,r,t,n,i,s,o){function a(e,r){var t,n,i;if(!r)return null;if("x"in r){var s={x:0,y:0};return t=e(r.x,r.y,v,0),s.x=t[0],s.y=t[1],null!=r.z&&(s.z=r.z),null!=r.m&&(s.m=r.m),s}if("xmin"in r){var s={xmin:0,ymin:0,xmax:0,ymax:0};return n=e(r.xmin,r.ymin,v,0),s.xmin=n[0],s.ymin=n[1],i=e(r.xmax,r.ymax,v,0),s.xmax=i[0],s.ymax=i[1],r.hasZ&&(s.zmin=r.zmin,s.zmax=r.zmax,s.hasZ=!0),r.hasM&&(s.mmin=r.mmin,s.mmax=r.mmax,s.hasM=!0),s}return"rings"in r?{rings:u(r.rings,e),hasM:r.hasM,hasZ:r.hasZ}:"paths"in r?{paths:u(r.paths,e),hasM:r.hasM,hasZ:r.hasZ}:"points"in r?{points:l(r.points,e),hasM:r.hasM,hasZ:r.hasZ}:void 0}function u(e,r){for(var t=[],n=0,i=e;n<i.length;n++){var s=i[n];t.push(l(s,r))}return t}function l(e,r){for(var t=[],n=0,i=e;n<i.length;n++){var s=i[n],o=r(s[0],s[1],[0,0],0);t.push(o),s.length>2&&o.push(s[2]),s.length>3&&o.push(s[3])}return t}function p(e,r){if(Array.isArray(e)){for(var s=0,o=e;s<o.length;s++){var a=o[s];if(c(a.geometry&&a.geometry.spatialReference,r))return i.isSupported()?i.load():n.reject(new t(f,"projection not supported",{inSpatialReference:e,outSpatialReference:r}))}return n.resolve()}return c(e,r)?i.isSupported()?i.load():n.reject(new t(f,"projection not supported",{inSpatialReference:e,outSpatialReference:r})):n.resolve()}function c(e,r){return!(!s.isValid(e)||!s.isValid(r)||s.equals(e,r)||o.canProject(e,r))}function h(e,r,t){return s.isValid(r)&&s.isValid(t)&&!s.equals(r,t)?o.canProject(r,t)?s.isWebMercator(t)?x(e):y(e):i.projectMany([e],r,t,null,!0)[0]:e}function m(e,r,t){return d.push(e,r,t)}Object.defineProperty(r,"__esModule",{value:!0});var f="feature-store:unsupported-query",v=[0,0];r.checkProjectionSupport=p;var x=a.bind(null,o.lngLatToXY),y=a.bind(null,o.xyToLngLat);r.project=h;var j=function(){function e(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e,r,t){var i=this;e&&e.length&&r&&t&&!s.equals(r,t)||n.resolve(e);var o={geometries:e,inSpatialReference:r,outSpatialReference:t,resolve:null};return this._jobs.push(o),n.create(function(e){o.resolve=e,null===i._timer&&(i._timer=setTimeout(i._process,10))},function(){var e=i._jobs.indexOf(o);e>-1&&i._jobs.splice(e,1)})},e.prototype._process=function(){this._timer=null;var e=this._jobs.shift();if(e){var r=e.geometries,t=e.inSpatialReference,n=e.outSpatialReference,a=e.resolve;a(o.canProject(t,n)?s.isWebMercator(n)?r.map(x):r.map(y):i.projectMany(r,t,n,null,!0)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},e}(),d=new j;r.projectMany=m});