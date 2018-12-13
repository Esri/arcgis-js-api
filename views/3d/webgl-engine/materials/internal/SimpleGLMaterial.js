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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./MaterialUtil","../../shaders/MiscPrograms"],function(t,r,o,e){return function(){function t(t,r,o,i){void 0===i&&(i=4),this.program=t.getProgram(e.simple),this.color=r,this.depthFunc=o,this.drawMode=i}return t.prototype.beginSlot=function(t){return 1===t},t.prototype.getProgram=function(){return this.program},t.prototype.bind=function(t,r){t.bindProgram(this.program),this.program.setUniformMatrix4fv("model",o.IDENTITY),this.program.setUniformMatrix4fv("proj",r.proj),this.program.setUniform4fv("color",this.color),t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA),t.setDepthTestEnabled(!0),void 0!==this.depthFunc&&t.setDepthFunction(this.depthFunc)},t.prototype.release=function(t){void 0!==this.depthFunc&&t.setDepthFunction(513),t.setBlendingEnabled(!1)},t.prototype.bindView=function(t,r){o.bindView(r.origin,r.view,this.program)},t.prototype.bindInstance=function(t,r){this.program.setUniformMatrix4fv("model",r.transformation)},t.prototype.getDrawMode=function(t){return this.drawMode},t}()});