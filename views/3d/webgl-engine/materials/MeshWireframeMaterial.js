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

define(["./internal/MaterialUtil","../lib/Util","../lib/RenderSlot","../lib/DefaultVertexBufferLayouts"],function(t,i,e,r){var n=i.VertexAttrConstants,o=function(i,e){t.basicMaterialConstructor(this,e);var o=r.Pos3,a=o.getStride();this.dispose=function(){},this.setParameterValues=function(){},this.getColor=function(){return i},this.getOutputAmount=function(t){return t*a*2},this.getVertexBufferLayout=function(){return o},this.fillInterleaved=function(t,i,e,r,o,s){var u=t.faces.indices[n.POSITION],f=t.vertexAttr[n.POSITION],l=u.length,c=f.size,h=f.data,d=i;if(void 0!==d&&c>=3)for(var g=0;l>g;++g){var v=c*u[g],b=h[v],m=h[v+1],I=h[v+2];o[s]=d[0]*b+d[4]*m+d[8]*I+d[12],o[s+1]=d[1]*b+d[5]*m+d[9]*I+d[13],o[s+2]=d[2]*b+d[6]*m+d[10]*I+d[14],s+=a;var M=c*u[g+(g%3==2?-2:1)];b=h[M],m=h[M+1],I=h[M+2],o[s]=d[0]*b+d[4]*m+d[8]*I+d[12],o[s+1]=d[1]*b+d[5]*m+d[9]*I+d[13],o[s+2]=d[2]*b+d[6]*m+d[10]*I+d[14],s+=a}else for(g=0;l>g;++g){v=c*u[g];for(var A=0;c>A;++A)o[s+A]=h[v+A];for(s+=a,M=c*u[g+(g%3==2?-2:1)],A=0;c>A;++A)o[s+A]=h[M+A];s+=a}},this.intersect=t.intersectTriangleGeometry,this.getGLMaterials=function(){return{color:s,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},this.getAllTextureIds=function(){return[]}},s=function(i,r){t.basicGLMaterialConstructor(this,i);var n=r.get("simple"),o=i.getColor();this.beginSlot=function(t){return t===e.OPAQUE_MATERIAL},this.getProgram=function(){return n},this.bind=function(t,i){t.bindProgram(n),n.setUniform4fv("color",o)},this.release=function(t){},this.bindView=function(i,e){t.bindView(e.origin,e.view,n)},this.bindInstance=function(t,i){n.setUniformMatrix4fv("model",i.transformation)},this.getDrawMode=function(t){var i=t.gl;return i.LINES}};return o});