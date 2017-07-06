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

define(["dojo/text!./BillboardMaterial.xml","./internal/MaterialUtil","../lib/RenderSlot","../../../webgl/Program","../lib/DefaultVertexAttributeLocations","../lib/DefaultVertexBufferLayouts","../../../webgl/Util"],function(t,e,r,i,n,a,o){var l=function(t,r){e.basicMaterialConstructor(this,r);var i=a.Pos3NormTex;this.getSize=function(){return 1.05},this.dispose=function(){},this.getTextureId=function(){return t},this.getOutputAmount=function(t){var e=o.getStride(i)/4;return t*e*6},this.getVertexBufferLayout=function(){return i},this.fillInterleaved=function(t,r,i,n,a,o){for(var l=e.fill,d=t.faces.indices.va,u=t.vertexAttr.va.data,s=t.vertexAttr.tc4.data,f=t.vertexAttr.n0.data,h=t.vertexAttr.n1.data,c=t.vertexAttr.n2.data,b=t.vertexAttr.n3.data,g=0;g<d.length;++g){var v=4*d[g],x=3*d[g];o+=l(u,v,a,o,r,3),o+=l(f,x,a,o,i,3),a[o++]=s[v],a[o++]=s[v+1],o+=l(u,v,a,o,r,3),o+=l(h,x,a,o,i,3),a[o++]=s[v+2]+1,a[o++]=s[v+1],o+=l(u,v,a,o,r,3),o+=l(c,x,a,o,i,3),a[o++]=s[v+2]+1,a[o++]=s[v+3]+1,o+=l(u,v,a,o,r,3),o+=l(c,x,a,o,i,3),a[o++]=s[v+2]+1,a[o++]=s[v+3]+1,o+=l(u,v,a,o,r,3),o+=l(b,x,a,o,i,3),a[o++]=s[v],a[o++]=s[v+3]+1,o+=l(u,v,a,o,r,3),o+=l(f,x,a,o,i,3),a[o++]=s[v],a[o++]=s[v+1]}},this.intersect=function(){},this.getGLMaterials=function(){return{color:d,depthShadowMap:s,normal:void 0,depth:u,highlight:void 0}},this.getAllTextureIds=function(){return[t]}},d=function(t,i,n){e.basicGLMaterialConstructor(this,t);var a=r.TRANSPARENT_MATERIAL,o=i.get("billboard");e.singleTextureGLMaterialConstructor(this,n,{textureId:t.getTextureId()}),this.beginSlot=function(t){return a===t},this.getProgram=function(){return o},this.bind=function(t,e){t.bindProgram(o),this.bindTexture(t,o),t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA),t.setDepthTestEnabled(!0)},this.release=function(t){},this.bindView=function(t,r){e.bindView(r.origin,r.view,o)},this.bindInstance=function(t,e){o.setUniformMatrix4fv("model",e.transformation),o.setUniformMatrix4fv("modelNormal",e.transformationNormal)},this.getDrawMode=function(t){var e=t.gl;return e.TRIANGLES}},u=function(t,i,n,a){e.basicGLMaterialConstructor(this,t);var o=r.TRANSPARENT_MATERIAL,l=null==a?i.get("billboardDepth"):i.get("billboardDepthShadowMap");e.singleTextureGLMaterialConstructor(this,n,{textureId:t.getTextureId()}),this.beginSlot=function(t){return o===t},this.getProgram=function(){return l},this.bind=function(t,e){t.bindProgram(l),this.bindTexture(t,l),l.setUniform2fv("nearFar",e.nearFar)},this.release=function(t){},this.bindView=function(t,r){e.bindView(r.origin,r.view,l)},this.bindInstance=function(t,e){l.detUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var e=t.gl;return e.TRIANGLES}},s=function(t,e,r){u.call(this,t,e,r,!0)};return l.loadShaders=function(e,r,a,o){e._parse(t);var l=new i(o,e.vertexShaderBillboard,e.fragmentShaderBillboard,n.Default3D),d=r.get("fsDepthTextured"),u=r.get("fsDepthTexturedShadowMap"),s=new i(o,e.vertexShaderBillboardDepth,d.source,n.Default3D,d.defines),f=new i(o,e.vertexShaderBillboardDepth,u.source,n.Default3D,u.defines);a.add("billboard",l),a.add("billboardDepth",s),a.add("billboardDepthShadowMap",f)},l});