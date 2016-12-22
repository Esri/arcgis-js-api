// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","../../viewpointUtils","../../math/vec2"],function(e,t,r,o,n,i,p,c){var a=function(e){function t(t){e.call(this),this.viewpoint=p.create()}return r(t,e),t.prototype.begin=function(e,t){this.navigation.begin()},t.prototype.update=function(e,t){var r=c.create();r=c.set(r,t.currentEvent.x,e.height-t.currentEvent.y);var o=t.previousEvent,n=c.create();c.set(n,o.x,e.height-o.y);var i=e.state.paddedScreenCenter,a=p.angleBetween(i,r,n);e.viewpoint=p.rotateBy(this.viewpoint,e.content.viewpoint,a)},t.prototype.end=function(e,t){this.navigation.end()},o([n.property()],t.prototype,"viewpoint",void 0),o([n.property()],t.prototype,"navigation",void 0),t=o([n.subclass("esri.views.2d.actions.Rotate")],t)}(n.declared(i));return a});