/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../chunks/mat3","../../../../../chunks/mat3f64","../../../../../chunks/mat4","../../../../../chunks/vec2","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../chunks/vec4","../../../../../chunks/boundedPlane","./AllRenderPasses","./RenderPass","../util/TwoVectorPosition","../../lib/depthRange"],(function(s,a,e,t,r,i,n,h,o,l,m,c,P,u,p){"use strict";let d=function(){function s(s,a){this.rctx=s,this.shaderTechniqueRepository=a,this.canRender=!0,this._materialPassParams=new c.MaterialPassesParameters,this._shadowPassParams=new c.ShadowMapPassParameters,this._highlightPassParams=new c.HighlightPassParameters,this._systems=new Set,this._passes={materialOpaque:new P.RenderPass(s,this.shaderTechniqueRepository),materialTransparent:new P.RenderPass(s,this.shaderTechniqueRepository,1),materialIntegratedMesh:new P.RenderPass(s,this.shaderTechniqueRepository),shadowMap:new P.RenderPass(s,this.shaderTechniqueRepository),highlight:new P.RenderPass(s,this.shaderTechniqueRepository),highlightIntegratedMesh:new P.RenderPass(s,this.shaderTechniqueRepository),highlightShadowMap:new P.RenderPass(s,this.shaderTechniqueRepository),defaultShadowMap:new P.RenderPass(s,this.shaderTechniqueRepository)}}var r=s.prototype;return r.register=function(s){this._systems.add(s)},r.prepareRender=function(s){if(0!==this._systems.size){for(const s of Object.values(this._passes))s.prepareSubmit();this._systems.forEach((a=>a.submit(this._passes,{camera:s})));for(const s of Object.values(this._passes))s.finishSubmit();this.shaderTechniqueRepository.frameUpdate()}},r.render=function(s){if(0===this._systems.size)return!1;switch(this._configure(s),s.slot){case 4:switch(s.pass){case 0:return this._materialPassParams.subPass=0,this._configureMaterialColorPass(s),this._passes.materialOpaque.dispatch(this._materialPassParams);case 2:return this._materialPassParams.subPass=2,this._passes.materialOpaque.dispatch(this._materialPassParams);case 3:return this._materialPassParams.subPass=3,this._passes.materialOpaque.dispatch(this._materialPassParams);case 5:return this._passes.highlight.dispatch(this._highlightPassParams);case 4:return this._passes.shadowMap.dispatch(this._shadowPassParams);case 7:return this._passes.highlightShadowMap.dispatch(this._shadowPassParams);case 6:return this._passes.defaultShadowMap.dispatch(this._shadowPassParams)}return!1;case 6:switch(s.pass){case 0:return this._materialPassParams.subPass=0,this._configureMaterialColorPass(s),this._passes.materialTransparent.dispatch(this._materialPassParams);case 1:return this._materialPassParams.subPass=1,this._configureMaterialColorPass(s),this._passes.materialTransparent.dispatch(this._materialPassParams);case 2:return this._materialPassParams.subPass=2,this._passes.materialTransparent.dispatch(this._materialPassParams);case 3:return this._materialPassParams.subPass=3,this._passes.materialTransparent.dispatch(this._materialPassParams)}return!1;case 1:switch(s.pass){case 0:return this._materialPassParams.subPass=0,this._configureMaterialColorPass(s),this._materialPassParams.ssrParams=s.ssrParams,this._passes.materialIntegratedMesh.dispatch(this._materialPassParams);case 2:return this._materialPassParams.subPass=2,this._passes.materialIntegratedMesh.dispatch(this._materialPassParams);case 3:return this._materialPassParams.subPass=3,this._passes.materialIntegratedMesh.dispatch(this._materialPassParams);case 5:return this._passes.highlightIntegratedMesh.dispatch(this._highlightPassParams)}return!1}return!1},r.notifyDirty=function(){this._context.requestRender()},r.slots=function(){return[4,6,1]},r.initializeRenderContext=function(s){this._context=s},r.uninitializeRenderContext=function(){},r.queryDepthRange=function(s){const a={near:1/0,far:-1/0};return this._systems.forEach((t=>{const r=t.queryShadowCasterDepthRange(s);e.isSome(r)&&p.union(a,r,a)})),a},r._configureMaterialColorPass=function(s){this._materialPassParams.bindShadowMap=a=>{s.shadowMap.bind(a);const e=this._materialPassParams.viewTransform;h.add(_,e.worldFromView_TL,e.worldFromView_TH),s.shadowMap.bindView(a,_)},this._materialPassParams.bindAmbientOcclusion=a=>s.ssaoHelper.bind(a,s.camera),this._materialPassParams.ambientOcclusionEnabled=!!s.ssaoHelper&&s.ssaoHelper.ready,this._materialPassParams.sceneHasOcludees=s.hasOccludees},r._configure=function(s){const a=4===s.pass||7===s.pass||6===s.pass?this._shadowPassParams:5===s.pass?this._highlightPassParams:this._materialPassParams;this._updateParameters(s,a)},r._updateParameters=function(s,a){const e=s.camera,r=e.viewInverseTransposeMatrix;h.set(_,r[3],r[7],r[11]),f.set(_),h.copy(a.viewTransform.worldFromView_TH,f.high),h.copy(a.viewTransform.worldFromView_TL,f.low),t.fromMat4(a.viewTransform.viewFromCameraRelative_RS,e.viewMatrix),i.copy(a.viewTransform.projFromView,e.projectionMatrix),0===a.identifier?(this._materialPassParams.transparent=6===s.slot,this._materialPassParams.integratedMesh=1===s.slot,this._materialPassParams.lighting=s.scenelightingData,t.transpose(w,a.viewTransform.viewFromCameraRelative_RS),t.invert(a.transformNormal_ViewFromGlobal,w),n.set(a.cameraNearFar,e.near,e.far)):1===a.identifier?n.set(a.cameraNearFar,e.near,e.far):2===a.identifier&&(a.highlightDepthTexture=s.highlightDepthTexture,l.copy(a.viewport,e.fullViewport)),0!==a.identifier&&2!==a.identifier||(a.inverseViewport[0]=1/e.fullViewport[2],a.inverseViewport[1]=1/e.fullViewport[3]),m.copyWithoutVerify(s.sliceHelper.plane,a.slicePlane),h.subtract(a.slicePlane.origin,a.slicePlane.origin,_),a.slicePlaneEnabled=s.sliceHelper.isEnabled,this._materialPassParams.transparencyPassType=s.transparencyPassType,this._materialPassParams.multipassTerrainParams=s.multipassTerrainParams},a._createClass(s,[{key:"shadowCastingEnabled",get:function(){return this._materialPassParams.shadowsEnabled},set:function(s){this._materialPassParams.shadowsEnabled=s}},{key:"screenSpaceReflectionsEnabled",get:function(){return e.isSome(this._materialPassParams.ssrParams.ssrEnabled)},set:function(s){this._materialPassParams.ssrParams.ssrEnabled=!!s}},{key:"needsHighlight",get:function(){return this._passes.highlight.count>0||this._passes.highlightIntegratedMesh.count>0}}]),s}();const _=o.create(),w=r.create(),f=new u.TwoVectorPosition;s.RenderPassManager=d,Object.defineProperty(s,"__esModule",{value:!0})}));
