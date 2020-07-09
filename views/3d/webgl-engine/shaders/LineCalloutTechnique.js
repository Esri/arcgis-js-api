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

define(["require","exports","tslib","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/attributes/VerticalOffset.glsl","../core/shaderLibrary/util/Camera.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../materials/internal/MaterialUtil","./LineCallout.glsl","./LineCallout.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,i,n,a,o,l,s,d,c,p,u,f,h,m,b){Object.defineProperty(r,"__esModule",{value:!0});var g=function(r){function s(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(s,r),s.prototype.initializeProgram=function(e){var r=s.shader.get(),t=this.configuration,i=r.build({occlusionTestEnabled:t.occlusionTestEnabled,verticalOffsetEnabled:t.verticalOffset,screenSizePerspectiveEnabled:t.screenSizePerspective,depthHudEnabled:t.depthHudEnabled,depthHudAlignStartEnabled:t.depthHudAlignStartEnabled,screenCenterOffsetUnitsEnabled:t.screenCenterOffsetUnitsEnabled,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,viewingMode:e.viewingMode});return new h(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),c.Default3D)},s.prototype.bindPass=function(e,r,t){f.LineCallout.bindUniforms(this.program,r,t),a.VerticalOffset.bindUniforms(this.program,r,t);var i=t.cameraAboveGround?1:-1;this.program.setUniform1i("hudVisibilityTexture",0),e.bindTexture(t.hudVisibilityTexture,0),this.program.setUniform1f("cameraGroundRelative",i),this.program.setUniform1f("polygonOffset",r.shaderPolygonOffset),this.program.setUniform4fv("viewport",t.viewport),this.program.setUniform1f("perDistancePixelRatio",Math.tan(t.fovY/2)/(t.viewport[2]/2)),this.program.setUniformMatrix4fv("viewNormal",t.viewInvTransp),this.program.setUniform2f("pixelToNDC",2/t.viewport[2],2/t.viewport[3]);var n=t.pixelRatio||1;this.program.setUniform1f("lineSize",Math.ceil(r.size)*n),p.bindScreenSizePerspective(r.screenSizePerspective,this.program,"screenSizePerspectiveAlignment")},s.prototype.bindDraw=function(e){n.Transform.bindUniforms(this.program,e),o.Camera.bindUniforms(this.program,e),i.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},s.prototype.initializePipeline=function(){return this.configuration.depthHudEnabled?b.makePipelineState({depthTest:{func:513},depthWrite:m.defaultDepthWriteParams}):b.makePipelineState({blending:b.separateBlendingParams(1,770,771,771),depthTest:{func:513},colorWrite:b.defaultColorWriteParams})},s.shader=new l.ReloadableShaderModule(u,(function(){return new Promise((function(r,t){e(["./LineCallout.glsl"],r,t)}))})),s}(s.ShaderTechnique);r.LineCalloutTechnique=g;var v=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.occlusionTestEnabled=!0,r.verticalOffset=!1,r.screenSizePerspective=!1,r.depthHudEnabled=!1,r.depthHudAlignStartEnabled=!1,r.screenCenterOffsetUnitsEnabled=0,r.slicePlaneEnabled=!1,r}return t.__extends(r,e),t.__decorate([d.parameter()],r.prototype,"occlusionTestEnabled",void 0),t.__decorate([d.parameter()],r.prototype,"verticalOffset",void 0),t.__decorate([d.parameter()],r.prototype,"screenSizePerspective",void 0),t.__decorate([d.parameter()],r.prototype,"depthHudEnabled",void 0),t.__decorate([d.parameter()],r.prototype,"depthHudAlignStartEnabled",void 0),t.__decorate([d.parameter({count:2})],r.prototype,"screenCenterOffsetUnitsEnabled",void 0),t.__decorate([d.parameter()],r.prototype,"slicePlaneEnabled",void 0),r}(d.ShaderTechniqueConfiguration);r.LineCalloutTechniqueConfiguration=v}));