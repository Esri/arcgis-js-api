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

define(["dojo/_base/declare","dojo/_base/lang","dojo/string","dojo/i18n!esri/nls/jsapi"],(function(e,a,t,i){i=i.geoenrichment.dijit.ReportPlayer.Variables;var r=e(null,{variable:null,constructor:function(e){this.variable=e},calculate:function(e){return 0},getCalcType:function(){return"n/"},getAliasWithType:function(){return this.variable.alias},getDescriptionWithType:function(){return this.variable.alias},getDecimals:function(){return this.variable.precision||0}});return e(null,{isPlayerOnly:!0,_fieldNameToVariableCache:null,_templateNameToVariableCache:null,constructor:function(e){for(var a in this._templateNameToVariableCache=e&&e.templateNameToVariableCache||{},this._fieldNameToVariableCache={},this._templateNameToVariableCache){var t=this._templateNameToVariableCache[a];this._fieldNameToVariableCache[t.fieldName]=t}},get:function(e){return this._templateNameToVariableCache[e]||this._fieldNameToVariableCache[e]},toCalculator:function(e){var a=this.get(e);return a&&new r(a)},addVariable:function(e){this._fieldNameToVariableCache[e.fieldName]=e,this._templateNameToVariableCache[e.templateName]=e},addScriptVariable:function(e){this._fieldNameToVariableCache[e.fieldName]=e,this._templateNameToVariableCache[e.templateName]=e},getVariables:function(){return Object.keys(this._fieldNameToVariableCache).map((function(e){return this._fieldNameToVariableCache[e]}),this)},getVariablesDataVintageAndSources:function(e){var a=[],r={},n={};for(var l in this.getVariables().forEach((function(e){e.fullName&&(n[e.fullName.toLowerCase()]=e)})),e.usedVariablesCache){var o=n[l.toLowerCase()];if(o&&o.vintage&&o.source){var c=o.vintage+";"+o.source;r[c]||(r[c]=!0,a.push({vintage:o.vintage,source:o.source}))}}var s=a.map((function(e){return e.source})).join(", "),u=a.map((function(e){return e.vintage})).join(", ");return{dataVintageDescription:s&&u?t.substitute(i.sourcePattern,{source:s})+" "+t.substitute(i.vintagePattern,{vintage:u}):"",dataSources:s,dataVintage:u}},toJson:function(){return{templateNameToVariableCache:a.clone(this._templateNameToVariableCache)}}})}));