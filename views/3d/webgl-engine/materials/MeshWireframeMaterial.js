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

define(["./internal/MaterialUtil","../lib/Util","../lib/RenderSlot"],function(t,e,i){var r=e.VertexAttrConstants,n=function(e,i){t.basicMaterialConstructor(this,i);var n=t.Layouts.Pos,a=n.getStride();this.dispose=function(){},this.setParameterValues=function(){},this.getColor=function(){return e},this.getOutputAmount=function(t){return t*a*2},this.getVertexBufferLayout=function(){return n},this.fillInterleaved=function(t,e,i,n,o,s){var u=t.faces.indices[r.POSITION],f=t.vertexAttr[r.POSITION],l=u.length,c=f.size,h=f.data,d=e;if(void 0!==d&&c>=3)for(var g=0;l>g;++g){var v=c*u[g],b=h[v],A=h[v+1],m=h[v+2];o[s]=d[0]*b+d[4]*A+d[8]*m+d[12],o[s+1]=d[1]*b+d[5]*A+d[9]*m+d[13],o[s+2]=d[2]*b+d[6]*A+d[10]*m+d[14],s+=a;var x=c*u[g+(g%3==2?-2:1)];b=h[x],A=h[x+1],m=h[x+2],o[s]=d[0]*b+d[4]*A+d[8]*m+d[12],o[s+1]=d[1]*b+d[5]*A+d[9]*m+d[13],o[s+2]=d[2]*b+d[6]*A+d[10]*m+d[14],s+=a}else for(g=0;l>g;++g){v=c*u[g];for(var I=0;c>I;++I)o[s+I]=h[v+I];for(s+=a,x=c*u[g+(g%3==2?-2:1)],I=0;c>I;++I)o[s+I]=h[x+I];s+=a}},this.intersect=t.intersectTriangleGeometry,this.getGLMaterials=function(){return{color:o,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},this.getAllTextureIds=function(){return[]}},o=function(e,r){t.basicGLMaterialConstructor(this,e);var n=r.get("simple"),o=e.getColor();this.beginSlot=function(t){return t===i.OPAQUE_MATERIAL},this.getProgram=function(){return n},this.bind=function(t){n.use(),n.uniform4fv("color",o),e.getVertexBufferLayout().enableVertexAttribArrays(t,n)},this.release=function(t){e.getVertexBufferLayout().disableVertexAttribArrays(t,n)},this.bindView=function(e,i){t.bindView(i.origin,i.view,n)},this.bindInstance=function(t,e){n.uniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){return t.LINES}};return n});