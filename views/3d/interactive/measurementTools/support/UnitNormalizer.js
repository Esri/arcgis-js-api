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

define(["require","exports","../../../../../geometry/support/scaleUtils"],function(e,t,i){return function(){function e(e,t){void 0===e&&(e=null),void 0===t&&(t=null),this.spatialReference=e,this.ignoredSpatialReferences=t,this._updateNormalizationFactors}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this._spatialReference},set:function(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ignoredSpatialReferences",{get:function(){return this._ignoredSpatialReferences},set:function(e){this._ignoredSpatialReferences=e,this._updateNormalizationFactors()},enumerable:!0,configurable:!0}),e.prototype.normalizeDistance=function(e){return e*this._metersPerDistanceUnit},e.prototype.normalizeElevation=function(e){return e*this._metersPerElevationUnit},e.prototype.normalizeArea=function(e){return e*this._squareMetersPerAreaUnit},e.prototype._updateNormalizationFactors=function(){var e=this;!this._spatialReference||this._ignoredSpatialReferences&&0!==this._ignoredSpatialReferences.filter(function(t){return t.equals(e._spatialReference)}).length?(this._metersPerDistanceUnit=1,this._metersPerDistanceUnit=1,this._squareMetersPerAreaUnit=1):(this._metersPerDistanceUnit=i.getMetersPerUnitForSR(this._spatialReference),this._metersPerElevationUnit=i.getMetersPerVerticalUnitForSR(this._spatialReference),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit)},e}()});