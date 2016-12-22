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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","../../viewpointUtils","../../math/vec2"],function(t,i,e,n,o,a,r,s){var c=function(t){function i(i){t.call(this),this.viewpoint=r.create()}return e(i,t),i.prototype.pinchRotateZoom=function(t,i,e,n){var o=this;if(0!==e&&0!==n&&!this.navigation.interacting){this.navigation.begin();var a=0>e?.5:2,r=180*n/Math.PI,s=void 0;s=Math.abs(e)>Math.abs(n)?t.goTo(this._scaleAndRotateViewpoint(t,i.x,i.y,a),{}):t.goTo(this._scaleAndRotateViewpoint(t,i.x,i.y,a,r),{}),s.then(function(){o.navigation.end()})}},i.prototype.scroll=function(t,i){var e=this;if(!this.navigation.interacting){this.navigation.begin();var n=i.data.x,o=i.data.y,a=i.data.deltaY,r=void 0;if(0===a||a===-0)return void this.navigation.end();r=0>a?2:.5,t.goTo(this._scaleAndRotateViewpoint(t,n,o,r),{}).then(function(){e.navigation.end()})}},i.prototype.stepScreen=function(t,i,e){this.navigation.begin();var n=i.data;t.goTo(this._scaleAndRotateViewpoint(t,n.x,n.y,e),{}),this.navigation.end()},i.prototype._scaleAndRotateViewpoint=function(t,i,e,n,o){var a=s.create(),c=s.create();s.set(a,i,e),r.getPaddingScreenTranslation(c,t.size,t.padding),s.add(a,a,c);var p=t.animation?t.animation.target:t.viewpoint;return o?r.scaleAndRotateBy(this.viewpoint,p,n,o,a,t.size):r.scaleBy(this.viewpoint,p,n,a,t.size)},n([o.property()],i.prototype,"viewpoint",void 0),n([o.property()],i.prototype,"navigation",void 0),i=n([o.subclass("esri.views.2d.navigation.actions.Zoom")],i)}(o.declared(a));return c});