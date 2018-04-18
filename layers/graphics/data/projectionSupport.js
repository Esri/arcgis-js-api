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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../geometry/projection","../../../geometry/support/spatialReferenceUtils","../../../geometry/support/webMercatorUtils"],function(e,r,t,n,i,s,o){function a(e,r){if(!r)return null;if("x"in r){var t={x:0,y:0};return n=e(r.x,r.y,f,0),t.x=n[0],t.y=n[1],null!=r.z&&(t.z=r.z),null!=r.m&&(t.m=r.m),t}if("xmin"in r){var t={xmin:0,ymin:0,xmax:0,ymax:0};return i=e(r.xmin,r.ymin,f,0),t.xmin=i[0],t.ymin=i[1],s=e(r.xmax,r.ymax,f,0),t.xmax=s[0],t.ymax=s[1],r.hasZ&&(t.zmin=r.zmin,t.zmax=r.zmax,t.hasZ=!0),r.hasM&&(t.mmin=r.mmin,t.mmax=r.mmax,t.hasM=!0),t}if("rings"in r)return{rings:u(r.rings,e),hasM:r.hasM,hasZ:r.hasZ};if("paths"in r)return{paths:u(r.paths,e),hasM:r.hasM,hasZ:r.hasZ};if("points"in r)return{points:p(r.points,e),hasM:r.hasM,hasZ:r.hasZ};var n,i,s}function u(e,r){for(var t=[],n=0,i=e;n<i.length;n++){var s=i[n];t.push(p(s,r))}return t}function p(e,r){for(var t=[],n=0,i=e;n<i.length;n++){var s=i[n],o=r(s[0],s[1],[0,0],0);t.push(o),s.length>2&&o.push(s[2]),s.length>3&&o.push(s[3])}return t}function l(e,r,a){return!r||!a||s.equals(r,a)||o.canProject(r,a)?n.resolve():i.isSupported()?i.load():n.reject(new t(m,"projection not supported",{query:e}))}function c(e,r,t){return r&&t&&!s.equals(r,t)?o.canProject(r,t)?s.isWebMercator(t)?x(e):v(e):i.projectMany([e],r,t,null,!0)[0]:e}function h(e,r,t){return j.push(e,r,t)}Object.defineProperty(r,"__esModule",{value:!0});var m="feature-store:unsupported-query",f=[0,0];r.checkProjectionSupport=l;var x=a.bind(null,o.lngLatToXY),v=a.bind(null,o.xyToLngLat);r.project=c;var y=function(){function e(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e,r,t){var i=this;e&&e.length&&r&&t&&!s.equals(r,t)||n.resolve(e);var o={geometries:e,inSpatialReference:r,outSpatialReference:t,resolve:null};return this._jobs.push(o),n.create(function(e){o.resolve=e,null===i._timer&&(i._timer=setTimeout(i._process,10))},function(){var e=i._jobs.indexOf(o);e>-1&&i._jobs.splice(e,1)})},e.prototype._process=function(){this._timer=null;var e=this._jobs.shift();if(e){var r=e.geometries,t=e.inSpatialReference,n=e.outSpatialReference,a=e.resolve;a(o.canProject(t,n)?s.isWebMercator(n)?r.map(x):r.map(v):i.projectMany(r,t,n,null,!0)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},e}(),j=new y;r.projectMany=h});