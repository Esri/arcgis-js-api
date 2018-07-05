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

define(["require","exports","@dojo/shim/Set","../../../geometry/support/aaBoundingRect","../optimizedFeatures"],function(e,t,i,o,r){Object.defineProperty(t,"__esModule",{value:!0});var n={esriGeometryPoint:r.convertToPoint,esriGeometryPolyline:r.convertToPolyline,esriGeometryPolygon:r.convertToPolygon,esriGeometryMultipoint:r.convertToMultipoint},s=new r.OptimizedGeometry,u=function(){function e(){this.service=null,this.oid=null,this.bounds=o.create(),this.feature=null}return e.acquire=function(t,i){void 0===t&&(t=null),void 0===i&&(i=null);var o;return 0===e._pool.length?o=new e:(o=e._pool.pop(),this._set.delete(o)),o.acquire(t,i),o},e.release=function(e){e&&!this._set.has(e)&&(e.release(),this._pool.push(e),this._set.add(e))},e.prototype.acquire=function(e,t){void 0===e&&(e=null),void 0===t&&(t=null),this.service=t,e&&t&&this.set(e)},e.prototype.release=function(){this.oid=this.feature=this.service=null},e.prototype.set=function(e){this.feature=e,this.oid=e.attributes[this.service.objectIdField],r.getBoundsOptimizedGeometry(this.bounds,e.geometry,this.service.hasZ,this.service.hasM)},e.prototype.getCentroid=function(){var e=this.service,t=e.geometryType,i=e.hasZ,o=e.hasM;return"esriGeometryPolygon"!==t?null:(this.feature.centroid||(this.feature.centroid=r.getCentroidOptimizedGeometry(new r.OptimizedGeometry,this.feature.geometry,i,o)),r.convertToPoint(this.feature.centroid,i,o))},e.prototype.getCentroidQuantized=function(e){var t=this.service,i=t.hasZ,o=t.hasM;return this.feature.centroid||(this.feature.centroid=r.getCentroidOptimizedGeometry(new r.OptimizedGeometry,this.feature.geometry,i,o)),r.quantizeOptimizedGeometry(s,this.feature.centroid,i,o,"esriGeometryPoint",e),r.convertToPoint(s,i,o)},e.prototype.getGeometry=function(){var e=this.service,t=e.geometryType,i=e.hasZ,o=e.hasM;return n[t](this.feature.geometry,i,o)},e.prototype.getGeometryQuantized=function(e){var t=this.service,i=t.geometryType,o=t.hasZ,u=t.hasM;return r.quantizeOptimizedGeometry(s,this.feature.geometry,o,u,i,e),n[i](s,o,u)},e.prototype.getAttributes=function(){return this.feature.attributes},e._pool=[],e._set=new i.default,e}();t.default=u});