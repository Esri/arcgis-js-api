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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/assignHelper","../lib/GLMaterial","./WaterTechnique","./internal/MaterialUtil","./internal/waterMaterialUtils"],(function(e,t,a,r,i,n,s,o){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t){var a=e.call(this,t)||this;return a.updateParameters(),a}return a(t,e),t.prototype.updateParameters=function(){this.params=s.copyParameters(this.material.getParameters()),this.technique=this.techniqueRep.acquireAndReleaseExisting(n.WaterTechnique,this.material.getTechniqueConfig(this.output),this.technique)},t.prototype.beginSlot=function(e){if(2===this.output)return 22===e;if(5===this.output)return null==e;var t=3;return this.params.transparent&&(t=this.params.writeDepth?5:8),e===t},t.prototype.setElapsedTimeUniform=function(e){var t=.001*this.material.animation.time;e.setUniform1f("timeElapsed",t*this.params.animationSpeed)},t.prototype._updateShadowState=function(e){e.shadowMappingEnabled!==this.params.receiveShadows&&(this.material.setParameterValues({receiveShadows:e.shadowMappingEnabled}),this.updateParameters())},t.prototype.ensureResources=function(e){return o.waterTextureRepo.ready()||o.waterTextureRepo.loading()||o.waterTextureRepo.initialize(e),o.waterTextureRepo.ready()?2:1},t.prototype.ensureParameters=function(e){0===this.output&&this._updateShadowState(e)},t.prototype.bind=function(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.params),2!==this.output&&0!==this.output||(o.waterTextureRepo.bindRepo(e),this.setElapsedTimeUniform(this.technique.program))},t}(i.GLMaterial);t.WaterGLMaterial=p}));