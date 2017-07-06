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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","../../viewpointUtils","../../libs/gl-matrix/vec2"],function(e,t,r,o,i,n,p,a){var c=function(e){function t(t){var r=e.call(this)||this;return r.animationTime=0,r.viewpoint=p.create(),r}return r(t,e),t.prototype.begin=function(e,t){this.navigation.begin()},t.prototype.update=function(e,t){var r=t.pointers[0],o=a.create();o=a.set(o,r.currentEvent.x,e.height-r.currentEvent.y);var i=r.previousEvent,n=a.create();a.set(n,i.x,e.height-i.y);var c=e.state.paddedScreenCenter,s=p.angleBetween(c,o,n);e.viewpoint=p.rotateBy(this.viewpoint,e.content.viewpoint,s)},t.prototype.end=function(e,t){this.navigation.end()},t}(i.declared(n));return o([i.property()],c.prototype,"viewpoint",void 0),o([i.property()],c.prototype,"navigation",void 0),c=o([i.subclass("esri.views.2d.actions.Rotate")],c)});