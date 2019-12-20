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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","./renderers/InstancedRenderer","../shaders/CheckerBoardTechnique"],function(t,e,r,i,n,o,a,s,u,p){var h=function(t){function e(e,r){var i=t.call(this,r)||this;return i.techniqueConfig=new p.CheckerBoardTechniqueConfiguration,i.params=a.copyParameters(e,f),i}return r(e,t),e.prototype.dispose=function(){},e.prototype.getPassParameters=function(){return this.params},e.prototype.getTechniqueConfig=function(){return this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.polygonOffset=this.params.polygonOffset,this.techniqueConfig},e.prototype.setParameterValues=function(t){a.updateParameters(this.params,t)&&this.notifyDirty("matChanged")},e.prototype.intersect=function(t,e,r,i,n,o,a){return s.intersectTriangleGeometry(t,e,i,n,o,void 0,a)},e.prototype.getGLMaterials=function(){return{color:c,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},e.prototype.createBufferWriter=function(){return new o.DefaultBufferWriter(o.PositionUVLayout)},e.prototype.createRenderer=function(t,e){return new u(t,e,this)},e}(n.Material),c=function(t){function e(e){var r=t.call(this,e)||this;return r.updateParameters(),r}return r(e,t),e.prototype.updateParameters=function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(p.CheckerBoardTechnique,this.material.getTechniqueConfig(),this.technique)},e.prototype.beginSlot=function(t){var e=4;return this.technique.configuration.transparent&&(e=this.technique.configuration.writeDepth?6:9),t===e},e.prototype.getProgram=function(){return this.technique.program},e.prototype.getPrograms=function(){return null},e.prototype.getDrawMode=function(){return 4},e.prototype.bind=function(t){t.bindProgram(this.technique.program),this.technique.bindPipelineState(t),this.technique.bindPass(t,this.material.getPassParameters())},e.prototype.bindView=function(t){a.bindView(t.origin,t.view,this.technique.program)},e.prototype.bindInstance=function(t){this.technique.program.setUniformMatrix4fv("model",t.transformation)},e.prototype.release=function(){},e}(i.GLMaterial),f={size:[1,1],color1:[.75,.75,.75,1],color2:[.5,.5,.5,1],transparent:!1,writeDepth:!0,polygonOffset:!1};return h});