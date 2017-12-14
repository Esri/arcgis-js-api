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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["./internal/MaterialUtil","../lib/Util","../lib/RenderSlot","../lib/DefaultVertexBufferLayouts"],function(t,e,i,n){var r=e.VertexAttrConstants,o=function(e,i){t.basicMaterialConstructor(this,i);var o=n.Pos3,a=o.getStride();this.dispose=function(){},this.setParameterValues=function(){},this.getColor=function(){return e},this.getOutputAmount=function(t){return t*a*2},this.getVertexBufferLayout=function(){return o},this.fillInterleaved=function(t,e,i,n,o,s){var l=t.indices[r.POSITION],u=t.vertexAttr[r.POSITION],f=l.length,c=u.size,d=u.data,h=e;if(void 0!==h&&c>=3)for(var g=0;f>g;++g){var v=c*l[g],b=d[v],A=d[v+1],S=d[v+2];o[s]=h[0]*b+h[4]*A+h[8]*S+h[12],o[s+1]=h[1]*b+h[5]*A+h[9]*S+h[13],o[s+2]=h[2]*b+h[6]*A+h[10]*S+h[14],s+=a;var m=c*l[g+(g%3==2?-2:1)];b=d[m],A=d[m+1],S=d[m+2],o[s]=h[0]*b+h[4]*A+h[8]*S+h[12],o[s+1]=h[1]*b+h[5]*A+h[9]*S+h[13],o[s+2]=h[2]*b+h[6]*A+h[10]*S+h[14],s+=a}else for(g=0;f>g;++g){v=c*l[g];for(var I=0;c>I;++I)o[s+I]=d[v+I];for(s+=a,m=c*l[g+(g%3==2?-2:1)],I=0;c>I;++I)o[s+I]=d[m+I];s+=a}},this.intersect=t.intersectTriangleGeometry,this.getGLMaterials=function(){return{color:s,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},this.getAllTextureIds=function(){return[]}},s=function(e,n){t.basicGLMaterialConstructor(this,e);var r=n.get("simple"),o=e.getColor();this.beginSlot=function(t){return t===i.OPAQUE_MATERIAL},this.getProgram=function(){return r},this.bind=function(t,e){t.bindProgram(r),r.setUniform4fv("color",o),t.setBlendingEnabled(o[3]<1),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA),t.setDepthTestEnabled(!0)},this.release=function(t){},this.bindView=function(e,i){t.bindView(i.origin,i.view,r)},this.bindInstance=function(t,e){r.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var e=t.gl;return e.LINES}};return o});