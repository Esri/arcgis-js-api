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

define(["require","exports","tslib","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/attributes/VerticalOffset.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../materials/internal/MaterialUtil","./LineCallout.glsl","./LineCallout.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,i,a,n,o,l,s,d,c,u,p,f,h,m){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.LineCalloutTechniqueConfiguration=r.LineCalloutTechnique=void 0;var b=function(r){function l(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(l,r),l.prototype.initializeProgram=function(e){var r=l.shader.get(),t=this.configuration,i=r.build({occlusionTestEnabled:t.occlusionTestEnabled,verticalOffsetEnabled:t.verticalOffset,screenSizePerspectiveEnabled:t.screenSizePerspective,depthHudEnabled:t.depthHudEnabled,depthHudAlignStartEnabled:t.depthHudAlignStartEnabled,screenCenterOffsetUnitsEnabled:t.screenCenterOffsetUnitsEnabled,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,viewingMode:e.viewingMode});return new f(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),d.Default3D)},l.prototype.bindPass=function(e,r,t){n.View.bindProjectionMatrix(this.program,t.camera.projectionMatrix),p.LineCallout.bindUniforms(this.program,r,t.camera.pixelRatio||1),a.VerticalOffset.bindUniforms(this.program,r,t),this.program.setUniform1i("hudVisibilityTexture",0),e.bindTexture(t.hudVisibilityTexture,0),this.program.setUniform1f("cameraGroundRelative",t.camera.aboveGround?1:-1),this.program.setUniform1f("polygonOffset",r.shaderPolygonOffset),n.View.bindViewport(this.program,t),this.program.setUniform1f("perDistancePixelRatio",Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2)),this.program.setUniformMatrix4fv("viewNormal",t.camera.viewInverseTransposeMatrix),this.program.setUniform2f("pixelToNDC",2/t.camera.fullViewport[2],2/t.camera.fullViewport[3]);var i=t.camera.pixelRatio||1;this.program.setUniform1f("lineSize",Math.ceil(r.size)*i),c.bindScreenSizePerspective(r.screenSizePerspective,this.program,"screenSizePerspectiveAlignment")},l.prototype.bindDraw=function(e){n.View.bindView(this.program,e),n.View.bindCamPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),i.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},l.prototype.initializePipeline=function(){return this.configuration.depthHudEnabled?m.makePipelineState({depthTest:{func:513},depthWrite:h.defaultDepthWriteParams}):m.makePipelineState({blending:m.separateBlendingParams(1,770,771,771),depthTest:{func:513},colorWrite:m.defaultColorWriteParams})},l.shader=new o.ReloadableShaderModule(u,(function(){return new Promise((function(r,t){e(["./LineCallout.glsl"],r,t)}))})),l}(l.ShaderTechnique);r.LineCalloutTechnique=b;var g=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.occlusionTestEnabled=!0,r.verticalOffset=!1,r.screenSizePerspective=!1,r.depthHudEnabled=!1,r.depthHudAlignStartEnabled=!1,r.screenCenterOffsetUnitsEnabled=0,r.slicePlaneEnabled=!1,r}return t.__extends(r,e),t.__decorate([s.parameter()],r.prototype,"occlusionTestEnabled",void 0),t.__decorate([s.parameter()],r.prototype,"verticalOffset",void 0),t.__decorate([s.parameter()],r.prototype,"screenSizePerspective",void 0),t.__decorate([s.parameter()],r.prototype,"depthHudEnabled",void 0),t.__decorate([s.parameter()],r.prototype,"depthHudAlignStartEnabled",void 0),t.__decorate([s.parameter({count:2})],r.prototype,"screenCenterOffsetUnitsEnabled",void 0),t.__decorate([s.parameter()],r.prototype,"slicePlaneEnabled",void 0),r}(s.ShaderTechniqueConfiguration);r.LineCalloutTechniqueConfiguration=g}));