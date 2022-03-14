// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","exports"],(function(t,i){return function(){function t(){this.sdf=!1,this.vvSizeMinMaxValue=!1,this.vvSizeScaleStops=!1,this.vvSizeFieldStops=!1,this.vvSizeUnitValue=!1,this.vvColor=!1,this.vvRotation=!1,this.vvOpacity=!1,this.visibility=!1,this.pattern=!1,this.heatmap=!1}return t.prototype.copy=function(t){this.geometryType=t.geometryType,this.sdf=t.sdf,this.vvSizeMinMaxValue=t.vvSizeMinMaxValue,this.vvSizeScaleStops=t.vvSizeScaleStops,this.vvSizeFieldStops=t.vvSizeFieldStops,this.vvSizeUnitValue=t.vvSizeUnitValue,this.vvColor=t.vvColor,this.vvRotation=t.vvRotation,this.vvOpacity=t.vvOpacity,this.visibility=t.visibility,this.pattern=t.pattern,this.heatmap=t.heatmap},t.prototype.hasVV=function(){return void 0===this._hasVV&&(this._hasVV=this.vvColor||this.vvOpacity||this.vvRotation||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue),this._hasVV},t.prototype.hasVVSize=function(){return this.vvSizeMinMaxValue||this.vvSizeFieldStops||this.vvSizeScaleStops||this.vvSizeUnitValue},t.prototype.hasVVColor=function(){return this.vvColor},t.prototype.hasVVRotation=function(){return this.vvRotation},t.prototype.hasVVOpacity=function(){return this.vvOpacity},t}()}));