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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../symbols/support/unitConversionUtils","./featureExpressionInfoUtils"],(function(t,e,n,i,s){return function(){function t(t){this._meterUnitOffset=0,this._renderUnitOffset=0,this.featureExpressionInfoContext=null,t?this.set(t):this.setDefaults()}return Object.defineProperty(t.prototype,"meterUnitOffset",{get:function(){return this._meterUnitOffset},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"unit",{get:function(){return this._unit},enumerable:!0,configurable:!0}),t.prototype.setUnit=function(t){this._unit=t,this._metersPerElevationInfoUnit=i.getMetersPerUnit(t)},t.prototype.setDefaults=function(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this.featureExpressionInfoContext=null,this.setUnit("meters")},t.prototype.set=function(t){this.mode=t.mode,this._meterUnitOffset=t._meterUnitOffset,this._renderUnitOffset=t._renderUnitOffset,this.featureExpressionInfoContext=t.featureExpressionInfoContext,this.setUnit(t.unit)},t.prototype.setOffsetMeters=function(t){this._meterUnitOffset=t,this._renderUnitOffset=0},t.prototype.setOffsetElevationInfoUnits=function(t){this._meterUnitOffset=t*this._metersPerElevationInfoUnit,this._renderUnitOffset=0},t.prototype.addOffsetRenderUnits=function(t){this._renderUnitOffset+=t},t.prototype.calculateOffsetRenderUnits=function(t){var e=this._meterUnitOffset,n=this.featureExpressionInfoContext;return null!=n&&(e+=s.execute(n)*this._metersPerElevationInfoUnit),e/t.unitInMeters+this._renderUnitOffset},t.prototype.setFromElevationInfo=function(t){this.mode=t.mode,this.setUnit(t.unit||"meters"),this.setOffsetElevationInfoUnits(n.unwrapOr(t.offset,0))},t.fromElevationInfo=function(e){var i=new t;return n.isSome(e)&&i.setFromElevationInfo(e),i},t}()}));