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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../webgl","../definitions","./WGLBrush"],function(e,t,i,a,r,n){Object.defineProperty(t,"__esModule",{value:!0});var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.draw=function(t,i){var r=this;if(i.canDisplay){var e=this.getGeometryType(),a=i.getDisplayList(t.drawPhase);if(a){var n=i.getGeometry(e);n&&a.byType(e,function(e){r.drawGeometry(t,i,e,n)})}}},t.prototype._getVAO=function(e,t,i,r){return r.vao||(r.vao=new a.VertexArrayObject(e,i,t,r.vertexBufferMap,r.indexBuffer)),r.vao},t.prototype._setSharedUniforms=function(e,t,i){e.setUniform1f("u_pixelRatio",t.pixelRatio),e.setUniformMatrix3fv("u_dvsMat3",i.dvsMat3),e.setUniformMatrix3fv("u_displayViewMat3",t.state.displayViewMat3),e.setUniformMatrix4fv("u_insideEffectMat4",t.rendererInfo.insideEffect),e.setUniformMatrix4fv("u_outsideEffectMat4",t.rendererInfo.outsideEffect),e.setUniform1fv("u_insideOpacities",t.rendererInfo.insideOpacities),e.setUniform1fv("u_outsideOpacities",t.rendererInfo.outsideOpacities),e.setUniform1i("u_attributeTextureSize",t.attributeView.size),e.setUniform1i("u_attributeData0",r.TEXTURE_BINDING_ATTRIBUTE_DATA_0),e.setUniform1i("u_attributeData1",r.TEXTURE_BINDING_ATTRIBUTE_DATA_1),e.setUniform1i("u_attributeData2",r.TEXTURE_BINDING_ATTRIBUTE_DATA_2)},t}(n.default);t.default=f});