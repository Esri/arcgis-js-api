// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["../../../grid/coreUtils/GridDataUtil","../../../comparison/ComparisonUtil","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoFormatUtil"],(function(e,t,a){var i={};return i.valueFormatFunction=t.valueFormatFunction,i.setValueToGridData=function(t,i,o){var r=i.fieldInfos[o];r.isMissing||delete i.fieldInfos[o];var n=t[r.name];return void 0===n||"string"==typeof n?i[o]=n||"":(i[o]=a.formatNumber(n,r),e.setNumericDataValue(n,i,o)),{value:n,formattedValue:i[o],decimals:r.decimals}},i}));