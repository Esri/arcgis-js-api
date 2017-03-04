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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./internal/MaterialUtil","../lib/Util","../lib/gl-matrix","../lib/RenderSlot","../lib/DefaultVertexBufferLayouts","../../../webgl/Util"],function(t,e,i,n,r,o){var a=i.vec3d,s=i.vec2d,l=i.mat4d,c=e.VertexAttrConstants,u=a.create(),f=a.create(),d=a.create(),h=a.create(),g=s.create(),v=s.create(),p=a.create(),S=a.create(),b=function(i,n,s,m){"string"==typeof s&&(m=s,s=void 0),t.basicMaterialConstructor(this,m),this.lineType=s||b.LINES;var A=r.Pos3,E=o.getStride(A)/4;this.canBeMerged=this.lineType===b.LINES,this.setColor=function(t){n=t,this.notifyDirty("matChanged")},this.getColor=function(){return n},this.dispose=function(){},this.getOutputAmount=function(t){var e=t/2+1;return this.lineType===b.STRIP?e*E:this.lineType===b.LINES?(2*e-2)*E:void 0},this.getVertexBufferLayout=function(){return A},this.fillInterleaved=function(t,e,i,n,r,o){var a,s=t.vertexAttr[c.POSITION].data;if(e||this.lineType===b.LINES){var l=s.length/3;for(a=0;l>a;a++){var u=3*a,f=s[u],d=s[u+1],h=s[u+2];if(e){var g=f,v=d,p=h;f=e[0]*g+e[4]*v+e[8]*p+e[12],d=e[1]*g+e[5]*v+e[9]*p+e[13],h=e[2]*g+e[6]*v+e[10]*p+e[14]}r[o++]=f,r[o++]=d,r[o++]=h,this.lineType===b.LINES&&0!==a&&a!==l-1&&(r[o++]=f,r[o++]=d,r[o++]=h)}}else for(a=0;a<s.length;a++)r[o++]=s[a]},this.intersect=function(t,i,n,r,o,s,c){if(r.isSelection){for(var b,I,m,A,E=t.getData().getVertexAttr("position").position.data,L=Number.MAX_VALUE,P=r.camera,N=r.point,T=0;T<E.length-5;T+=3){if(u[0]=E[T],u[1]=E[T+1],u[2]=E[T+2],l.multiplyVec3(n,u),f[0]=E[T+3],f[1]=E[T+4],f[2]=E[T+5],l.multiplyVec3(n,f),P.projectPoint(u,g),P.projectPoint(f,v),g[2]<0&&v[2]>0)a.subtract(u,f,d),I=P.frustumPlanes,m=-(a.dot(I[4],u)+I[4][3]),A=m/a.dot(d,I[4]),a.scale(d,A,d),a.add(u,d,u),P.projectPoint(u,g);else if(g[2]>0&&v[2]<0)a.subtract(f,u,d),I=P.frustumPlanes,m=-(a.dot(I[4],f)+I[4][3]),A=m/a.dot(d,I[4]),a.scale(d,A,d),a.add(f,d,f),P.projectPoint(f,v);else if(g[2]<0&&v[2]<0)continue;var y=e.projectVectorVector2D(g,v,N);L>y&&(L=y,b=T,a.set(u,p),a.set(f,S))}var M=r.p0,V=r.p1;if(2>L){var _=e.linelineDistance3D(p,S,M,V),C=Number.MAX_VALUE;if(_[0]){var U=_[2];a.subtract(U,M,h);var R=a.length(h);a.scale(h,1/R),C=R/a.dist(M,V)}c(C,h)}}},this.getGLMaterials=function(){return{color:I,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},this.getAllTextureIds=function(){return[]}};b.STRIP=1,b.LINES=2;var I=function(e,i){t.basicGLMaterialConstructor(this,e);var r=i.get("simple"),o=e.getColor();this.beginSlot=function(t){return t===n.OPAQUE_MATERIAL},this.getProgram=function(){return r},this.bind=function(t,e){t.bindProgram(r),r.setUniform4fv("color",o),t.setBlendingEnabled(o[3]<1),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA),t.setDepthTestEnabled(!0)},this.release=function(t){o[3]<1&&t.setBlendingEnabled(!1)},this.bindView=function(e,i){t.bindView(i.origin,i.view,r)},this.bindInstance=function(t,e){r.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var i=t.gl;return e.lineType===b.STRIP?i.LINE_STRIP:i.LINES}};return b});