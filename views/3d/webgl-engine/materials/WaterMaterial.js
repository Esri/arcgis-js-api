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

define(["dojo/text!./WaterMaterial.xml","./internal/MaterialUtil","../lib/GLSLProgram","../lib/GLSLShader","../lib/RenderSlot"],function(e,t,r,i,n){var o=function(e,r,i,n,o,u){t.basicMaterialConstructor(this,u);var s=t.Layouts.Pos;this.dispose=function(){},this.getNoiseTextureId=function(){return e},this.getReflTextureId=function(){return r},this.getColor=function(){return i},this.getScale=function(){return n},this.getSpeed=function(){return o},this.getOutputAmount=function(e){return e*s.getStride()},this.getVertexBufferLayout=function(){return s},this.fillInterleaved=function(e,r,i,n,o,a,u){t.fillInterleaved(e,r,i,n,s,o,a,u)},this.intersect=t.intersectTriangleGeometry,this.getGLMaterials=function(){return{color:a,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},this.getAllTextureIds=function(){return[e,r]}},a=function(e,r,i){t.basicGLMaterialConstructor(this,e);var o=n.TRANSPARENT_MATERIAL,a=r.get("water"),u={noiseTextureId:e.getNoiseTextureId(),reflTextureId:e.getReflTextureId()},s=[["noiseTextureId",void 0,"noiseTex"],["reflTextureId",void 0,"reflTex"]];t.multiTextureGLMaterialConstructor(this,i,u,s);var f=e.getColor(),d=e.getScale(),l=e.getSpeed(),h=Date.now();this.beginSlot=function(e){return o===e},this.getProgram=function(){return a},this.bind=function(t,r){a.use(),this.bindTextures(t,a),a.uniform3fv("color",f),a.uniform1f("scale",d);var i=(Date.now()-h)/1e5*l;i-=Math.floor(i),a.uniform1f("speed",i),r.shadowMap||a.uniform1f("depthHalfPixelSz",-1),e.getVertexBufferLayout().enableVertexAttribArrays(t,a)},this.release=function(t){e.getVertexBufferLayout().disableVertexAttribArrays(t,a)},this.bindView=function(e,r){var i=r.origin;t.bindView(i,r.view,a),t.bindCamPos(i,r.viewInvTransp,a),r.shadowMap&&r.shadowMap.bindView(a,i)},this.bindInstance=function(e,t){a.uniformMatrix4fv("model",t.transformation)},this.getDrawMode=function(e){return e.TRIANGLES}};return o.loadShaders=function(t,n,o,a){t._parse(e);var u=new i(a.VERTEX_SHADER,t.vertexShaderWater,a),s=new i(a.FRAGMENT_SHADER,t.fragmentShaderWater,a),f=new r([u,s],a);o.add("water",f)},o});