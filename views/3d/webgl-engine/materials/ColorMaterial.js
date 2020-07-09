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

define(["require","exports","tslib","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","./renderers/MergedRenderer","../shaders/ColorMaterialTechnique"],(function(e,t,r,i,n,a,s,o,u,c){var h=function(e){function t(t,r){var i=e.call(this,r)||this;return i.supportsEdges=!0,i.techniqueConfig=new c.ColorMaterialTechniqueConfiguration,i.params=o.copyParameters(t,l),i}return r.__extends(t,e),t.prototype.setParameterValues=function(e){s.updateParameters(this.params,e)&&this.parametersChanged()},t.prototype.getParameters=function(){return this.params},t.prototype.getTechniqueConfig=function(e){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.params.cullFace,this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.polygonOffset=this.params.polygonOffset,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig},t.prototype.getPassParameters=function(){return this.params},t.prototype.intersect=function(e,t,r,i,n,a,s){o.intersectTriangleGeometry(e,t,i,n,a,void 0,s)},t.prototype.getGLMaterial=function(e){return 0===e.output||4===e.output?new p(e):void 0},t.prototype.createBufferWriter=function(){return new a.DefaultBufferWriter(a.PositionColorLayout)},t.prototype.createRenderer=function(e,t){return new u(e,t,this)},t}(n.Material),p=function(e){function t(t){var r=e.call(this,t)||this;return r.updateParameters(),r}return r.__extends(t,e),t.prototype.updateParameters=function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(c.ColorMaterialTechnique,this.material.getTechniqueConfig(this.output),this.technique)},t.prototype.beginSlot=function(e){return 4===this.output?3===e:e===(this.technique.configuration.transparent?this.technique.configuration.writeDepth?5:8:3)},t.prototype._updateOccludeeState=function(e){e.hasOccludees!==this.material.getParameters().sceneHasOcludees&&(this.material.setParameterValues({sceneHasOcludees:e.hasOccludees}),this.updateParameters())},t.prototype.ensureParameters=function(e){0===this.output&&this._updateOccludeeState(e)},t.prototype.bind=function(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters(),t)},t.prototype.getPipelineState=function(e,t){return t?this.technique.opaqueOccludeeState:this.technique.pipeline},t}(i.GLMaterial),l={color:[1,1,1,1],transparent:!1,writeDepth:!0,vertexColors:!1,polygonOffset:!1,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1};return h}));