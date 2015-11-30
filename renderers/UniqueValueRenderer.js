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
define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer"],function(e,i,t,l,s,a,u,o){var r=e(o,{declaredClass:"esri.renderer.UniqueValueRenderer",constructor:function(e,t,l,s,a){if(this.values=[],this._symbols={},this.infos=[],e&&!e.declaredClass){var o=e;e=o.defaultSymbol,this.defaultSymbol=e&&(e.declaredClass?e:u.fromJson(e)),this.attributeField=o.field1,this.attributeField2=o.field2,this.attributeField3=o.field3,this.fieldDelimiter=o.fieldDelimiter,this.defaultLabel=o.defaultLabel,o.backgroundFillSymbol&&(this.backgroundFillSymbol=u.fromJson(o.backgroundFillSymbol)),i.forEach(o.uniqueValueInfos,this._addValueInfo,this)}else this.defaultSymbol=e,this.attributeField=t,this.attributeField2=l,this.attributeField3=s,this.fieldDelimiter=a;this._multiple=!!this.attributeField2},addValue:function(e,i){var l=t.isObject(e)?e:{value:e,symbol:i};this._addValueInfo(l)},removeValue:function(e){var t=i.indexOf(this.values,e);-1!==t&&(this.values.splice(t,1),delete this._symbols[e],this.infos.splice(t,1))},getUniqueValueInfo:function(e){var i,l,s,a,u=this.attributeField,o=e.attributes;return this._multiple?(i=this.attributeField2,l=this.attributeField3,s=[],u&&s.push(o[u]),i&&s.push(o[i]),l&&s.push(o[l]),a=s.join(this.fieldDelimiter||"")):a=t.isFunction(u)?u(e):o[u],this._symbols[a]},getSymbol:function(e){var i=this.getUniqueValueInfo(e);return i&&i.symbol||this.defaultSymbol},_addValueInfo:function(e){var i=e.value;this.values.push(i),this.infos.push(e);var t=e.symbol;t&&(t.declaredClass||(e.symbol=u.fromJson(t))),this._symbols[i]=e},toJson:function(){var e,l=a.fixJson,s={type:"uniqueValue",field1:this.attributeField,field2:this.attributeField2,field3:this.attributeField3,fieldDelimiter:this.fieldDelimiter,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),defaultLabel:this.defaultLabel,uniqueValueInfos:i.map(this.infos||[],function(e){return e=t.mixin({},e),e.symbol=e.symbol&&e.symbol.toJson(),e.value=e.value+"",l(e)})};return this.backgroundFillSymbol&&(s.backgroundFillSymbol=this.backgroundFillSymbol.toJson()),e=t.mixin(this.inherited(arguments),s),l(e)}});return l("extend-esri")&&t.setObject("renderer.UniqueValueRenderer",r,s),r});