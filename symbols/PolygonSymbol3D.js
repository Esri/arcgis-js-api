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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/Error","../core/lang","../core/accessorSupport/decorators","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./Symbol3D","./TextSymbol3DLayer"],function(e,r,t,o,y,l,s,n,a,i,p,m,b,c,u){var L=y.ofType({base:null,key:"type",typeMap:{extrude:a,fill:i,icon:p,line:m,object:b,text:u}});return function(e){function r(r){var t=e.call(this)||this;return t.type="polygon-3d",t}t(r,e),y=r,r.prototype.writeSymbolLayers=function(e,r,t,o){var y=e.filter(function(e){return"text"!==e.type});if(o&&o.messages&&y.length<e.length){var s=e.find(function(e){return"text"===e.type});o.messages.push(new l("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:s}))}r[t]=y.map(function(e){return e.write({},o)}).toArray()},r.prototype.clone=function(){return new y({styleOrigin:s.clone(this.styleOrigin),symbolLayers:s.clone(this.symbolLayers),thumbnail:s.clone(this.thumbnail)})},r.fromJSON=function(e){var r=new y;if(r.read(e),2===r.symbolLayers.length&&"fill"===r.symbolLayers.getItemAt(0).type&&"line"===r.symbolLayers.getItemAt(1).type){var t=r.symbolLayers.getItemAt(0),o=r.symbolLayers.getItemAt(1);!o.enabled||e.symbolLayers&&e.symbolLayers[1]&&!1===e.symbolLayers[1].enable||(t.outline={size:o.size,color:o.material.color}),r.symbolLayers.removeAt(1)}return r};var y;return o([n.property({type:L})],r.prototype,"symbolLayers",void 0),o([n.writer("web-scene","symbolLayers")],r.prototype,"writeSymbolLayers",null),o([n.property()],r.prototype,"type",void 0),r=y=o([n.subclass("esri.symbols.PolygonSymbol3D")],r)}(n.declared(c))});