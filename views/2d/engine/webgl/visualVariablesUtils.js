// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/Error","../../../../core/Logger","./enums","./Utils"],function(e,i,s,r,a,l){Object.defineProperty(i,"__esModule",{value:!0});var n=r.getLogger("esri.views.2d.engine.webgl");i.getTypeOfSizeVisualVariable=function(e){return l.isNumber(e.minDataValue)&&l.isNumber(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?a.WGLVVFlag.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?a.WGLVVFlag.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&Array.isArray(e.stops)?a.WGLVVFlag.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?a.WGLVVFlag.SIZE_UNIT_VALUE:(n.error(new s("mapview-bad-type","Found invalid size VisualVariable",e)),a.WGLVVFlag.NONE)}});