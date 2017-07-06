// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["dojo/text!./WaterMaterial.xml","./internal/MaterialUtil","../lib/RenderSlot","../../../webgl/Program","../lib/DefaultVertexAttributeLocations","../lib/DefaultVertexBufferLayouts","../../../webgl/Util"],function(e,t,r,i,n,o,a){var u=function(e,r,i,n,u,l){t.basicMaterialConstructor(this,l);var f=o.Pos3;this.dispose=function(){},this.getNoiseTextureId=function(){return e},this.getReflTextureId=function(){return r},this.getColor=function(){return i},this.getScale=function(){return n},this.getSpeed=function(){return u},this.getOutputAmount=function(e){return e*a.getStride(f)/4},this.getVertexBufferLayout=function(){return f},this.fillInterleaved=function(e,r,i,n,o,a,u){t.fillInterleaved(e,r,i,n,f,o,a,u)},this.intersect=t.intersectTriangleGeometry,this.getGLMaterials=function(){return{color:s,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},this.getAllTextureIds=function(){return[e,r]}},s=function(e,i,n){t.basicGLMaterialConstructor(this,e);var o=r.TRANSPARENT_MATERIAL,a=i.get("water"),u={noiseTextureId:e.getNoiseTextureId(),reflTextureId:e.getReflTextureId()},s=[["noiseTextureId",void 0,"noiseTex"],["reflTextureId",void 0,"reflTex"]];t.multiTextureGLMaterialConstructor(this,n,u,s);var l=e.getColor(),f=e.getScale(),d=e.getSpeed(),h=Date.now();this.beginSlot=function(e){return o===e},this.getProgram=function(){return a},this.bind=function(e,t){e.bindProgram(a),this.bindTextures(e,a),a.setUniform3fv("color",l),a.setUniform1f("scale",f);var r=(Date.now()-h)/1e5*d;r-=Math.floor(r),a.setUniform1f("speed",r),t.shadowMappingEnabled||a.setUniform1f("depthHalfPixelSz",-1)},this.release=function(e){},this.bindView=function(e,r){var i=r.origin;t.bindView(i,r.view,a),t.bindCamPos(i,r.viewInvTransp,a),r.shadowMappingEnabled&&r.shadowMap.bindView(a,i)},this.bindInstance=function(e,t){a.setUniformMatrix4fv("model",t.transformation)},this.getDrawMode=function(e){var t=e.gl;return t.TRIANGLES}};return u.loadShaders=function(t,r,o,a){t._parse(e);var u=new i(a,t.vertexShaderWater,t.fragmentShaderWater,n.Default3D);o.add("water",u)},u});