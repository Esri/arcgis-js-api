// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer"],function(e,n){function t(e){var n=-1/0;return e.forEach(function(e){n=Math.max(n,e)}),n}return e(null,{_sections:null,_variableTables:null,constructor:function(){this._sections=[]},_samplePercentValues:[52,30,18,90,70,100],setVariableTables:function(e){this._variableTables=e},addSection:function(e){this._sections.push(e)},_getRealValues:function(e){var t=this._sections[0],a=t.viewModel.dynamicReportInfo.fieldData;return this._variableTables.map(function(r){var i=r.variable.fieldInfo,l=e&&"number"==typeof e.currentFeatureIndex?e.currentFeatureIndex:t.currentFeatureIndex;return n.getFieldDataValue(i,a,l)})},getValueInfo:function(e,n){var a=!e.viewModel.dynamicReportInfo,r=this._sections.indexOf(e);if(a){var i=this._samplePercentValues.slice();i.length=this._sections.length;var l=t(i),s=i.map(function(e){return e/l}),u=i[r];return{number:100*u,percent:u,normalizedValue:s[r]}}var o=this._getRealValues(n),c=t(o),f=o.map(function(e){return e/c}),d=o[r];return{number:d,percent:d,normalizedValue:f[r]}}})});