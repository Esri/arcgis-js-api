// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../../../../geometry/support/scaleUtils"],function(e,t,r){var n=function(){function e(e){void 0===e&&(e=null),this.spatialReference=e}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this._spatialReference},set:function(e){e!==this._spatialReference&&(this._spatialReference=e,this._metersPerDistanceUnit=r.getMetersPerUnitForSR(e),this._metersPerElevationUnit=r.getMetersPerVerticalUnitForSR(e))},enumerable:!0,configurable:!0}),e.prototype.normalizeDistance=function(e){return e*this._metersPerDistanceUnit},e.prototype.normalizeElevation=function(e){return e*this._metersPerElevationUnit},e}();return n});