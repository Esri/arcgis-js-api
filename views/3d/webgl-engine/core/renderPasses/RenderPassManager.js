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

define(["require","exports","../../../../../core/maybe","../../../../../core/libs/gl-matrix-2/mat3","../../../../../core/libs/gl-matrix-2/mat3f64","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../../../core/libs/gl-matrix-2/vec4","../../../support/geometryUtils","./AllRenderPasses","./RenderPass","../util/TwoVectorPosition","../../lib/depthRange"],(function(s,a,e,t,i,r,h,n,o,l,m,c,p,P,d){Object.defineProperty(a,"__esModule",{value:!0});var u=function(){function s(s,a,e){this._renderView=s,this.rctx=a,this.shaderTechniqueRepository=e,this.canRender=!0,this._materialPassParams=new c.MaterialPassesParameters,this._shadowPassParams=new c.ShadowMapPassParameters,this._highlightPassParams=new c.HighlightPassParameters,this._systems=new Set,this._passes=new Array,this._shadowMapPass=this._registerPass(new p.RenderPass(a,this.shaderTechniqueRepository)),this.passes={materialOpaque:this._registerPass(new p.RenderPass(a,this.shaderTechniqueRepository)),materialTransparent:this._registerPass(new p.RenderPass(a,this.shaderTechniqueRepository,1)),materialIntegratedMesh:this._registerPass(new p.RenderPass(a,this.shaderTechniqueRepository)),shadowMap:this._shadowMapPass,highlight:this._registerPass(new p.RenderPass(a,this.shaderTechniqueRepository)),highlightIntegratedMesh:this._registerPass(new p.RenderPass(a,this.shaderTechniqueRepository))}}return s.prototype.register=function(s){this._systems.add(s)},s.prototype.prepareRender=function(){var s=this;this._passes.forEach((function(s){return s.prepareSubmit()}));var a={camera:this._renderView.getCamera()};this._systems.forEach((function(e){e.submit(s.passes,a)})),this._passes.forEach((function(s){return s.finishSubmit()})),this.shaderTechniqueRepository.frameUpdate()},s.prototype.render=function(s){if(4===s.slot)switch(this._configure(s),s.pass){case 0:this._materialPassParams.subPass=0,this._configureMaterialColorPass(s),this.passes.materialOpaque.dispatch(this._materialPassParams);break;case 1:this._materialPassParams.subPass=1,this.passes.materialOpaque.dispatch(this._materialPassParams);break;case 2:this._materialPassParams.subPass=2,this.passes.materialOpaque.dispatch(this._materialPassParams);break;case 4:this.passes.highlight.dispatch(this._highlightPassParams);break;case 3:this._shadowMapPass.dispatch(this._shadowPassParams)}if(6===s.slot)switch(this._configure(s),s.pass){case 0:this._materialPassParams.subPass=0,this._configureMaterialColorPass(s),this.passes.materialTransparent.dispatch(this._materialPassParams);break;case 1:this._materialPassParams.subPass=1,this.passes.materialTransparent.dispatch(this._materialPassParams);break;case 2:this._materialPassParams.subPass=2,this.passes.materialTransparent.dispatch(this._materialPassParams)}if(1===s.slot)switch(this._configure(s),s.pass){case 0:this._materialPassParams.subPass=0,this._configureMaterialColorPass(s),this.passes.materialIntegratedMesh.dispatch(this._materialPassParams);break;case 1:this._materialPassParams.subPass=1,this.passes.materialIntegratedMesh.dispatch(this._materialPassParams);break;case 2:this._materialPassParams.subPass=2,this.passes.materialIntegratedMesh.dispatch(this._materialPassParams);break;case 4:this.passes.highlightIntegratedMesh.dispatch(this._highlightPassParams)}return!0},s.prototype.notifyDirty=function(){this._renderView.setNeedsRender()},s.prototype.slots=function(){return[4,6,1]},s.prototype.initializeRenderContext=function(){},s.prototype.uninitializeRenderContext=function(){},s.prototype.queryDepthRange=function(s){var a={near:1/0,far:-1/0};return this._systems.forEach((function(t){var i=t.queryShadowCasterDepthRange(s);e.isSome(i)&&d.union(a,i,a)})),a},Object.defineProperty(s.prototype,"shadowCastingEnabled",{get:function(){return e.isSome(this.passes.shadowMap)},set:function(s){s?(this._materialPassParams.shadowsEnabled=!0,this.passes.shadowMap=this._shadowMapPass):(this._materialPassParams.shadowsEnabled=!1,this.passes.shadowMap=null)},enumerable:!0,configurable:!0}),s.prototype._configureMaterialColorPass=function(s){var a=this;this._materialPassParams.shadowMap={bind:function(e,t){s.shadowMap.bind(e,t);var i=a._materialPassParams.viewTransform;n.vec3.add(_,i.worldFromView_TL,i.worldFromView_TH),s.shadowMap.bindView(e,_)}},this._materialPassParams.ambientOcclusion={bind:function(a,e){s.ssaoHelper.setUniforms(a,e)}},this._materialPassParams.ambientOcclusionEnabled=s.ssaoHelper.enabled,this._materialPassParams.sceneHasOcludees=s.hasOccludees},s.prototype._configure=function(s){var a=3===s.pass?this._shadowPassParams:4===s.pass?this._highlightPassParams:this._materialPassParams;this._updateParameters(s,a)},s.prototype._updateParameters=function(s,a){var e=s.camera,i=e.viewInverseTransposeMatrix;n.vec3.set(_,i[3],i[7],i[11]),f.set(_),n.vec3.copy(a.viewTransform.worldFromView_TH,f.high),n.vec3.copy(a.viewTransform.worldFromView_TL,f.low),t.mat3.fromMat4(a.viewTransform.viewFromCameraRelative_RS,e.viewMatrix),r.mat4.copy(a.viewTransform.projFromView,e.projectionMatrix),0===a.identifier?(this._materialPassParams.transparent=6===s.slot,this._materialPassParams.integratedMesh=1===s.slot,this._materialPassParams.lighting=s.scenelightingData,t.mat3.transpose(g,a.viewTransform.viewFromCameraRelative_RS),t.mat3.invert(a.transformNormal_ViewFromGlobal,g),h.vec2.set(a.cameraNearFar,e.near,e.far)):1===a.identifier?h.vec2.set(a.cameraNearFar,e.near,e.far):2===a.identifier&&(a.highlightDepthTexture=s.highlightDepthTexture,l.vec4.copy(a.viewport,e.fullViewport)),m.boundedPlane.copy(s.sliceHelper.plane,a.slicePlane),n.vec3.subtract(a.slicePlane.origin,a.slicePlane.origin,_),a.slicePlaneEnabled=s.sliceHelper.isEnabled},s.prototype._registerPass=function(s){return this._passes.push(s),s},Object.defineProperty(s.prototype,"needsHighlight",{get:function(){return this.passes.highlight.count>0||this.passes.highlightIntegratedMesh.count>0},enumerable:!0,configurable:!0}),s}();a.RenderPassManager=u;var _=o.vec3f64.create(),g=i.mat3f64.create(),f=new P.TwoVectorPosition}));