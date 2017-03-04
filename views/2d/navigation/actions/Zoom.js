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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","../../viewpointUtils","../../math/vec2"],function(t,e,o,i,n,a,r,s){var c=.6,p=function(t){function e(e){var o=t.call(this)||this;return o._canZoom=!0,o.viewpoint=r.create(),o}return o(e,t),e.prototype.pinchRotateZoom=function(t,e,o,i){t.state.viewpoint=this._scaleAndRotateViewpoint(t,e.x,e.y,o,i)},e.prototype.scroll=function(t,e){var o=this;this.navigation.begin();var i=e.data.x,n=e.data.y,a=e.data.deltaY;if(0===a||a===-0)return void this.navigation.end();var r=this._canZoomIn(t),p=this._canZoomOut(t),v=Math.pow(c,1/60*a);if(v>1&&!r||1>=v&&!p)return void this.navigation.end();if(t.constraints.snapToZoom){if(this._canZoom){this._canZoom=!1;var d=0>a?2:.5;t.goTo(this._scaleAndRotateViewpoint(t,i,n,d),{}).then(function(){o._canZoom=!0})}}else{var u=s.create();s.set(u,i,n),t.state.viewpoint=this._scaleAndRotateViewpoint(t,i,n,v)}},e.prototype.stepScreen=function(t,e,o){this.navigation.begin();var i=e.data;t.goTo(this._scaleAndRotateViewpoint(t,i.x,i.y,o),{}),this.navigation.end()},e.prototype._canZoomIn=function(t){var e=t.scale,o=t.constraints.effectiveMaxScale;return 0===o||e>o},e.prototype._canZoomOut=function(t){var e=t.scale,o=t.constraints.effectiveMinScale;return 0===o||o>e},e.prototype._scaleAndRotateViewpoint=function(t,e,o,i,n){var a=this._canZoomIn(t),c=this._canZoomOut(t),p=t.animation?t.animation.target:t.viewpoint;if(i>1&&!a||1>=i&&!c)return p;var v=s.create(),d=s.create();return s.set(v,e,o),r.getPaddingScreenTranslation(d,t.size,t.padding),s.add(v,v,d),n?r.scaleAndRotateBy(this.viewpoint,t.viewpoint,i,n,v,t.size):r.scaleBy(this.viewpoint,p,i,v,t.size)},e}(n.declared(a));return i([n.property()],p.prototype,"viewpoint",void 0),i([n.property()],p.prototype,"navigation",void 0),p=i([n.subclass("esri.views.2d.navigation.actions.Zoom")],p)});