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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","./renderers/MergedRenderer","../shaders/SlicePlaneMaterialTechnique"],(function(e,t,r,n,i,a,o,u,s,p){var l=function(e){function t(t,r){var n=e.call(this,r)||this;return n.params=o.copyParameters(t,f),n}return r(t,e),t.prototype.dispose=function(){},t.prototype.setParameterValues=function(e){o.updateParameters(this.params,e)&&this.parametersChanged()},t.prototype.getParameters=function(){return this.params},t.prototype.intersect=function(e,t,r,n,i,a,o){return u.intersectTriangleGeometry(e,t,n,i,a,void 0,o)},t.prototype.createBufferWriter=function(){return new a.DefaultBufferWriter(a.PositionUVLayout)},t.prototype.createRenderer=function(e,t){return new s(e,t,this)},t.prototype.getGLMaterial=function(e){return 0===e.output?new c(e):void 0},t}(i.Material),c=function(e){function t(t){var r=e.call(this,t)||this;return r.technique=new p.SlicePlaneMaterialTechnique(r.techniqueRep.constructionContext,null),r.updateParameters(),r}return r(t,e),t.prototype.updateParameters=function(){},t.prototype.beginSlot=function(e){return 8===e},t.prototype.bind=function(e){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getParameters())},t}(n.GLMaterial),f={backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4};return l}));