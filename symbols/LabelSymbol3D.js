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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/lang","../core/accessorSupport/decorators","./Symbol3D","./TextSymbol3DLayer","./callouts/calloutUtils","./support/Symbol3DVerticalOffset"],function(t,e,o,r,l,s,i,p,a,n,c){var y=l.ofType({base:null,key:"type",typeMap:{text:a}});return function(t){function e(e){var o=t.call(this)||this;return o.verticalOffset=null,o.callout=null,o.styleOrigin=null,o.symbolLayers=new y,o.type="label-3d",o}return o(e,t),l=e,e.prototype.supportsCallout=function(){return!0},e.prototype.hasVisibleCallout=function(){return n.hasVisibleCallout(this)},e.prototype.hasVisibleVerticalOffset=function(){return n.hasVisibleVerticalOffset(this)},e.prototype.clone=function(){return new l({styleOrigin:s.clone(this.styleOrigin),symbolLayers:s.clone(this.symbolLayers),thumbnail:s.clone(this.thumbnail),callout:s.clone(this.callout),verticalOffset:s.clone(this.verticalOffset)})},r([i.property({type:c.default,json:{write:!0}})],e.prototype,"verticalOffset",void 0),r([i.property(n.calloutProperty)],e.prototype,"callout",void 0),r([i.property({json:{read:!1,write:!1}})],e.prototype,"styleOrigin",void 0),r([i.property({type:y})],e.prototype,"symbolLayers",void 0),r([i.property()],e.prototype,"type",void 0),e=l=r([i.subclass("esri.symbols.LabelSymbol3D")],e);var l}(i.declared(p))});