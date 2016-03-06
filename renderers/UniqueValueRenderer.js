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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer"],function(e,i,t,s,l,a,r,u){var o=e(u,{declaredClass:"esri.renderer.UniqueValueRenderer",constructor:function(e,t,s,l,a){if(this.values=[],this._symbols={},this.infos=[],e&&!e.declaredClass){var u=e;e=u.defaultSymbol,this.defaultSymbol=e&&(e.declaredClass?e:r.fromJson(e)),this.attributeField=u.field1,this.attributeField2=u.field2,this.attributeField3=u.field3,this.fieldDelimiter=u.fieldDelimiter,this.defaultLabel=u.defaultLabel,this.setValueExpression(u.valueExpression),u.backgroundFillSymbol&&(this.backgroundFillSymbol=r.fromJson(u.backgroundFillSymbol)),i.forEach(u.uniqueValueInfos,this._addValueInfo,this)}else this.defaultSymbol=e,this.attributeField=t,this.attributeField2=s,this.attributeField3=l,this.fieldDelimiter=a;this._multiple=!!this.attributeField2},addValue:function(e,i){var s=t.isObject(e)?e:{value:e,symbol:i};this._addValueInfo(s)},removeValue:function(e){var t=i.indexOf(this.values,e);-1!==t&&(this.values.splice(t,1),delete this._symbols[e],this.infos.splice(t,1))},getUniqueValueInfo:function(e){var i,s,l,a,r=this.attributeField,u=e.attributes;return this._exprTree?a=this._executeExpr(this._exprTree,this._createExprContext(e)):this._multiple?(i=this.attributeField2,s=this.attributeField3,l=[],r&&l.push(u[r]),i&&l.push(u[i]),s&&l.push(u[s]),a=l.join(this.fieldDelimiter||"")):a=t.isFunction(r)?r(e):u[r],this._symbols[a]},setValueExpression:function(e){this.valueExpression=e,this._exprTree=this._parseExpr(e,{vars:{$feature:"any"}})},getSymbol:function(e){var i=this.getUniqueValueInfo(e);return i&&i.symbol||this.defaultSymbol},_addValueInfo:function(e){var i=e.value;this.values.push(i),this.infos.push(e);var t=e.symbol;t&&(t.declaredClass||(e.symbol=r.fromJson(t))),this._symbols[i]=e},toJson:function(){var e,s=a.fixJson,l={type:"uniqueValue",field1:this.attributeField,field2:this.attributeField2,field3:this.attributeField3,fieldDelimiter:this.fieldDelimiter,valueExpression:this.valueExpression,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),defaultLabel:this.defaultLabel,uniqueValueInfos:i.map(this.infos||[],function(e){return e=t.mixin({},e),e.symbol=e.symbol&&e.symbol.toJson(),e.value=e.value+"",s(e)})};return this.backgroundFillSymbol&&(l.backgroundFillSymbol=this.backgroundFillSymbol.toJson()),e=t.mixin(this.inherited(arguments),l),s(e)}});return s("extend-esri")&&t.setObject("renderer.UniqueValueRenderer",o,l),o});