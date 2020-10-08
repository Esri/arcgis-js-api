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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/Handles","../../../../core/maybe","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./Object3DVisualElement","../../support/stack","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryData","../../webgl-engine/materials/ColorMaterial"],(function(t,e,r,a,i,o,n,s,c,l,h,u,m,_){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RightAngleQuadVisualElement=void 0;var p=function(t){function e(e){var r=t.call(this,e.view)||this;return r._handles=new a,r._triangleCornerMaterial=null,r._maxSize=0,r._position=c.vec3f64.create(),r._up=c.vec3f64.create(),r._right=c.vec3f64.create(),r._transform=n.mat4f64.create(),r._color=[1,0,0,1],r.applyProps(e),r}return r.__extends(e,t),Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){this._color[0]=t[0],this._color[1]=t[1],this._color[2]=t[2],this._color[3]=t[3],this._updateMaterial()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"materialParameters",{get:function(){return{color:this._color,transparent:!0,writeDepth:!1,polygonOffset:!0}},enumerable:!1,configurable:!0}),e.prototype._updateMaterial=function(){this.attached&&this._triangleCornerMaterial.setParameterValues(this.materialParameters)},e.prototype.updateGeometry=function(t,e,r){this._maxSize=.33*Math.min(s.vec3.distance(e,t),s.vec3.distance(e,r)),s.vec3.subtract(this._up,e,t),s.vec3.normalize(this._up,this._up),s.vec3.subtract(this._right,r,e),s.vec3.normalize(this._right,this._right),s.vec3.copy(this._position,e),this.recreateGeometry()},e.prototype.createExternalResources=function(){var t=this;this._triangleCornerMaterial=new _(this.materialParameters,"triangle-corner"),this._handles.add(this.view.state.watch("camera",(function(){var e=t.object;i.isSome(e)&&(t._updateTransform(),e.objectTransformation=t._transform)})))},e.prototype.destroyExternalResources=function(){this._triangleCornerMaterial=null,this._handles.destroy(),this._handles=null},e.prototype.forEachExternalResource=function(t){t(this._triangleCornerMaterial)},e.prototype.createGeometries=function(t){var e=new u(this._quadGeometryData(this._position,this._up,this._right,1,this._position),"triangle-corner");this._updateTransform(),t.addGeometry(e,this._triangleCornerMaterial),t.objectTransformation=this._transform},e.prototype._updateTransform=function(){var t=32*this.view._stage.getCamera().computeScreenPixelSizeAt(this._position),e=Math.min(this._maxSize,t);o.mat4.identity(this._transform),o.mat4.translate(this._transform,this._transform,this._position),o.mat4.scale(this._transform,this._transform,[e,e,e])},e.prototype._quadGeometryData=function(t,e,r,a,i){var o=h.sv3d.get(),n=[],c=h.sv3d.get();s.vec3.scale(c,r,a);var l=h.sv3d.get();s.vec3.scale(l,e,-a);for(var u=0;u<4;++u)s.vec3.copy(o,t),s.vec3.subtract(o,o,i),1&u&&s.vec3.add(o,o,c),2&u&&s.vec3.add(o,o,l),n.push(o[0],o[1],o[2]);return new m.GeometryData({position:{size:3,data:n}},{position:new Uint32Array([0,1,2,1,2,3])})},e}(l.Object3DVisualElement);e.RightAngleQuadVisualElement=p}));