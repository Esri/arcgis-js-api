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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectPool","./enums"],function(i,t,e,v){var s=function(){function i(){this.sdf=!1,this.vvSizeMinMaxValue=!1,this.vvSizeScaleStops=!1,this.vvSizeFieldStops=!1,this.vvSizeUnitValue=!1,this.vvColor=!1,this.vvRotation=!1,this.vvOpacity=!1,this.visibility=!1,this.pattern=!1,this.heatmap=!1}return i.prototype.copy=function(i){this.geometryType=i.geometryType,this.sdf=i.sdf,this.vvSizeMinMaxValue=i.vvSizeMinMaxValue,this.vvSizeScaleStops=i.vvSizeScaleStops,this.vvSizeFieldStops=i.vvSizeFieldStops,this.vvSizeUnitValue=i.vvSizeUnitValue,this.vvColor=i.vvColor,this.vvRotation=i.vvRotation,this.vvOpacity=i.vvOpacity,this.visibility=i.visibility,this.pattern=i.pattern,this.heatmap=i.heatmap},i.prototype.release=function(){this.geometryType=v.WGLGeometryType.UNKNOWN,this.sdf=!1,this.vvSizeMinMaxValue=!1,this.vvSizeScaleStops=!1,this.vvSizeFieldStops=!1,this.vvSizeUnitValue=!1,this.vvColor=!1,this.vvRotation=!1,this.vvOpacity=!1,this.visibility=!1,this.pattern=!1,this.heatmap=!1},i.pool=new e(i),i}();return s});