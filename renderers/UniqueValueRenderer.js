// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer","../support/expressionUtils"],(function(e,i,t,l,s,o,u,n,a){var r=e(n,{declaredClass:"esri.renderer.UniqueValueRenderer",constructor:function(e,t,l,s,o,n){if(this.values=[],this._symbols={},this.infos=[],e&&!e.declaredClass){var a=e,r=n&&n.geometryType;e=a.defaultSymbol,this.defaultSymbol=e&&(e.declaredClass?e:u.fromJson(e,n)),this.attributeField=a.field1,this.attributeField2=a.field2,this.attributeField3=a.field3,this.fieldDelimiter=a.fieldDelimiter,this.defaultLabel=a.defaultLabel,this.setValueExpression(a.valueExpression),this.valueExpressionTitle=a.valueExpressionTitle,this.legendOptions=a.legendOptions,a.backgroundFillSymbol&&(this.backgroundFillSymbol=u.fromJson(a.backgroundFillSymbol,r?{geometryType:"esriGeometryPolygon"}:null)),"esriGeometryPolygon"===r&&this.hasVisualVariables("sizeInfo",!1)&&(n={geometryType:"esriGeometryPoint"}),i.forEach(a.uniqueValueInfos,(function(e){this._addValueInfo(e,n)}),this)}else this.defaultSymbol=e,this.attributeField=t,this.attributeField2=l,this.attributeField3=s,this.fieldDelimiter=o;this._multiple=!!this.attributeField2},addValue:function(e,i){var l=t.isObject(e)?e:{value:e,symbol:i};this._addValueInfo(l)},removeValue:function(e){var t=i.indexOf(this.values,e);-1!==t&&(this.values.splice(t,1),this._hasNullKeyword=this._evalNullKeyword(this.values),delete this._symbols[e],this.infos.splice(t,1))},getUniqueValueInfo:function(e){var i,l=this.attributeField,s=e.attributes;if(this.valueExpression)i=this._getDataValue(e,this._uvInfo,null,this._cache.uvInfo),i=this._normalizeNullValue(i);else if(this._multiple){var o=this.attributeField2,u=this.attributeField3,n=[];l&&n.push(this._normalizeNullValue(s[l])),o&&n.push(this._normalizeNullValue(s[o])),u&&n.push(this._normalizeNullValue(s[u])),i=n.join(this.fieldDelimiter||"")}else i=t.isFunction(l)?l(e):s[l],i=this._normalizeNullValue(i);return this._symbols[i]},setValueExpression:function(e){this.valueExpression=e,this._uvInfo={valueExpression:e},this._cache.uvInfo=this._createCache(this._uvInfo,!0)},getFieldsUsedInExpressions:function(){var e=this.inherited(arguments);return this.valueExpression&&(e=e.concat(a.extractFieldNames(this.valueExpression))),e.sort(),i.filter(e,(function(i,t){return 0===t||e[t-1]!==i}))},getSymbol:function(e){var i=this.getUniqueValueInfo(e);return i&&i.symbol||this.defaultSymbol},_addValueInfo:function(e,i){var t=e.value;this.values.push(t),this._hasNullKeyword=this._evalNullKeyword(this.values),this.infos.push(e);var l=e.symbol;l&&(l.declaredClass||(e.symbol=u.fromJson(l,i))),this._symbols[t]=e},_nullCode:"<Null>",_normalizeNullValue:function(e){return this._hasNullKeyword&&null==e?this._nullCode:e},_evalNullKeyword:function(e){var t=this.fieldDelimiter||"",l=new RegExp("(^|"+t+")("+this._nullCode+")("+t+"|$)");return i.some(e,(function(e){return l.test(e)}))},toJson:function(){var e,l=o.fixJson,s={type:"uniqueValue",field1:this.attributeField,field2:this.attributeField2,field3:this.attributeField3,fieldDelimiter:this.fieldDelimiter,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:t.clone(this.legendOptions),defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),defaultLabel:this.defaultLabel,uniqueValueInfos:i.map(this.infos||[],(function(e){return(e=t.mixin({},e)).symbol=e.symbol&&e.symbol.toJson(),e.value=e.value+"",l(e)}))};return this.backgroundFillSymbol&&(s.backgroundFillSymbol=this.backgroundFillSymbol.toJson()),e=t.mixin(this.inherited(arguments),s),l(e)}});return l("extend-esri")&&t.setObject("renderer.UniqueValueRenderer",r,s),r}));