/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/mat4","../../../chunks/mat4f64","../../../chunks/Stars.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/Program","../../webgl/renderState"],(function(e,r,t,i,n,a,o,l,s,c,u){"use strict";let h=function(e){function r(){return e.apply(this,arguments)||this}t._inheritsLoose(r,e);var n=r.prototype;return n.initializeProgram=function(e){const t=r.shader.get().build();return new c.Program(e.rctx,t,s.Default3D)},n.initializePipeline=function(){return u.makePipelineState({blending:u.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:u.defaultColorWriteParams})},n.bindPass=function(e){const r=this.makeInfiniteProjectionMatrix(e.camera.projectionMatrix,e.camera.near,m);i.multiply(r,r,e.camera.viewMatrix),i.multiply(r,r,e.modelMatrix),this.program.setUniformMatrix4fv("transform",r),this.program.setUniform4fv("viewport",e.camera.fullViewport),this.program.setUniform1f("pixelRatio",e.camera.pixelRatio)},n.makeInfiniteProjectionMatrix=function(e,r,t){const n=24e-8;return i.copy(t,e),t[10]=n-1,t[11]=-1,t[14]=(n-2)*r,t},r}(l.ShaderTechnique);h.shader=new o.ReloadableShaderModule(a.StarsShader,(()=>new Promise((function(r,t){e(["./Stars.glsl"],r,t)}))));const m=n.create();r.StarsTechnique=h,Object.defineProperty(r,"__esModule",{value:!0})}));
