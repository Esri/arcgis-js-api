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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./LocalGEBase","../AreaDataUtil"],function(a,e,i,l){return a(i,{_allowMultipleThisAreas:!1,_fieldNameToFieldInfoCache:null,_variableIdToFieldInfoCache:null,constructor:function(a,i,t,o,r){this._fieldNameToFieldInfoCache={},this._variableIdToFieldInfoCache={},a.fieldInfos.forEach(function(a){this._fieldNameToFieldInfoCache[a.name]=a,this._variableIdToFieldInfoCache[a.variableID]=a},this);var n=a.calcData.calculatorName;this._allowMultipleThisAreas=t&&i.length>1;var s;if(this._allowMultipleThisAreas){var c=l.combineAreaDataObjectCalculators(i,n,{removeDuplicates:!0}),h=c.thisAreas.map(function(a,i){var l=e.mixin({},a);return l.StdGeographyName=o[i],l.isThisArea=!0,l});s={},s[n]={data:h.shift(),comparisonLevels:h.concat(c.comparisonLevels)}}else s=i[r||0];this._initGE(a.calcData.variables,s,n)},_propulateAttributesFromAreaData:function(a,e){for(var i in e){var l=this._fieldNameToFieldInfoCache[i];l?a[l.variableID]=e[i]:a[i]=e[i]}},_createField:function(a,e){var i=this.inherited(arguments),l=this._variableIdToFieldInfoCache[a];return l&&(i.alias=l.alias,i.decimals=l.decimals,i.units=l.showPercent?"pct":l.showCurrency?"currency":i.units,i.type=l.type||i.type),i}})});