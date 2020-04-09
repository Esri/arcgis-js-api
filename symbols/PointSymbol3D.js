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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/Error","../core/lang","../core/accessorSupport/decorators","./IconSymbol3DLayer","./ObjectSymbol3DLayer","./Symbol3D","./TextSymbol3DLayer","./callouts/calloutUtils","./support/Symbol3DVerticalOffset"],(function(e,t,o,r,l,n,s,i,y,a,c,p,u,b){var m=l.ofType({base:null,key:"type",typeMap:{icon:y,object:a,text:p}}),f=l.ofType({base:null,key:"type",typeMap:{icon:y,object:a}});return function(e){function t(t){var o=e.call(this,t)||this;return o.verticalOffset=null,o.callout=null,o.symbolLayers=new m,o.type="point-3d",o}var l;return o(t,e),l=t,t.prototype.writeSymbolLayers=function(e,t,o,r){var l=e.filter((function(e){return"text"!==e.type}));if(r&&r.messages&&l.length<e.length){var s=e.find((function(e){return"text"===e.type}));r.messages.push(new n("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:s}))}t[o]=l.map((function(e){return e.write({},r)})).toArray()},t.prototype.supportsCallout=function(){if((this.symbolLayers?this.symbolLayers.length:0)<1)return!1;for(var e=0,t=this.symbolLayers.items;e<t.length;e++){switch(t[e].type){case"icon":case"text":case"object":continue;default:return!1}}return!0},t.prototype.hasVisibleCallout=function(){return u.hasVisibleCallout(this)},t.prototype.hasVisibleVerticalOffset=function(){return u.hasVisibleVerticalOffset(this)},t.prototype.clone=function(){return new l({verticalOffset:s.clone(this.verticalOffset),callout:s.clone(this.callout),styleOrigin:s.clone(this.styleOrigin),symbolLayers:s.clone(this.symbolLayers),thumbnail:s.clone(this.thumbnail)})},t.fromSimpleMarkerSymbol=function(e){return new l({symbolLayers:[y.fromSimpleMarkerSymbol(e)]})},t.fromPictureMarkerSymbol=function(e){return new l({symbolLayers:[y.fromPictureMarkerSymbol(e)]})},t.fromCIMSymbol=function(e){return new l({symbolLayers:[y.fromCIMSymbol(e)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}})},t.fromTextSymbol=function(e){return new l({symbolLayers:[p.fromTextSymbol(e)]})},r([i.property({type:b.default,json:{write:!0}})],t.prototype,"verticalOffset",void 0),r([i.property(u.calloutProperty)],t.prototype,"callout",void 0),r([i.property({type:m,json:{type:f,origins:{"web-scene":{type:f}}}})],t.prototype,"symbolLayers",void 0),r([i.writer("web-scene","symbolLayers")],t.prototype,"writeSymbolLayers",null),r([i.enumeration.serializable()({PointSymbol3D:"point-3d"})],t.prototype,"type",void 0),t=l=r([i.subclass("esri.symbols.PointSymbol3D")],t)}(i.declared(c))}));