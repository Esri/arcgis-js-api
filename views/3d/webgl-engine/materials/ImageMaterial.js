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

define(["require","exports","tslib","../lib/GLMaterialTexture","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","./renderers/MergedRenderer","../shaders/ImageMaterialTechnique"],(function(e,t,i,r,a,n,s,u,c,o){var h=function(e){function t(t,i){var r=e.call(this,i)||this;return r.supportsEdges=!0,r.techniqueConfig=new o.ImageMaterialTechniqueConfiguration,r.params=u.copyParameters(t,l),r}return i.__extends(t,e),t.prototype.setParameterValues=function(e){s.updateParameters(this.params,e)&&this.parametersChanged()},t.prototype.getParameters=function(){return this.params},t.prototype.getTechniqueConfig=function(e){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.params.cullFace,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig},t.prototype.intersect=function(e,t,i,r,a,n,s){u.intersectTriangleGeometry(e,t,r,a,n,void 0,s)},t.prototype.getGLMaterial=function(e){return 0===e.output||4===e.output?new p(e):void 0},t.prototype.createBufferWriter=function(){return new n.DefaultBufferWriter(n.PositionUVLayout)},t.prototype.createRenderer=function(e,t){return new c(e,t,this)},t}(a.Material),p=function(e){function t(t){var r=e.call(this,i.__assign(i.__assign({},t),t.material.getParameters()))||this;return r.updateParameters(),r}return i.__extends(t,e),t.prototype.updateParameters=function(){var e=this.material.getParameters();this.updateTexture(e.textureId),this.technique=this.techniqueRep.acquireAndReleaseExisting(o.ImageMaterialTechnique,this.material.getTechniqueConfig(this.output),this.technique)},t.prototype.beginSlot=function(e){return 4===this.output?3===e:e===(this.technique.configuration.transparent?this.technique.configuration.writeDepth?5:8:3)},t.prototype._updateOccludeeState=function(e){e.hasOccludees!==this.material.getParameters().sceneHasOcludees&&(this.material.setParameterValues({sceneHasOcludees:e.hasOccludees}),this.updateParameters())},t.prototype.ensureParameters=function(e){0===this.output&&this._updateOccludeeState(e)},t.prototype.bind=function(e,t){e.bindProgram(this.technique.program),this.bindTexture(e,this.technique.program),this.bindTextureScale(e,this.technique.program),this.technique.bindPass(e,this.material.getParameters(),t)},t.prototype.getPipelineState=function(e,t){return t?this.technique.opaqueOccludeeState:this.technique.pipeline},t}(r),l={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0};return h}));