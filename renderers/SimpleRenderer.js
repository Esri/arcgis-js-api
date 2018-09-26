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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/accessorSupport/decorators","./Renderer","../symbols/support/jsonUtils","../symbols/support/typeUtils"],function(e,r,t,o,l,n,s,i,p){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.symbol=null,r.type="simple",r}t(r,e),s=r,r.prototype.writeSymbolWebScene=function(e,r,t,o){i.writeTarget(e,r,t,o)},r.prototype.writeSymbol=function(e,r,t,o){i.writeTarget(e,r,t,o)},r.prototype.readSymbol=function(e,r,t){return i.read(e,r,t)},r.prototype.getSymbol=function(e,r){return this.symbol},r.prototype.getSymbols=function(){return this.symbol?[this.symbol]:[]},r.prototype.clone=function(){return new s({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:l.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};var s;return o([n.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([n.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([n.property({types:p.rendererTypes})],r.prototype,"symbol",void 0),o([n.writer("web-scene","symbol",{symbol:{types:p.rendererTypes3D}})],r.prototype,"writeSymbolWebScene",null),o([n.writer("symbol")],r.prototype,"writeSymbol",null),o([n.reader("symbol")],r.prototype,"readSymbol",null),o([n.enumeration.serializable()({simple:"simple"})],r.prototype,"type",void 0),r=s=o([n.subclass("esri.renderers.SimpleRenderer")],r)}(n.declared(s))});