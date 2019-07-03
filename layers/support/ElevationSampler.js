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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../geometry","../../core/compilerUtils","../../core/Logger","../../core/unitUtils","../../geometry/support/aaBoundingRect","../../geometry/support/contains","../../geometry/support/webMercatorUtils"],function(e,t,n,r,a,i,o,l,s,u){function p(e,t){var n=c(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":f(e,n,t);break;case"polyline":m(e,n,t);break;case"multipoint":v(e,n,t);break;default:a.neverReached(e)}return e}function c(e,t){var n=e.spatialReference;return n.equals(t)?e:u.canProject(n,t)?u.project(e,t):(h.error("Cannot project geometry spatial reference (wkid:"+n.wkid+") to elevation sampler spatial reference (wkid:"+t.wkid+")"),null)}function f(e,t,n){e.z=n.elevationAt(t)||0}function m(e,t,n){y.spatialReference=t.spatialReference;for(var r=e.hasM&&!e.hasZ,a=0;a<e.paths.length;a++)for(var i=e.paths[a],o=t.paths[a],l=0;l<i.length;l++){var s=i[l],u=o[l];y.x=u[0],y.y=u[1];var p=n.elevationAt(y)||0;r&&(s[3]=s[2]),s[2]=p}e.hasZ=!0}function v(e,t,n){y.spatialReference=t.spatialReference;for(var r=e.hasM&&!e.hasZ,a=0;a<e.points.length;a++){var i=e.points[a],o=t.points[a];y.x=o[0],y.y=o[1];var l=n.elevationAt(y)||0;r&&(i[3]=i[2]),i[2]=l}e.hasZ=!0}Object.defineProperty(t,"__esModule",{value:!0});var h=i.getLogger("esri.layers.support.ElevationSampler"),x=function(){function e(){}return e.prototype.queryElevation=function(e){return p(e.clone(),this)},e.prototype.on=function(e,t){return g},e.prototype.projectIfRequired=function(e,t){return c(e,t)},e}();t.ElevationSamplerBase=x;var d=function(e){function t(t,n,r){var a=e.call(this)||this;a.tile=t,a.noDataValue=r,a.extent=l.toExtent(t.tile.extent,n.spatialReference);var i=o.getMetersPerUnitForSR(n.spatialReference),s=n.lodAt(t.tile.level).resolution*i;return a.demResolution={min:s,max:s},a}return n(t,e),Object.defineProperty(t.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0}),t.prototype.contains=function(e){var t=this.projectIfRequired(e,this.spatialReference);return s.extentContainsPoint(this.extent,t)},t.prototype.elevationAt=function(e){var t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;if(!this.contains(e)){var n=this.extent,r=n.xmin+", "+n.ymin+", "+n.xmax+", "+n.ymax;h.warn("#elevationAt()","Point used to sample elevation ("+e.x+", "+e.y+") is outside of the sampler extent ("+r+")")}return this.tile.sample(t.x,t.y)},t}(x);t.TileElevationSampler=d;var R=function(e){function t(t,n,r){var a,i=e.call(this)||this;"number"==typeof n?(i.noDataValue=n,a=null):(a=n,i.noDataValue=r),i.samplers=a?t.map(function(e){return new d(e,a,i.noDataValue)}):t;var o=i.samplers[0];if(o){i.extent=o.extent.clone();var s=o.demResolution,u=s.min,p=s.max;i.demResolution={min:u,max:p};for(var c=1;c<i.samplers.length;c++){var f=i.samplers[c];i.extent.union(f.extent),i.demResolution.min=Math.min(i.demResolution.min,f.demResolution.min),i.demResolution.max=Math.max(i.demResolution.max,f.demResolution.max)}}else i.extent=l.toExtent(l.create(),a.spatialReference),i.demResolution={min:0,max:0};return i}return n(t,e),Object.defineProperty(t.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0}),t.prototype.elevationAt=function(e){var t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(var n=0,r=this.samplers;n<r.length;n++){var a=r[n];if(a.contains(t))return a.elevationAt(t)}return h.warn("#elevationAt()","Point used to sample elevation ("+e.x+", "+e.y+") is outside of the sampler"),null},t}(x);t.MultiTileElevationSampler=R,t.updateGeometryElevation=p;var y=new r.Point,g={remove:function(){}}});