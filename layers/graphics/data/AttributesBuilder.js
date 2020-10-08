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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/maybe","./attributeSupport"],(function(t,e,i,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=t.returnDistinctValues,this.fieldsIndex=i,this.featureAdapter=e;var s=t.outFields;if(s&&-1===s.indexOf("*")){this.outFields=s;for(var r=0,u=0,n=s;u<n.length;u++){var l=n[u],h=a.getExpressionFromFieldName(l),c=this.fieldsIndex.get(h),o=c?null:a.getWhereClause(h,i),f=c?c.name:a.getAliasFromFieldName(l)||"FIELD_EXP_"+r++;this._fieldDataCache.set(l,{alias:f,clause:o})}}}return t.prototype.countDistinctValues=function(t){var e=this;return this.returnDistinctValues?(t.forEach((function(t){return e.getAttributes(t)})),this._returnDistinctMap.size):t.length},t.prototype.getAttributes=function(t){var e=this._processAttributesForOutFields(t);return this._processAttributesForDistinctValues(e)},t.prototype.getFieldValue=function(t,e,i){var s=i?i.name:e,r=null;return this._fieldDataCache.has(s)?r=this._fieldDataCache.get(s).clause:i||(r=a.getWhereClause(e,this.fieldsIndex),this._fieldDataCache.set(s,{alias:s,clause:r})),i?this.featureAdapter.getAttribute(t,s):r.calculateValue(t,this.featureAdapter)},t.prototype.validateItem=function(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:a.getWhereClause(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testFeature(t,this.featureAdapter)},t.prototype.validateItems=function(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:a.getWhereClause(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testSet(t,this.featureAdapter)},t.prototype._processAttributesForOutFields=function(t){var e=this.outFields;if(!e||!e.length)return this.featureAdapter.getAttributes(t);for(var i={},a=0,s=e;a<s.length;a++){var r=s[a],u=this._fieldDataCache.get(r),n=u.alias,l=u.clause;i[n]=l?l.calculateValue(t,this.featureAdapter):this.featureAdapter.getAttribute(t,n)}return i},t.prototype._processAttributesForDistinctValues=function(t){if(i.isNone(t)||!this.returnDistinctValues)return t;var e=this.outFields,a=[];if(e)for(var s=0,r=e;s<r.length;s++){var u=r[s],n=this._fieldDataCache.get(u).alias;a.push(t[n])}else for(var n in t)a.push(t[n]);var l=(e||["*"]).join(",")+"="+a.join(","),h=this._returnDistinctMap.get(l)||0;return this._returnDistinctMap.set(l,++h),h>1?null:t},t}();e.default=s}));