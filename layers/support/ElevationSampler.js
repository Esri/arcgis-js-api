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

define(["require","exports","../../geometry","../../core/compilerUtils","../../core/Logger","../../geometry/support/aaBoundingRect","../../geometry/support/contains","../../geometry/support/scaleUtils","../../geometry/support/webMercatorUtils"],function(e,t,n,i,r,a,o,s,l){function u(e,t){var n=p(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":c(e,n,t);break;case"polyline":f(e,n,t);break;case"multipoint":m(e,n,t);break;default:i.neverReached(e)}return e}function p(e,t){var n=e.spatialReference;return n.equals(t)?e:l.canProject(n,t)?l.project(e,t):(h.error("Cannot project geometry spatial reference (wkid:"+n.wkid+") to elevation sampler spatial reference (wkid:"+t.wkid+")"),null)}function c(e,t,n){e.z=n.elevationAt(t)||0}function f(e,t,n){y.spatialReference=t.spatialReference;for(var i=e.hasM&&!e.hasZ,r=0;r<e.paths.length;r++)for(var a=e.paths[r],o=t.paths[r],s=0;s<a.length;s++){var l=a[s],u=o[s];y.x=u[0],y.y=u[1];var p=n.elevationAt(y)||0;i&&(l[3]=l[2]),l[2]=p}e.hasZ=!0}function m(e,t,n){y.spatialReference=t.spatialReference;for(var i=e.hasM&&!e.hasZ,r=0;r<e.points.length;r++){var a=e.points[r],o=t.points[r];y.x=o[0],y.y=o[1];var s=n.elevationAt(y)||0;i&&(a[3]=a[2]),a[2]=s}e.hasZ=!0}Object.defineProperty(t,"__esModule",{value:!0});var h=r.getLogger("esri.layers.support.ElevationSampler"),v=function(){function e(e,t,n){this.tile=e,this.noDataValue=n,this.extent=a.toExtent(e.tile.extent,t.spatialReference);var i=s.getMetersPerUnitForSR(t.spatialReference),r=t.lodAt(e.tile.level).resolution*i;this.demResolution={min:r,max:r}}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0}),e.prototype.contains=function(e){var t=p(e,this.spatialReference);return o.extentContainsPoint(this.extent,t)},e.prototype.elevationAt=function(e){var t=p(e,this.spatialReference);if(!t)return null;if(!this.contains(e)){var n=this.extent,i=n.xmin+", "+n.ymin+", "+n.xmax+", "+n.ymax;h.warn("#elevationAt()","Point used to sample elevation ("+e.x+", "+e.y+") is outside of the sampler extent ("+i+")")}return this.tile.sample(t.x,t.y)},e.prototype.queryElevation=function(e){return u(e.clone(),this)},e.prototype.on=function(e,t){return R},e}();t.TileElevationSampler=v;var x=function(){function e(e,t,n){var i,r=this;"number"==typeof t?(this.noDataValue=t,i=null):(i=t,this.noDataValue=n),this.samplers=i?e.map(function(e){return new v(e,i,r.noDataValue)}):e;var o=this.samplers[0];if(o){this.extent=o.extent.clone();var s=o.demResolution,l=s.min,u=s.max;this.demResolution={min:l,max:u};for(var p=1;p<this.samplers.length;p++){var c=this.samplers[p];this.extent.union(c.extent),this.demResolution.min=Math.min(this.demResolution.min,c.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,c.demResolution.max)}}else this.extent=a.toExtent(a.create(),i.spatialReference),this.demResolution={min:0,max:0}}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0}),e.prototype.elevationAt=function(e){var t=p(e,this.spatialReference);if(!t)return null;for(var n=0,i=this.samplers;n<i.length;n++){var r=i[n];if(r.contains(t))return r.elevationAt(t)}return h.warn("#elevationAt()","Point used to sample elevation ("+e.x+", "+e.y+") is outside of the sampler"),null},e.prototype.queryElevation=function(e){return u(e.clone(),this)},e.prototype.on=function(e,t){return R},e}();t.MultiTileElevationSampler=x,t.updateGeometryElevation=u;var y=new n.Point,R={remove:function(){}}});