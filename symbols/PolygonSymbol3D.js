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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/Error","../core/lang","../core/accessorSupport/decorators","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./Symbol3D","./TextSymbol3DLayer"],function(e,r,o,t,y,l,n,s,a,i,m,b,p,c,u){var L=y.ofType({base:null,key:"type",typeMap:{extrude:a,fill:i,icon:m,line:b,object:p,text:u}});return function(e){function r(r){var o=e.call(this)||this;return o.type="polygon-3d",o}o(r,e),y=r,r.prototype.writeSymbolLayers=function(e,r,o,t){var y=e.filter(function(e){return"text"!==e.type});if(t&&t.messages&&y.length<e.length){var n=e.find(function(e){return"text"===e.type});t.messages.push(new l("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:n}))}r[o]=y.map(function(e){return e.write({},t)}).toArray()},r.prototype.clone=function(){return new y({styleOrigin:n.clone(this.styleOrigin),symbolLayers:n.clone(this.symbolLayers),thumbnail:n.clone(this.thumbnail)})},r.fromJSON=function(e){var r=new y;if(r.read(e),2===r.symbolLayers.length&&"fill"===r.symbolLayers.getItemAt(0).type&&"line"===r.symbolLayers.getItemAt(1).type){var o=r.symbolLayers.getItemAt(0),t=r.symbolLayers.getItemAt(1);!t.enabled||e.symbolLayers&&e.symbolLayers[1]&&!1===e.symbolLayers[1].enable||(o.outline={size:t.size,color:t.material.color}),r.symbolLayers.removeAt(1)}return r};var y;return t([s.property({type:L})],r.prototype,"symbolLayers",void 0),t([s.writer("web-scene","symbolLayers")],r.prototype,"writeSymbolLayers",null),t([s.enumeration.serializable()({PolygonSymbol3D:"polygon-3d"})],r.prototype,"type",void 0),r=y=t([s.subclass("esri.symbols.PolygonSymbol3D")],r)}(s.declared(c))});