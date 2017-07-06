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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer","./arcadeUtils"],function(e,i,t,s,l,n,o,a,u){var r=e(a,{declaredClass:"esri.renderer.UniqueValueRenderer",constructor:function(e,t,s,l,n){if(this.values=[],this._symbols={},this.infos=[],e&&!e.declaredClass){var a=e;e=a.defaultSymbol,this.defaultSymbol=e&&(e.declaredClass?e:o.fromJson(e)),this.attributeField=a.field1,this.attributeField2=a.field2,this.attributeField3=a.field3,this.fieldDelimiter=a.fieldDelimiter,this.defaultLabel=a.defaultLabel,this.setValueExpression(a.valueExpression),this.valueExpressionTitle=a.valueExpressionTitle,this.legendOptions=a.legendOptions,a.backgroundFillSymbol&&(this.backgroundFillSymbol=o.fromJson(a.backgroundFillSymbol)),i.forEach(a.uniqueValueInfos,this._addValueInfo,this)}else this.defaultSymbol=e,this.attributeField=t,this.attributeField2=s,this.attributeField3=l,this.fieldDelimiter=n;this._multiple=!!this.attributeField2},addValue:function(e,i){var s=t.isObject(e)?e:{value:e,symbol:i};this._addValueInfo(s)},removeValue:function(e){var t=i.indexOf(this.values,e);-1!==t&&(this.values.splice(t,1),delete this._symbols[e],this.infos.splice(t,1))},getUniqueValueInfo:function(e){var i,s,l,n,o=this.attributeField,a=e.attributes;return this._compiledFunc?n=u.executeFunction(this._compiledFunc,u.createExecContext(e,e._getViewInfo())):this._multiple?(i=this.attributeField2,s=this.attributeField3,l=[],o&&l.push(a[o]),i&&l.push(a[i]),s&&l.push(a[s]),n=l.join(this.fieldDelimiter||"")):n=t.isFunction(o)?o(e):a[o],this._symbols[n]},setValueExpression:function(e){this.valueExpression=e,this._compiledFunc=u.createFunction(e)},getFieldsUsedInExpressions:function(){var e=this.inherited(arguments);return this.valueExpression&&(e=e.concat(u.extractFieldNames(this.valueExpression))),e.sort(),i.filter(e,function(i,t){return 0===t||e[t-1]!==i})},getSymbol:function(e){var i=this.getUniqueValueInfo(e);return i&&i.symbol||this.defaultSymbol},_addValueInfo:function(e){var i=e.value;this.values.push(i),this.infos.push(e);var t=e.symbol;t&&(t.declaredClass||(e.symbol=o.fromJson(t))),this._symbols[i]=e},toJson:function(){var e,s=n.fixJson,l={type:"uniqueValue",field1:this.attributeField,field2:this.attributeField2,field3:this.attributeField3,fieldDelimiter:this.fieldDelimiter,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:t.clone(this.legendOptions),defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),defaultLabel:this.defaultLabel,uniqueValueInfos:i.map(this.infos||[],function(e){return e=t.mixin({},e),e.symbol=e.symbol&&e.symbol.toJson(),e.value=e.value+"",s(e)})};return this.backgroundFillSymbol&&(l.backgroundFillSymbol=this.backgroundFillSymbol.toJson()),e=t.mixin(this.inherited(arguments),l),s(e)}});return s("extend-esri")&&t.setObject("renderer.UniqueValueRenderer",r,l),r});