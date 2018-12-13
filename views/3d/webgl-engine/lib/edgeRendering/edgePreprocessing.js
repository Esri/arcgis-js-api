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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/arrayUtils","../../../../../core/libs/gl-matrix-2/gl-matrix","../../../support/mathUtils","../../../support/buffer/typedArrayUtil"],function(e,r,t,c,a,n){function o(e,r,o,u){void 0===u&&(u=m);var p=e.vertices.position,h=e.vertices.componentIndex,A=a.deg2rad(u.anglePlanar),y=a.deg2rad(u.angleSignificantEdge),w=Math.cos(y),x=Math.cos(A),I=d.edge,V=I.position0,b=I.position1,N=I.faceNormal0,E=I.faceNormal1,F=l(e),M=f(e),P=M.length/4,U=r.allocate(P),D=0,S=P,_=o.allocate(S),j=0,q=0,z=0,L=t.range(0,P),O=new Float32Array(P);n.forEach(O,function(e,r,t){p.getVec(M[4*r+0],V),p.getVec(M[4*r+1],b),t[r]=c.vec3.distance(V,b)}),L.sort(function(e,r){return O[r]-O[e]});for(var T=new Array,k=new Array,B=0;B<P;B++){var C=L[B],G=O[C],H=M[4*C+0],J=M[4*C+1],K=M[4*C+2],Q=M[4*C+3],R=Q===g;if(p.getVec(H,V),p.getVec(J,b),R)c.vec3.set(N,F[3*K+0],F[3*K+1],F[3*K+2]),c.vec3.copy(E,N),I.componentIndex=h.get(H),I.cosAngle=c.vec3.dot(N,E);else if(c.vec3.set(N,F[3*K+0],F[3*K+1],F[3*K+2]),c.vec3.set(E,F[3*Q+0],F[3*Q+1],F[3*Q+2]),I.componentIndex=h.get(H),I.cosAngle=c.vec3.dot(N,E),s(I,x))continue;q+=G,z++,R||i(I,w)?(r.write(U,D++,I),T.push(G)):v(I,A)&&(o.write(_,j++,I),k.push(G))}var W=new Float32Array(T.reverse()),X=new Float32Array(k.reverse());return{regular:{instancesData:r.trim(U,D),lodInfo:{lengths:W}},silhouette:{instancesData:o.trim(_,j),lodInfo:{lengths:X}},averageEdgeLength:q/z}}function i(e,r){return e.cosAngle<r}function s(e,r){return e.cosAngle>r}function v(e,r){var t=a.acos(e.cosAngle),n=d.fwd,o=d.ortho;return a.directionFromTo(n,e.position1,e.position0),t*(c.vec3.dot(c.vec3.cross(o,e.faceNormal0,e.faceNormal1),n)>0?-1:1)>r}function f(e){for(var r=e.faces.length/3,t=e.faces,c=e.neighbors,a=0,n=0;n<r;n++){var o=c[3*n+0],i=c[3*n+1],s=c[3*n+2],v=t[3*n+0],f=t[3*n+1],l=t[3*n+2];a+=o===g||v<f?1:0,a+=i===g||f<l?1:0,a+=s===g||l<v?1:0}for(var u=new Int32Array(4*a),d=0,n=0;n<r;n++){var o=c[3*n+0],i=c[3*n+1],s=c[3*n+2],v=t[3*n+0],f=t[3*n+1],l=t[3*n+2];(o===g||v<f)&&(u[d++]=v,u[d++]=f,u[d++]=n,u[d++]=o),(i===g||f<l)&&(u[d++]=f,u[d++]=l,u[d++]=n,u[d++]=i),(s===g||l<v)&&(u[d++]=l,u[d++]=v,u[d++]=n,u[d++]=s)}return u}function l(e){for(var r=e.faces.length/3,t=e.vertices.position,a=e.faces,n=p.v0,o=p.v1,i=p.v2,s=new Float32Array(3*r),v=0;v<r;v++){var f=a[3*v+0],l=a[3*v+1],g=a[3*v+2];t.getVec(f,n),t.getVec(l,o),t.getVec(g,i),c.vec3.subtract(o,o,n),c.vec3.subtract(i,i,n),c.vec3.cross(n,o,i),c.vec3.normalize(n,n),s[3*v+0]=n[0],s[3*v+1]=n[1],s[3*v+2]=n[2]}return s}Object.defineProperty(r,"__esModule",{value:!0});var g=-1;r.extractEdges=o;var u={position0:c.vec3f64.create(),position1:c.vec3f64.create(),faceNormal0:c.vec3f64.create(),faceNormal1:c.vec3f64.create(),componentIndex:0,cosAngle:0},d={edge:u,ortho:c.vec3f64.create(),fwd:c.vec3f64.create()},p={v0:c.vec3f64.create(),v1:c.vec3f64.create(),v2:c.vec3f64.create()},m={anglePlanar:4,angleSignificantEdge:35}});