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

define(["require","exports","tslib","../../../../webgl","../definitions","./WGLBrush"],(function(e,t,i,r,n,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.prepareState=function(e,t,i){var r=e.context,n=i&&-1!==i.indexOf("id");r.setBlendingEnabled(!n),r.setBlendFunctionSeparate(1,771,1,771),r.setColorMask(!0,!0,!0,!0),r.setStencilWriteMask(0),r.setStencilTestEnabled(!0),r.setStencilFunction(514,t.stencilRef,255)},t.prototype.draw=function(e,t,i){var r=this;if(t.commitChanges(e),t.visible){var n=this.getGeometryType(),s=t.getDisplayList(),a=t.getGeometry(n);a&&s&&(e.timeline.begin(this.name),s.byType(n,(function(n){r.drawGeometry(e,t,n,a,i)})),e.timeline.end(this.name))}},t.prototype._getVAO=function(e,t,i,n){return n.vao||(n.vao=new r.VertexArrayObject(e,i,t,n.vertexBufferMap,n.indexBuffer)),n.vao},t.prototype._setSharedUniforms=function(e,t,i){e.setUniform1f("u_pixelRatio",t.pixelRatio),e.setUniformMatrix3fv("u_dvsMat3",i.transforms.dvs),e.setUniformMatrix3fv("u_displayViewMat3",t.state.displayViewMat3),e.setUniformMatrix4fv("u_insideEffectMat4",t.rendererInfo.insideEffect),e.setUniformMatrix4fv("u_outsideEffectMat4",t.rendererInfo.outsideEffect),e.setUniform1fv("u_insideOpacities",t.rendererInfo.insideOpacities),e.setUniform1fv("u_outsideOpacities",t.rendererInfo.outsideOpacities),e.setUniform1i("u_attributeTextureSize",t.attributeView.size),e.setUniform1i("u_attributeData0",n.TEXTURE_BINDING_ATTRIBUTE_DATA_0),e.setUniform1i("u_attributeData1",n.TEXTURE_BINDING_ATTRIBUTE_DATA_1),e.setUniform1i("u_attributeData2",n.TEXTURE_BINDING_ATTRIBUTE_DATA_2),e.setUniform1i("u_attributeData3",n.TEXTURE_BINDING_ATTRIBUTE_DATA_3)},t}(s.default);t.default=a}));