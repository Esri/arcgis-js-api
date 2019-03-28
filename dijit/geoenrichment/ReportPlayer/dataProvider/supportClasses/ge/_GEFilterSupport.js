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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/tasks/FeatureSet","esri/dijit/geoenrichment/infographicUtils/formatVariable","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,t,i,a){return e(null,{_filterRanges:null,_alwaysAllowThisAreasWhenFiltering:!1,getData:function(e){return this.data||(this.data=this._createFeatureSet()),e&&e.ignoreFilters?this.data:this._filterRanges&&this._filterRanges.length&&this.data?this._filterData(this.data):this.data},_createFeatureSet:function(){},_filterData:function(e){var i=new t;return i.fields=e.fields,i.fieldAliases=e.fieldAliases,i.features=e.features.filter(function(e){return!(!this._alwaysAllowThisAreasWhenFiltering||!e.attributes.isThisArea)||!this._filterRanges.some(function(t){var i=e.attributes[t.fieldName];return i<t.min||i>t.max})},this),i},_excludeMap:{StdGeographyName:1,StdGeographyID:1,StdGeographyLevel:1,isThisArea:1},getAttributeFields:function(){var e=this.getData({ignoreFilters:!0});if(!e)return[];for(var t=e.fields,r=[],n=0;n<t.length;n++){var s=t[n];!this._excludeMap[s.name]&&this._filterAttributeField(s)&&r.push({name:s.name,label:s.alias,decimals:s.decimals>=0?s.decimals:void 0,type:s.type,formatFunction:function(e){return function(t){return-1===e.decimals?a.formatNumber(t):i(e,t)}}(s)})}return r},_filterAttributeField:function(e){return!this.variables||!this.variables.length||("HouseholdsByIncome.*"===this.variables[0]?0===e.name.indexOf("HIN"):"HouseholdIncomeCurrentYear.*"===this.variables[0]?0===e.name.indexOf("EHYHNI"):"Age.*"===this.variables[0]?0===e.name.indexOf("FEM")||0===e.name.indexOf("MAL")||0===e.name.indexOf("ECYP"):-1!==this.variables[0].indexOf("AVGHHSZ")?-1!==e.name.indexOf("AVGHHSZ"):"RaceAndEthnicity.*"!==this.variables[0]||-1!==e.name.indexOf("_CY_"))},getAllGeographyAttributes:function(e){var t=this.getData(e);if(!t)return[];for(var i=t.features,a=[],r=0;r<i.length;r++){var n=i[r].attributes;n.isThisArea||a.push(n)}return a},setFilterRanges:function(e,t){this._filterRanges=e,this._alwaysAllowThisAreasWhenFiltering=t&&t.ignoreThisAreas},collectFilterRangesStats:function(e){if(!this.getData())return null;e=e||{};var t=e.additionalAttributes||[];t=t.concat(e.excludeThisAreas?this.getAllGeographyAttributes({ignoreFilters:!0}):this.getData({ignoreFilters:!0}).features.map(function(e){return e.attributes}));var i=[];return this.getAttributeFields().forEach(function(e){if("esriFieldTypeString"!==e.type){var a={fieldName:e.name,alias:e.label,min:1/0,max:-1/0,decimals:e.decimals,dataArray:[]};i.push(a),t.forEach(function(t){var i=t[e.name];a.min=Math.min(a.min,i),a.max=Math.max(a.max,i),a.dataArray.push(i)})}}),{filterRanges:i,numAreasTotal:t.length}}})});