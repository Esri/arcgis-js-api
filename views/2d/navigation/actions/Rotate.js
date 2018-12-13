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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/gl-matrix","../../viewpointUtils"],function(e,t,r,o,i,n,c,p){var s=c.vec2f64.create(),a=c.vec2f64.create();return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._previousCenter=c.vec2f64.create(),t.viewpoint=p.create(),t}return r(t,e),t.prototype.begin=function(e,t){this.navigation.begin(),c.vec2.set(this._previousCenter,t.center.x,t.center.y)},t.prototype.update=function(e,t){var r=e.state,o=r.size,i=r.padding;c.vec2.set(s,t.center.x,t.center.y),p.getAnchor(a,o,i),e.viewpoint=p.rotateBy(this.viewpoint,e.content.viewpoint,p.angleBetween(a,this._previousCenter,s)),c.vec2.copy(this._previousCenter,s)},t.prototype.end=function(e,t){this.navigation.end()},o([n.property()],t.prototype,"viewpoint",void 0),o([n.property()],t.prototype,"navigation",void 0),t=o([n.subclass("esri.views.2d.actions.Rotate")],t)}(n.declared(i))});