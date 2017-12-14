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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","../../viewpointUtils","../../libs/gl-matrix/vec2"],function(e,t,i,n,r,o,p,a){var d=function(e){function t(t){var i=e.call(this)||this;return i.animationTime=0,i.viewpoint=p.create(),i}return i(t,e),t.prototype.begin=function(e,t){this.navigation.begin()},t.prototype.update=function(e,t){var i=t.pointers[0],n=a.create();a.set(n,i.currentEvent.x+e.padding.left-e.padding.right,e.height-i.currentEvent.y+e.padding.top-e.padding.bottom);var r=i.previousEvent,o=a.create();a.set(o,r.x+e.padding.left-e.padding.right,e.height-r.y+e.padding.top-e.padding.bottom);var d=[e.state.paddedScreenCenter[0]+e.padding.left-e.padding.right,e.state.paddedScreenCenter[1]],c=p.angleBetween(d,n,o);e.viewpoint=p.rotateBy(this.viewpoint,e.content.viewpoint,c)},t.prototype.end=function(e,t){this.navigation.end()},n([r.property()],t.prototype,"viewpoint",void 0),n([r.property()],t.prototype,"navigation",void 0),t=n([r.subclass("esri.views.2d.actions.Rotate")],t)}(r.declared(o));return d});