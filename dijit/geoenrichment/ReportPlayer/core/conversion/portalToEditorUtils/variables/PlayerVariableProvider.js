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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","dojo/string","../../../../dataProvider/supportClasses/dataCollections/DataCollectionsLoader"],function(a,e,i,t,r){var n=a(null,{variable:null,constructor:function(a){this.variable=a},calculate:function(a){return 0},getCalcType:function(){return"n/"},getAliasWithType:function(){return this.variable.alias},getDescriptionWithType:function(){return this.variable.alias},getDecimals:function(){return this.variable.precision||0}});return a(null,{isPlayerOnly:!0,_fieldNameToVariableCache:null,_templateNameToVariableCache:null,_variableIdToVintageCache:null,_variableIdToSourceCache:null,constructor:function(a){this._templateNameToVariableCache=a&&a.templateNameToVariableCache||{},this._fieldNameToVariableCache={};for(var e in this._templateNameToVariableCache){var i=this._templateNameToVariableCache[e];this._fieldNameToVariableCache[i.fieldName]=i}this._variableIdToVintageCache=a&&a.variableIdToVintageCache,this._variableIdToSourceCache=a&&a.variableIdToSourceCache},get:function(a){return this._templateNameToVariableCache[a]||this._fieldNameToVariableCache[a]},toCalculator:function(a){var e=this.get(a);return e&&new n(e)},addVariable:function(a){this._fieldNameToVariableCache[a.fieldName]=a,this._templateNameToVariableCache[a.templateName]=a},addScriptVariable:function(a){this._fieldNameToVariableCache[a.fieldName]=a,this._templateNameToVariableCache[a.templateName]=a},getVariables:function(){return Object.keys(this._fieldNameToVariableCache).map(function(a){return this._fieldNameToVariableCache[a]},this)},getVariablesDataVintageDescription:function(a){var e=this;return i(this.tryFetchDataVintageInfo(a),function(i){if(!i)return null;var r={},n={};for(var o in a.usedVariablesCache){o=o.toLowerCase();var l=e._variableIdToVintageCache[o];l&&(n[l]=1);var c=e._variableIdToSourceCache[o];c&&(r[c]=1)}if(!Object.keys(r).length&&!Object.keys(n).length)return null;var h=[];if(Object.keys(r).length){h.push(t.substitute("This infographic contains data provided by ${source}.",{source:Object.keys(r).join(", ")}))}if(Object.keys(n).length){h.push(t.substitute("The vintage of the data is ${vintage}.",{vintage:Object.keys(n).join(", ")}))}return h.join(" ")})},getVariableVintage:function(a){return this._variableIdToVintageCache&&this._variableIdToVintageCache[a.toLowerCase()]},tryFetchDataVintageInfo:function(a,e){var t=this;return this._variableIdToVintageCache?(e&&this._trimDataVintageInfoCaches(e),!0):!!r.canLoad()&&i(r.loadVariables({countryID:a.countryID,hierarchy:a.hierarchy,outFields:["vintage","filteringTags"],forceLowerCase:!0}),function(a){function i(a){var e;return a.filteringTags&&a.filteringTags.some(function(a){if("Source"===a.name)return e=a.value,!0}),e}t._variableIdToVintageCache={},t._variableIdToSourceCache={};var r=a.fullNameToVariableCache;for(var n in r){var o=r[n];o.vintage&&(t._variableIdToVintageCache[n]=o.vintage);var l=i(o);l&&(t._variableIdToSourceCache[n]=l)}return a.dataCollections.forEach(function(a){var e=a.data[0];if(e){var r=a.dataCollectionID+".*";r=r.toLowerCase(),e.vintage&&(t._variableIdToVintageCache[r]=e.vintage);var n=i(e);n&&(t._variableIdToSourceCache[r]=n)}}),e&&t._trimDataVintageInfoCaches(e),!0})},_trimDataVintageInfoCaches:function(a){var e={},i={};for(var t in a){t=t.toLowerCase();var r=this._variableIdToVintageCache[t];r&&(e[t]=r);var n=this._variableIdToSourceCache[t];n&&(i[t]=n)}this._variableIdToVintageCache=e,this._variableIdToSourceCache=i},toJson:function(){return{templateNameToVariableCache:e.clone(this._templateNameToVariableCache),variableIdToVintageCache:this._variableIdToVintageCache&&e.clone(this._variableIdToVintageCache),variableIdToSourceCache:this._variableIdToSourceCache&&e.clone(this._variableIdToSourceCache)}}})});