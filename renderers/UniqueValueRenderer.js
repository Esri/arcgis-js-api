// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer"],function(e,t,i,l,s,a,u,r){var d=e(r,{declaredClass:"esri.renderer.UniqueValueRenderer",constructor:function(e,i,l,s,a){if(this.values=[],this._symbols={},this.infos=[],e&&!e.declaredClass){var r=e;e=r.defaultSymbol,this.defaultSymbol=e&&(e.declaredClass?e:u.fromJson(e)),this.attributeField=r.field1,this.attributeField2=r.field2,this.attributeField3=r.field3,this.fieldDelimiter=r.fieldDelimiter,this.defaultLabel=r.defaultLabel,t.forEach(r.uniqueValueInfos,this._addValueInfo,this)}else this.defaultSymbol=e,this.attributeField=i,this.attributeField2=l,this.attributeField3=s,this.fieldDelimiter=a;this._multiple=!!this.attributeField2},addValue:function(e,t){var l=i.isObject(e)?e:{value:e,symbol:t};this._addValueInfo(l)},removeValue:function(e){var i=t.indexOf(this.values,e);-1!==i&&(this.values.splice(i,1),delete this._symbols[e],this.infos.splice(i,1))},getUniqueValueInfo:function(e){var t,l,s,a,u=this.attributeField,r=e.attributes;return this._multiple?(t=this.attributeField2,l=this.attributeField3,s=[],u&&s.push(r[u]),t&&s.push(r[t]),l&&s.push(r[l]),a=s.join(this.fieldDelimiter||"")):a=i.isFunction(u)?u(e):r[u],this._symbols[a]},getSymbol:function(e){var t=this.getUniqueValueInfo(e);return t&&t.symbol||this.defaultSymbol},_addValueInfo:function(e){var t=e.value;this.values.push(t),this.infos.push(e);var i=e.symbol;i&&(i.declaredClass||(e.symbol=u.fromJson(i))),this._symbols[t]=e},toJson:function(){var e=a.fixJson,l=i.mixin(this.inherited(arguments),{type:"uniqueValue",field1:this.attributeField,field2:this.attributeField2,field3:this.attributeField3,fieldDelimiter:this.fieldDelimiter,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),defaultLabel:this.defaultLabel,uniqueValueInfos:t.map(this.infos||[],function(t){return t=i.mixin({},t),t.symbol=t.symbol&&t.symbol.toJson(),t.value=t.value+"",e(t)})});return e(l)}});return l("extend-esri")&&i.setObject("renderer.UniqueValueRenderer",d,s),d});