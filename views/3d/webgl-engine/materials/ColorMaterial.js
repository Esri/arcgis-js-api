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

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/extendsHelper","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","./renderers/MergedRenderer","../shaders/ColorMaterialTechnique"],function(t,e,r,i,n,o,a,u,s,p,h){var c=function(t){function e(e,r){var i=t.call(this,r)||this;return i.supportsEdges=!0,i.techniqueConfig=new h.ColorMaterialTechniqueConfiguration,i.params=s.copyParameters(e,d),i}return i(e,t),e.prototype.setParameterValues=function(t){u.updateParameters(this.params,t)&&this.notifyDirty("matChanged")},e.prototype.getParameters=function(){return this.params},e.prototype.getTechniqueConfig=function(t){return this.techniqueConfig.output=t,this.techniqueConfig.cullFace=this.params.cullFace,this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.polygonOffset=this.params.polygonOffset,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig},e.prototype.getPassParameters=function(){return this.params},e.prototype.intersect=function(t,e,r,i,n,o,a){s.intersectTriangleGeometry(t,e,i,n,o,void 0,a)},e.prototype.getGLMaterials=function(){return{color:f,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:g}},e.prototype.createBufferWriter=function(){return new a.DefaultBufferWriter(a.PositionColorLayout)},e.prototype.createRenderer=function(t,e){return new p(t,e,this)},e}(o.Material),l=function(t){function e(e){var r=t.call(this,e)||this;return r.output=e.output,r.updateParameters(),r}return i(e,t),e.prototype.updateParameters=function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(h.ColorMaterialTechnique,this.material.getTechniqueConfig(this.output),this.technique)},e.prototype.beginSlot=function(t){if(4===this.output)return 4===t;var e=4;return this.technique.configuration.transparent&&(e=this.technique.configuration.writeDepth?6:9),t===e},e.prototype.getProgram=function(){return this.technique.program},e.prototype.getPrograms=function(){return null},e.prototype.bind=function(t,e){t.bindProgram(this.technique.program),this.technique.bindPipelineState(t),this.technique.bindPass(t,this.material.getPassParameters(),e)},e.prototype.release=function(){},e.prototype.bindView=function(t){this.technique.bindDraw(t)},e.prototype.bindInstance=function(t){this.technique.bindInstance(t)},e.prototype.getDrawMode=function(){return 4},e}(n.GLMaterial),f=function(t){function e(e){return t.call(this,r({},e,{output:0}))||this}return i(e,t),e}(l),g=function(t){function e(e){return t.call(this,r({},e,{output:4}))||this}return i(e,t),e}(l),d={color:[1,1,1,1],transparent:!1,writeDepth:!0,vertexColors:!1,polygonOffset:!1,slicePlaneEnabled:!1,cullFace:0};return c});