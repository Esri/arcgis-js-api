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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/lang","../core/accessorSupport/decorators","./Symbol3D","./TextSymbol3DLayer","./callouts/calloutUtils","./support/Symbol3DVerticalOffset"],function(e,t,o,l,r,s,i,a,p,n,c){var y=r.ofType({base:null,key:"type",typeMap:{text:p}});return function(e){function t(t){var o=e.call(this)||this;return o.verticalOffset=null,o.callout=null,o.styleOrigin=null,o.symbolLayers=new y,o.type="label-3d",o}o(t,e),r=t,t.prototype.supportsCallout=function(){return!0},t.prototype.hasVisibleCallout=function(){return n.hasVisibleCallout(this)},t.prototype.hasVisibleVerticalOffset=function(){return n.hasVisibleVerticalOffset(this)},t.prototype.clone=function(){return new r({styleOrigin:s.clone(this.styleOrigin),symbolLayers:s.clone(this.symbolLayers),thumbnail:s.clone(this.thumbnail),callout:s.clone(this.callout),verticalOffset:s.clone(this.verticalOffset)})};var r;return l([i.property({type:c.default,json:{write:!0}})],t.prototype,"verticalOffset",void 0),l([i.property(n.calloutProperty)],t.prototype,"callout",void 0),l([i.property({json:{read:!1,write:!1}})],t.prototype,"styleOrigin",void 0),l([i.property({type:y})],t.prototype,"symbolLayers",void 0),l([i.enumeration.serializable()({LabelSymbol3D:"label-3d"})],t.prototype,"type",void 0),t=r=l([i.subclass("esri.symbols.LabelSymbol3D")],t)}(i.declared(a))});