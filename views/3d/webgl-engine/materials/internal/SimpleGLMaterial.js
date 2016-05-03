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

define(["require","exports","dojo/text!./SimpleGLMaterial.xml","./MaterialUtil","../../lib/GLSLProgram","../../lib/GLSLShader","../../lib/RenderSlot"],function(t,r,i,e,o,n,a){var p=e.Layouts.Pos,d=function(){function t(t,r,i,o){void 0===o&&(o=4),this.id=e.__GLMaterial_id++,this.program=t.get("simple"),this.color=r,this.depthFunc=i,this.drawMode=o}return t.prototype.getId=function(){return this.id},t.prototype.beginSlot=function(t){return t===a.INTERNAL_MATERIAL},t.prototype.getProgram=function(){return this.program},t.prototype.bind=function(t,r){this.program.use(),this.program.uniformMatrix4fv("model",e.IDENTITY),this.program.uniformMatrix4fv("proj",r.proj),this.program.uniform4fv("color",this.color),p.enableVertexAttribArrays(t,this.program,void 0),t.enable(t.BLEND),void 0!==this.depthFunc&&t.depthFunc(this.depthFunc)},t.prototype.release=function(t){void 0!==this.depthFunc&&t.depthFunc(t.LESS),t.disable(t.BLEND),p.disableVertexAttribArrays(t,this.program,void 0)},t.prototype.bindView=function(t,r){e.bindView(r.origin,r.view,this.program)},t.prototype.bindInstance=function(t,r){this.program.uniformMatrix4fv("model",r.transformation)},t.prototype.getDrawMode=function(){return this.drawMode},t.loadShaders=function(t,r,e,a){t._parse(i);var p=new n(a.VERTEX_SHADER,t.vertexShaderSimple,a,void 0),d=new n(a.FRAGMENT_SHADER,t.fragmentShaderSimple,a,void 0),s=new o([p,d],a);e.add("simple",s)},t}();return d});