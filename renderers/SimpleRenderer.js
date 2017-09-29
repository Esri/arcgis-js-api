// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/lang","../symbols/support/jsonUtils","../symbols/support/typeUtils","./Renderer"],function(e,t,r,o,l,s,n,p,i){var y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.description=null,t.label=null,t.symbol=null,t.type="simple",t}return r(t,e),i=t,t.prototype.writeSymbol=function(e,t,r,o){t[r]=n.write(e,{},o)},t.prototype.readSymbol=function(e,t,r){return n.read(e,t,r)},t.prototype.getSymbol=function(e,t){return this.symbol},t.prototype.getSymbols=function(){return this.symbol?[this.symbol]:[]},t.prototype.clone=function(){return new i({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:s.clone(this.visualVariables),authoringInfo:s.clone(this.authoringInfo)})},o([l.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),o([l.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),o([l.property({types:p.types})],t.prototype,"symbol",void 0),o([l.writer("symbol")],t.prototype,"writeSymbol",null),o([l.reader("symbol")],t.prototype,"readSymbol",null),t=i=o([l.subclass("esri.renderers.SimpleRenderer")],t);var i}(l.declared(i));return y});