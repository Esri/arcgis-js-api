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

define(["require","exports","tslib","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","../shaders/PatternTechnique"],(function(e,t,i,n,r,a,s,u,o){"use strict";var c=function(e){function t(t,i){var n=e.call(this,i)||this;return n.supportsEdges=!0,n.techniqueConfig=new o.PatternTechniqueConfiguration,n.params=u.copyParameters(t,p),n}return i.__extends(t,e),t.prototype.setParameterValues=function(e){s.updateParameters(this.params,e)&&this.parametersChanged()},t.prototype.getParameters=function(){return this.params},t.prototype.getTechniqueConfig=function(e){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.params.cullFace,this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.polygonOffset=this.params.polygonOffset,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.style=this.params.style,this.techniqueConfig.patternSpacing=this.params.patternSpacing,this.techniqueConfig.lineWidth=this.params.lineWidth,this.techniqueConfig.draped=this.params.draped,this.techniqueConfig},t.prototype.getPassParameters=function(){return this.params},t.prototype.intersect=function(e,t,i,n,r,a,s){u.intersectTriangleGeometry(e,t,n,r,a,void 0,s)},t.prototype.getGLMaterial=function(e){return 0===e.output||4===e.output?new h(e):void 0},t.prototype.createBufferWriter=function(){return new a.DefaultBufferWriter(a.PositionColorMapSpaceUVBoundsLayout)},t}(r.Material),h=function(e){function t(t){var i=e.call(this,t)||this;return i.updateParameters(),i}return i.__extends(t,e),t.prototype.updateParameters=function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(o.PatternTechnique,this.material.getTechniqueConfig(this.output),this.technique)},t.prototype.beginSlot=function(e){return 4===this.output?3===e:e===(this.technique.configuration.transparent?this.technique.configuration.writeDepth?5:8:3)},t.prototype._updateOccludeeState=function(e){e.hasOccludees!==this.material.getParameters().sceneHasOcludees&&(this.material.setParameterValues({sceneHasOcludees:e.hasOccludees}),this.updateParameters())},t.prototype.ensureParameters=function(e){0===this.output&&this._updateOccludeeState(e)},t.prototype.bind=function(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters(),t)},t.prototype.getPipelineState=function(e,t){return t?this.technique.opaqueOccludeeState:this.technique.pipeline},t}(n.GLMaterial),p={color:[1,1,1,1],writeDepth:!0,vertexColors:!1,polygonOffset:!1,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,style:2,patternSpacing:10,lineWidth:1,draped:!0};return c}));