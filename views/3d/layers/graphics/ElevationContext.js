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

define(["require","exports","../../../../symbols/support/unitConversionUtils","./featureExpressionInfoUtils"],function(t,e,n,s){return function(){function t(t){t?this.set(t):this.setDefaults()}return Object.defineProperty(t.prototype,"meterUnitOffset",{get:function(){return this._meterUnitOffset},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"unit",{get:function(){return this._unit},enumerable:!0,configurable:!0}),t.prototype.setUnit=function(t){this._unit=t,this._metersPerElevationInfoUnit=n.getMetersPerUnit(t)},t.prototype.setDefaults=function(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this.featureExpressionInfoContext=null,this.hasOffsetAdjustment=!1,this.setUnit("meters")},t.prototype.set=function(t){this.mode=t.mode,this._meterUnitOffset=t._meterUnitOffset||0,this._renderUnitOffset=t._renderUnitOffset||0,this.featureExpressionInfoContext=t.featureExpressionInfoContext,this.hasOffsetAdjustment=t.hasOffsetAdjustment,this.setUnit(t.unit)},t.prototype.setOffsetMeters=function(t){this._meterUnitOffset=t,this._renderUnitOffset=0},t.prototype.setOffsetElevationInfoUnits=function(t){this._meterUnitOffset=t*this._metersPerElevationInfoUnit,this._renderUnitOffset=0},t.prototype.setOffsetRenderUnits=function(t){this._meterUnitOffset=0,this._renderUnitOffset=t},t.prototype.addOffsetRenderUnits=function(t){this._renderUnitOffset+=t},t.prototype.mixinApi=function(t){null!=t.mode&&(this.mode=t.mode),null!=t.unit&&this.setUnit(t.unit),null!=t.offset&&this.setOffsetElevationInfoUnits(t.offset)},t.prototype.calculateOffsetRenderUnits=function(t){var e=this._meterUnitOffset,n=this.featureExpressionInfoContext;return null!=n&&(e+=s.execute(n)*this._metersPerElevationInfoUnit),e/t.unitInMeters+this._renderUnitOffset},t}()});