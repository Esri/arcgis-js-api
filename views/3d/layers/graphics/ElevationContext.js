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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../symbols/support/unitConversionUtils","./featureExpressionInfoUtils"],(function(e,t,n,o,r){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}return Object.defineProperty(e.prototype,"featureExpressionInfoContext",{get:function(){return this._featureExpressionInfoContext},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"meterUnitOffset",{get:function(){return this._meterUnitOffset},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"unit",{get:function(){return this._unit},set:function(e){this._unit=e,this._metersPerElevationInfoUnit=o.getMetersPerUnit(e)},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"},Object.defineProperty(e.prototype,"offsetMeters",{set:function(e){this._meterUnitOffset=e,this._renderUnitOffset=0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"offsetElevationInfoUnits",{set:function(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0},enumerable:!0,configurable:!0}),e.prototype.addOffsetRenderUnits=function(e){this._renderUnitOffset+=e},e.prototype.geometryZWithOffset=function(e,t){var n=this.calculateOffsetRenderUnits(t);return null!=this.featureExpressionInfoContext?n:e+n},e.prototype.calculateOffsetRenderUnits=function(e){var t=this._meterUnitOffset,n=this.featureExpressionInfoContext;return null!=n&&(t+=r.execute(n)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset},e.prototype.setFromElevationInfo=function(e){this.mode=e.mode,this.unit=e.unit||"meters",this.offsetElevationInfoUnits=n.unwrapOr(e.offset,0)},e.prototype.updateFeatureExpressionInfoContext=function(e,t,o){if(n.isNone(e))this._featureExpressionInfoContext=null;else{var i=e&&e.arcade;i&&n.isSome(t)&&n.isSome(o)?(this._featureExpressionInfoContext=r.clone(e),r.setContextFeature(this._featureExpressionInfoContext,r.createFeature(i.modules,t,o))):this._featureExpressionInfoContext=e}},e.fromElevationInfo=function(t){var o=new e;return n.isSome(t)&&o.setFromElevationInfo(t),o},e}();t.ElevationContext=i}));