// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../geometry","../../../../../layers/graphics/centroid","../../../../../layers/graphics/featureConversionUtils","../../../../../layers/graphics/OptimizedGeometry"],(function(t,e,r,i,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FeatureSetReader=void 0;var s=0,u=function(){function t(t){this.type="FeatureSetReader",this.instance=0,this._tx=0,this._ty=0,this._xmin=-1,this._xmax=0,this._ymin=0,this._ymax=0,this._joined=[],this.instance=t}return t.createInstance=function(){return s=++s>65535?0:s},Object.defineProperty(t.prototype,"_hasFilter",{get:function(){return-1!==this._xmin},enumerable:!1,configurable:!0}),t.prototype.getQuantizationTransform=function(){throw new Error("Unable to find transform for featureSet")},t.prototype.getStorage=function(){return this._storage},t.prototype.getComputedNumeric=function(t){return this.getComputedNumericAtIndex(0)},t.prototype.setComputedNumeric=function(t,e){return this.setComputedNumericAtIndex(e,0)},t.prototype.getComputedString=function(t){return this.getComputedStringAtIndex(0)},t.prototype.setComputedString=function(t,e){return this.setComputedStringAtIndex(0,e)},t.prototype.getComputedNumericAtIndex=function(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)},t.prototype.setComputedNumericAtIndex=function(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)},t.prototype.getComputedStringAtIndex=function(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)},t.prototype.setComputedStringAtIndex=function(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)},t.prototype.transform=function(t,e){var r=this.copy();return r._tx=t,r._ty=e,r},t.prototype.extent=function(t,e,r,i){var n=this.copy();return n._xmin=t,n._xmax=r,n._ymin=e,n._ymax=i,n},t.prototype.hasFilter=function(){return this._hasFilter},t.prototype.readAttribute=function(t,e){void 0===e&&(e=!1);var r=this._readAttribute(t,e);if(void 0!==r)return r;for(var i=0,n=this._joined;i<n.length;i++){var o=n[i];o.setIndex(this.getIndex());var s=o._readAttribute(t,e);if(void 0!==s)return s}},t.prototype.readAttributes=function(){return this._readAttributes()},t.prototype.joinAttributes=function(t){this._joined.push(t)},t.prototype.readArcadeFeature=function(){return this},t.prototype.geometry=function(){var t=this.readHydratedGeometry(),e=n.convertToGeometry(t,this.geometryType,this.hasZ,this.hasM),i=r.fromJSON(e);return i.spatialReference=this._arcadeSpatialReference,i},t.prototype.field=function(t){return this.readAttribute(t,!0)},t.prototype.hasField=function(t){return!0},t.prototype.setField=function(t,e){},t.prototype.keys=function(){return[]},t.prototype.castToText=function(){return""},t.prototype._computeCentroid=function(){if("esriGeometryPolygon"!==this.geometryType)return null;var t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;var e=this.getQuantizationTransform();return i.getCentroidOptimizedGeometry(new o.default,t,this.hasM,this.hasZ,e)},t.prototype.copyInto=function(t){t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._xmin=this._xmin,t._xmax=this._xmax,t._ymin=this._ymin,t._ymax=this._ymax},t}();e.FeatureSetReader=u}));