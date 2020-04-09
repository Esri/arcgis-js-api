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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../core/libs/gl-matrix-2/factories/mat4f64","../../support/mathUtils","./ComponentUtils","./geometryDataUtils","./Object3DStateSet","./Util"],(function(t,r,n,e,i,a,o,s,h,m,c,f,u){return function(){function t(t,r,n,e,i,a,s){this.uniqueName=null,this.shaderTransformationDirty=!0,this.data=t.toRenderData(),this.componentOffsets=t.componentOffsets,this.boundingInfo=r,this.material=n,this.origin=null,this.center=o.vec3f64.create(),this.bsRadius=0,this.transformation=null,this.calculateShaderTransformation=i,e&&this.updateTransformation(e,a),this.castShadow=s,this.instanceParameters={}}return t.prototype.updateTransformation=function(t,r){this.transformation=t,this.shaderTransformationDirty=!0,this.bsRadius=this.getBoundingSphere(t,r,this.center)},t.prototype.shaderTransformationChanged=function(){this.shaderTransformationDirty=!0},t.prototype.getBoundingSphere=function(t,r,n){return r=r||h.maxScale(t),a.vec3.transformMat4(n,this.boundingInfo.getCenter(),t),this.boundingInfo.getBSRadius()*r},Object.defineProperty(t.prototype,"hasShaderTransformation",{get:function(){return!!this.calculateShaderTransformation},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"componentCount",{get:function(){return m.componentCount(this.componentOffsets)},enumerable:!0,configurable:!0}),t.prototype.getShaderTransformation=function(){return this.calculateShaderTransformation?(this.shaderTransformationDirty&&(this.shaderTransformation||(this.shaderTransformation=i.mat4f64.create()),e.mat4.copy(this.shaderTransformation,this.calculateShaderTransformation(n.unwrapOr(this.transformation,s.IDENTITY))),this.shaderTransformationDirty=!1),this.shaderTransformation):n.unwrapOr(this.transformation,s.IDENTITY)},t.prototype.computeAttachmentOrigin=function(t){if(this.material.computeAttachmentOrigin)return!!this.material.computeAttachmentOrigin(this,t)&&(n.isSome(this.transformation)&&a.vec3.transformMat4(t,t,this.transformation),!0);var r=this.getIndices(u.VertexAttrConstants.POSITION),e=this.getAttribute(u.VertexAttrConstants.POSITION);return!!c.computeAttachmentOriginTriangles(e,r,t)&&(n.isSome(this.transformation)&&a.vec3.transformMat4(t,t,this.transformation),!0)},t.prototype.getIndices=function(t){return"indices"in this.data?this.data.indices[t]:null},t.prototype.getAttribute=function(t){return"vertexAttr"in this.data?this.data.vertexAttr[t]:null},t.prototype.addHighlight=function(){var t=f.generateObject3DStateId(0),r=this.instanceParameters;return r.componentHighlights=m.addHighlight(r.componentHighlights,null,t),t},t.prototype.removeHighlight=function(t){var r=this.instanceParameters;r.componentHighlights=m.removeHighlight(r.componentHighlights,t)},t}()}));