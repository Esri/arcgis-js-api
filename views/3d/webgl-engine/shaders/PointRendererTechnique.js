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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/StencilUtils","./PointRenderer.glsl","../../../webgl/Program","../../../webgl/renderState"],(function(e,r,t,n,i,a,o,l,u,c,s,d,p){Object.defineProperty(r,"__esModule",{value:!0});var h=function(r){function n(e,t){return r.call(this,e,t)||this}return t(n,r),n.prototype.initializeProgram=function(e){var r=n.shader.get(),t=this.configuration,i=r.build({output:t.output,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,drawScreenSize:t.drawScreenSize});return new d(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),u.Default3D)},n.prototype.initializePipeline=function(){return p.makePipelineState({depthTest:{func:513},depthWrite:p.defaultDepthWriteParams,colorWrite:p.defaultColorWriteParams,stencilWrite:this.configuration.sceneHasOcludees?c.stencilWriteMaskOn:null,stencilTest:this.configuration.sceneHasOcludees?c.stencilBaseAllZerosParams:null})},n.shader=new a.ReloadableShaderModule(s,"./PointRenderer.glsl",e),n}(o.ShaderTechnique);r.PointRendererTechnique=h;var S=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.slicePlaneEnabled=!1,r.drawScreenSize=!1,r.sceneHasOcludees=!1,r}return t(r,e),n([l.parameter({count:7})],r.prototype,"output",void 0),n([l.parameter()],r.prototype,"slicePlaneEnabled",void 0),n([l.parameter()],r.prototype,"drawScreenSize",void 0),n([l.parameter()],r.prototype,"sceneHasOcludees",void 0),r}(l.ShaderTechniqueConfiguration);r.PointRendererTechniqueConfiguration=S}));