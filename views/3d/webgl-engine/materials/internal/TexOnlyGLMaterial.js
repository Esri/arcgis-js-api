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

define(["require","exports","dojo/text!./TexOnlyGLMaterial.xml","../../lib/DefaultVertexAttributeLocations","../../lib/gl-matrix","../../lib/RenderSlot","./MaterialUtil","../../../../webgl/Program"],function(t,e,r,o,n,i,a,l){var s=n.vec4d,p=s.createFrom(1,1,1,1);return function(){function t(t,e,r,o,n){this.program=t.get("texOnly"),this.color=r,this.depthFunc=n,this.blend=o,this.texGLName=e}return t.prototype.beginSlot=function(t){return t===i.INTERNAL_MATERIAL},t.prototype.getProgram=function(){return this.program},t.prototype.setColor=function(t){this.color=t},t.prototype.bind=function(t,e){t.bindProgram(this.program),this.program.setUniformMatrix4fv("model",a.IDENTITY),this.program.setUniformMatrix4fv("proj",e.proj),this.program.setUniform4fv("color",void 0!==this.color?this.color:p),this.program.setUniform1i("tex",0),t.bindTexture(this.texGLName,0),this.blend&&(t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA)),t.setDepthTestEnabled(!0),void 0!==this.depthFunc&&t.setDepthFunction(this.depthFunc)},t.prototype.release=function(t){void 0!==this.depthFunc&&t.setDepthFunction(513),this.blend&&t.setBlendingEnabled(!1)},t.prototype.bindView=function(t,e){a.bindView(e.origin,e.view,this.program)},t.prototype.bindInstance=function(t,e){this.program.setUniformMatrix4fv("model",e.transformation)},t.prototype.getDrawMode=function(t){return t.gl.TRIANGLES},t.loadShaders=function(t,e,n){t._parse(r);var i=new l(n,t.vertexShaderTexOnly,t.fragmentShaderTexOnly,o.Default3D);e.add("texOnly",i)},t}()});