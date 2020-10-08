// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../core/arrayUtils","../../../../../core/mathUtils","../../../../../core/typedArrayUtil","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/mathUtils"],(function(e,t,r,c,o,a,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractEdges=void 0;function s(e,t){return e.cosAngle<t}function v(e,t){return e.cosAngle>t}function l(e,t){var r=c.acosClamped(e.cosAngle),o=f.fwd,n=f.ortho;return i.directionFromTo(o,e.position1,e.position0),r*(a.vec3.dot(a.vec3.cross(n,e.faceNormal0,e.faceNormal1),o)>0?-1:1)>t}t.extractEdges=function(e,t,n,i){void 0===i&&(i=d);var u=e.vertices.position,p=e.vertices.componentIndex,m=c.deg2rad(i.anglePlanar),h=c.deg2rad(i.angleSignificantEdge),A=Math.cos(h),y=Math.cos(m),w=f.edge,x=w.position0,I=w.position1,V=w.faceNormal0,b=w.faceNormal1,E=function(e){for(var t=e.faces.length/3,r=e.vertices.position,c=e.faces,o=g.v0,n=g.v1,i=g.v2,s=new Float32Array(3*t),v=0;v<t;v++){var l=c[3*v+0],f=c[3*v+1],d=c[3*v+2];r.getVec(l,o),r.getVec(f,n),r.getVec(d,i),a.vec3.subtract(n,n,o),a.vec3.subtract(i,i,o),a.vec3.cross(o,n,i),a.vec3.normalize(o,o),s[3*v+0]=o[0],s[3*v+1]=o[1],s[3*v+2]=o[2]}return s}(e),N=function(e){for(var t=e.faces.length/3,r=e.faces,c=e.neighbors,o=0,a=0;a<t;a++){var n=c[3*a+0],i=c[3*a+1],s=c[3*a+2],v=r[3*a+0],l=r[3*a+1],f=r[3*a+2];o+=-1===n||v<l?1:0,o+=-1===i||l<f?1:0,o+=-1===s||f<v?1:0}var g=new Int32Array(4*o),d=0;for(a=0;a<t;a++){n=c[3*a+0],i=c[3*a+1],s=c[3*a+2],v=r[3*a+0],l=r[3*a+1],f=r[3*a+2];(-1===n||v<l)&&(g[d++]=v,g[d++]=l,g[d++]=a,g[d++]=n),(-1===i||l<f)&&(g[d++]=l,g[d++]=f,g[d++]=a,g[d++]=i),(-1===s||f<v)&&(g[d++]=f,g[d++]=v,g[d++]=a,g[d++]=s)}return g}(e),F=N.length/4,U=t.allocate(F),M=0,P=F,D=n.allocate(P),S=0,_=0,j=0,q=r.range(0,F),z=new Float32Array(F);o.forEach(z,(function(e,t,r){u.getVec(N[4*t+0],x),u.getVec(N[4*t+1],I),r[t]=a.vec3.distance(x,I)})),q.sort((function(e,t){return z[t]-z[e]}));for(var C=new Array,L=new Array,O=0;O<F;O++){var T=q[O],k=z[T],B=N[4*T+0],G=N[4*T+1],H=N[4*T+2],J=N[4*T+3],K=-1===J;if(u.getVec(B,x),u.getVec(G,I),K)a.vec3.set(V,E[3*H+0],E[3*H+1],E[3*H+2]),a.vec3.copy(b,V),w.componentIndex=p.get(B),w.cosAngle=a.vec3.dot(V,b);else{if(a.vec3.set(V,E[3*H+0],E[3*H+1],E[3*H+2]),a.vec3.set(b,E[3*J+0],E[3*J+1],E[3*J+2]),w.componentIndex=p.get(B),w.cosAngle=a.vec3.dot(V,b),v(w,y))continue;w.cosAngle<-.9999&&a.vec3.copy(b,V)}_+=k,j++,K||s(w,A)?(t.write(U,M++,w),C.push(k)):l(w,m)&&(n.write(D,S++,w),L.push(k))}var Q=new Float32Array(C.reverse()),R=new Float32Array(L.reverse());return{regular:{instancesData:t.trim(U,M),lodInfo:{lengths:Q}},silhouette:{instancesData:n.trim(D,S),lodInfo:{lengths:R}},averageEdgeLength:_/j}};var f={edge:{position0:n.vec3f64.create(),position1:n.vec3f64.create(),faceNormal0:n.vec3f64.create(),faceNormal1:n.vec3f64.create(),componentIndex:0,cosAngle:0},ortho:n.vec3f64.create(),fwd:n.vec3f64.create()},g={v0:n.vec3f64.create(),v1:n.vec3f64.create(),v2:n.vec3f64.create()},d={anglePlanar:4,angleSignificantEdge:35}}));