// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./LocalGEBase","../data/AreaDataUtil"],(function(e,a,i,t){return e(i,{_fieldNameToFieldInfoCache:null,_variableIdToFieldInfoCache:null,constructor:function(e,i,r,l,n){this._fieldNameToFieldInfoCache={},this._variableIdToFieldInfoCache={},e.fieldInfos.forEach((function(e){this._fieldNameToFieldInfoCache[e.name]=e,this._variableIdToFieldInfoCache[e.variableID]=e}),this);var o,c=e.calcData.calculatorName;if(this._skipThisArea=r&&i.length>1,this._skipThisArea){var s=t.combineAreaDataObjectCalculators(i,c,{removeDuplicates:!0}),d=s.thisAreas.map((function(e,i){var t=a.mixin({},e);return t.StdGeographyName=l[i],t.isThisArea=!0,t}));(o={})[c]={data:d.shift(),comparisonLevels:d.concat(s.comparisonLevels)}}else o=i[n||0];this._initGE(e.calcData.variables,o,c)},_propulateAttributesFromAreaData:function(e,a){for(var i in a){var t=this._fieldNameToFieldInfoCache[i];t?e[t.variableID]=a[i]:e[i]=a[i]}},_createField:function(e,a){var i=this.inherited(arguments),t=this._variableIdToFieldInfoCache[e];return t?(i.alias=t.alias,i.decimals=t.decimals,i.units=t.showPercent?"pct":t.showCurrency?"currency":i.units,i.type=t.type||i.type):i.noVariableField=!0,i},_filterAttributeField:function(e){return!e.noVariableField}})}));
