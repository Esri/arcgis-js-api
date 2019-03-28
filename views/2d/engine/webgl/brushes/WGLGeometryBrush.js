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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","./WGLBrush","../../../../webgl/VertexArrayObject"],function(e,t,r,i,f){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.draw=function(t,r){var i=this;if(r.canDisplay){var e=this.getGeometryType(),f=r.getDisplayList(t.drawPhase),n=r.getGeometry(e);n&&f.byType(e,function(e){i.drawGeometry(t,r,e,n)})}},t.prototype._getVAO=function(e,t,r,i){return i.vao||(i.vao=new f(e,r,t,i.vertexBufferMap,i.indexBuffer)),i.vao},t.prototype._setSharedUniforms=function(e,t,r){e.setUniform1f("u_pixelRatio",t.pixelRatio),e.setUniformMatrix3fv("u_dvsMat3",r.dvsMat3),e.setUniformMatrix3fv("u_displayViewMat3",t.state.displayViewMat3),e.setUniformMatrix4fv("u_insideEffectMat4",t.rendererInfo.insideEffect),e.setUniformMatrix4fv("u_outsideEffectMat4",t.rendererInfo.outsideEffect)},t}(i.default);t.default=n});