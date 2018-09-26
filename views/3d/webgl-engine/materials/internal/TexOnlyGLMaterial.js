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

define(["require","exports","../../../lib/gl-matrix","../../lib/RenderSlot","./MaterialUtil","../../shaders/MiscPrograms"],function(t,e,r,o,i,n){var s=r.vec4d.createFrom(1,1,1,1);return function(){function t(t,e,r,o,i){this.program=t.getProgram(n.texOnly),this.color=r,this.depthFunc=i,this.blend=o,this.texGLName=e}return t.prototype.beginSlot=function(t){return t===o.INTERNAL_MATERIAL},t.prototype.getProgram=function(){return this.program},t.prototype.setColor=function(t){this.color=t},t.prototype.bind=function(t,e){t.bindProgram(this.program),this.program.setUniformMatrix4fv("model",i.IDENTITY),this.program.setUniformMatrix4fv("proj",e.proj),this.program.setUniform4fv("color",void 0!==this.color?this.color:s),this.program.setUniform1i("tex",0),t.bindTexture(this.texGLName,0),this.blend&&(t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA)),t.setDepthTestEnabled(!0),void 0!==this.depthFunc&&t.setDepthFunction(this.depthFunc)},t.prototype.release=function(t){void 0!==this.depthFunc&&t.setDepthFunction(513),this.blend&&t.setBlendingEnabled(!1)},t.prototype.bindView=function(t,e){i.bindView(e.origin,e.view,this.program)},t.prototype.bindInstance=function(t,e){this.program.setUniformMatrix4fv("model",e.transformation)},t.prototype.getDrawMode=function(t){return t.gl.TRIANGLES},t}()});