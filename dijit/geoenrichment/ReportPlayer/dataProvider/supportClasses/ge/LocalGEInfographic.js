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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","./LocalGEBase","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes"],function(e,a,i){return e(a,{_fieldNameToFieldInfoCache:null,_variableIdToFieldInfoCache:null,constructor:function(e,a){this._fieldNameToFieldInfoCache={},this._variableIdToFieldInfoCache={},e.fieldInfos.forEach(function(e){this._fieldNameToFieldInfoCache[e.name]=e,this._variableIdToFieldInfoCache[e.variableID]=e},this),this._initGE(e.calcData.variables,a,e.calcData.calculatorName)},_propulateAttributesFromAreaData:function(e,a){for(var i in a){var o=this._fieldNameToFieldInfoCache[i];o?e[o.variableID]=a[i]:e[i]=a[i]}},_createField:function(e,a){var i=this.inherited(arguments),o=this._variableIdToFieldInfoCache[e];return o&&(i.alias=o.alias,i.decimals=o.decimals,i.units=o.showPercent?"pct":o.showCurrency?"currency":i.units,i.type=o.type||i.type),i}})});