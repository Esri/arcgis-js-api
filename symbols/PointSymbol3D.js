// COPYRIGHT © 2017 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/Collection","./Symbol3D","./IconSymbol3DLayer","./ObjectSymbol3DLayer","./TextSymbol3DLayer","./support/Symbol3DVerticalOffset","./callouts/calloutUtils","../core/accessorSupport/decorators"],function(t,e,o,r,l,s,i,a,c,n,p,y,u){var b=s.ofType({base:null,key:"type",typeMap:{icon:a,object:c,text:n}}),f=function(t){function e(e){var o=t.call(this)||this;return o.verticalOffset=null,o.callout=null,o.symbolLayers=new b,o.type="point-3d",o}return o(e,t),s=e,e.prototype.supportsCallout=function(){var t=this.symbolLayers?this.symbolLayers.length:0;if(1!==t)return!1;var e=this.symbolLayers.getItemAt(0);switch(e.type){case"icon":case"text":case"object":return!0}return!1},e.prototype.hasVisibleCallout=function(){return y.hasVisibleCallout(this)},e.prototype.hasVisibleVerticalOffset=function(){return y.hasVisibleVerticalOffset(this)},e.prototype.clone=function(){return new s({verticalOffset:l.clone(this.verticalOffset),callout:l.clone(this.callout),styleOrigin:l.clone(this.styleOrigin),symbolLayers:l.clone(this.symbolLayers),thumbnail:l.clone(this.thumbnail)})},r([u.property({type:p["default"],json:{write:!0}})],e.prototype,"verticalOffset",void 0),r([u.property(y.calloutProperty)],e.prototype,"callout",void 0),r([u.property({type:b})],e.prototype,"symbolLayers",void 0),r([u.property()],e.prototype,"type",void 0),e=s=r([u.subclass("esri.symbols.PointSymbol3D")],e);var s}(u.declared(i));return f});