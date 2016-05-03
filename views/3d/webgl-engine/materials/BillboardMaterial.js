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

define(["dojo/text!./BillboardMaterial.xml","./internal/MaterialUtil","../lib/GLSLProgram","../lib/GLSLShader","../lib/RenderSlot"],function(t,e,r,i,n){var a=function(t,r){e.basicMaterialConstructor(this,r);var i=e.Layouts.PosNormTex;this.getSize=function(){return 1.05},this.dispose=function(){},this.getTextureId=function(){return t},this.getOutputAmount=function(t){return t*i.getStride()*6},this.getVertexBufferLayout=function(){return i},this.fillInterleaved=function(t,r,i,n,a,o){for(var u=e.fill,s=t.faces.indices.va,d=t.vertexAttr.va.data,l=t.vertexAttr.tc4.data,f=t.vertexAttr.n0.data,h=t.vertexAttr.n1.data,c=t.vertexAttr.n2.data,b=t.vertexAttr.n3.data,x=0;x<s.length;++x){var g=4*s[x],A=3*s[x];o+=u(d,g,a,o,r,3),o+=u(f,A,a,o,i,3),a[o++]=l[g],a[o++]=l[g+1],o+=u(d,g,a,o,r,3),o+=u(h,A,a,o,i,3),a[o++]=l[g+2]+1,a[o++]=l[g+1],o+=u(d,g,a,o,r,3),o+=u(c,A,a,o,i,3),a[o++]=l[g+2]+1,a[o++]=l[g+3]+1,o+=u(d,g,a,o,r,3),o+=u(c,A,a,o,i,3),a[o++]=l[g+2]+1,a[o++]=l[g+3]+1,o+=u(d,g,a,o,r,3),o+=u(b,A,a,o,i,3),a[o++]=l[g],a[o++]=l[g+3]+1,o+=u(d,g,a,o,r,3),o+=u(f,A,a,o,i,3),a[o++]=l[g],a[o++]=l[g+1]}},this.intersect=function(){},this.getGLMaterials=function(){return{color:o,depthShadowMap:s,normal:void 0,depth:u,highlight:void 0}},this.getAllTextureIds=function(){return[t]}},o=function(t,r,i){e.basicGLMaterialConstructor(this,t);var a=n.TRANSPARENT_MATERIAL,o=r.get("billboard");e.singleTextureGLMaterialConstructor(this,i,{textureId:t.getTextureId()}),this.beginSlot=function(t){return a===t},this.getProgram=function(){return o},this.bind=function(e){o.use(),this.bindTexture(e,o),t.getVertexBufferLayout().enableVertexAttribArrays(e,o)},this.release=function(e){t.getVertexBufferLayout().disableVertexAttribArrays(e,o)},this.bindView=function(t,r){e.bindView(r.origin,r.view,o)},this.bindInstance=function(t,e){o.uniformMatrix4fv("model",e.transformation),o.uniformMatrix4fv("modelNormal",e.transformationNormal)},this.getDrawMode=function(t){return t.TRIANGLES}},u=function(t,r,i,a){e.basicGLMaterialConstructor(this,t);var o=n.TRANSPARENT_MATERIAL,u=r.get(null==a?"billboardDepth":"billboardDepthShadowMap");e.singleTextureGLMaterialConstructor(this,i,{textureId:t.getTextureId()}),this.beginSlot=function(t){return o===t},this.getProgram=function(){return u},this.bind=function(e,r){u.use(),this.bindTexture(e,u),u.uniform2fv("nearFar",r.nearFar),t.getVertexBufferLayout().enableVertexAttribArrays(e,u)},this.release=function(e){t.getVertexBufferLayout().disableVertexAttribArrays(e,u)},this.bindView=function(t,r){e.bindView(r.origin,r.view,u)},this.bindInstance=function(t,e){u.uniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){return t.TRIANGLES}},s=function(t,e,r){u.call(this,t,e,r,!0)};return a.loadShaders=function(e,n,a,o){e._parse(t);var u=new i(o.VERTEX_SHADER,e.vertexShaderBillboard,o),s=new i(o.FRAGMENT_SHADER,e.fragmentShaderBillboard,o),d=new r([u,s],o),l=new i(o.VERTEX_SHADER,e.vertexShaderBillboardDepth,o),f=n.get("fsDepthTextured"),h=n.get("fsDepthTexturedShadowMap"),c=new r([l,f],o),b=new r([l,h],o);a.add("billboard",d),a.add("billboardDepth",c),a.add("billboardDepthShadowMap",b)},a});