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

define(["require","exports","tslib","../core/Collection","../core/Error","../core/lang","../core/maybe","../core/accessorSupport/decorators","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./Symbol3D","./TextSymbol3DLayer","./WaterSymbol3DLayer"],(function(e,t,o,r,l,y,n,s,a,i,m,b,p,c,u,L){"use strict";var f=r.ofType({base:null,key:"type",typeMap:{extrude:a,fill:i,icon:m,line:b,object:p,text:u,water:L}}),S=r.ofType({base:null,key:"type",typeMap:{extrude:a,fill:i,icon:m,line:b,object:p,water:L}});return function(e){function t(t){var o=e.call(this,t)||this;return o.type="polygon-3d",o}var r;return o.__extends(t,e),r=t,t.prototype.writeSymbolLayers=function(e,t,o,r){var y=e.filter((function(e){return"text"!==e.type}));if(r&&r.messages&&y.length<e.length){var n=e.find((function(e){return"text"===e.type}));r.messages.push(new l("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:n}))}t[o]=y.map((function(e){return e.write({},r)})).toArray()},t.prototype.clone=function(){return new r({styleOrigin:y.clone(this.styleOrigin),symbolLayers:y.clone(this.symbolLayers),thumbnail:y.clone(this.thumbnail)})},t.fromJSON=function(e){var t=new r;if(t.read(e),2===t.symbolLayers.length&&"fill"===t.symbolLayers.getItemAt(0).type&&"line"===t.symbolLayers.getItemAt(1).type){var o=t.symbolLayers.getItemAt(0),l=t.symbolLayers.getItemAt(1);!l.enabled||e.symbolLayers&&e.symbolLayers[1]&&!1===e.symbolLayers[1].enable||(o.outline={size:l.size,color:n.isSome(l.material)?l.material.color:null}),t.symbolLayers.removeAt(1)}return t},t.fromSimpleFillSymbol=function(e){return new r({symbolLayers:[i.fromSimpleFillSymbol(e)]})},o.__decorate([s.property({type:f,json:{type:S}})],t.prototype,"symbolLayers",void 0),o.__decorate([s.writer("web-scene","symbolLayers")],t.prototype,"writeSymbolLayers",null),o.__decorate([s.enumeration({PolygonSymbol3D:"polygon-3d"},{readOnly:!0})],t.prototype,"type",void 0),t=r=o.__decorate([s.subclass("esri.symbols.PolygonSymbol3D")],t)}(c)}));