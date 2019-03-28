// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../symbols","../core/lang","../core/accessorSupport/decorators","./Renderer","./mixins/VisualVariablesRenderer","../symbols/support/jsonUtils"],function(e,r,t,o,i,l,n,s,p,y,u,c){return function(e){function r(r){var t=e.call(this)||this;return t.description=null,t.label=null,t.symbol=null,t.type="simple",t}t(r,e),y=r,r.prototype.writeSymbolWebScene=function(e,r,t,o){c.writeTarget(e,r,t,o)},r.prototype.writeSymbol=function(e,r,t,o){c.writeTarget(e,r,t,o)},r.prototype.readSymbol=function(e,r,t){return c.read(e,r,t)},r.prototype.collectRequiredFields=function(e,r){return l(this,void 0,void 0,function(){return i(this,function(t){return[2,this.collectVVRequiredFields(e,r)]})})},r.prototype.getSymbol=function(e,r){return this.symbol},r.prototype.getSymbols=function(){return this.symbol?[this.symbol]:[]},r.prototype.clone=function(){return new y({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:s.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};var y;return o([p.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([p.property({types:n.symbolTypesRenderer})],r.prototype,"symbol",void 0),o([p.writer("web-scene","symbol",{symbol:{types:n.symbolTypesRenderer3D}})],r.prototype,"writeSymbolWebScene",null),o([p.writer("symbol")],r.prototype,"writeSymbol",null),o([p.reader("symbol")],r.prototype,"readSymbol",null),o([p.enumeration.serializable()({simple:"simple"})],r.prototype,"type",void 0),r=y=o([p.subclass("esri.renderers.SimpleRenderer")],r)}(p.declared(y,u))});