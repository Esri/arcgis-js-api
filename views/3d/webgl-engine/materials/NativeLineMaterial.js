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

define(["./internal/MaterialUtil","../lib/Util","../lib/gl-matrix","../lib/RenderSlot","../lib/DefaultVertexBufferLayouts","../../../webgl/Util"],function(t,e,i,n,r,o){var a=i.vec3d,s=i.vec2d,l=i.mat4d,c=e.VertexAttrConstants,u=a.create(),f=a.create(),d=a.create(),h=a.create(),g=s.create(),v=s.create(),p=a.create(),b=a.create(),m=function(i,n,s,S){"string"==typeof s&&(S=s,s=void 0),t.basicMaterialConstructor(this,S),this.lineType=s||m.LINES;var L=r.Pos3,P=o.getStride(L)/4;this.canBeMerged=this.lineType===m.LINES,this.setColor=function(t){n=t,this.notifyDirty("matChanged")},this.getColor=function(){return n},this.dispose=function(){},this.getOutputAmount=function(t){var e=t/2+1;return this.lineType===m.STRIP?e*P:this.lineType===m.LINES?(2*e-2)*P:void 0},this.getVertexBufferLayout=function(){return L},this.fillInterleaved=function(t,e,i,n,r,o){var a,s=t.vertexAttr[c.POSITION].data;if(e||this.lineType===m.LINES){var l=s.length/3;for(a=0;l>a;a++){var u=3*a,f=s[u],d=s[u+1],h=s[u+2];if(e){var g=f,v=d,p=h;f=e[0]*g+e[4]*v+e[8]*p+e[12],d=e[1]*g+e[5]*v+e[9]*p+e[13],h=e[2]*g+e[6]*v+e[10]*p+e[14]}r[o++]=f,r[o++]=d,r[o++]=h,this.lineType===m.LINES&&0!==a&&a!==l-1&&(r[o++]=f,r[o++]=d,r[o++]=h)}}else for(a=0;a<s.length;a++)r[o++]=s[a]},this.intersect=function(t,i,n,r,o,s,c){if(r.isSelection){for(var m,I,S,L,P=t.getData().getVertexAttr("position").position.data,y=Number.MAX_VALUE,E=r.camera,T=r.point,A=0;A<P.length-5;A+=3){if(u[0]=P[A],u[1]=P[A+1],u[2]=P[A+2],l.multiplyVec3(n,u),f[0]=P[A+3],f[1]=P[A+4],f[2]=P[A+5],l.multiplyVec3(n,f),E.projectPoint(u,g),E.projectPoint(f,v),g[2]<0&&v[2]>0)a.subtract(u,f,d),I=E.frustumPlanes,S=-(a.dot(I[4],u)+I[4][3]),L=S/a.dot(d,I[4]),a.scale(d,L,d),a.add(u,d,u),E.projectPoint(u,g);else if(g[2]>0&&v[2]<0)a.subtract(f,u,d),I=E.frustumPlanes,S=-(a.dot(I[4],f)+I[4][3]),L=S/a.dot(d,I[4]),a.scale(d,L,d),a.add(f,d,f),E.projectPoint(f,v);else if(g[2]<0&&v[2]<0)continue;var V=e.projectVectorVector2D(g,v,T);y>V&&(y=V,m=A,a.set(u,p),a.set(f,b))}var M=r.p0,N=r.p1;if(2>y){var x=e.linelineDistance3D(p,b,M,N),U=Number.MAX_VALUE;if(x[0]){var C=x[2];a.subtract(C,M,h);var D=a.length(h);a.scale(h,1/D),U=.98*D/a.dist(M,N)}c(U,h)}}},this.getGLMaterials=function(){return{color:I,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},this.getAllTextureIds=function(){return[]}};m.STRIP=1,m.LINES=2;var I=function(e,i){t.basicGLMaterialConstructor(this,e);var r=i.get("simple"),o=e.getColor();this.beginSlot=function(t){return t===n.OPAQUE_MATERIAL},this.getProgram=function(){return r},this.bind=function(t,e){t.bindProgram(r),r.setUniform4fv("color",o),o[3]<1&&t.setBlendingEnabled(!0)},this.release=function(t){o[3]<1&&t.setBlendingEnabled(!1)},this.bindView=function(e,i){t.bindView(i.origin,i.view,r)},this.bindInstance=function(t,e){r.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var i=t.gl;return e.lineType===m.STRIP?i.LINE_STRIP:i.LINES}};return m});