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

define(["require","exports","tslib","../core/Collection","../core/Error","../core/lang","../core/accessorSupport/decorators","./IconSymbol3DLayer","./ObjectSymbol3DLayer","./Symbol3D","./TextSymbol3DLayer","./callouts/calloutUtils","./support/Symbol3DVerticalOffset"],(function(e,t,o,r,l,n,s,i,y,a,c,u,p){"use strict";var b=r.ofType({base:null,key:"type",typeMap:{icon:i,object:y,text:c}}),m=r.ofType({base:null,key:"type",typeMap:{icon:i,object:y}});return function(e){function t(t){var o=e.call(this,t)||this;return o.verticalOffset=null,o.callout=null,o.symbolLayers=new b,o.type="point-3d",o}var r;return o.__extends(t,e),r=t,t.prototype.writeSymbolLayers=function(e,t,o,r){var n=e.filter((function(e){return"text"!==e.type}));if(r&&r.messages&&n.length<e.length){var s=e.find((function(e){return"text"===e.type}));r.messages.push(new l("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:s}))}t[o]=n.map((function(e){return e.write({},r)})).toArray()},t.prototype.supportsCallout=function(){if((this.symbolLayers?this.symbolLayers.length:0)<1)return!1;for(var e=0,t=this.symbolLayers.items;e<t.length;e++){switch(t[e].type){case"icon":case"text":case"object":continue;default:return!1}}return!0},t.prototype.hasVisibleCallout=function(){return u.hasVisibleCallout(this)},t.prototype.hasVisibleVerticalOffset=function(){return u.hasVisibleVerticalOffset(this)},t.prototype.clone=function(){return new r({verticalOffset:n.clone(this.verticalOffset),callout:n.clone(this.callout),styleOrigin:n.clone(this.styleOrigin),symbolLayers:n.clone(this.symbolLayers),thumbnail:n.clone(this.thumbnail)})},t.fromSimpleMarkerSymbol=function(e){return new r({symbolLayers:[i.fromSimpleMarkerSymbol(e)]})},t.fromPictureMarkerSymbol=function(e){return new r({symbolLayers:[i.fromPictureMarkerSymbol(e)]})},t.fromCIMSymbol=function(e){return new r({symbolLayers:[i.fromCIMSymbol(e)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}})},t.fromTextSymbol=function(e){return new r({symbolLayers:[c.fromTextSymbol(e)]})},o.__decorate([s.property({type:p.default,json:{write:!0}})],t.prototype,"verticalOffset",void 0),o.__decorate([s.property(u.calloutProperty)],t.prototype,"callout",void 0),o.__decorate([s.property({type:b,json:{type:m,origins:{"web-scene":{type:m}}}})],t.prototype,"symbolLayers",void 0),o.__decorate([s.writer("web-scene","symbolLayers")],t.prototype,"writeSymbolLayers",null),o.__decorate([s.enumeration({PointSymbol3D:"point-3d"},{readOnly:!0})],t.prototype,"type",void 0),t=r=o.__decorate([s.subclass("esri.symbols.PointSymbol3D")],t)}(a)}));