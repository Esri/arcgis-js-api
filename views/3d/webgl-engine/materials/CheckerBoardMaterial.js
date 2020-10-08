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

define(["require","exports","tslib","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","../shaders/CheckerBoardTechnique"],(function(t,e,r,i,n,a,o,s,u){"use strict";var h=function(t){function e(e,r){var i=t.call(this,r)||this;return i.techniqueConfig=new u.CheckerBoardTechniqueConfiguration,i.params=o.copyParameters(e,p),i}return r.__extends(e,t),e.prototype.dispose=function(){},e.prototype.getPassParameters=function(){return this.params},e.prototype.getTechniqueConfig=function(){return this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.polygonOffset=this.params.polygonOffset,this.techniqueConfig},e.prototype.setParameterValues=function(t){o.updateParameters(this.params,t)&&this.parametersChanged()},e.prototype.intersect=function(t,e,r,i,n,a,o){return s.intersectTriangleGeometry(t,e,i,n,a,void 0,o)},e.prototype.getGLMaterial=function(t){return 0===t.output?new c(t):void 0},e.prototype.createBufferWriter=function(){return new a.DefaultBufferWriter(a.PositionUVLayout)},e}(n.Material),c=function(t){function e(e){var r=t.call(this,e)||this;return r.updateParameters(),r}return r.__extends(e,t),e.prototype.updateParameters=function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(u.CheckerBoardTechnique,this.material.getTechniqueConfig(),this.technique)},e.prototype.beginSlot=function(t){var e=3;return this.technique.configuration.transparent&&(e=this.technique.configuration.writeDepth?5:8),t===e},e.prototype.bind=function(t,e){t.bindProgram(this.technique.program),this.technique.bindPass(t,this.material.getPassParameters(),e)},e}(i.GLMaterial),p={size:[1,1],color1:[.75,.75,.75,1],color2:[.5,.5,.5,1],transparent:!1,writeDepth:!0,polygonOffset:!1};return h}));