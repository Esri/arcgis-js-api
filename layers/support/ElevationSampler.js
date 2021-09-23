/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../core/has","../../core/Logger","../../core/maybe","../../core/unitUtils","../../geometry/support/aaBoundingRect","../../geometry/support/contains","../../geometry/support/webMercatorUtils","../../geometry/Point"],(function(e,t,n,o,i,r,a,s,l,u,c){"use strict";const p=i.getLogger("esri.layers.support.ElevationSampler");let f=function(){function e(){}var t=e.prototype;return t.queryElevation=function(e){return x(e.clone(),this)},t.on=function(){return w},t.projectIfRequired=function(e,t){return R(e,t)},e}(),m=function(e){function n(t,n,o){var i;(i=e.call(this)||this).tile=t,i.noDataValue=o,i.extent=s.toExtent(t.tile.extent,n.spatialReference);const r=a.getMetersPerUnitForSR(n.spatialReference),l=n.lodAt(t.tile.level).resolution*r;return i.demResolution={min:l,max:l},i}t._inheritsLoose(n,e);var o=n.prototype;return o.contains=function(e){const t=this.projectIfRequired(e,this.spatialReference);return l.extentContainsPoint(this.extent,t)},o.elevationAt=function(e){const t=this.projectIfRequired(e,this.spatialReference);if(r.isNone(t))return null;if(!this.contains(e)){const t=this.extent,n=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;p.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${n})`)}return this.tile.sample(t.x,t.y)},t._createClass(n,[{key:"spatialReference",get:function(){return this.extent.spatialReference}}]),n}(f),h=function(e){function n(t,n,o){var i;let r;i=e.call(this)||this,"number"==typeof n?(i.noDataValue=n,r=null):(r=n,i.noDataValue=o),i.samplers=r?t.map((e=>new m(e,r,i.noDataValue))):t;const a=i.samplers[0];if(a){i.extent=a.extent.clone();const{min:e,max:t}=a.demResolution;i.demResolution={min:e,max:t};for(let n=1;n<i.samplers.length;n++){const e=i.samplers[n];i.extent.union(e.extent),i.demResolution.min=Math.min(i.demResolution.min,e.demResolution.min),i.demResolution.max=Math.max(i.demResolution.max,e.demResolution.max)}}else i.extent=s.toExtent(s.create(),r.spatialReference),i.demResolution={min:0,max:0};return i}return t._inheritsLoose(n,e),n.prototype.elevationAt=function(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const n of this.samplers)if(n.contains(t))return n.elevationAt(t);return p.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),null},t._createClass(n,[{key:"spatialReference",get:function(){return this.extent.spatialReference}}]),n}(f);function x(e,t){const n=R(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":d(e,n,t);break;case"polyline":y(e,n,t);break;case"multipoint":v(e,n,t)}return e}function R(e,t){if(r.isNone(e))return null;const n=e.spatialReference;if(n.equals(t))return e;const o=u.project(e,t);return o||p.error(`Cannot project geometry spatial reference (wkid:${n.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),o}function d(e,t,n){e.z=r.unwrapOr(n.elevationAt(t),0)}function y(e,t,n){g.spatialReference=t.spatialReference;const o=e.hasM&&!e.hasZ;for(let i=0;i<e.paths.length;i++){const a=e.paths[i],s=t.paths[i];for(let e=0;e<a.length;e++){const t=a[e],i=s[e];g.x=i[0],g.y=i[1],o&&(t[3]=t[2]),t[2]=r.unwrapOr(n.elevationAt(g),0)}}e.hasZ=!0}function v(e,t,n){g.spatialReference=t.spatialReference;const o=e.hasM&&!e.hasZ;for(let i=0;i<e.points.length;i++){const a=e.points[i],s=t.points[i];g.x=s[0],g.y=s[1],o&&(a[3]=a[2]),a[2]=r.unwrapOr(n.elevationAt(g),0)}e.hasZ=!0}const g=new c,w={remove(){}};e.ElevationSamplerBase=f,e.MultiTileElevationSampler=h,e.TileElevationSampler=m,e.updateGeometryElevation=x,Object.defineProperty(e,"__esModule",{value:!0})}));
