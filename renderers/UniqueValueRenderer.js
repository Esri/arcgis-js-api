// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer","./arcadeUtils"],function(e,i,t,s,l,a,o,n,r){var u=e(n,{declaredClass:"esri.renderer.UniqueValueRenderer",constructor:function(e,t,s,l,a){if(this.values=[],this._symbols={},this.infos=[],e&&!e.declaredClass){var n=e;e=n.defaultSymbol,this.defaultSymbol=e&&(e.declaredClass?e:o.fromJson(e)),this.attributeField=n.field1,this.attributeField2=n.field2,this.attributeField3=n.field3,this.fieldDelimiter=n.fieldDelimiter,this.defaultLabel=n.defaultLabel,this.setValueExpression(n.valueExpression),this.legendOptions=n.legendOptions,n.backgroundFillSymbol&&(this.backgroundFillSymbol=o.fromJson(n.backgroundFillSymbol)),i.forEach(n.uniqueValueInfos,this._addValueInfo,this)}else this.defaultSymbol=e,this.attributeField=t,this.attributeField2=s,this.attributeField3=l,this.fieldDelimiter=a;this._multiple=!!this.attributeField2},addValue:function(e,i){var s=t.isObject(e)?e:{value:e,symbol:i};this._addValueInfo(s)},removeValue:function(e){var t=i.indexOf(this.values,e);-1!==t&&(this.values.splice(t,1),delete this._symbols[e],this.infos.splice(t,1))},getUniqueValueInfo:function(e){var i,s,l,a,o=this.attributeField,n=e.attributes;return this._exprTree?a=r.executeExpression(this._exprTree,r.createExecContext(e)):this._multiple?(i=this.attributeField2,s=this.attributeField3,l=[],o&&l.push(n[o]),i&&l.push(n[i]),s&&l.push(n[s]),a=l.join(this.fieldDelimiter||"")):a=t.isFunction(o)?o(e):n[o],this._symbols[a]},setValueExpression:function(e){this.valueExpression=e,this._exprTree=r.parseExpression(e)},getSymbol:function(e){var i=this.getUniqueValueInfo(e);return i&&i.symbol||this.defaultSymbol},_addValueInfo:function(e){var i=e.value;this.values.push(i),this.infos.push(e);var t=e.symbol;t&&(t.declaredClass||(e.symbol=o.fromJson(t))),this._symbols[i]=e},toJson:function(){var e,s=a.fixJson,l={type:"uniqueValue",field1:this.attributeField,field2:this.attributeField2,field3:this.attributeField3,fieldDelimiter:this.fieldDelimiter,valueExpression:this.valueExpression,legendOptions:this.legendOptions,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),defaultLabel:this.defaultLabel,uniqueValueInfos:i.map(this.infos||[],function(e){return e=t.mixin({},e),e.symbol=e.symbol&&e.symbol.toJson(),e.value=e.value+"",s(e)})};return this.backgroundFillSymbol&&(l.backgroundFillSymbol=this.backgroundFillSymbol.toJson()),e=t.mixin(this.inherited(arguments),l),s(e)}});return s("extend-esri")&&t.setObject("renderer.UniqueValueRenderer",u,l),u});