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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","dojo/text!./TexOnlyGLMaterial.xml","./MaterialUtil","../../lib/GLSLProgram","../../lib/GLSLShader","../../lib/RenderSlot","../../lib/gl-matrix"],function(t,r,e,i,o,n,a,d){var s=d.vec4d,p=i.Layouts.PosTex,h=s.createFrom(1,1,1,1),l=function(){function t(t,r,e,o,n){this.id=i.__GLMaterial_id++,this.program=t.get("texOnly"),this.color=e,this.depthFunc=n,this.blend=o,this.texGLName=r}return t.prototype.getId=function(){return this.id},t.prototype.beginSlot=function(t){return t===a.INTERNAL_MATERIAL},t.prototype.getProgram=function(){return this.program},t.prototype.setColor=function(t){this.color=t},t.prototype.bind=function(t,r){this.program.use(),this.program.uniformMatrix4fv("model",i.IDENTITY),this.program.uniformMatrix4fv("proj",r.proj),this.program.uniform4fv("color",void 0!==this.color?this.color:h),this.program.uniform1i("tex",0),t.bindTexture(t.TEXTURE_2D,this.texGLName),p.enableVertexAttribArrays(t,this.program,void 0),this.blend&&t.enable(t.BLEND),void 0!==this.depthFunc&&t.depthFunc(this.depthFunc)},t.prototype.release=function(t){void 0!==this.depthFunc&&t.depthFunc(t.LESS),this.blend&&t.disable(t.BLEND),p.disableVertexAttribArrays(t,this.program,void 0)},t.prototype.bindView=function(t,r){i.bindView(r.origin,r.view,this.program)},t.prototype.bindInstance=function(t,r){this.program.uniformMatrix4fv("model",r.transformation)},t.prototype.getDrawMode=function(t){return t.TRIANGLES},t.loadShaders=function(t,r,i,a){t._parse(e);var d=new n(a.VERTEX_SHADER,t.vertexShaderTexOnly,a,void 0),s=new n(a.FRAGMENT_SHADER,t.fragmentShaderTexOnly,a,void 0),p=new o([d,s],a);i.add("texOnly",p),r.add("vertexShaderTexOnly",d),r.add("fragmentShaderTexOnly",s)},t}();return l});