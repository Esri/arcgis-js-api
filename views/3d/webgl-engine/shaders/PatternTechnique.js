/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/shading/MultipassTerrainTest.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/OrderIndependentTransparency","../lib/Program","../lib/StencilUtils","../../../../chunks/Pattern.glsl","../../../webgl/renderState"],(function(e,t,r,a,i,o,n,s,l,p,c,u,d,h,g,m){"use strict";let f=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var a=t.prototype;return a.initializeProgram=function(e){const r=t.shader.get(),a=this.configuration,i=r.build({output:a.output,attributeColor:a.vertexColors,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,style:a.style,patternSpacing:a.patternSpacing,lineWidth:a.lineWidth,draped:a.draped,OITEnabled:0===a.transparencyPassType,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new d.Program(e.rctx,i,P)},a.bindPass=function(e,t){s.bindProjectionMatrix(this.program,t.camera.projectionMatrix),this.program.setUniform4fv("matColor",e.color),this.configuration.draped?(this.program.setUniform1f("worldToScreenRatio",1/t.screenToPCSRatio),this.program.setUniform1f("texelSize",1/t.camera.pixelRatio)):this.program.setUniform1f("worldToScreenPerDistanceRatio",1/t.camera.perScreenPixelRatio),4===this.configuration.output&&o.bindOutputHighlight(this.program,t),(1===this.configuration.output||t.multipassTerrainEnabled)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),n.bindMultipassTerrainTexture(this.program,t))},a.bindDraw=function(e){s.bindView(this.program,e),s.bindCameraPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),i.bindSliceUniformsWithOrigin(this.program,this.configuration,e),this.program.rebindTextures()},a.setPipelineState=function(e,t){const r=this.configuration,a=3===e,i=2===e;return m.makePipelineState({blending:0===r.output||7===r.output?r.transparent&&a?u.blendingDefault:u.OITBlending(e):null,culling:m.cullingParams(r.cullFace),depthTest:{func:u.OITDepthTest(e)},depthWrite:a?r.writeDepth&&m.defaultDepthWriteParams:u.OITDepthWrite(e),colorWrite:m.defaultColorWriteParams,stencilWrite:r.sceneHasOcludees?h.stencilWriteMaskOn:null,stencilTest:r.sceneHasOcludees?t?h.stencilToolMaskBaseParams:h.stencilBaseAllZerosParams:null,polygonOffset:a||i?r.polygonOffset&&b:u.getOITPolygonOffset(r.enableOffset)})},a.initializePipeline=function(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)},a.getPipelineState=function(e){return e?this._occludeePipelineState:this.pipeline},t}(p.ShaderTechnique);f.shader=new l.ReloadableShaderModule(g.PatternShader,(()=>new Promise((function(t,r){e(["./Pattern.glsl"],t,r)}))));const b={factor:1,units:1};let y=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=0,t.cullFace=0,t.slicePlaneEnabled=!1,t.vertexColors=!1,t.transparent=!0,t.polygonOffset=!1,t.writeDepth=!0,t.sceneHasOcludees=!1,t.enableOffset=!0,t.transparencyPassType=3,t.multipassTerrainEnabled=!1,t.cullAboveGround=!1,t}return r._inheritsLoose(t,e),t}(c.ShaderTechniqueConfiguration);a.__decorate([c.parameter({count:8})],y.prototype,"output",void 0),a.__decorate([c.parameter({count:3})],y.prototype,"cullFace",void 0),a.__decorate([c.parameter()],y.prototype,"slicePlaneEnabled",void 0),a.__decorate([c.parameter()],y.prototype,"vertexColors",void 0),a.__decorate([c.parameter()],y.prototype,"transparent",void 0),a.__decorate([c.parameter()],y.prototype,"polygonOffset",void 0),a.__decorate([c.parameter()],y.prototype,"writeDepth",void 0),a.__decorate([c.parameter()],y.prototype,"sceneHasOcludees",void 0),a.__decorate([c.parameter({count:6})],y.prototype,"style",void 0),a.__decorate([c.parameter()],y.prototype,"patternSpacing",void 0),a.__decorate([c.parameter()],y.prototype,"lineWidth",void 0),a.__decorate([c.parameter()],y.prototype,"enableOffset",void 0),a.__decorate([c.parameter()],y.prototype,"draped",void 0),a.__decorate([c.parameter({count:4})],y.prototype,"transparencyPassType",void 0),a.__decorate([c.parameter()],y.prototype,"multipassTerrainEnabled",void 0),a.__decorate([c.parameter()],y.prototype,"cullAboveGround",void 0);const P=new Map([["position",0],["color",3],["uvMapSpace",4],["boundingRect",5]]);t.PatternTechnique=f,t.PatternTechniqueConfiguration=y,t.patternVertexAttributeLocations=P,Object.defineProperty(t,"__esModule",{value:!0})}));
