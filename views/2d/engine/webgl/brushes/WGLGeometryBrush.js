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

define(["require","exports","tslib","../../../../webgl","../definitions","./WGLBrush"],(function(e,t,i,n,r,a){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.prepareState=function(e,t,i){var n=e.context,r=i&&-1!==i.indexOf("id");n.setBlendingEnabled(!r),n.setBlendFunctionSeparate(1,771,1,771),n.setColorMask(!0,!0,!0,!0),n.setStencilWriteMask(0),n.setStencilTestEnabled(!0),n.setStencilFunction(514,t.stencilRef,255)},t.prototype.draw=function(e,t,i){var n=this;if(t.isReady&&t.hasData){t.commitChanges();var r=this.getGeometryType(),a=t.getDisplayList(),s=t.getGeometry(r);s&&a&&(e.timeline.begin(this.name),a.byType(r,(function(r){n.drawGeometry(e,t,r,s,i)})),e.timeline.end(this.name))}},t.prototype._getVAO=function(e,t,i,r){return r.vao||(r.vao=new n.VertexArrayObject(e,i,t,r.vertexBufferMap,r.indexBuffer)),r.vao},t.prototype._setSharedUniforms=function(e,t,i){e.setUniform1f("u_pixelRatio",t.pixelRatio),e.setUniformMatrix3fv("u_dvsMat3",i.transforms.dvs),e.setUniformMatrix3fv("u_displayViewMat3",t.state.displayViewMat3),e.setUniformMatrix4fv("u_insideEffectMat4",t.rendererInfo.insideEffect),e.setUniformMatrix4fv("u_outsideEffectMat4",t.rendererInfo.outsideEffect),e.setUniform1fv("u_insideOpacities",t.rendererInfo.insideOpacities),e.setUniform1fv("u_outsideOpacities",t.rendererInfo.outsideOpacities),e.setUniform1i("u_attributeTextureSize",t.attributeView.size),e.setUniform1i("u_attributeData0",r.TEXTURE_BINDING_ATTRIBUTE_DATA_0),e.setUniform1i("u_attributeData1",r.TEXTURE_BINDING_ATTRIBUTE_DATA_1),e.setUniform1i("u_attributeData2",r.TEXTURE_BINDING_ATTRIBUTE_DATA_2),e.setUniform1i("u_attributeData3",r.TEXTURE_BINDING_ATTRIBUTE_DATA_3)},t}(a.default);t.default=s}));