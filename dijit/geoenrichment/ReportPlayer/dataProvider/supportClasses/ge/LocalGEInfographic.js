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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","./LocalGEBase"],(function(e,a){return e(a,{_fieldNameToFieldInfoCache:null,_variableIdToFieldInfoCache:null,constructor:function(e,a,i){this._fieldNameToFieldInfoCache={},this._variableIdToFieldInfoCache={},e.fieldInfos.forEach((function(e){this._fieldNameToFieldInfoCache[e.name]=e,this._variableIdToFieldInfoCache[e.variableID]=e}),this);var l=e.calcData.calculatorName,t=a[i||0];this._initGE(e.calcData.variables,t,l)},_propulateAttributesFromAreaData:function(e,a){for(var i in a){var l=this._fieldNameToFieldInfoCache[i];l?e[l.variableID]=a[i]:e[i]=a[i]}},_createField:function(e,a){var i=this.inherited(arguments),l=this._variableIdToFieldInfoCache[e];return l?(i.alias=l.alias,i.decimals=l.decimals,i.units=l.showPercent?"pct":l.showCurrency?"currency":i.units,i.type=l.type||i.type):i.noVariableField=!0,i},_filterAttributeField:function(e){return!e.noVariableField}})}));