// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./gl-matrix"],function(t,r,n){var a=n.vec3d,i=n.mat4d,e=function(){function t(t,r,n,i,e,s,o,h,f,d,u){this.shaderTransformationDirty=!0,this.data=t.toRenderData(),this.componentOffsets=t.componentOffsets,this.boundingInfo=r,this.material=n,this.origin=null,this.center=a.create(),this.bsRadius=0,this.transformation=null,this.calculateShaderTransformation=e,i&&this.updateTransformation(i,s),this.castShadow=o,this.singleUse=h,this.name=f,this.uniqueName=d,this.idx=u,this.canBeMerged=!0,this.instanceParameters={}}return t.prototype.updateTransformation=function(t,r){this.transformation=t,this.shaderTransformationDirty=!0,this.bsRadius=this.getBoundingSphere(t,r,this.center)},t.prototype.shaderTransformationChanged=function(){this.shaderTransformationDirty=!0},t.prototype.getBoundingSphere=function(t,r,n){return r=r||i.maxScale(t),i.multiplyVec3(t,this.boundingInfo.getCenter(),n),this.boundingInfo.getBSRadius()*r},Object.defineProperty(t.prototype,"hasShaderTransformation",{get:function(){return!!this.calculateShaderTransformation},enumerable:!0,configurable:!0}),t.prototype.getShaderTransformation=function(){return this.calculateShaderTransformation?(this.shaderTransformationDirty&&(this.shaderTransformation||(this.shaderTransformation=i.create()),i.set(this.calculateShaderTransformation(this.transformation),this.shaderTransformation),this.shaderTransformationDirty=!1),this.shaderTransformation):this.transformation},t}();return e});