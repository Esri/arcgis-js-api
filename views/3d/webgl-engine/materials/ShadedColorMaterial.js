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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/buffer/InterleavedLayout","../lib/GLMaterial","../lib/Material","../lib/Util","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","../shaders/ShadedColorMaterialTechnique"],(function(e,t,r,i,a,n,o,s,u,c,l,h,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShadedColorMaterial=void 0;var f=n.newLayout().vec3f(u.VertexAttrConstants.POSITION).vec3f(u.VertexAttrConstants.NORMAL),d=function(e){function t(t,r){var i=e.call(this,r)||this;return i.supportsEdges=!0,i.techniqueConfig=new p.ShadedColorMaterialTechniqueConfiguration,i.params=h.copyParameters(t,m),i}return r.__extends(t,e),t.prototype.setParameterValues=function(e){l.updateParameters(this.params,e)&&this.parametersChanged()},t.prototype.getParameters=function(){return this.params},t.prototype.getTechniqueConfig=function(e){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.params.cullFace,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig},t.prototype.getPassParameters=function(){return this.params},t.prototype.intersect=function(e,t,r,i,a,n,o){h.intersectTriangleGeometry(e,t,i,a,n,void 0,o)},t.prototype.getGLMaterial=function(e){return 0===e.output||4===e.output?new g(e):void 0},t.prototype.createBufferWriter=function(){return new c.DefaultBufferWriter(f)},t}(s.Material);t.ShadedColorMaterial=d;var g=function(e){function t(t){var r=e.call(this,t)||this;return r.updateParameters(),r}return r.__extends(t,e),t.prototype.updateParameters=function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(p.ShadedColorMaterialTechnique,this.material.getTechniqueConfig(this.output),this.technique)},t.prototype.beginSlot=function(e){if(4===this.output)return 3===e;var t=3;return this.technique.configuration.transparent&&(t=this.technique.configuration.writeDepth?5:8),e===t},t.prototype.bind=function(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters(),t)},t}(o.GLMaterial),m={color:[1,1,1,1],shadingTint:[0,0,0,.25],shadingDirection:i.vec3.normalize(a.vec3f64.create(),[.5,-.5,-.5]),transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0}}));