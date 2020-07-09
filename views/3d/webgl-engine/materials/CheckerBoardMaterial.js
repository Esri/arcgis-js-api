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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","./renderers/MergedRenderer","../shaders/CheckerBoardTechnique"],(function(e,t,r,i,n,a,o,s,u,h){var p=function(e){function t(t,r){var i=e.call(this,r)||this;return i.techniqueConfig=new h.CheckerBoardTechniqueConfiguration,i.params=o.copyParameters(t,f),i}return r.__extends(t,e),t.prototype.dispose=function(){},t.prototype.getPassParameters=function(){return this.params},t.prototype.getTechniqueConfig=function(){return this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.polygonOffset=this.params.polygonOffset,this.techniqueConfig},t.prototype.setParameterValues=function(e){o.updateParameters(this.params,e)&&this.parametersChanged()},t.prototype.intersect=function(e,t,r,i,n,a,o){return s.intersectTriangleGeometry(e,t,i,n,a,void 0,o)},t.prototype.getGLMaterial=function(e){return 0===e.output?new c(e):void 0},t.prototype.createBufferWriter=function(){return new a.DefaultBufferWriter(a.PositionUVLayout)},t.prototype.createRenderer=function(e,t){return new u(e,t,this)},t}(n.Material),c=function(e){function t(t){var r=e.call(this,t)||this;return r.updateParameters(),r}return r.__extends(t,e),t.prototype.updateParameters=function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(h.CheckerBoardTechnique,this.material.getTechniqueConfig(),this.technique)},t.prototype.beginSlot=function(e){var t=3;return this.technique.configuration.transparent&&(t=this.technique.configuration.writeDepth?5:8),e===t},t.prototype.bind=function(e){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters())},t}(i.GLMaterial),f={size:[1,1],color1:[.75,.75,.75,1],color2:[.5,.5,.5,1],transparent:!1,writeDepth:!0,polygonOffset:!1};return p}));