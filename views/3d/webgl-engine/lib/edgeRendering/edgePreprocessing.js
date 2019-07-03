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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/arrayUtils","../../../../../core/typedArrayUtil","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/mathUtils"],function(e,r,t,c,o,a,n){function i(e,r,a,i){void 0===i&&(i=h);var u=e.vertices.position,m=e.vertices.componentIndex,A=n.deg2rad(i.anglePlanar),y=n.deg2rad(i.angleSignificantEdge),w=Math.cos(y),x=Math.cos(A),I=p.edge,V=I.position0,b=I.position1,N=I.faceNormal0,E=I.faceNormal1,F=g(e),M=f(e),P=M.length/4,U=r.allocate(P),D=0,S=P,_=a.allocate(S),j=0,q=0,z=0,L=t.range(0,P),O=new Float32Array(P);c.forEach(O,function(e,r,t){u.getVec(M[4*r+0],V),u.getVec(M[4*r+1],b),t[r]=o.vec3.distance(V,b)}),L.sort(function(e,r){return O[r]-O[e]});for(var T=new Array,k=new Array,B=0;B<P;B++){var C=L[B],G=O[C],H=M[4*C+0],J=M[4*C+1],K=M[4*C+2],Q=M[4*C+3],R=Q===d;if(u.getVec(H,V),u.getVec(J,b),R)o.vec3.set(N,F[3*K+0],F[3*K+1],F[3*K+2]),o.vec3.copy(E,N),I.componentIndex=m.get(H),I.cosAngle=o.vec3.dot(N,E);else{if(o.vec3.set(N,F[3*K+0],F[3*K+1],F[3*K+2]),o.vec3.set(E,F[3*Q+0],F[3*Q+1],F[3*Q+2]),I.componentIndex=m.get(H),I.cosAngle=o.vec3.dot(N,E),v(I,x))continue;I.cosAngle<-.9999&&o.vec3.copy(E,N)}q+=G,z++,R||s(I,w)?(r.write(U,D++,I),T.push(G)):l(I,A)&&(a.write(_,j++,I),k.push(G))}var W=new Float32Array(T.reverse()),X=new Float32Array(k.reverse());return{regular:{instancesData:r.trim(U,D),lodInfo:{lengths:W}},silhouette:{instancesData:a.trim(_,j),lodInfo:{lengths:X}},averageEdgeLength:q/z}}function s(e,r){return e.cosAngle<r}function v(e,r){return e.cosAngle>r}function l(e,r){var t=n.acos(e.cosAngle),c=p.fwd,a=p.ortho;return n.directionFromTo(c,e.position1,e.position0),t*(o.vec3.dot(o.vec3.cross(a,e.faceNormal0,e.faceNormal1),c)>0?-1:1)>r}function f(e){for(var r=e.faces.length/3,t=e.faces,c=e.neighbors,o=0,a=0;a<r;a++){var n=c[3*a+0],i=c[3*a+1],s=c[3*a+2],v=t[3*a+0],l=t[3*a+1],f=t[3*a+2];o+=n===d||v<l?1:0,o+=i===d||l<f?1:0,o+=s===d||f<v?1:0}for(var g=new Int32Array(4*o),u=0,a=0;a<r;a++){var n=c[3*a+0],i=c[3*a+1],s=c[3*a+2],v=t[3*a+0],l=t[3*a+1],f=t[3*a+2];(n===d||v<l)&&(g[u++]=v,g[u++]=l,g[u++]=a,g[u++]=n),(i===d||l<f)&&(g[u++]=l,g[u++]=f,g[u++]=a,g[u++]=i),(s===d||f<v)&&(g[u++]=f,g[u++]=v,g[u++]=a,g[u++]=s)}return g}function g(e){for(var r=e.faces.length/3,t=e.vertices.position,c=e.faces,a=m.v0,n=m.v1,i=m.v2,s=new Float32Array(3*r),v=0;v<r;v++){var l=c[3*v+0],f=c[3*v+1],g=c[3*v+2];t.getVec(l,a),t.getVec(f,n),t.getVec(g,i),o.vec3.subtract(n,n,a),o.vec3.subtract(i,i,a),o.vec3.cross(a,n,i),o.vec3.normalize(a,a),s[3*v+0]=a[0],s[3*v+1]=a[1],s[3*v+2]=a[2]}return s}Object.defineProperty(r,"__esModule",{value:!0});var d=-1;r.extractEdges=i;var u={position0:a.vec3f64.create(),position1:a.vec3f64.create(),faceNormal0:a.vec3f64.create(),faceNormal1:a.vec3f64.create(),componentIndex:0,cosAngle:0},p={edge:u,ortho:a.vec3f64.create(),fwd:a.vec3f64.create()},m={v0:a.vec3f64.create(),v1:a.vec3f64.create(),v2:a.vec3f64.create()},h={anglePlanar:4,angleSignificantEdge:35}});