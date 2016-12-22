// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/text!./TexOnlyGLMaterial.xml","./MaterialUtil","../../lib/RenderSlot","../../lib/gl-matrix","../../../../webgl/Program","../../../../webgl/enums","../../lib/DefaultVertexAttributeLocations"],function(t,e,r,o,i,n,a,s,l){var d=n.vec4d,p=d.createFrom(1,1,1,1),h=function(){function t(t,e,r,i,n){this.id=o.__GLMaterial_id++,this.program=t.get("texOnly"),this.color=r,this.depthFunc=n,this.blend=i,this.texGLName=e}return t.prototype.getId=function(){return this.id},t.prototype.beginSlot=function(t){return t===i.INTERNAL_MATERIAL},t.prototype.getProgram=function(){return this.program},t.prototype.setColor=function(t){this.color=t},t.prototype.bind=function(t,e){t.bindProgram(this.program),this.program.setUniformMatrix4fv("model",o.IDENTITY),this.program.setUniformMatrix4fv("proj",e.proj),this.program.setUniform4fv("color",void 0!==this.color?this.color:p),this.program.setUniform1i("tex",0),t.bindTexture(this.texGLName,0),this.blend&&t.setBlendingEnabled(!0),void 0!==this.depthFunc&&t.setDepthFunction(this.depthFunc)},t.prototype.release=function(t){void 0!==this.depthFunc&&t.setDepthFunction(513),this.blend&&t.setBlendingEnabled(!1)},t.prototype.bindView=function(t,e){o.bindView(e.origin,e.view,this.program)},t.prototype.bindInstance=function(t,e){this.program.setUniformMatrix4fv("model",e.transformation)},t.prototype.getDrawMode=function(t){var e=t.gl;return e.TRIANGLES},t.loadShaders=function(t,e,o,i){t._parse(r);var n=new a(i,t.vertexShaderTexOnly,t.fragmentShaderTexOnly,l.Default3D);o.add("texOnly",n)},t}();return h});