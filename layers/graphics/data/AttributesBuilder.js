// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/maybe","./attributeSupport"],function(e,t,a,i){Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t,a){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=a,this.featureAdapter=t;var s=e.outFields;if(s&&-1===s.indexOf("*")){this.outFields=s;for(var r=0,u=0,l=s;u<l.length;u++){var n=l[u],h=i.getExpressionFromFieldName(n),c=this.fieldsIndex.get(h),o=c?null:i.getWhereClause(h,a),d=c?c.name:i.getAliasFromFieldName(n)||"FIELD_EXP_"+r++;this._fieldDataCache.set(n,{alias:d,clause:o})}}}return e.prototype.getAttributes=function(e){var t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)},e.prototype.getFieldValue=function(e,t,a){var s=a?a.name:t,r=null;return this._fieldDataCache.has(s)?r=this._fieldDataCache.get(s).clause:a||(r=i.getWhereClause(t,this.fieldsIndex),this._fieldDataCache.set(s,{alias:s,clause:r})),a?this.featureAdapter.getAttribute(e,s):r.calculateValue(e,this.featureAdapter)},e.prototype.validateItem=function(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:i.getWhereClause(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)},e.prototype.validateItems=function(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:i.getWhereClause(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)},e.prototype._processAttributesForOutFields=function(e){var t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);for(var a={},i=0,s=t;i<s.length;i++){var r=s[i],u=this._fieldDataCache.get(r),l=u.alias,n=u.clause;a[l]=n?n.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,l)}return a},e.prototype._processAttributesForDistinctValues=function(e){if(a.isNone(e)||!this.returnDistinctValues)return e;var t=this.outFields,i=[];if(t)for(var s=0,r=t;s<r.length;s++){var u=r[s],l=this._fieldDataCache.get(u).alias;i.push(e[l])}else for(var l in e)i.push(e[l]);var n=(t||["*"]).join(",")+"="+i.join(","),h=this._returnDistinctMap.get(n)||0;return this._returnDistinctMap.set(n,++h),h>1?null:e},e}();t.default=s});