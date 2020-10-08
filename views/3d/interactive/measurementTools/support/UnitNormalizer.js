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

define(["require","exports","../../../../../core/unitUtils"],(function(e,t,r){"use strict";return function(){function e(e){void 0===e&&(e=null),this.spatialReference=e,this._updateNormalizationFactors}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this._spatialReference},set:function(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())},enumerable:!1,configurable:!0}),e.prototype.normalizeDistance=function(e){return e*this._metersPerDistanceUnit},e.prototype.normalizeElevation=function(e){return e*this._metersPerElevationUnit},e.prototype.normalizeArea=function(e){return e*this._squareMetersPerAreaUnit},e.prototype._updateNormalizationFactors=function(){this._metersPerDistanceUnit=r.getMetersPerUnitForSR(this._spatialReference,1),this._metersPerElevationUnit=r.getMetersPerUnitForSR(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit},e}()}));