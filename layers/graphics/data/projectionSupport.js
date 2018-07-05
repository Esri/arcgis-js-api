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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../geometry/projection","../../../geometry/support/spatialReferenceUtils","../../../geometry/support/webMercatorUtils"],function(e,r,t,n,s,i,o){function a(e,r){var t,n,s;if(!r)return null;if("x"in r){var i={x:0,y:0};return t=e(r.x,r.y,f,0),i.x=t[0],i.y=t[1],null!=r.z&&(i.z=r.z),null!=r.m&&(i.m=r.m),i}if("xmin"in r){var i={xmin:0,ymin:0,xmax:0,ymax:0};return n=e(r.xmin,r.ymin,f,0),i.xmin=n[0],i.ymin=n[1],s=e(r.xmax,r.ymax,f,0),i.xmax=s[0],i.ymax=s[1],r.hasZ&&(i.zmin=r.zmin,i.zmax=r.zmax,i.hasZ=!0),r.hasM&&(i.mmin=r.mmin,i.mmax=r.mmax,i.hasM=!0),i}return"rings"in r?{rings:u(r.rings,e),hasM:r.hasM,hasZ:r.hasZ}:"paths"in r?{paths:u(r.paths,e),hasM:r.hasM,hasZ:r.hasZ}:"points"in r?{points:p(r.points,e),hasM:r.hasM,hasZ:r.hasZ}:void 0}function u(e,r){for(var t=[],n=0,s=e;n<s.length;n++){var i=s[n];t.push(p(i,r))}return t}function p(e,r){for(var t=[],n=0,s=e;n<s.length;n++){var i=s[n],o=r(i[0],i[1],[0,0],0);t.push(o),i.length>2&&o.push(i[2]),i.length>3&&o.push(i[3])}return t}function l(e,r,a){return!r||!a||i.equals(r,a)||o.canProject(r,a)?n.resolve():s.isSupported()?s.load():n.reject(new t(m,"projection not supported",{query:e}))}function c(e,r,t){return r&&t&&!i.equals(r,t)?o.canProject(r,t)?i.isWebMercator(t)?x(e):v(e):s.projectMany([e],r,t,null,!0)[0]:e}function h(e,r,t){return j.push(e,r,t)}Object.defineProperty(r,"__esModule",{value:!0});var m="feature-store:unsupported-query",f=[0,0];r.checkProjectionSupport=l;var x=a.bind(null,o.lngLatToXY),v=a.bind(null,o.xyToLngLat);r.project=c;var y=function(){function e(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e,r,t){var s=this;e&&e.length&&r&&t&&!i.equals(r,t)||n.resolve(e);var o={geometries:e,inSpatialReference:r,outSpatialReference:t,resolve:null};return this._jobs.push(o),n.create(function(e){o.resolve=e,null===s._timer&&(s._timer=setTimeout(s._process,10))},function(){var e=s._jobs.indexOf(o);e>-1&&s._jobs.splice(e,1)})},e.prototype._process=function(){this._timer=null;var e=this._jobs.shift();if(e){var r=e.geometries,t=e.inSpatialReference,n=e.outSpatialReference,a=e.resolve;a(o.canProject(t,n)?i.isWebMercator(n)?r.map(x):r.map(v):s.projectMany(r,t,n,null,!0)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},e}(),j=new y;r.projectMany=h});