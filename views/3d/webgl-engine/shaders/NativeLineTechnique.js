// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../../../../core/maybe","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./NativeLine.glsl","../../../webgl/Program","../../../webgl/renderState"],function(e,t,i,r,p,o,a,l,n,s,u,d,h,c,f,g){Object.defineProperty(t,"__esModule",{value:!0});var b=function(t){function r(e,i){var r=t.call(this,e,i)||this;return r.stipplePattern=null,r.stippleTextureBind=null,r.stippleTextureRepository=e.stippleTextureRepository,r}return i(r,t),r.prototype.initializeProgram=function(e){var t=r.shader.get(),i=this.configuration,p=t.build({output:i.output,attributeColor:i.vertexColors,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,stippleEnabled:i.stippleEnabled,stippleOffColorEnabled:i.stippleOffColorEnabled,stippleUVMaxEnabled:!1,stippleIntegerRepeatsEnabled:i.stippleIntegerRepeatsEnabled});return new f(e.rctx,p.generateSource("vertex"),p.generateSource("fragment"),h.Default3D)},r.prototype.dispose=function(){t.prototype.dispose.call(this),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null},r.prototype.bindPass=function(e,t,i){if(this.stipplePattern!==t.stipplePattern){var r=t.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,r),this.stipplePattern=r}if(this.configuration.stippleEnabled){var p=o.isSome(this.stippleTextureBind)?this.stippleTextureBind(e,0)*i.pixelRatio:1;this.program.setUniform1i("stipplePatternTexture",0),this.program.setUniform1f("stipplePatternPixelSizeInv",1/p),this.program.setUniform2f("ndcToPixel",i.viewport[2]/2,i.viewport[3]/2)}if(0===this.configuration.output){if(this.program.setUniform4fv("constantColor",t.color),this.program.setUniform1f("alphaCoverage",Math.min(1,t.width*i.pixelRatio)),this.configuration.stippleOffColorEnabled){var a=o.expect(t.stippleOffColor);this.program.setUniform4f("stippleOffColor",a[0],a[1],a[2],a.length>3?a[3]:1)}}else n.OutputHighlight.bindOutputHighlight(e,this.program,i)},r.prototype.bindDraw=function(e){l.Transform.bindUniforms(this.program,e),a.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},r.prototype.initializePipeline=function(){var e=this.configuration;return 0===e.output?g.makePipelineState({blending:e.transparent||e.stippleEnabled?g.separateBlendingParams(770,1,771,771):null,depthTest:{func:513},depthWrite:g.defaultDepthWriteParams,colorWrite:g.defaultColorWriteParams}):g.makePipelineState({depthTest:{func:513},colorWrite:g.defaultColorWriteParams})},r.prototype.bindPipelineState=function(e){e.setPipelineState(this.pipeline)},r.shader=new s.ReloadableShaderModule(c,"./NativeLine.glsl",e),r}(u.ShaderTechnique);t.NativeLineTechnique=b;var m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.output=0,t.slicePlaneEnabled=!1,t.sliceHighlightDisabled=!1,t.vertexColors=!1,t.transparent=!1,t.stippleEnabled=!1,t.stippleOffColorEnabled=!1,t.stippleIntegerRepeatsEnabled=!1,t}return i(t,e),r([d.parameter({count:6})],t.prototype,"output",void 0),r([d.parameter()],t.prototype,"slicePlaneEnabled",void 0),r([d.parameter()],t.prototype,"sliceHighlightDisabled",void 0),r([d.parameter()],t.prototype,"vertexColors",void 0),r([d.parameter()],t.prototype,"transparent",void 0),r([d.parameter()],t.prototype,"stippleEnabled",void 0),r([d.parameter()],t.prototype,"stippleOffColorEnabled",void 0),r([d.parameter()],t.prototype,"stippleIntegerRepeatsEnabled",void 0),t}(d.ShaderTechniqueConfiguration);t.NativeLineTechniqueConfiguration=m});