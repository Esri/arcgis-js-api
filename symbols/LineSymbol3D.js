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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/Error","../core/lang","../core/accessorSupport/decorators","./LineSymbol3DLayer","./PathSymbol3DLayer","./Symbol3D","./TextSymbol3DLayer"],function(e,t,r,o,n,y,l,s,i,a,p,c){var u=n.ofType({base:null,key:"type",typeMap:{line:i,text:c,path:a}}),b=n.ofType({base:null,key:"type",typeMap:{line:i,path:a}});return function(e){function t(t){var r=e.call(this)||this;return r.symbolLayers=new u,r.type="line-3d",r}r(t,e),n=t,t.prototype.writeSymbolLayers=function(e,t,r,o){var n=e.filter(function(e){return"text"!==e.type});if(o&&o.messages&&n.length<e.length){var l=e.find(function(e){return"text"===e.type});o.messages.push(new y("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in LineSymbol3D",{symbolLayer:l}))}t[r]=n.map(function(e){return e.write({},o)}).toArray()},t.prototype.clone=function(){return new n({styleOrigin:l.clone(this.styleOrigin),symbolLayers:l.clone(this.symbolLayers),thumbnail:l.clone(this.thumbnail)})};var n;return o([s.property({type:u,json:{type:b}})],t.prototype,"symbolLayers",void 0),o([s.writer("web-scene","symbolLayers")],t.prototype,"writeSymbolLayers",null),o([s.enumeration.serializable()({LineSymbol3D:"line-3d"})],t.prototype,"type",void 0),t=n=o([s.subclass("esri.symbols.LineSymbol3D")],t)}(s.declared(p))});