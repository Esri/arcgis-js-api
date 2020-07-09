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

define(["require","exports","tslib","../lib/GLMaterial","./WaterTechnique","./internal/MaterialUtil"],(function(t,e,a,i,r,s){Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(e){var a=t.call(this,e)||this;return a.updateParameters(),a}return a.__extends(e,t),e.prototype.updateParameters=function(){this.params=s.copyParameters(this.material.getParameters()),this.technique=this.techniqueRep.acquireAndReleaseExisting(r.WaterTechnique,this.material.getTechniqueConfig(this.output),this.technique)},e.prototype.beginSlot=function(t){if(2===this.output)return 22===t;if(5===this.output)return null==t;var e=3;return this.params.transparent&&(e=this.params.writeDepth?5:8),t===e},e.prototype.setElapsedTimeUniform=function(t){var e=.001*this.material.animation.time;t.setUniform1f("timeElapsed",e*this.params.animationSpeed)},e.prototype._updateShadowState=function(t){t.shadowMappingEnabled!==this.params.receiveShadows&&(this.material.setParameterValues({receiveShadows:t.shadowMappingEnabled}),this.updateParameters())},e.prototype._updateSSRState=function(t){t.ssrEnabled!==this.params.ssrEnabled&&(this.material.setParameterValues({ssrEnabled:t.ssrEnabled}),this.updateParameters())},e.prototype.ensureResources=function(t){return this.technique.ensureResource(t)},e.prototype.ensureParameters=function(t){0===this.output&&(this._updateShadowState(t),this._updateSSRState(t))},e.prototype.bind=function(t,e){t.bindProgram(this.technique.program),this.technique.bindPass(t,this.params,e),2!==this.output&&0!==this.output||this.setElapsedTimeUniform(this.technique.program)},e}(i.GLMaterial);e.WaterGLMaterial=n}));