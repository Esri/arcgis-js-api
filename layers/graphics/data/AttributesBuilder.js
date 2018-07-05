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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","@dojo/shim/Map","./attributeSupport"],function(t,e,i,s){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){this._fieldDataCache=new i.default,this._returnDistinctMap=new i.default,this.returnDistinctValues=t.returnDistinctValues,this.fieldsMap=e;var r=t.outFields;if(r&&-1===r.indexOf("*")){this.outFields=r;for(var a=0,u=0,l=r;u<l.length;u++){var n=l[u],o=s.getExpressionFromFieldName(n),h=this.fieldsMap.has(o),c=h?null:s.getWhereClause(o),f=h?this.fieldsMap.get(n).name:s.getAliasFromFieldName(n)||"FIELD_EXP_"+a++;this._fieldDataCache.set(n,{alias:f,clause:c})}}}return t.prototype.getAttributes=function(t){var e=t.getAttributes();return e=this._processAttributesForOutFields(e),e=this._processAttributesForDistinctValues(e)},t.prototype.getFieldAttribute=function(t,e){var i=t.getAttributes(),r=this.fieldsMap.has(e),a=r?null:s.getWhereClause(e),u=r?this.fieldsMap.get(e).name:e;return this._fieldDataCache.set(u,{alias:u,clause:a}),r?i[u]:a.calculateValue(i)},t.prototype._processAttributesForOutFields=function(t){var e=this.outFields;if(!t||!e||!e.length)return t;for(var i={},s=0,r=e;s<r.length;s++){var a=r[s],u=this._fieldDataCache.get(a),l=u.alias,n=u.clause;i[l]=n?n.calculateValue(t):t[l]}return i},t.prototype._processAttributesForDistinctValues=function(t){if(!t||!this.returnDistinctValues)return t;var e=this.outFields,i=[];if(e)for(var s=0,r=e;s<r.length;s++){var a=r[s],u=this._fieldDataCache.get(a).alias;i.push(t[u])}else for(var u in t)i.push(t[u]);var l=(e||["*"]).join(",")+"="+i.join(","),n=this._returnDistinctMap.get(l)||0;return this._returnDistinctMap.set(l,++n),n>1?null:t},t}();e.default=r});