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

define(["require","exports","../../geometry","../../core/Logger","../../geometry/support/aaBoundingRect","../../geometry/support/scaleUtils","../../geometry/support/webMercatorUtils"],function(e,t,n,r,i,o,a){function s(e,t){var n=l(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":u(e,n,t);break;case"polyline":p(e,n,t);break;case"multipoint":c(e,n,t)}return e}function l(e,t){var n=e.spatialReference;return n.equals(t)?e:a.canProject(n,t)?a.project(e,t):(f.error("Cannot project geometry spatial reference (wkid:"+n.wkid+") to elevation sampler spatial reference (wkid:"+t.wkid+")"),null)}function u(e,t,n){e.z=n.elevationAt(t)||0}function p(e,t,n){v.spatialReference=t.spatialReference;for(var r=0;r<e.paths.length;r++)for(var i=e.paths[r],o=t.paths[r],a=0;a<i.length;a++){var s=i[a],l=o[a];v.x=l[0],v.y=l[1],s[2]=n.elevationAt(v)||0}e.hasZ=!0}function c(e,t,n){v.spatialReference=t.spatialReference;for(var r=0;r<e.points.length;r++){var i=e.points[r],o=t.points[r];v.x=o[0],v.y=o[1],i[2]=n.elevationAt(v)||0}e.hasZ=!0}Object.defineProperty(t,"__esModule",{value:!0});var f=r.getLogger("esri.layers.support.ElevationSampler"),m=function(){function e(e,t){this.tile=e,this.extent=i.toExtent(e.tile.extent,t.spatialReference);var n=o.getMetersPerUnitForSR(t.spatialReference),r=t.lodAt(e.tile.level).resolution*n;this.demResolution={min:r,max:r}}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0}),e.prototype.contains=function(e){var t=l(e,this.spatialReference),n=t.x,r=t.y;return n>=this.extent.xmin&&n<this.extent.xmax&&r>=this.extent.ymin&&r<this.extent.ymax},e.prototype.elevationAt=function(e){var t=l(e,this.spatialReference);return t?this.tile.sample(t.x,t.y):null},e.prototype.queryElevation=function(e){return s(e.clone(),this)},e.prototype.on=function(e,t){return x},e}();t.TileElevationSampler=m;var h=function(){function e(e,t){this.samplers=t?e.map(function(e){return new m(e,t)}):e;var n=this.samplers[0];if(n){this.extent=n.extent.clone();var r=n.demResolution,o=r.min,a=r.max;this.demResolution={min:o,max:a};for(var s=1;s<this.samplers.length;s++){var l=this.samplers[s];this.extent.union(l.extent),this.demResolution.min=Math.min(this.demResolution.min,l.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,l.demResolution.max)}}else this.extent=i.toExtent(i.create(),t.spatialReference),this.demResolution={min:0,max:0}}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0}),e.prototype.elevationAt=function(e){var t=l(e,this.spatialReference);if(!t)return null;for(var n=0,r=this.samplers;n<r.length;n++){var i=r[n];if(i.contains(t))return i.elevationAt(t)}return null},e.prototype.queryElevation=function(e){return s(e.clone(),this)},e.prototype.on=function(e,t){return x},e}();t.MultiTileElevationSampler=h,t.updateGeometryElevation=s;var v=new n.Point,x={remove:function(){}}});