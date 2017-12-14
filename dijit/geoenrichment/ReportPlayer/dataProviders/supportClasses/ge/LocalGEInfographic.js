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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","./LocalGEBase","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes"],function(a,e,i){var t=a(e,{_type:null,_fieldNameToVariableObjectCache:null,_variableIdToVariableObjectCache:null,constructor:function(a,e){this._type=a.type,this._fieldNameToVariableObjectCache={},this._variableIdToVariableObjectCache={},a.calcData.variableObjects.forEach(function(a){this._fieldNameToVariableObjectCache[a.fieldName]=a,this._variableIdToVariableObjectCache[a.id]=a},this),this._initGE(a.variables,e,a.calcData.calculatorName)},_propulateAttributesFromAreaData:function(a,e){for(var i in e){var t=this._fieldNameToVariableObjectCache[i];t?a[t.id]=e[i]:a[i]=e[i]}},_createField:function(a,e){var i=this.inherited(arguments),t=this._variableIdToVariableObjectCache[a];return t&&(i.alias=t.alias,i.decimals=t.precision),i}});return t});