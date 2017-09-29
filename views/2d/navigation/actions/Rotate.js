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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","../../viewpointUtils","../../libs/gl-matrix/vec2"],function(e,t,r,i,n,o,p,a){var c=function(e){function t(t){var r=e.call(this)||this;return r.animationTime=0,r.viewpoint=p.create(),r}return r(t,e),t.prototype.begin=function(e,t){this.navigation.begin()},t.prototype.update=function(e,t){var r=t.pointers[0],i=a.create();a.set(i,r.currentEvent.x+e.padding.left,e.height-r.currentEvent.y+e.padding.top);var n=r.previousEvent,o=a.create();a.set(o,n.x+e.padding.left,e.height-n.y+e.padding.top);var c=e.state.paddedScreenCenter,s=p.angleBetween(c,i,o);e.viewpoint=p.rotateBy(this.viewpoint,e.content.viewpoint,s)},t.prototype.end=function(e,t){this.navigation.end()},i([n.property()],t.prototype,"viewpoint",void 0),i([n.property()],t.prototype,"navigation",void 0),t=i([n.subclass("esri.views.2d.actions.Rotate")],t)}(n.declared(o));return c});