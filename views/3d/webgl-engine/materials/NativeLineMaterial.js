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

define(["./internal/MaterialUtil","../lib/Util","../lib/gl-matrix","../lib/RenderSlot","../lib/DefaultVertexBufferLayouts","../lib/ComponentUtils","../../../webgl/Util"],function(t,e,i,n,r,o,a){var s=i.vec3d,l=i.vec2d,c=i.mat4d,u=e.VertexAttrConstants,f=s.create(),d=s.create(),g=s.create(),h=s.create(),b=l.create(),m=l.create(),v=s.create(),p=s.create(),A=[],S=function(i,n,l){t.basicMaterialConstructor(this,l);var S=r.Pos3,L=a.getStride(S)/4;this.canBeMerged=!0,this.setColor=function(t){n=t,this.notifyDirty("matChanged")},this.getColor=function(){return n},this.dispose=function(){},this.getOutputAmount=function(t){return t*L},this.getVertexBufferLayout=function(){return S},this.fillInterleaved=function(t,e,i,n,r,o){var a=t.vertexAttr[u.POSITION].data;if(e){var s=a;a=A;for(var l=0;l<s.length;l+=3){var c=s[l],f=s[l+1],d=s[l+2];a[l]=e[0]*c+e[4]*f+e[8]*d+e[12],a[l+1]=e[1]*c+e[5]*f+e[9]*d+e[13],a[l+2]=e[2]*c+e[6]*f+e[10]*d+e[14]}}for(var g=t.indices[u.POSITION],l=0;l<g.length;l++){var h=3*g[l];r[o++]=a[h],r[o++]=a[h+1],r[o++]=a[h+2]}},this.intersect=function(t,i,n,r,a,l,u){if(r.isSelection&&!o.isAllHidden(i.componentVisibilities,t.data.componentOffsets)){for(var A,S,P,M=t.getData().getVertexAttr("position").position.data,L=Number.MAX_VALUE,E=r.camera,I=r.point,U=0;U<M.length-5;U+=3){if(f[0]=M[U],f[1]=M[U+1],f[2]=M[U+2],c.multiplyVec3(n,f),d[0]=M[U+3],d[1]=M[U+4],d[2]=M[U+5],c.multiplyVec3(n,d),E.projectPoint(f,b),E.projectPoint(d,m),b[2]<0&&m[2]>0)s.subtract(f,d,g),A=E.frustumPlanes,S=-(s.dot(A[4],f)+A[4][3]),P=S/s.dot(g,A[4]),s.scale(g,P,g),s.add(f,g,f),E.projectPoint(f,b);else if(b[2]>0&&m[2]<0)s.subtract(d,f,g),A=E.frustumPlanes,S=-(s.dot(A[4],d)+A[4][3]),P=S/s.dot(g,A[4]),s.scale(g,P,g),s.add(d,g,d),E.projectPoint(d,m);else if(b[2]<0&&m[2]<0)continue;var V=e.pointLineSegmentDistance2D(b,m,I);L>V&&(L=V,s.set(f,v),s.set(d,p))}var C=r.p0,D=r.p1;if(2>L){var N=e.lineSegmentLineSegmentDistance3D(v,p,C,D),O=Number.MAX_VALUE;if(N[0]){var _=N[2];s.subtract(_,C,h);var w=s.length(h);s.scale(h,1/w),O=w/s.dist(C,D)}u(O,h)}}},this.getGLMaterials=function(){return{color:P,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:M}},this.getAllTextureIds=function(){return[]}},P=function(e,i){t.basicGLMaterialConstructor(this,e);var r=i.get("simple"),o=e.getColor();this.beginSlot=function(t){return t===n.OPAQUE_MATERIAL},this.getProgram=function(){return r},this.bind=function(t,e){t.bindProgram(r),r.setUniform4fv("color",o),t.setBlendingEnabled(o[3]<1),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA),t.setDepthTestEnabled(!0)},this.release=function(t){o[3]<1&&t.setBlendingEnabled(!1)},this.bindView=function(e,i){t.bindView(i.origin,i.view,r)},this.bindInstance=function(t,e){r.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){return t.gl.LINES}},M=function(e,i){t.basicGLMaterialConstructor(this,e);var r=i.get("highlight");this.beginSlot=function(t){return t===n.OPAQUE_MATERIAL},this.getProgram=function(){return r},this.bind=function(t,e){t.bindProgram(r),t.setDepthTestEnabled(!0)},this.release=function(t){},this.bindView=function(e,i){t.bindView(i.origin,i.view,r)},this.bindInstance=function(t,e){r.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){return t.gl.LINES}};return S});