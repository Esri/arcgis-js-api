// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/Map","./attributeSupport"],function(t,e,a,i){Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){this._fieldDataCache=new a.default,this._returnDistinctMap=new a.default,this.returnDistinctValues=t.returnDistinctValues,this.fieldsMap=e;var s=t.outFields;if(s&&-1===s.indexOf("*")){this.outFields=s;for(var r=0,u=0,l=s;u<l.length;u++){var n=l[u],h=i.getExpressionFromFieldName(n),o=this.fieldsMap.has(h),c=o?null:i.getWhereClause(h),f=o?this.fieldsMap.get(n).name:i.getAliasFromFieldName(n)||"FIELD_EXP_"+r++;this._fieldDataCache.set(n,{alias:f,clause:c})}}}return t.prototype.getAttributes=function(t){var e=t.attributes;return e=this._processAttributesForOutFields(e),e=this._processAttributesForDistinctValues(e)},t.prototype.getFieldValue=function(t,e){var a=t.attributes,s=this.fieldsMap.has(e),r=s?this.fieldsMap.get(e).name:e,u=null;return this._fieldDataCache.has(r)?u=this._fieldDataCache.get(r).clause:s||(u=i.getWhereClause(e),this._fieldDataCache.set(r,{alias:r,clause:u})),s?a[r]:u.calculateValue(a)},t.prototype.validateItem=function(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:i.getWhereClause(e)}),this._fieldDataCache.get(e).clause.testFeature(t.attributes)},t.prototype.validateItems=function(t,e){var a=this;this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:i.getWhereClause(e)});var s=t.map(function(t){return a.getAttributes(t)});return this._fieldDataCache.get(e).clause.testSet(s)},t.prototype._processAttributesForOutFields=function(t){var e=this.outFields;if(!t||!e||!e.length)return t;for(var a={},i=0,s=e;i<s.length;i++){var r=s[i],u=this._fieldDataCache.get(r),l=u.alias,n=u.clause;a[l]=n?n.calculateValue(t):t[l]}return a},t.prototype._processAttributesForDistinctValues=function(t){if(!t||!this.returnDistinctValues)return t;var e=this.outFields,a=[];if(e)for(var i=0,s=e;i<s.length;i++){var r=s[i],u=this._fieldDataCache.get(r).alias;a.push(t[u])}else for(var u in t)a.push(t[u]);var l=(e||["*"]).join(",")+"="+a.join(","),n=this._returnDistinctMap.get(l)||0;return this._returnDistinctMap.set(l,++n),n>1?null:t},t}();e.default=s});