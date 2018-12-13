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

define(["dojo/_base/declare","dojo/_base/lang","./LocalGEBase","../AreaDataUtil"],function(e,a,t,i){return e(t,{_areaIdToFeatureCache:null,_fieldNameToPointCache:null,constructor:function(e,t,r,n,o,s){this._fieldNameToPointCache={},e[0]&&e[0].points.forEach(function(e){e.fieldInfo&&(this._fieldNameToPointCache[e.fieldInfo.name]=e)},this),this._skipThisArea=n;var l;if(n){var c=i.combineAreaDataObjectCalculators(r,t,{removeDuplicates:!0}),u=c.thisAreas.map(function(e,t){var i=a.mixin({},e);return i.StdGeographyName=o[t],i.isThisArea=!0,i});l={},l[t]={data:u.shift(),comparisonLevels:u.concat(c.comparisonLevels)}}else l=r[s||0];this._initGE(null,l,t)},getFieldValueAt:function(e,a){if(!this._areaIdToFeatureCache){this._areaIdToFeatureCache=[];this.getData().features.forEach(function(e){e.attributes.StdGeographyID&&(this._areaIdToFeatureCache[e.attributes.StdGeographyID]=e)},this)}var t=this._areaIdToFeatureCache[a];return t&&t.attributes[e]||0},_createField:function(e,a){var t=this.inherited(arguments),i=this._fieldNameToPointCache[e];if(i&&i.fieldInfo){var r=i.fieldInfo;t.alias=i.label||r.alias,t.decimals="number"==typeof r.decimals?r.decimals:-1,t.units=r.showPercent?"pct":r.showCurrency?"currency":t.units,t.type=r.type||t.type}else t.noVariableField=!0;return t},_filterAttributeField:function(e){return!e.noVariableField}})});