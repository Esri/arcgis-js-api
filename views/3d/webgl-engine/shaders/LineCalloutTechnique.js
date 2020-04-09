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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/attributes/VerticalOffset.glsl","../core/shaderLibrary/util/Camera.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../materials/internal/MaterialUtil","./LineCallout.glsl","./LineCallout.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState"],(function(e,r,t,i,a,n,o,l,s,d,p,c,u,f,h,b,g,m,v){Object.defineProperty(r,"__esModule",{value:!0});var S=function(r){function i(){return null!==r&&r.apply(this,arguments)||this}return t(i,r),i.prototype.initializeProgram=function(e){var r=i.shader.get(),t=this.configuration,a=r.build({occlusionTestEnabled:t.occlusionTestEnabled,verticalOffsetEnabled:t.verticalOffset,screenSizePerspectiveEnabled:t.screenSizePerspective,depthHudEnabled:t.depthHudEnabled,depthHudAlignStartEnabled:t.depthHudAlignStartEnabled,screenCenterOffsetUnitsEnabled:t.screenCenterOffsetUnitsEnabled,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,viewingMode:e.viewingMode});return new g(e.rctx,a.generateSource("vertex"),a.generateSource("fragment"),u.Default3D)},i.prototype.bindPass=function(e,r,t){b.LineCallout.bindUniforms(this.program,r,t),l.VerticalOffset.bindUniforms(this.program,r,t);var i=t.cameraAboveGround?1:-1;this.program.setUniform1i("hudVisibilityTexture",0),e.bindTexture(t.hudVisibilityTexture,0),this.program.setUniform1f("cameraGroundRelative",i),this.program.setUniform1f("polygonOffset",r.shaderPolygonOffset),this.program.setUniform4fv("viewport",t.viewport),this.program.setUniform1f("perDistancePixelRatio",Math.tan(t.fovY/2)/(t.viewport[2]/2)),this.program.setUniformMatrix4fv("viewNormal",t.viewInvTransp),this.program.setUniform2f("pixelToNDC",2/t.viewport[2],2/t.viewport[3]);var a=t.pixelRatio||1;this.program.setUniform1f("lineSize",Math.ceil(r.size)*a),f.bindScreenSizePerspective(r.screenSizePerspective,this.program)},i.prototype.bindDraw=function(e){o.Transform.bindUniforms(this.program,e),s.Camera.bindUniforms(this.program,e),n.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},i.prototype.initializePipeline=function(){return this.configuration.depthHudEnabled?v.makePipelineState({depthTest:{func:513},depthWrite:m.defaultDepthWriteParams}):v.makePipelineState({blending:v.separateBlendingParams(1,770,771,771),depthTest:{func:513},colorWrite:v.defaultColorWriteParams})},i.shader=new d.ReloadableShaderModule(h,"./LineCallout.glsl",e),i}(p.ShaderTechnique);r.LineCalloutTechnique=S;var E=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.occlusionTestEnabled=!0,r.verticalOffset=!1,r.screenSizePerspective=!1,r.depthHudEnabled=!1,r.depthHudAlignStartEnabled=!1,r.screenCenterOffsetUnitsEnabled=0,r.slicePlaneEnabled=!1,r}return t(r,e),i([c.parameter()],r.prototype,"occlusionTestEnabled",void 0),i([c.parameter()],r.prototype,"verticalOffset",void 0),i([c.parameter()],r.prototype,"screenSizePerspective",void 0),i([c.parameter()],r.prototype,"depthHudEnabled",void 0),i([c.parameter()],r.prototype,"depthHudAlignStartEnabled",void 0),i([c.parameter({count:2})],r.prototype,"screenCenterOffsetUnitsEnabled",void 0),i([c.parameter()],r.prototype,"slicePlaneEnabled",void 0),r}(c.ShaderTechniqueConfiguration);r.LineCalloutTechniqueConfiguration=E}));