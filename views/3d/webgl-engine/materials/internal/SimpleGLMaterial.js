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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/text!./SimpleGLMaterial.xml","../../lib/DefaultVertexAttributeLocations","../../lib/RenderSlot","./MaterialUtil","../../../../webgl/Program"],function(t,e,r,o,i,n,a){return function(){function t(t,e,r,o){void 0===o&&(o=4),this.program=t.get("simple"),this.color=e,this.depthFunc=r,this.drawMode=o}return t.prototype.beginSlot=function(t){return t===i.INTERNAL_MATERIAL},t.prototype.getProgram=function(){return this.program},t.prototype.bind=function(t,e){t.bindProgram(this.program),this.program.setUniformMatrix4fv("model",n.IDENTITY),this.program.setUniformMatrix4fv("proj",e.proj),this.program.setUniform4fv("color",this.color),t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA),t.setDepthTestEnabled(!0),void 0!==this.depthFunc&&t.setDepthFunction(this.depthFunc)},t.prototype.release=function(t){void 0!==this.depthFunc&&t.setDepthFunction(513),t.setBlendingEnabled(!1)},t.prototype.bindView=function(t,e){n.bindView(e.origin,e.view,this.program)},t.prototype.bindInstance=function(t,e){this.program.setUniformMatrix4fv("model",e.transformation)},t.prototype.getDrawMode=function(t){return this.drawMode},t.loadShaders=function(t,e,i){t._parse(r);var n=new a(i,t.vertexShaderSimple,t.fragmentShaderSimple,o.Default3D);e.add("simple",n)},t}()});