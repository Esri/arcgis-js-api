// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../../core/arrayUtils","../../../lib/glMatrix","../../../support/mathUtils","../../../support/buffer/typedArrayUtil"],function(e,t,r,a,c,n){function o(e,t,o,f){void 0===f&&(f=h);var p=e.vertices.position,m=e.vertices.componentIndex,A=c.deg2rad(f.anglePlanar),w=c.deg2rad(f.angleSignificantEdge),y=Math.cos(w),x=Math.cos(A),I=u.edge,V=I.position0,b=I.position1,N=I.faceNormal0,E=I.faceNormal1,M=l(e),F=v(e),P=F.length/4,U=t.allocate(P),z=0,D=P,S=o.allocate(D),_=0,j=0,q=0,L=r.range(0,P),O=new Float32Array(P);n.forEach(O,function(e,t,r){p.getVec(F[4*t+0],V),p.getVec(F[4*t+1],b),r[t]=a.vec3d.dist(V,b)}),L.sort(function(e,t){return O[t]-O[e]});for(var k=new Array,B=new Array,C=0;C<P;C++){var G=L[C],H=O[G],J=F[4*G+0],K=F[4*G+1],Q=F[4*G+2],R=F[4*G+3],T=R===g;if(p.getVec(J,V),p.getVec(K,b),T)a.vec3d.set3(M[3*Q+0],M[3*Q+1],M[3*Q+2],N),a.vec3d.set(N,E),I.componentIndex=m.get(J),I.cosAngle=a.vec3d.dot(N,E);else if(a.vec3d.set3(M[3*Q+0],M[3*Q+1],M[3*Q+2],N),a.vec3d.set3(M[3*R+0],M[3*R+1],M[3*R+2],E),I.componentIndex=m.get(J),I.cosAngle=a.vec3d.dot(N,E),s(I,x))continue;j+=H,q++,T||i(I,y)?(t.write(U,z++,I),k.push(H)):d(I,A)&&(o.write(S,_++,I),B.push(H))}var W=new Float32Array(k.reverse()),X=new Float32Array(B.reverse());return{regular:{instancesData:t.trim(U,z),lodInfo:{lengths:W}},silhouette:{instancesData:o.trim(S,_),lodInfo:{lengths:X}},averageEdgeLength:j/q}}function i(e,t){return e.cosAngle<t}function s(e,t){return e.cosAngle>t}function d(e,t){var r=Math.acos(e.cosAngle),c=u.fwd,n=u.ortho;return a.vec3d.normalize(a.vec3d.direction(e.position0,e.position1,c)),r*(a.vec3d.dot(a.vec3d.cross(e.faceNormal0,e.faceNormal1,n),c)>0?-1:1)>t}function v(e){for(var t=e.faces.length/3,r=e.faces,a=e.neighbors,c=0,n=0;n<t;n++){var o=a[3*n+0],i=a[3*n+1],s=a[3*n+2],d=r[3*n+0],v=r[3*n+1],l=r[3*n+2];c+=o===g||d<v?1:0,c+=i===g||v<l?1:0,c+=s===g||l<d?1:0}for(var f=new Int32Array(4*c),u=0,n=0;n<t;n++){var o=a[3*n+0],i=a[3*n+1],s=a[3*n+2],d=r[3*n+0],v=r[3*n+1],l=r[3*n+2];(o===g||d<v)&&(f[u++]=d,f[u++]=v,f[u++]=n,f[u++]=o),(i===g||v<l)&&(f[u++]=v,f[u++]=l,f[u++]=n,f[u++]=i),(s===g||l<d)&&(f[u++]=l,f[u++]=d,f[u++]=n,f[u++]=s)}return f}function l(e){for(var t=e.faces.length/3,r=e.vertices.position,c=e.faces,n=p.v0,o=p.v1,i=p.v2,s=new Float32Array(3*t),d=0;d<t;d++){var v=c[3*d+0],l=c[3*d+1],g=c[3*d+2];r.getVec(v,n),r.getVec(l,o),r.getVec(g,i),a.vec3d.subtract(o,n),a.vec3d.subtract(i,n),a.vec3d.normalize(a.vec3d.cross(o,i,n)),s[3*d+0]=n[0],s[3*d+1]=n[1],s[3*d+2]=n[2]}return s}Object.defineProperty(t,"__esModule",{value:!0});var g=-1;t.extractEdges=o;var f={position0:a.vec3d.create(),position1:a.vec3d.create(),faceNormal0:a.vec3d.create(),faceNormal1:a.vec3d.create(),componentIndex:0,cosAngle:0},u={edge:f,ortho:a.vec3d.create(),fwd:a.vec3d.create()},p={v0:a.vec3d.create(),v1:a.vec3d.create(),v2:a.vec3d.create()},h={anglePlanar:4,angleSignificantEdge:35}});