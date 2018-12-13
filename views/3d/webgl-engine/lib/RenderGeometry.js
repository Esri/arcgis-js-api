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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","../../support/mathUtils"],function(t,r,a,n){return function(){function t(t,r,n,i,s,e,o,h,f,m,u){this.shaderTransformationDirty=!0,this.data=t.toRenderData(),this.componentOffsets=t.componentOffsets,this.boundingInfo=r,this.material=n,this.origin=null,this.center=a.vec3f64.create(),this.bsRadius=0,this.transformation=null,this.calculateShaderTransformation=s,i&&this.updateTransformation(i,e),this.castShadow=o,this.singleUse=h,this.name=f,this.uniqueName=m,this.idx=u,this.canBeMerged=!0,this.instanceParameters={}}return t.prototype.updateTransformation=function(t,r){this.transformation=t,this.shaderTransformationDirty=!0,this.bsRadius=this.getBoundingSphere(t,r,this.center)},t.prototype.shaderTransformationChanged=function(){this.shaderTransformationDirty=!0},t.prototype.getBoundingSphere=function(t,r,i){return r=r||n.maxScale(t),a.vec3.transformMat4(i,this.boundingInfo.getCenter(),t),this.boundingInfo.getBSRadius()*r},Object.defineProperty(t.prototype,"hasShaderTransformation",{get:function(){return!!this.calculateShaderTransformation},enumerable:!0,configurable:!0}),t.prototype.getShaderTransformation=function(){return this.calculateShaderTransformation?(this.shaderTransformationDirty&&(this.shaderTransformation||(this.shaderTransformation=a.mat4f64.create()),a.mat4.copy(this.shaderTransformation,this.calculateShaderTransformation(this.transformation)),this.shaderTransformationDirty=!1),this.shaderTransformation):this.transformation},t}()});