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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer","../support/expressionUtils"],function(e,i,l,t,s,u,n,a,o){var r=e(a,{declaredClass:"esri.renderer.UniqueValueRenderer",constructor:function(e,l,t,s,u){if(this.values=[],this._symbols={},this.infos=[],e&&!e.declaredClass){var a=e;e=a.defaultSymbol,this.defaultSymbol=e&&(e.declaredClass?e:n.fromJson(e)),this.attributeField=a.field1,this.attributeField2=a.field2,this.attributeField3=a.field3,this.fieldDelimiter=a.fieldDelimiter,this.defaultLabel=a.defaultLabel,this.setValueExpression(a.valueExpression),this.valueExpressionTitle=a.valueExpressionTitle,this.legendOptions=a.legendOptions,a.backgroundFillSymbol&&(this.backgroundFillSymbol=n.fromJson(a.backgroundFillSymbol)),i.forEach(a.uniqueValueInfos,this._addValueInfo,this)}else this.defaultSymbol=e,this.attributeField=l,this.attributeField2=t,this.attributeField3=s,this.fieldDelimiter=u;this._multiple=!!this.attributeField2},addValue:function(e,i){var t=l.isObject(e)?e:{value:e,symbol:i};this._addValueInfo(t)},removeValue:function(e){var l=i.indexOf(this.values,e);-1!==l&&(this.values.splice(l,1),this._hasNullKeyword=this._evalNullKeyword(this.values),delete this._symbols[e],this.infos.splice(l,1))},getUniqueValueInfo:function(e){var i,t=this.attributeField,s=e.attributes;if(this.valueExpression)i=this._getDataValue(e,this._uvInfo,null,this._cache.uvInfo),i=this._normalizeNullValue(i);else if(this._multiple){var u=this.attributeField2,n=this.attributeField3,a=[];t&&a.push(this._normalizeNullValue(s[t])),u&&a.push(this._normalizeNullValue(s[u])),n&&a.push(this._normalizeNullValue(s[n])),i=a.join(this.fieldDelimiter||"")}else i=l.isFunction(t)?t(e):s[t],i=this._normalizeNullValue(i);return this._symbols[i]},setValueExpression:function(e){this.valueExpression=e,this._uvInfo={valueExpression:e},this._cache.uvInfo=this._createCache(this._uvInfo,!0)},getFieldsUsedInExpressions:function(){var e=this.inherited(arguments);return this.valueExpression&&(e=e.concat(o.extractFieldNames(this.valueExpression))),e.sort(),i.filter(e,function(i,l){return 0===l||e[l-1]!==i})},getSymbol:function(e){var i=this.getUniqueValueInfo(e);return i&&i.symbol||this.defaultSymbol},_addValueInfo:function(e){var i=e.value;this.values.push(i),this._hasNullKeyword=this._evalNullKeyword(this.values),this.infos.push(e);var l=e.symbol;l&&(l.declaredClass||(e.symbol=n.fromJson(l))),this._symbols[i]=e},_nullCode:"<Null>",_normalizeNullValue:function(e){return this._hasNullKeyword&&null==e?this._nullCode:e},_evalNullKeyword:function(e){var l=this.fieldDelimiter||"",t=new RegExp("(^|"+l+")("+this._nullCode+")("+l+"|$)");return i.some(e,function(e){return t.test(e)})},toJson:function(){var e,t=u.fixJson,s={type:"uniqueValue",field1:this.attributeField,field2:this.attributeField2,field3:this.attributeField3,fieldDelimiter:this.fieldDelimiter,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:l.clone(this.legendOptions),defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),defaultLabel:this.defaultLabel,uniqueValueInfos:i.map(this.infos||[],function(e){return e=l.mixin({},e),e.symbol=e.symbol&&e.symbol.toJson(),e.value=e.value+"",t(e)})};return this.backgroundFillSymbol&&(s.backgroundFillSymbol=this.backgroundFillSymbol.toJson()),e=l.mixin(this.inherited(arguments),s),t(e)}});return t("extend-esri")&&l.setObject("renderer.UniqueValueRenderer",r,s),r});