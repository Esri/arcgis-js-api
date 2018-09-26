// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../lib/RenderSlot","./MaterialUtil","../../shaders/MiscPrograms"],function(t,r,o,e,i){return function(){function t(t,r,o,e){void 0===e&&(e=4),this.program=t.getProgram(i.simple),this.color=r,this.depthFunc=o,this.drawMode=e}return t.prototype.beginSlot=function(t){return t===o.INTERNAL_MATERIAL},t.prototype.getProgram=function(){return this.program},t.prototype.bind=function(t,r){t.bindProgram(this.program),this.program.setUniformMatrix4fv("model",e.IDENTITY),this.program.setUniformMatrix4fv("proj",r.proj),this.program.setUniform4fv("color",this.color),t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA),t.setDepthTestEnabled(!0),void 0!==this.depthFunc&&t.setDepthFunction(this.depthFunc)},t.prototype.release=function(t){void 0!==this.depthFunc&&t.setDepthFunction(513),t.setBlendingEnabled(!1)},t.prototype.bindView=function(t,r){e.bindView(r.origin,r.view,this.program)},t.prototype.bindInstance=function(t,r){this.program.setUniformMatrix4fv("model",r.transformation)},t.prototype.getDrawMode=function(t){return this.drawMode},t}()});