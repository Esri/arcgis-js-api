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

define(["./internal/MaterialUtil","../lib/Util","../lib/gl-matrix","../lib/RenderSlot","../lib/DefaultVertexBufferLayouts","../lib/ComponentUtils","../../../webgl/Util"],function(t,e,i,n,r,o,a){var s=i.vec3d,l=i.vec2d,c=i.mat4d,u=e.VertexAttrConstants,f=s.create(),d=s.create(),h=s.create(),g=s.create(),p=l.create(),v=l.create(),b=s.create(),m=s.create(),S=function(i,n,l,P){"string"==typeof l&&(P=l,l=void 0),t.basicMaterialConstructor(this,P),this.lineType=l||S.LINES;var A=r.Pos3,L=a.getStride(A)/4;this.canBeMerged=this.lineType===S.LINES,this.setColor=function(t){n=t,this.notifyDirty("matChanged")},this.getColor=function(){return n},this.dispose=function(){},this.getOutputAmount=function(t){var e=t/2+1;return this.lineType===S.STRIP?e*L:this.lineType===S.LINES?(2*e-2)*L:void 0},this.getVertexBufferLayout=function(){return A},this.fillInterleaved=function(t,e,i,n,r,o){var a,s=t.vertexAttr[u.POSITION].data;if(e||this.lineType===S.LINES){var l=s.length/3;for(a=0;l>a;a++){var c=3*a,f=s[c],d=s[c+1],h=s[c+2];if(e){var g=f,p=d,v=h;f=e[0]*g+e[4]*p+e[8]*v+e[12],d=e[1]*g+e[5]*p+e[9]*v+e[13],h=e[2]*g+e[6]*p+e[10]*v+e[14]}r[o++]=f,r[o++]=d,r[o++]=h,this.lineType===S.LINES&&0!==a&&a!==l-1&&(r[o++]=f,r[o++]=d,r[o++]=h)}}else for(a=0;a<s.length;a++)r[o++]=s[a]},this.intersect=function(t,i,n,r,a,l,u){if(r.isSelection&&!o.isAllHidden(i.componentVisibilities,t.data.componentOffsets)){for(var S,I,E,P=t.getData().getVertexAttr("position").position.data,A=Number.MAX_VALUE,L=r.camera,T=r.point,N=0;N<P.length-5;N+=3){if(f[0]=P[N],f[1]=P[N+1],f[2]=P[N+2],c.multiplyVec3(n,f),d[0]=P[N+3],d[1]=P[N+4],d[2]=P[N+5],c.multiplyVec3(n,d),L.projectPoint(f,p),L.projectPoint(d,v),p[2]<0&&v[2]>0)s.subtract(f,d,h),S=L.frustumPlanes,I=-(s.dot(S[4],f)+S[4][3]),E=I/s.dot(h,S[4]),s.scale(h,E,h),s.add(f,h,f),L.projectPoint(f,p);else if(p[2]>0&&v[2]<0)s.subtract(d,f,h),S=L.frustumPlanes,I=-(s.dot(S[4],d)+S[4][3]),E=I/s.dot(h,S[4]),s.scale(h,E,h),s.add(d,h,d),L.projectPoint(d,v);else if(p[2]<0&&v[2]<0)continue;var M=e.projectVectorVector2D(p,v,T);A>M&&(A=M,s.set(f,b),s.set(d,m))}var y=r.p0,V=r.p1;if(2>A){var U=e.linelineDistance3D(b,m,y,V),_=Number.MAX_VALUE;if(U[0]){var C=U[2];s.subtract(C,y,g);var R=s.length(g);s.scale(g,1/R),_=R/s.dist(y,V)}u(_,g)}}},this.getGLMaterials=function(){return{color:I,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:E}},this.getAllTextureIds=function(){return[]}};S.STRIP=1,S.LINES=2;var I=function(e,i){t.basicGLMaterialConstructor(this,e);var r=i.get("simple"),o=e.getColor();this.beginSlot=function(t){return t===n.OPAQUE_MATERIAL},this.getProgram=function(){return r},this.bind=function(t,e){t.bindProgram(r),r.setUniform4fv("color",o),t.setBlendingEnabled(o[3]<1),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA),t.setDepthTestEnabled(!0)},this.release=function(t){o[3]<1&&t.setBlendingEnabled(!1)},this.bindView=function(e,i){t.bindView(i.origin,i.view,r)},this.bindInstance=function(t,e){r.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var i=t.gl;return e.lineType===S.STRIP?i.LINE_STRIP:i.LINES}},E=function(e,i){t.basicGLMaterialConstructor(this,e);var r=i.get("highlight");this.beginSlot=function(t){return t===n.OPAQUE_MATERIAL},this.getProgram=function(){return r},this.bind=function(t,e){t.bindProgram(r),t.setDepthTestEnabled(!0)},this.release=function(t){},this.bindView=function(e,i){t.bindView(i.origin,i.view,r)},this.bindInstance=function(t,e){r.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var i=t.gl;return e.lineType===S.STRIP?i.LINE_STRIP:i.LINES}};return S});