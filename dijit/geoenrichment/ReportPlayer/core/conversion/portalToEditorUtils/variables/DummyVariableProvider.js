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

define(["dojo/_base/declare"],function(e){var a=e(null,{variable:null,constructor:function(e){this.variable=e},calculate:function(e){return 0},getCalcType:function(){return"n/"},getAliasWithType:function(){return this.variable.alias},getDescriptionWithType:function(){return this.variable.alias},getDecimals:function(){return this.variable.precision||0}}),i=e(null,{isDummy:!0,_fieldNameToVariableCache:null,_templateNameToVariableCache:null,constructor:function(){this._fieldNameToVariableCache={},this._templateNameToVariableCache={}},getVariables:function(){var e=[];for(var a in this._fieldNameToVariableCache)e.push(this._fieldNameToVariableCache[a]);return e},toCalculator:function(e){var i=this._templateNameToVariableCache[e]||this._fieldNameToVariableCache[e];return i&&new a(i)},addVariable:function(e){this._fieldNameToVariableCache[e.fieldName]=e,this._templateNameToVariableCache[e.templateName]=e},addScriptVariable:function(e){this._fieldNameToVariableCache[e.fieldName]=e,this._templateNameToVariableCache[e.templateName]=e}});return i});