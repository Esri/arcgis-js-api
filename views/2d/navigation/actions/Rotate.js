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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/accessorSupport/decorators","../../viewpointUtils","../../libs/gl-matrix/vec2"],function(e,t,i,r,n,o,p,a){return function(e){function t(t){var i=e.call(this)||this;return i.animationTime=0,i.viewpoint=p.create(),i}return i(t,e),t.prototype.begin=function(e,t){this.navigation.begin(),this.previousCenter=t.center},t.prototype.update=function(e,t){var i=a.create();a.set(i,t.center.x+e.padding.left-e.padding.right,e.height-t.center.y+e.padding.top-e.padding.bottom);var r=a.create();a.set(r,this.previousCenter.x+e.padding.left-e.padding.right,e.height-this.previousCenter.y+e.padding.top-e.padding.bottom);var n=[e.state.paddedScreenCenter[0]+e.padding.left-e.padding.right,e.state.paddedScreenCenter[1]],o=p.angleBetween(n,i,r);e.viewpoint=p.rotateBy(this.viewpoint,e.content.viewpoint,o),this.previousCenter=t.center},t.prototype.end=function(e,t){this.navigation.end()},r([o.property()],t.prototype,"viewpoint",void 0),r([o.property()],t.prototype,"navigation",void 0),t=r([o.subclass("esri.views.2d.actions.Rotate")],t)}(o.declared(n))});