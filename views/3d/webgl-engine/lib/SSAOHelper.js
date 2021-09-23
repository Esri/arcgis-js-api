/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec4f64","../../../../support/requestImageUtils","./glUtil3D","./SSAOTechnique","./Util","../../../webgl/FramebufferObject","../../../webgl/Texture","../../../webgl/Util"],(function(e,t,i,s,r,n,o,u,h,a,l,_,c,b){"use strict";let d=function(){function t(e,t,i){this._techniqueRep=e,this._rctx=t,this._requestRender=i,this._enabled=!1,this._ssaoTechniqueConfig=new a.SSAOTechniqueConfiguration,this.quadVAO=null,this._blurSizePx=2,this._attenuation=.5}var r=t.prototype;return r.dispose=function(){this.quadVAO=s.disposeMaybe(this.quadVAO)},r.computeSSAO=function(e,t,i){if(!this.enabled||s.isNone(this._noiseTexture)||s.isNone(this._ssaoFBO)||s.isNone(this._blur0FBO)||s.isNone(this._blur1FBO))return;const r=this._rctx,o=e.fullViewport,u=o[2],a=o[3],_=u/this._blurSizePx,c=a/this._blurSizePx;this._ssaoFBO.resize(u,a),this._blur0FBO.resize(_,c),this._blur1FBO.resize(_,c);const d=1,m=1,O=u*d,x=a*m;r.bindFramebuffer(this._ssaoFBO),r.setViewport(0,0,u,a);const g=this._ssaoTechnique.program;r.useProgram(g),r.setPipelineState(this._ssaoTechnique.pipeline),g.setUniform2f("rnmScale",u/this._noiseTexture.descriptor.width,a/this._noiseTexture.descriptor.height),l.inverseProjectionInfo(e.projectionMatrix,e.fullWidth,e.fullHeight,p,f),g.setUniform4fv("projInfo",p),g.setUniform2fv("zScale",f),g.setUniform2f("nearFar",e.near,e.far);let F=1/e.computeRenderPixelSizeAtDist(1);g.setUniform1f("projScale",F*d),g.setUniform2f("screenDimensions",O,x);const S=n.distance(e.eye,e.center);let T=20*e.computeRenderPixelSizeAtDist(S);T=Math.max(.1,T),g.setUniform1f("radius",T),g.setUniform1f("intensity",4*this._attenuation/T**6),g.bindTexture(this._noiseTexture,"rnm"),g.bindTexture(i,"normalMap"),g.bindTexture(t,"depthMap"),s.isNone(this.quadVAO)&&(this.quadVAO=h.createQuadVAO(this._rctx)),r.bindVAO(this.quadVAO),r.drawArrays(5,0,b.vertexCount(this.quadVAO,"geometry"));const B=this._blurTechnique.program;r.useProgram(B),B.bindTexture(this._ssaoFBO.colorTexture,"tex"),B.bindTexture(i,"normalMap"),B.bindTexture(t,"depthMap"),r.setViewport(0,0,O/this._blurSizePx,x/this._blurSizePx),r.bindFramebuffer(this._blur0FBO),B.setUniform2f("screenDimensions",O,x),B.setUniform2f("blurSize",0,this._blurSizePx*d/x),B.setUniform2f("nearFar",e.near,e.far),S>5e4&&(F=Math.max(0,F-(S-5e4))),B.setUniform1f("projScale",F),r.drawArrays(5,0,b.vertexCount(this.quadVAO,"geometry")),B.setUniform2f("blurSize",this._blurSizePx*m/O,0),r.bindFramebuffer(this._blur1FBO),B.bindTexture(this._blur0FBO.colorTexture,"tex"),r.drawArrays(5,0,b.vertexCount(this.quadVAO,"geometry")),r.setViewport(o[0],o[1],o[2],o[3])},r.bind=function(e,t){this.enabled&&s.isSome(this._blur1FBO)&&s.isSome(this._ssaoFBO)?(e.bindTexture(this._blur1FBO.colorTexture,"ssaoTex"),e.setUniform4f("viewportPixelSz",t.fullViewport[0],t.fullViewport[1],1/this._ssaoFBO.width,1/this._ssaoFBO.height)):e.setUniform4f("viewportPixelSz",-1,-1,-1,-1)},r._selectPrograms=function(){this._ssaoTechniqueConfig.output=0,this._ssaoTechnique=this._techniqueRep.releaseAndAcquire(a.SSAOTechnique,this._ssaoTechniqueConfig,this._ssaoTechnique),this._ssaoTechniqueConfig.output=1,this._blurTechnique=this._techniqueRep.releaseAndAcquire(a.SSAOTechnique,this._ssaoTechniqueConfig,this._blurTechnique)},r._enable=function(){this.enabled||(this._enabled=!0,this._loadResources((()=>{this._enabled&&this._initialize()})))},r._loadResources=function(t){this._data?t():new Promise((function(t,i){e(["./SSAOHelperData"],t,i)})).then((e=>{this._data=e,t()}))},r._initialize=function(){const e={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9729,wrapMode:33071,width:0,height:0},t={colorTarget:0,depthStencilTarget:0};u.requestImage(this._data.noiseTexture).then((i=>{this._enabled&&(this._ssaoFBO=new _(this._rctx,t,e),this._blur0FBO=new _(this._rctx,t,e),this._blur1FBO=new _(this._rctx,t,e),this._noiseTexture=new c(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,hasMipmap:!0,width:i.width,height:i.height},i),this._requestRender())})),this._selectPrograms()},r._disable=function(){this._enabled=!1,this._noiseTexture=s.disposeMaybe(this._noiseTexture),this._blur1FBO=s.disposeMaybe(this._blur1FBO),this._blur0FBO=s.disposeMaybe(this._blur0FBO),this._ssaoFBO=s.disposeMaybe(this._ssaoFBO)},i._createClass(t,[{key:"enabled",get:function(){return this._enabled},set:function(e){e?this._enable():this._disable()}},{key:"ready",get:function(){return this.enabled&&s.isSome(this._noiseTexture)&&s.isSome(this._ssaoFBO)&&s.isSome(this._blur0FBO)&&s.isSome(this._blur1FBO)}},{key:"gpuMemoryUsage",get:function(){return(s.isSome(this._blur0FBO)?this._blur0FBO.gpuMemoryUsage:0)+(s.isSome(this._blur1FBO)?this._blur1FBO.gpuMemoryUsage:0)+(s.isSome(this._ssaoFBO)?this._ssaoFBO.gpuMemoryUsage:0)}},{key:"test",get:function(){return{ssao:this._ssaoFBO,blur:this._blur1FBO}}}]),t}();const f=r.create(),p=o.create();t.SSAOHelper=d,Object.defineProperty(t,"__esModule",{value:!0})}));
