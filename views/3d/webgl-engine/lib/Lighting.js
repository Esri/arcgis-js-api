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

define(["require","exports","../../lib/gl-matrix"],function(e,t,i){return function(){function e(e,t,s,r){this.ambient=i.vec4d.create(e),this.diffuse=i.vec4d.create(t),this.specular=i.vec4d.create(s),this.direction=i.vec3d.create(r)}return e.prototype.setUniforms=function(e){e.setUniform4fv("lightAmbient",this.ambient),e.setUniform4fv("lightDiffuse",this.diffuse),e.setUniform4fv("lightSpecular",this.specular),e.setUniform3fv("lightDirection",this.direction)},e.prototype.set=function(e){e.ambient&&i.vec4d.set(e.ambient,this.ambient),e.diffuse&&i.vec4d.set(e.diffuse,this.diffuse),e.specular&&i.vec4d.set(e.specular,this.specular),e.direction&&i.vec3d.set(e.direction,this.direction)},e.prototype.get=function(){return{ambient:this.ambient,diffuse:this.diffuse,specular:this.specular,direction:this.direction}},e}()});