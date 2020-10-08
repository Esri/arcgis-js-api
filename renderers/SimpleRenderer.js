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

define(["require","exports","tslib","../core/lang","../core/promiseUtils","../core/accessorSupport/decorators","./Renderer","./mixins/VisualVariablesMixin","./support/commonProperties"],(function(e,t,r,i,o,n,s,l,u){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.label=null,r.symbol=null,r.type="simple",r}var s;return r.__extends(t,e),s=t,t.prototype.collectRequiredFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,o.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])];case 1:return r.sent(),[2]}}))}))},t.prototype.collectSymbolFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,o.all(this.getSymbols().map((function(r){return r.collectRequiredFields(e,t)})))];case 1:return r.sent(),[2]}}))}))},t.prototype.getSymbol=function(e,t){return this.symbol},t.prototype.getSymbolAsync=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2,this.symbol]}))}))},t.prototype.getSymbols=function(){return this.symbol?[this.symbol]:[]},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return this.getSymbols().reduce((function(e,t){return e+JSON.stringify(t)}),"")},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return this.arcadeRequiredForVisualVariables},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new s({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:i.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),r.__decorate([n.property(u.rendererSymbolProperty)],t.prototype,"symbol",void 0),r.__decorate([n.enumeration({simple:"simple"})],t.prototype,"type",void 0),t=s=r.__decorate([n.subclass("esri.renderers.SimpleRenderer")],t)}(l.VisualVariablesMixin(s))}));