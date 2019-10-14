// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../geometry","../../../../Viewpoint","../../../../core/Accessor","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec2f64","../../viewpointUtils"],function(e,t,r,o,i,n,c,p,s,a,v){var u=a.vec2f64.create(),d=a.vec2f64.create();return function(e){function t(t){var r=e.call(this,t)||this;return r._previousCenter=a.vec2f64.create(),r.viewpoint=new n({targetGeometry:new i.Point,scale:0,rotation:0}),r}return r(t,e),t.prototype.begin=function(e,t){this.navigation.begin(),s.vec2.set(this._previousCenter,t.center.x,t.center.y)},t.prototype.update=function(e,t){var r=e.state,o=r.size,i=r.padding;s.vec2.set(u,t.center.x,t.center.y),v.getAnchor(d,o,i),e.viewpoint=v.rotateBy(this.viewpoint,e.content.viewpoint,v.angleBetween(d,this._previousCenter,u)),s.vec2.copy(this._previousCenter,u)},t.prototype.end=function(e,t){this.navigation.end()},o([p.property()],t.prototype,"viewpoint",void 0),o([p.property()],t.prototype,"navigation",void 0),t=o([p.subclass("esri.views.2d.actions.Rotate")],t)}(p.declared(c))});