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

define(["require","exports","./gl-matrix"],function(i,t,e){var r=e.vec3d,s=e.vec4d,n=function(){function i(i,t,e,n){this.ambient=s.create(i),this.diffuse=s.create(t),this.specular=s.create(e),this.direction=r.create(n)}return i.prototype.setUniforms=function(i){i.uniform4fv("lightAmbient",this.ambient),i.uniform4fv("lightDiffuse",this.diffuse),i.uniform4fv("lightSpecular",this.specular),i.uniform3fv("lightDirection",this.direction)},i.prototype.set=function(i){i.ambient&&s.set(i.ambient,this.ambient),i.diffuse&&s.set(i.diffuse,this.diffuse),i.specular&&s.set(i.specular,this.specular),i.direction&&r.set(i.direction,this.direction)},i.prototype.get=function(){return{ambient:this.ambient,diffuse:this.diffuse,specular:this.specular,direction:this.direction}},i}();return n});