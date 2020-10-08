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

define(["require","exports","tslib","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","../shaders/SlicePlaneMaterialTechnique"],(function(t,e,r,i,n,a,o,u,s){"use strict";var l=function(t){function e(e,r){var i=t.call(this,r)||this;return i.params=o.copyParameters(e,p),i}return r.__extends(e,t),e.prototype.dispose=function(){},e.prototype.setParameterValues=function(t){o.updateParameters(this.params,t)&&this.parametersChanged()},e.prototype.getParameters=function(){return this.params},e.prototype.intersect=function(t,e,r,i,n,a,o){return u.intersectTriangleGeometry(t,e,i,n,a,void 0,o)},e.prototype.createBufferWriter=function(){return new a.DefaultBufferWriter(a.PositionUVLayout)},e.prototype.getGLMaterial=function(t){return 0===t.output?new c(t):void 0},e}(n.Material),c=function(t){function e(e){var r=t.call(this,e)||this;return r.technique=new s.SlicePlaneMaterialTechnique(r.techniqueRep.constructionContext,null),r.updateParameters(),r}return r.__extends(e,t),e.prototype.updateParameters=function(){},e.prototype.beginSlot=function(t){return 8===t},e.prototype.bind=function(t,e){t.bindProgram(this.technique.program),this.technique.bindPass(t,this.material.getParameters(),e)},e}(i.GLMaterial),p={backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4};return l}));