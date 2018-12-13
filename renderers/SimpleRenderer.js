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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/accessorSupport/decorators","./Renderer","./mixins/VisualVariablesRenderer","../symbols/support/jsonUtils","../symbols/support/typeUtils"],function(e,r,t,o,i,l,s,n,p,y){return function(e){function r(r){var t=e.call(this)||this;return t.description=null,t.label=null,t.symbol=null,t.type="simple",t}t(r,e),s=r,r.prototype.writeSymbolWebScene=function(e,r,t,o){p.writeTarget(e,r,t,o)},r.prototype.writeSymbol=function(e,r,t,o){p.writeTarget(e,r,t,o)},r.prototype.readSymbol=function(e,r,t){return p.read(e,r,t)},r.prototype.getSymbol=function(e,r){return this.symbol},r.prototype.getSymbols=function(){return this.symbol?[this.symbol]:[]},r.prototype.clone=function(){return new s({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:i.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};var s;return o([l.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([l.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([l.property({types:y.rendererTypes})],r.prototype,"symbol",void 0),o([l.writer("web-scene","symbol",{symbol:{types:y.rendererTypes3D}})],r.prototype,"writeSymbolWebScene",null),o([l.writer("symbol")],r.prototype,"writeSymbol",null),o([l.reader("symbol")],r.prototype,"readSymbol",null),o([l.enumeration.serializable()({simple:"simple"})],r.prototype,"type",void 0),r=s=o([l.subclass("esri.renderers.SimpleRenderer")],r)}(l.declared(s,n))});