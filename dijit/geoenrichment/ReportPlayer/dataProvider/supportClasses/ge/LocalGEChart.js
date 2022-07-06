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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./LocalGEBase","../data/AreaDataUtil"],(function(e,i,a,t){return e(a,{_fieldNameToPointCache:null,constructor:function(e,a,n,o,r,l){var s;if(this._fieldNameToPointCache={},e[0]&&e[0].points.forEach((function(e){e.fieldInfo&&(this._fieldNameToPointCache[e.fieldInfo.name]=e)}),this),this._skipThisArea=o,o){var c=t.combineAreaDataObjectCalculators(n,a,{removeDuplicates:!0}),f=c.thisAreas.map((function(e,a){var t=i.mixin({},e);return t.StdGeographyName=r[a],t.isThisArea=!0,t}));(s={})[a]={data:f.shift(),comparisonLevels:f.concat(c.comparisonLevels)}}else s=n[l||0];this._initGE(null,s,a)},_createField:function(e,i){var a=this.inherited(arguments),t=this._fieldNameToPointCache[e];if(t&&t.fieldInfo){var n=t.fieldInfo;a.alias=t.label||n.alias,a.decimals="number"==typeof n.decimals?n.decimals:-1,a.units=n.showPercent?"pct":n.showCurrency?"currency":a.units,a.type=n.type||a.type}else a.noVariableField=!0;return a},_filterAttributeField:function(e){return!e.noVariableField}})}));