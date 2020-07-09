// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../geometry","../../../../Viewpoint","../../../../core/Accessor","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec2f64","../../viewpointUtils"],(function(e,t,i,o,r,n,c,s,a,p){var v=a.vec2f64.create(),d=a.vec2f64.create();return function(e){function t(t){var i=e.call(this,t)||this;return i._previousCenter=a.vec2f64.create(),i.viewpoint=new r({targetGeometry:new o.Point,scale:0,rotation:0}),i}return i.__extends(t,e),t.prototype.begin=function(e,t){this.navigation.begin(),s.vec2.set(this._previousCenter,t.center.x,t.center.y)},t.prototype.update=function(e,t){var i=e.state,o=i.size,r=i.padding;s.vec2.set(v,t.center.x,t.center.y),p.getAnchor(d,o,r),e.viewpoint=p.rotateBy(this.viewpoint,e.state.paddedViewState.viewpoint,p.angleBetween(d,this._previousCenter,v)),s.vec2.copy(this._previousCenter,v)},t.prototype.end=function(){this.navigation.end()},i.__decorate([c.property()],t.prototype,"viewpoint",void 0),i.__decorate([c.property()],t.prototype,"navigation",void 0),t=i.__decorate([c.subclass("esri.views.2d.actions.Rotate")],t)}(n)}));