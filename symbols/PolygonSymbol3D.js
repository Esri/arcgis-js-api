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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/Error","../core/lang","../core/accessorSupport/decorators","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./Symbol3D","./TextSymbol3DLayer"],function(e,t,o,r,y,l,n,s,a,i,p,b,m,c,u){var L=y.ofType({base:null,key:"type",typeMap:{extrude:a,fill:i,icon:p,line:b,object:m,text:u}}),f=y.ofType({base:null,key:"type",typeMap:{extrude:a,fill:i,icon:p,line:b,object:m}});return function(e){function t(t){var o=e.call(this)||this;return o.type="polygon-3d",o}o(t,e),y=t,t.prototype.writeSymbolLayers=function(e,t,o,r){var y=e.filter(function(e){return"text"!==e.type});if(r&&r.messages&&y.length<e.length){var n=e.find(function(e){return"text"===e.type});r.messages.push(new l("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:n}))}t[o]=y.map(function(e){return e.write({},r)}).toArray()},t.prototype.clone=function(){return new y({styleOrigin:n.clone(this.styleOrigin),symbolLayers:n.clone(this.symbolLayers),thumbnail:n.clone(this.thumbnail)})},t.fromJSON=function(e){var t=new y;if(t.read(e),2===t.symbolLayers.length&&"fill"===t.symbolLayers.getItemAt(0).type&&"line"===t.symbolLayers.getItemAt(1).type){var o=t.symbolLayers.getItemAt(0),r=t.symbolLayers.getItemAt(1);!r.enabled||e.symbolLayers&&e.symbolLayers[1]&&!1===e.symbolLayers[1].enable||(o.outline={size:r.size,color:r.material.color}),t.symbolLayers.removeAt(1)}return t};var y;return r([s.property({type:L,json:{type:f}})],t.prototype,"symbolLayers",void 0),r([s.writer("web-scene","symbolLayers")],t.prototype,"writeSymbolLayers",null),r([s.enumeration.serializable()({PolygonSymbol3D:"polygon-3d"})],t.prototype,"type",void 0),t=y=r([s.subclass("esri.symbols.PolygonSymbol3D")],t)}(s.declared(c))});