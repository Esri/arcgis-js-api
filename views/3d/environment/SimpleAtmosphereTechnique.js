/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../chunks/SimpleAtmosphere.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/Program","../../webgl/renderState"],(function(e,r,i,n,t,o,a,l,u,s,c){"use strict";let h=function(e){function r(){return e.apply(this,arguments)||this}i._inheritsLoose(r,e);var n=r.prototype;return n.initializeProgram=function(e){const i=r.shader.get(),n=this.configuration,t=i.build({geometry:n.geometry});return new s.Program(e.rctx,t,u.Default3D)},n.initializePipeline=function(){return 1===this.configuration.geometry?c.makePipelineState({blending:c.separateBlendingParams(770,1,771,771),culling:c.backFaceCullingParams,depthTest:{func:515},colorWrite:c.defaultColorWriteParams}):c.makePipelineState({blending:c.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:c.defaultColorWriteParams})},r}(a.ShaderTechnique);h.shader=new o.ReloadableShaderModule(t.SimpleAtmosphereShader,(()=>new Promise((function(r,i){e(["./SimpleAtmosphere.glsl"],r,i)}))));let g=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).geometry=0,r}return i._inheritsLoose(r,e),r}(l.ShaderTechniqueConfiguration);n.__decorate([l.parameter({count:3})],g.prototype,"geometry",void 0),r.SimpleAtmosphereTechnique=h,r.SimpleAtmosphereTechniqueConfiguration=g,Object.defineProperty(r,"__esModule",{value:!0})}));
