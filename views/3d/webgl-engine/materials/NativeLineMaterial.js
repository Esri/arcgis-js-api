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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["./internal/MaterialUtil","../lib/Util","../lib/gl-matrix","../lib/RenderSlot","../lib/DefaultVertexBufferLayouts","../lib/ComponentUtils","../../../webgl/Util"],function(t,e,i,n,r,o,a){var s=i.vec3d,l=i.vec2d,c=i.mat4d,u=e.VertexAttrConstants,f=s.create(),d=s.create(),h=s.create(),g=s.create(),p=l.create(),v=l.create(),b=s.create(),m=s.create(),S=function(i,n,l,E){"string"==typeof l&&(E=l,l=void 0),t.basicMaterialConstructor(this,E),this.lineType=l||S.LINES;var P=r.Pos3,A=a.getStride(P)/4;this.canBeMerged=this.lineType===S.LINES,this.setColor=function(t){n=t,this.notifyDirty("matChanged")},this.getColor=function(){return n},this.dispose=function(){},this.getOutputAmount=function(t){var e=t/2+1;return this.lineType===S.STRIP?e*A:this.lineType===S.LINES?(2*e-2)*A:void 0},this.getVertexBufferLayout=function(){return P},this.fillInterleaved=function(t,e,i,n,r,o){var a,s=t.vertexAttr[u.POSITION].data;if(e||this.lineType===S.LINES){var l=s.length/3;for(a=0;l>a;a++){var c=3*a,f=s[c],d=s[c+1],h=s[c+2];if(e){var g=f,p=d,v=h;f=e[0]*g+e[4]*p+e[8]*v+e[12],d=e[1]*g+e[5]*p+e[9]*v+e[13],h=e[2]*g+e[6]*p+e[10]*v+e[14]}r[o++]=f,r[o++]=d,r[o++]=h,this.lineType===S.LINES&&0!==a&&a!==l-1&&(r[o++]=f,r[o++]=d,r[o++]=h)}}else for(a=0;a<s.length;a++)r[o++]=s[a]},this.intersect=function(t,i,n,r,a,l,u){if(r.isSelection&&!o.isAllHidden(i.componentVisibilities,t.data.componentOffsets)){for(var S,I,L,E=t.getData().getVertexAttr("position").position.data,P=Number.MAX_VALUE,A=r.camera,T=r.point,N=0;N<E.length-5;N+=3){if(f[0]=E[N],f[1]=E[N+1],f[2]=E[N+2],c.multiplyVec3(n,f),d[0]=E[N+3],d[1]=E[N+4],d[2]=E[N+5],c.multiplyVec3(n,d),A.projectPoint(f,p),A.projectPoint(d,v),p[2]<0&&v[2]>0)s.subtract(f,d,h),S=A.frustumPlanes,I=-(s.dot(S[4],f)+S[4][3]),L=I/s.dot(h,S[4]),s.scale(h,L,h),s.add(f,h,f),A.projectPoint(f,p);else if(p[2]>0&&v[2]<0)s.subtract(d,f,h),S=A.frustumPlanes,I=-(s.dot(S[4],d)+S[4][3]),L=I/s.dot(h,S[4]),s.scale(h,L,h),s.add(d,h,d),A.projectPoint(d,v);else if(p[2]<0&&v[2]<0)continue;var M=e.pointLineSegmentDistance2D(p,v,T);P>M&&(P=M,s.set(f,b),s.set(d,m))}var y=r.p0,U=r.p1;if(2>P){var V=e.lineSegmentLineSegmentDistance3D(b,m,y,U),_=Number.MAX_VALUE;if(V[0]){var C=V[2];s.subtract(C,y,g);var R=s.length(g);s.scale(g,1/R),_=R/s.dist(y,U)}u(_,g)}}},this.getGLMaterials=function(){return{color:I,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:L}},this.getAllTextureIds=function(){return[]}};S.STRIP=1,S.LINES=2;var I=function(e,i){t.basicGLMaterialConstructor(this,e);var r=i.get("simple"),o=e.getColor();this.beginSlot=function(t){return t===n.OPAQUE_MATERIAL},this.getProgram=function(){return r},this.bind=function(t,e){t.bindProgram(r),r.setUniform4fv("color",o),t.setBlendingEnabled(o[3]<1),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA),t.setDepthTestEnabled(!0)},this.release=function(t){o[3]<1&&t.setBlendingEnabled(!1)},this.bindView=function(e,i){t.bindView(i.origin,i.view,r)},this.bindInstance=function(t,e){r.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var i=t.gl;return e.lineType===S.STRIP?i.LINE_STRIP:i.LINES}},L=function(e,i){t.basicGLMaterialConstructor(this,e);var r=i.get("highlight");this.beginSlot=function(t){return t===n.OPAQUE_MATERIAL},this.getProgram=function(){return r},this.bind=function(t,e){t.bindProgram(r),t.setDepthTestEnabled(!0)},this.release=function(t){},this.bindView=function(e,i){t.bindView(i.origin,i.view,r)},this.bindInstance=function(t,e){r.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var i=t.gl;return e.lineType===S.STRIP?i.LINE_STRIP:i.LINES}};return S});