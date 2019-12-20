// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/arrayUtils","../../../../../core/mathUtils","../../../../../core/typedArrayUtil","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/mathUtils"],function(e,r,t,c,a,o,n,i){function s(e,r,n,i){void 0===i&&(i=A);var s=e.vertices.position,p=e.vertices.componentIndex,h=c.deg2rad(i.anglePlanar),y=c.deg2rad(i.angleSignificantEdge),w=Math.cos(y),x=Math.cos(h),I=m.edge,V=I.position0,b=I.position1,N=I.faceNormal0,E=I.faceNormal1,F=d(e),U=g(e),M=U.length/4,P=r.allocate(M),D=0,S=M,_=n.allocate(S),j=0,q=0,z=0,C=t.range(0,M),L=new Float32Array(M);a.forEach(L,function(e,r,t){s.getVec(U[4*r+0],V),s.getVec(U[4*r+1],b),t[r]=o.vec3.distance(V,b)}),C.sort(function(e,r){return L[r]-L[e]});for(var O=new Array,T=new Array,k=0;k<M;k++){var B=C[k],G=L[B],H=U[4*B+0],J=U[4*B+1],K=U[4*B+2],Q=U[4*B+3],R=Q===u;if(s.getVec(H,V),s.getVec(J,b),R)o.vec3.set(N,F[3*K+0],F[3*K+1],F[3*K+2]),o.vec3.copy(E,N),I.componentIndex=p.get(H),I.cosAngle=o.vec3.dot(N,E);else{if(o.vec3.set(N,F[3*K+0],F[3*K+1],F[3*K+2]),o.vec3.set(E,F[3*Q+0],F[3*Q+1],F[3*Q+2]),I.componentIndex=p.get(H),I.cosAngle=o.vec3.dot(N,E),l(I,x))continue;I.cosAngle<-.9999&&o.vec3.copy(E,N)}q+=G,z++,R||v(I,w)?(r.write(P,D++,I),O.push(G)):f(I,h)&&(n.write(_,j++,I),T.push(G))}var W=new Float32Array(O.reverse()),X=new Float32Array(T.reverse());return{regular:{instancesData:r.trim(P,D),lodInfo:{lengths:W}},silhouette:{instancesData:n.trim(_,j),lodInfo:{lengths:X}},averageEdgeLength:q/z}}function v(e,r){return e.cosAngle<r}function l(e,r){return e.cosAngle>r}function f(e,r){var t=c.acosClamped(e.cosAngle),a=m.fwd,n=m.ortho;return i.directionFromTo(a,e.position1,e.position0),t*(o.vec3.dot(o.vec3.cross(n,e.faceNormal0,e.faceNormal1),a)>0?-1:1)>r}function g(e){for(var r=e.faces.length/3,t=e.faces,c=e.neighbors,a=0,o=0;o<r;o++){var n=c[3*o+0],i=c[3*o+1],s=c[3*o+2],v=t[3*o+0],l=t[3*o+1],f=t[3*o+2];a+=n===u||v<l?1:0,a+=i===u||l<f?1:0,a+=s===u||f<v?1:0}for(var g=new Int32Array(4*a),d=0,o=0;o<r;o++){var n=c[3*o+0],i=c[3*o+1],s=c[3*o+2],v=t[3*o+0],l=t[3*o+1],f=t[3*o+2];(n===u||v<l)&&(g[d++]=v,g[d++]=l,g[d++]=o,g[d++]=n),(i===u||l<f)&&(g[d++]=l,g[d++]=f,g[d++]=o,g[d++]=i),(s===u||f<v)&&(g[d++]=f,g[d++]=v,g[d++]=o,g[d++]=s)}return g}function d(e){for(var r=e.faces.length/3,t=e.vertices.position,c=e.faces,a=h.v0,n=h.v1,i=h.v2,s=new Float32Array(3*r),v=0;v<r;v++){var l=c[3*v+0],f=c[3*v+1],g=c[3*v+2];t.getVec(l,a),t.getVec(f,n),t.getVec(g,i),o.vec3.subtract(n,n,a),o.vec3.subtract(i,i,a),o.vec3.cross(a,n,i),o.vec3.normalize(a,a),s[3*v+0]=a[0],s[3*v+1]=a[1],s[3*v+2]=a[2]}return s}Object.defineProperty(r,"__esModule",{value:!0});var u=-1;r.extractEdges=s;var p={position0:n.vec3f64.create(),position1:n.vec3f64.create(),faceNormal0:n.vec3f64.create(),faceNormal1:n.vec3f64.create(),componentIndex:0,cosAngle:0},m={edge:p,ortho:n.vec3f64.create(),fwd:n.vec3f64.create()},h={v0:n.vec3f64.create(),v1:n.vec3f64.create(),v2:n.vec3f64.create()},A={anglePlanar:4,angleSignificantEdge:35}});