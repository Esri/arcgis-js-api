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

define(["./internal/MaterialUtil","../lib/Util","../lib/gl-matrix","../lib/RenderSlot"],function(t,e,i,r){var n=i.vec3d,o=i.vec2d,a=i.mat4d,s=e.VertexAttrConstants,l=n.create(),u=n.create(),c=n.create(),f=n.create(),d=o.create(),h=o.create(),g=n.create(),v=n.create(),p=function(i,r,o,L){"string"==typeof o&&(L=o,o=void 0),t.basicMaterialConstructor(this,L),this.lineType=o||p.LINES;var y=t.Layouts.Pos,I=y.getStride();this.canBeMerged=this.lineType===p.LINES,this.setColor=function(t){r=t,this.notifyDirty("matChanged")},this.getColor=function(){return r},this.dispose=function(){},this.getOutputAmount=function(t){var e=t/2+1;return this.lineType===p.STRIP?e*I:this.lineType===p.LINES?(2*e-2)*I:void 0},this.getVertexBufferLayout=function(){return y},this.fillInterleaved=function(t,e,i,r,n,o){var a,l=t.vertexAttr[s.POSITION].data;if(e||this.lineType===p.LINES){var u=l.length/3;for(a=0;u>a;a++){var c=3*a,f=l[c],d=l[c+1],h=l[c+2];if(e){var g=f,v=d,b=h;f=e[0]*g+e[4]*v+e[8]*b+e[12],d=e[1]*g+e[5]*v+e[9]*b+e[13],h=e[2]*g+e[6]*v+e[10]*b+e[14]}n[o++]=f,n[o++]=d,n[o++]=h,this.lineType===p.LINES&&0!==a&&a!==u-1&&(n[o++]=f,n[o++]=d,n[o++]=h)}}else for(a=0;a<l.length;a++)n[o++]=l[a]},this.intersect=function(t,i,r,o,s,p,b,L,y,I,m,A){if(A){for(var S,V,E,P,T=t.getData().getVertexAttr("position").position.data,N=Number.MAX_VALUE,x=0;x<T.length-5;x+=3){if(l[0]=T[x],l[1]=T[x+1],l[2]=T[x+2],a.multiplyVec3(r,l),u[0]=T[x+3],u[1]=T[x+4],u[2]=T[x+5],a.multiplyVec3(r,u),y.projectPoint(l,d),y.projectPoint(u,h),d[2]<0&&h[2]>0)n.subtract(l,u,c),V=y.frustumPlanes,E=-(n.dot(V[4],l)+V[4][3]),P=E/n.dot(c,V[4]),n.scale(c,P,c),n.add(l,c,l),y.projectPoint(l,d);else if(d[2]>0&&h[2]<0)n.subtract(u,l,c),V=y.frustumPlanes,E=-(n.dot(V[4],u)+V[4][3]),P=E/n.dot(c,V[4]),n.scale(c,P,c),n.add(u,c,u),y.projectPoint(u,h);else if(d[2]<0&&h[2]<0)continue;var M=e.projectVectorVector2D(d,h,o);N>M&&(N=M,S=x,n.set(l,g),n.set(u,v))}if(2>N){var D=e.linelineDistance3D(g,v,s,p),C=Number.MAX_VALUE;if(D[0]){var B=D[2];n.subtract(B,s,f);var R=n.length(f);n.scale(f,1/R),C=.98*R/n.dist(s,p)}m(C,f)}}},this.getGLMaterials=function(){return{color:b,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},this.getAllTextureIds=function(){return[]}};p.STRIP=1,p.LINES=2;var b=function(e,i){t.basicGLMaterialConstructor(this,e);var n=i.get("simple"),o=e.getColor();this.beginSlot=function(t){return t===r.OPAQUE_MATERIAL},this.getProgram=function(){return n},this.bind=function(t){n.use(),n.uniform4fv("color",o),e.getVertexBufferLayout().enableVertexAttribArrays(t,n),o[3]<1&&t.enable(t.BLEND)},this.release=function(t){e.getVertexBufferLayout().disableVertexAttribArrays(t,n),o[3]<1&&t.disable(t.BLEND)},this.bindView=function(e,i){t.bindView(i.origin,i.view,n)},this.bindInstance=function(t,e){n.uniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){return e.lineType===p.STRIP?t.LINE_STRIP:t.LINES}};return p});