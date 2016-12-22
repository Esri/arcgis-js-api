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

define(["require","exports","./gl-matrix"],function(t,i,e){var s=e.vec3d,r=e.vec4d,n=function(){function t(t,i,e,n){this.ambient=r.create(t),this.diffuse=r.create(i),this.specular=r.create(e),this.direction=s.create(n)}return t.prototype.setUniforms=function(t){t.setUniform4fv("lightAmbient",this.ambient),t.setUniform4fv("lightDiffuse",this.diffuse),t.setUniform4fv("lightSpecular",this.specular),t.setUniform3fv("lightDirection",this.direction)},t.prototype.set=function(t){t.ambient&&r.set(t.ambient,this.ambient),t.diffuse&&r.set(t.diffuse,this.diffuse),t.specular&&r.set(t.specular,this.specular),t.direction&&s.set(t.direction,this.direction)},t.prototype.get=function(){return{ambient:this.ambient,diffuse:this.diffuse,specular:this.specular,direction:this.direction}},t}();return n});