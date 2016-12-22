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

define(["dojo/text!./BillboardMaterial.xml","./internal/MaterialUtil","../lib/RenderSlot","../../../webgl/Program","../lib/DefaultVertexAttributeLocations","../lib/DefaultVertexBufferLayouts","../../../webgl/Util"],function(t,e,r,i,n,a,o){var u=function(t,r){e.basicMaterialConstructor(this,r);var i=a.Pos3NormTex;this.getSize=function(){return 1.05},this.dispose=function(){},this.getTextureId=function(){return t},this.getOutputAmount=function(t){var e=o.getStride(i)/4;return t*e*6},this.getVertexBufferLayout=function(){return i},this.fillInterleaved=function(t,r,i,n,a,o){for(var u=e.fill,l=t.faces.indices.va,d=t.vertexAttr.va.data,s=t.vertexAttr.tc4.data,f=t.vertexAttr.n0.data,h=t.vertexAttr.n1.data,c=t.vertexAttr.n2.data,b=t.vertexAttr.n3.data,g=0;g<l.length;++g){var v=4*l[g],x=3*l[g];o+=u(d,v,a,o,r,3),o+=u(f,x,a,o,i,3),a[o++]=s[v],a[o++]=s[v+1],o+=u(d,v,a,o,r,3),o+=u(h,x,a,o,i,3),a[o++]=s[v+2]+1,a[o++]=s[v+1],o+=u(d,v,a,o,r,3),o+=u(c,x,a,o,i,3),a[o++]=s[v+2]+1,a[o++]=s[v+3]+1,o+=u(d,v,a,o,r,3),o+=u(c,x,a,o,i,3),a[o++]=s[v+2]+1,a[o++]=s[v+3]+1,o+=u(d,v,a,o,r,3),o+=u(b,x,a,o,i,3),a[o++]=s[v],a[o++]=s[v+3]+1,o+=u(d,v,a,o,r,3),o+=u(f,x,a,o,i,3),a[o++]=s[v],a[o++]=s[v+1]}},this.intersect=function(){},this.getGLMaterials=function(){return{color:l,depthShadowMap:s,normal:void 0,depth:d,highlight:void 0}},this.getAllTextureIds=function(){return[t]}},l=function(t,i,n){e.basicGLMaterialConstructor(this,t);var a=r.TRANSPARENT_MATERIAL,o=i.get("billboard");e.singleTextureGLMaterialConstructor(this,n,{textureId:t.getTextureId()}),this.beginSlot=function(t){return a===t},this.getProgram=function(){return o},this.bind=function(t,e){t.bindProgram(o),this.bindTexture(t,o)},this.release=function(t){},this.bindView=function(t,r){e.bindView(r.origin,r.view,o)},this.bindInstance=function(t,e){o.setUniformMatrix4fv("model",e.transformation),o.setUniformMatrix4fv("modelNormal",e.transformationNormal)},this.getDrawMode=function(t){var e=t.gl;return e.TRIANGLES}},d=function(t,i,n,a){e.basicGLMaterialConstructor(this,t);var o=r.TRANSPARENT_MATERIAL,u=null==a?i.get("billboardDepth"):i.get("billboardDepthShadowMap");e.singleTextureGLMaterialConstructor(this,n,{textureId:t.getTextureId()}),this.beginSlot=function(t){return o===t},this.getProgram=function(){return u},this.bind=function(t,e){t.bindProgram(u),this.bindTexture(t,u),u.setUniform2fv("nearFar",e.nearFar)},this.release=function(t){},this.bindView=function(t,r){e.bindView(r.origin,r.view,u)},this.bindInstance=function(t,e){u.detUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var e=t.gl;return e.TRIANGLES}},s=function(t,e,r){d.call(this,t,e,r,!0)};return u.loadShaders=function(e,r,a,o){e._parse(t);var u=new i(o,e.vertexShaderBillboard,e.fragmentShaderBillboard,n.Default3D),l=r.get("fsDepthTextured"),d=r.get("fsDepthTexturedShadowMap"),s=new i(o,e.vertexShaderBillboardDepth,l.source,n.Default3D,l.defines),f=new i(o,e.vertexShaderBillboardDepth,d.source,n.Default3D,d.defines);a.add("billboard",u),a.add("billboardDepth",s),a.add("billboardDepthShadowMap",f)},u});