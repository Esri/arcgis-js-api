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

define(["require","exports","dojo/text!./SimpleGLMaterial.xml","./MaterialUtil","../../lib/RenderSlot","../../../../webgl/Program","../../../../webgl/enums","../../lib/DefaultVertexAttributeLocations"],function(t,e,r,i,o,n,a,p){var d=function(){function t(t,e,r,o){void 0===o&&(o=4),this.id=i.__GLMaterial_id++,this.program=t.get("simple"),this.color=e,this.depthFunc=r,this.drawMode=o}return t.prototype.getId=function(){return this.id},t.prototype.beginSlot=function(t){return t===o.INTERNAL_MATERIAL},t.prototype.getProgram=function(){return this.program},t.prototype.bind=function(t,e){t.bindProgram(this.program),this.program.setUniformMatrix4fv("model",i.IDENTITY),this.program.setUniformMatrix4fv("proj",e.proj),this.program.setUniform4fv("color",this.color),t.setBlendingEnabled(!0),void 0!==this.depthFunc&&t.setDepthFunction(this.depthFunc)},t.prototype.release=function(t){void 0!==this.depthFunc&&t.setDepthFunction(513),t.setBlendingEnabled(!1)},t.prototype.bindView=function(t,e){i.bindView(e.origin,e.view,this.program)},t.prototype.bindInstance=function(t,e){this.program.setUniformMatrix4fv("model",e.transformation)},t.prototype.getDrawMode=function(t){return this.drawMode},t.loadShaders=function(t,e,i,o){t._parse(r);var a=new n(o,t.vertexShaderSimple,t.fragmentShaderSimple,p.Default3D);i.add("simple",a)},t}();return d});