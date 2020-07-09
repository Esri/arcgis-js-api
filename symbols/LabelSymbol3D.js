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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/Collection","../core/lang","../core/accessorSupport/decorators","./Symbol3D","./TextSymbol3DLayer","./callouts/calloutUtils","./support/Symbol3DVerticalOffset"],(function(e,t,o,r,l,s,i,a,n,y){var c=r.ofType({base:null,key:"type",typeMap:{text:a}});return function(e){function t(t){var o=e.call(this,t)||this;return o.verticalOffset=null,o.callout=null,o.styleOrigin=null,o.symbolLayers=new c,o.type="label-3d",o}var r;return o.__extends(t,e),r=t,t.prototype.supportsCallout=function(){return!0},t.prototype.hasVisibleCallout=function(){return n.hasVisibleCallout(this)},t.prototype.hasVisibleVerticalOffset=function(){return n.hasVisibleVerticalOffset(this)},t.prototype.clone=function(){return new r({styleOrigin:l.clone(this.styleOrigin),symbolLayers:l.clone(this.symbolLayers),thumbnail:l.clone(this.thumbnail),callout:l.clone(this.callout),verticalOffset:l.clone(this.verticalOffset)})},t.fromTextSymbol=function(e){return new r({symbolLayers:[a.fromTextSymbol(e)]})},o.__decorate([s.property({type:y.default,json:{write:!0}})],t.prototype,"verticalOffset",void 0),o.__decorate([s.property(n.calloutProperty)],t.prototype,"callout",void 0),o.__decorate([s.property({json:{read:!1,write:!1}})],t.prototype,"styleOrigin",void 0),o.__decorate([s.property({type:c})],t.prototype,"symbolLayers",void 0),o.__decorate([s.enumeration({LabelSymbol3D:"label-3d"})],t.prototype,"type",void 0),t=r=o.__decorate([s.subclass("esri.symbols.LabelSymbol3D")],t)}(i)}));