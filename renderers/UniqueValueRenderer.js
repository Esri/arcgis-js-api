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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../core/declare","../core/lang","dojo/_base/array","dojo/_base/lang","../symbols/support/jsonUtils","./Renderer"],function(e,i,s,l,n,t){var u=e(t,{declaredClass:"esri.renderer.UniqueValueRenderer",properties:{type:"uniqueValue",field:{value:null,json:{readFrom:["field1"],read:function(e,i){return i.field1},writeTo:"field1"}},field2:{value:null,json:{writable:!0}},field3:{value:null,json:{writable:!0}},expression:{value:null,json:{writable:!0}},expressionTree:{value:null,dependsOn:["expression"],get:function(){return this.expression?this._parseExpr(this.expression,{vars:{$feature:"any"}}):null}},defaultLabel:{value:null,json:{writable:!0}},defaultSymbol:{value:null,json:{read:n.read,write:function(e,i,s){var l=n.write(e,{},s);l&&(i.defaultSymbol=l)}}},fieldDelimiter:{value:null,json:{writable:!0}},uniqueValueInfos:{set:function(e){this._symbols={},s.forEach(e,this._processUVInfo,this),this._set("uniqueValueInfos",e)},json:{read:function(e,s,l){return e&&Array.isArray(e)?e.map(function(e){return e=i.clone(e),e.symbol=n.read(e.symbol,s,l),e}):void 0},write:function(e,l,t){l.uniqueValueInfos=s.map(this.uniqueValueInfos||[],function(e){return e=i.clone(e),e.symbol&&(e.symbol=n.write(e.symbol,{},t)),e.value=e.value+"",i.fixJson(e)})}}},requiredFields:{dependsOn:["field","field2","field3"]}},constructor:function(){this._symbols={},this.uniqueValueInfos=[]},addUniqueValueInfo:function(e,i){var s=l.isObject(e)?e:{value:e,symbol:i};this.uniqueValueInfos.push(s),this._processUVInfo(s)},removeUniqueValueInfo:function(e){var i=-1;s.some(this.uniqueValueInfos,function(s,l){return s.value==e?(i=l,!0):void 0}),-1!==i&&(delete this._symbols[e],this.uniqueValueInfos.splice(i,1))},getUniqueValueInfo:function(e){var i,s,n,t,u=this.field,o=e.attributes;return this.expression?t=this._executeExpr(this.expressionTree,this._createExprContext(e)):this.field2?(i=this.field2,s=this.field3,n=[],u&&n.push(o[u]),i&&n.push(o[i]),s&&n.push(o[s]),t=n.join(this.fieldDelimiter||"")):t=l.isFunction(u)?u(e):o[u],this._symbols[t]},getSymbol:function(e){var i=this.getUniqueValueInfo(e);return i&&i.symbol||this.defaultSymbol},clone:function(){return new u({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),expression:this.expression,fieldDelimiter:this.fieldDelimiter,uniqueValueInfos:i.clone(this.uniqueValueInfos),visualVariables:i.clone(this.visualVariables)})},collectRequiredFields:function(e){this.inherited(arguments),[this.field,this.field2,this.field3].forEach(function(i){i&&(e[i]=!0)})},_processUVInfo:function(e){var i=e.value,s=e.symbol;s&&(s.declaredClass||(e.symbol=n.fromJSON(s))),this._symbols[i]=e}});return u});