// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer","../support/expressionUtils"],function(e,i,t,s,l,n,a,o,u){var r=e(o,{declaredClass:"esri.renderer.UniqueValueRenderer",constructor:function(e,t,s,l,n){if(this.values=[],this._symbols={},this.infos=[],e&&!e.declaredClass){var o=e;e=o.defaultSymbol,this.defaultSymbol=e&&(e.declaredClass?e:a.fromJson(e)),this.attributeField=o.field1,this.attributeField2=o.field2,this.attributeField3=o.field3,this.fieldDelimiter=o.fieldDelimiter,this.defaultLabel=o.defaultLabel,this.setValueExpression(o.valueExpression),this.valueExpressionTitle=o.valueExpressionTitle,this.legendOptions=o.legendOptions,o.backgroundFillSymbol&&(this.backgroundFillSymbol=a.fromJson(o.backgroundFillSymbol)),i.forEach(o.uniqueValueInfos,this._addValueInfo,this)}else this.defaultSymbol=e,this.attributeField=t,this.attributeField2=s,this.attributeField3=l,this.fieldDelimiter=n;this._multiple=!!this.attributeField2},addValue:function(e,i){var s=t.isObject(e)?e:{value:e,symbol:i};this._addValueInfo(s)},removeValue:function(e){var t=i.indexOf(this.values,e);-1!==t&&(this.values.splice(t,1),delete this._symbols[e],this.infos.splice(t,1))},getUniqueValueInfo:function(e){var i,s,l,n,a=this.attributeField,o=e.attributes;return this.valueExpression?n=this._getDataValue(e,this._uvInfo,null,this._cache.uvInfo):this._multiple?(i=this.attributeField2,s=this.attributeField3,l=[],a&&l.push(o[a]),i&&l.push(o[i]),s&&l.push(o[s]),n=l.join(this.fieldDelimiter||"")):n=t.isFunction(a)?a(e):o[a],this._symbols[n]},setValueExpression:function(e){this.valueExpression=e,this._uvInfo={valueExpression:e},this._cache.uvInfo=this._createCache(this._uvInfo,!0)},getFieldsUsedInExpressions:function(){var e=this.inherited(arguments);return this.valueExpression&&(e=e.concat(u.extractFieldNames(this.valueExpression))),e.sort(),i.filter(e,function(i,t){return 0===t||e[t-1]!==i})},getSymbol:function(e){var i=this.getUniqueValueInfo(e);return i&&i.symbol||this.defaultSymbol},_addValueInfo:function(e){var i=e.value;this.values.push(i),this.infos.push(e);var t=e.symbol;t&&(t.declaredClass||(e.symbol=a.fromJson(t))),this._symbols[i]=e},toJson:function(){var e,s=n.fixJson,l={type:"uniqueValue",field1:this.attributeField,field2:this.attributeField2,field3:this.attributeField3,fieldDelimiter:this.fieldDelimiter,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:t.clone(this.legendOptions),defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),defaultLabel:this.defaultLabel,uniqueValueInfos:i.map(this.infos||[],function(e){return e=t.mixin({},e),e.symbol=e.symbol&&e.symbol.toJson(),e.value=e.value+"",s(e)})};return this.backgroundFillSymbol&&(l.backgroundFillSymbol=this.backgroundFillSymbol.toJson()),e=t.mixin(this.inherited(arguments),l),s(e)}});return s("extend-esri")&&t.setObject("renderer.UniqueValueRenderer",r,l),r});