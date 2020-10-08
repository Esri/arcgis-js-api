// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/has","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/accessorSupport/diffUtils","../../../../support/arcadeOnDemand","../../arcade/callExpressionWithCursor","@dojo/framework/shim/Promise"],(function(e,t,s,r,i,a,n,o,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Store2D=void 0;var u=new Promise((function(t,s){e(["../../../../layers/support/labelFormatUtils"],t,s)})),d=function(){function e(e,t){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:t.getBitset(t.createBitset())}}return e.prototype.updateSchema=function(e,t){return s.__awaiter(this,void 0,void 0,(function(){var o,c,u,d,l,p,h;return s.__generator(this,(function(s){switch(s.label){case 0:if(o=n.diff(this._schema,t),this._schema=t,!t||i.isNone(o)||!n.hasDiff(o,"attributes"))return[2];for(l in r("esri-2d-update-debug")&&console.debug("Applying Update - Store:",o),this._bitsets.computed.clear(),e.targets[t.name]=!0,c=t.attributes,u=[],d=[],c)switch((p=c[l]).type){case"field":break;case"expression":u.push(this._createArcadeComputedField(p));break;case"label-expression":u.push(this._createLabelArcadeComputedField(p));break;case"statistic":d.push(p)}return h=this,[4,a.all(u)];case 1:return h._computedFields=s.sent(),this._canCacheExpressionValue=!this._computedFields.some((function(e){return"expression"===e.type&&e.expression.referencesScale()})),this._statisticFields=d,[2]}}))}))},e.prototype.setComputedAttributes=function(e,t,s,r){var i=this._bitsets.computed;if(!this._canCacheExpressionValue||!i.has(s)){i.set(s);for(var a=0,n=this._computedFields;a<n.length;a++){var o=n[a],c=this._evaluateField(t,o,r);switch(o.resultType){case"numeric":e.setComputedNumericAtIndex(s,o.fieldIndex,c);break;case"string":e.setComputedStringAtIndex(s,o.fieldIndex,c)}}}},e.prototype._createArcadeComputedField=function(e){return s.__awaiter(this,void 0,void 0,(function(){var t,r,i,a;return s.__generator(this,(function(n){switch(n.label){case 0:return t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex,i=[s.__assign({},e)],a={},[4,o.createRendererExpression(e.valueExpression,t,r)];case 1:return[2,s.__assign.apply(void 0,i.concat([(a.expression=n.sent(),a)]))]}}))}))},e.prototype._createLabelArcadeComputedField=function(e){return s.__awaiter(this,void 0,void 0,(function(){var t,r,i;return s.__generator(this,(function(a){switch(a.label){case 0:return t=this._sourceInfo.spatialReference,r=this._sourceInfo.fields,[4,u];case 1:return[4,(0,a.sent().createLabelFunction)(e.label,r,t)];case 2:return i=a.sent(),[2,s.__assign(s.__assign({},e),{builder:i})]}}))}))},e.prototype._evaluateField=function(e,t,s){switch(t.type){case"label-expression":var r=e.readArcadeFeature();return t.builder.evaluate(r)||"";case"expression":var i=t.expression,a={$view:{scale:s}};return c.default(i,e,a)}},e}();t.Store2D=d}));