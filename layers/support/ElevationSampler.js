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

define(["require","exports","../../geometry","../../core/Logger","../../geometry/support/scaleUtils","../../geometry/support/webMercatorUtils"],function(e,t,n,i,r,o){function a(e,t){var n=l(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":u(e,n,t);break;case"polyline":p(e,n,t);break;case"multipoint":c(e,n,t)}return e}function s(e,t){return new n.Extent({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function l(e,t){var n=e.spatialReference;return n.equals(t)?e:o.canProject(n,t)?o.project(e,t):(f.error("Cannot project geometry spatial reference (wkid:"+n.wkid+") to elevation sampler spatial reference (wkid:"+t.wkid+")"),null)}function u(e,t,n){e.z=n.elevationAt(t)||0}function p(e,t,n){v.spatialReference=t.spatialReference;for(var i=0;i<e.paths.length;i++)for(var r=e.paths[i],o=t.paths[i],a=0;a<r.length;a++){var s=r[a],l=o[a];v.x=l[0],v.y=l[1],s[2]=n.elevationAt(v)||0}e.hasZ=!0}function c(e,t,n){v.spatialReference=t.spatialReference;for(var i=0;i<e.points.length;i++){var r=e.points[i],o=t.points[i];v.x=o[0],v.y=o[1],r[2]=n.elevationAt(v)||0}e.hasZ=!0}Object.defineProperty(t,"__esModule",{value:!0});var f=i.getLogger("esri.layers.support.ElevationSampler"),m=function(){function e(e,t){this.tile=e,this.extent=s(e.tile.extent,t.spatialReference);var n=r.getMetersPerUnitForSR(t.spatialReference),i=t.lodAt(e.tile.level).resolution*n;this.demResolution={min:i,max:i}}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0}),e.prototype.contains=function(e){var t=l(e,this.spatialReference),n=t.x,i=t.y;return n>=this.extent.xmin&&n<this.extent.xmax&&i>=this.extent.ymin&&i<this.extent.ymax},e.prototype.elevationAt=function(e){var t=l(e,this.spatialReference);return t?this.tile.sample(t.x,t.y):null},e.prototype.queryElevation=function(e){return a(e.clone(),this)},e.prototype.on=function(e,t){return x},e}();t.TileElevationSampler=m;var h=function(){function e(e,t){this.samplers=t?e.map(function(e){return new m(e,t)}):e;var n=this.samplers[0];if(n){this.extent=n.extent.clone();var i=n.demResolution,r=i.min,o=i.max;this.demResolution={min:r,max:o};for(var a=1;a<this.samplers.length;a++){var l=this.samplers[a];this.extent.union(l.extent),this.demResolution.min=Math.min(this.demResolution.min,l.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,l.demResolution.max)}}else this.extent=s([0,0,0,0],t.spatialReference),this.demResolution={min:0,max:0}}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0}),e.prototype.elevationAt=function(e){var t=l(e,this.spatialReference);if(!t)return null;for(var n=0,i=this.samplers;n<i.length;n++){var r=i[n];if(r.contains(t))return r.elevationAt(t)}return null},e.prototype.queryElevation=function(e){return a(e.clone(),this)},e.prototype.on=function(e,t){return x},e}();t.MultiTileElevationSampler=h,t.updateGeometryElevation=a;var v=new n.Point,x={remove:function(){}}});