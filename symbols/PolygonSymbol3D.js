// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/Error","../core/lang","../core/maybe","../core/accessorSupport/decorators","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./Symbol3D","./TextSymbol3DLayer","./WaterSymbol3DLayer"],function(e,r,o,t,l,y,n,s,a,i,m,b,p,c,u,L,f){var S=l.ofType({base:null,key:"type",typeMap:{extrude:i,fill:m,icon:b,line:p,object:c,text:L,water:f}}),d=l.ofType({base:null,key:"type",typeMap:{extrude:i,fill:m,icon:b,line:p,object:c,water:f}});return function(e){function r(r){var o=e.call(this)||this;return o.type="polygon-3d",o}o(r,e),l=r,r.prototype.writeSymbolLayers=function(e,r,o,t){var l=e.filter(function(e){return"text"!==e.type});if(t&&t.messages&&l.length<e.length){var n=e.find(function(e){return"text"===e.type});t.messages.push(new y("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:n}))}r[o]=l.map(function(e){return e.write({},t)}).toArray()},r.prototype.clone=function(){return new l({styleOrigin:n.clone(this.styleOrigin),symbolLayers:n.clone(this.symbolLayers),thumbnail:n.clone(this.thumbnail)})},r.fromJSON=function(e){var r=new l;if(r.read(e),2===r.symbolLayers.length&&"fill"===r.symbolLayers.getItemAt(0).type&&"line"===r.symbolLayers.getItemAt(1).type){var o=r.symbolLayers.getItemAt(0),t=r.symbolLayers.getItemAt(1);!t.enabled||e.symbolLayers&&e.symbolLayers[1]&&!1===e.symbolLayers[1].enable||(o.outline={size:t.size,color:s.isSome(t.material)?t.material.color:null}),r.symbolLayers.removeAt(1)}return r},r.fromSimpleFillSymbol=function(e){return new l({symbolLayers:[m.fromSimpleFillSymbol(e)]})};var l;return t([a.property({type:S,json:{type:d}})],r.prototype,"symbolLayers",void 0),t([a.writer("web-scene","symbolLayers")],r.prototype,"writeSymbolLayers",null),t([a.enumeration.serializable()({PolygonSymbol3D:"polygon-3d"})],r.prototype,"type",void 0),r=l=t([a.subclass("esri.symbols.PolygonSymbol3D")],r)}(a.declared(u))});