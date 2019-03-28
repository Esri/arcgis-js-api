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

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/mathUtils","./ComponentUtils","./HighlightUtils"],function(t,n,i,r,e,a,o,s,h){return function(){function t(t,n,i,r,e,o,s,h,c,f,m){this.shaderTransformationDirty=!0,this.data=t.toRenderData(),this.componentOffsets=t.componentOffsets,this.boundingInfo=n,this.material=i,this.origin=null,this.center=a.vec3f64.create(),this.bsRadius=0,this.transformation=null,this.calculateShaderTransformation=e,r&&this.updateTransformation(r,o),this.castShadow=s,this.singleUse=h,this.name=c,this.uniqueName=f,this.idx=m,this.instanceParameters={}}return t.prototype.updateTransformation=function(t,n){this.transformation=t,this.shaderTransformationDirty=!0,this.bsRadius=this.getBoundingSphere(t,n,this.center)},t.prototype.shaderTransformationChanged=function(){this.shaderTransformationDirty=!0},t.prototype.getBoundingSphere=function(t,n,i){return n=n||o.maxScale(t),e.vec3.transformMat4(i,this.boundingInfo.getCenter(),t),this.boundingInfo.getBSRadius()*n},Object.defineProperty(t.prototype,"hasShaderTransformation",{get:function(){return!!this.calculateShaderTransformation},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"componentCount",{get:function(){return s.componentCount(this.componentOffsets)},enumerable:!0,configurable:!0}),t.prototype.getShaderTransformation=function(){return this.calculateShaderTransformation?(this.shaderTransformationDirty&&(this.shaderTransformation||(this.shaderTransformation=r.mat4f64.create()),i.mat4.copy(this.shaderTransformation,this.calculateShaderTransformation(this.transformation)),this.shaderTransformationDirty=!1),this.shaderTransformation):this.transformation},t.prototype.getIndices=function(t){return"indices"in this.data?this.data.indices[t]:null},t.prototype.getAttribute=function(t){return"vertexAttr"in this.data?this.data.vertexAttr[t]:null},t.prototype.addHighlight=function(t){var n=h.generateHighlightId(),i=this.instanceParameters;return i.componentHighlights=s.addHighlight(i.componentHighlights,null,t,n),n},t.prototype.removeHighlight=function(t){var n=this.instanceParameters;n.componentHighlights=s.removeHighlight(n.componentHighlights,t)},t}()});