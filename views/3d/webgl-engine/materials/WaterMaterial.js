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

define(["dojo/text!./WaterMaterial.xml","./internal/MaterialUtil","../lib/RenderSlot","../../../webgl/Program","../lib/DefaultVertexAttributeLocations","../lib/DefaultVertexBufferLayouts","../../../webgl/Util"],function(t,e,r,i,n,o,a){var u=function(t,r,i,n,u,f){e.basicMaterialConstructor(this,f);var l=o.Pos3;this.dispose=function(){},this.getNoiseTextureId=function(){return t},this.getReflTextureId=function(){return r},this.getColor=function(){return i},this.getScale=function(){return n},this.getSpeed=function(){return u},this.getOutputAmount=function(t){return t*a.getStride(l)/4},this.getVertexBufferLayout=function(){return l},this.fillInterleaved=function(t,r,i,n,o,a,u){e.fillInterleaved(t,r,i,n,l,o,a,u)},this.intersect=e.intersectTriangleGeometry,this.getGLMaterials=function(){return{color:s,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},this.getAllTextureIds=function(){return[t,r]}},s=function(t,i,n){e.basicGLMaterialConstructor(this,t);var o=r.TRANSPARENT_MATERIAL,a=i.get("water"),u={noiseTextureId:t.getNoiseTextureId(),reflTextureId:t.getReflTextureId()},s=[["noiseTextureId",void 0,"noiseTex"],["reflTextureId",void 0,"reflTex"]];e.multiTextureGLMaterialConstructor(this,n,u,s);var f=t.getColor(),l=t.getScale(),d=t.getSpeed(),h=Date.now();this.beginSlot=function(t){return o===t},this.getProgram=function(){return a},this.bind=function(t,e){t.bindProgram(a),this.bindTextures(t,a),a.setUniform3fv("color",f),a.setUniform1f("scale",l);var r=(Date.now()-h)/1e5*d;r-=Math.floor(r),a.setUniform1f("speed",r),e.shadowMap||a.setUniform1f("depthHalfPixelSz",-1)},this.release=function(t){},this.bindView=function(t,r){var i=r.origin;e.bindView(i,r.view,a),e.bindCamPos(i,r.viewInvTransp,a),r.shadowMap&&r.shadowMap.bindView(a,i)},this.bindInstance=function(t,e){a.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var e=t.gl;return e.TRIANGLES}};return u.loadShaders=function(e,r,o,a){e._parse(t);var u=new i(a,e.vertexShaderWater,e.fragmentShaderWater,n.Default3D);o.add("water",u)},u});