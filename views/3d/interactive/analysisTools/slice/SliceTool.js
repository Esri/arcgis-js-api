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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/Accessor","../../../../../core/Handles","../../../../../core/accessorSupport/decorators","../../../lib/gl-matrix","../../../support/geometryUtils/boundedPlane","../../../support/geometryUtils/plane"],function(e,n,t,i,r,a,o,s,l,c){function p(e,n,t,i,r,a,o){return s.vec3d.cross(n,t,o.basis2),s.vec3d.cross(o.basis2,n,o.basis1),s.vec3d.normalize(o.basis1),s.vec3d.scale(o.basis1,r),s.vec3d.normalize(o.basis2),s.vec3d.scale(o.basis2,a),s.vec3d.set(n,o.origin),s.vec3d.scale(o.origin,-i),s.vec3d.add(o.origin,e),l.fromValues(o.origin,o.basis1,o.basis2,o)}function d(e,n,t,i){var r=s.vec3d.cross(n,t,s.vec3d.create());return s.vec3d.cross(r,n,r),c.fromPositionAndNormal(e,r,i)}function u(e){return"mouse"!==e.pointerType||0===e.button}var v=function(e){function n(n){var t=e.call(this)||this;return t._isPointerDown=!1,t._startPlane=c.create(),t._planeOrigin=s.vec3d.create(),t._planeNormal=s.vec3d.create(),t._planeDepth=0,t._dragPlane=c.create(),t}return t(n,e),n.prototype.initialize=function(){this._handles=new a,this._viewHandles=new a},Object.defineProperty(n.prototype,"plane",{set:function(e){this._set("plane",e),this.view.slicePlane=e},enumerable:!0,configurable:!0}),n.prototype.activate=function(){var e=this;this.plane=null,this._slicePlaneEnabled=!0;var n=this.view,t=s.vec3d.create(),i=s.vec3d.create(),r=s.vec3d.create(),a=s.vec3d.create();this._viewHandles.add([n.on("pointer-down",function(t){if(u(t)){var i=n.sceneIntersectionHelper.pickSelectorInScreen([t.x,n.height-t.y]),r=i.minResult;r.getIntersectionPoint(e._planeOrigin)&&(r.getTransformedNormal(e._planeNormal),s.vec3d.scale(e._planeNormal,-1),e._planeDepth=0,e.plane=e._createInitialPlane(e.plane||l.create()),l.toPlane(e.plane,e._startPlane),d(e._planeOrigin,e._planeNormal,i.getDirection(),e._dragPlane),e._isPointerDown=!0,t.stopPropagation())}}),n.on("pointer-drag",function(o){if(u(o)&&e._isPointerDown){if(n.sceneIntersectionHelper.getPickRay([o.x,n.height-o.y],t,i),s.vec3d.subtract(i,t,r),c.intersectRay(e._dragPlane,t,r,a)){e._planeDepth=-c.distance(e._startPlane,a);var l=s.vec3d.length(e.plane.basis1),d=s.vec3d.length(e.plane.basis2),v=e.view.renderCoordsHelper.worldUpAtPosition(e._planeOrigin,h);e.plane=p(e._planeOrigin,e._planeNormal,v,e._planeDepth,l,d,e.plane)}o.stopPropagation()}}),n.on("click",function(e){u(e)&&e.stopPropagation()}),n.on("drag",function(n){e._isPointerDown&&n.stopPropagation()}),n.on("pointer-up",function(n){e._isPointerDown&&(e._isPointerDown=!1,n.stopPropagation())})])},n.prototype.deactivate=function(){this.plane=null,this._slicePlaneEnabled=!1,this._handles.removeAll(),this._viewHandles.removeAll()},n.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this._viewHandles.destroy(),this._viewHandles=null},Object.defineProperty(n.prototype,"_slicePlaneEnabled",{set:function(e){this.view.allLayerViews.forEach(function(n){"slicePlaneEnabled"in n&&(n.slicePlaneEnabled=e)})},enumerable:!0,configurable:!0}),n.prototype._createInitialPlane=function(e){var n=this.view.renderCoordsHelper.worldUpAtPosition(this._planeOrigin,h),t=this.view,i=t._stage.getCamera(),r=.5*Math.min(t.width,t.height)*i.computePixelSizeAt(this._planeOrigin);return p(this._planeOrigin,this._planeNormal,n,this._planeDepth,r,r,e)},i([o.property({constructOnly:!0})],n.prototype,"view",void 0),i([o.property()],n.prototype,"plane",null),n=i([o.subclass("esri.views.3d.interactive.analysisTools.slice.SliceTool")],n)}(o.declared(r)),h=s.vec3d.create();return v});