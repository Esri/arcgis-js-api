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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../../core/arrayUtils","../../../lib/glMatrix","../../../support/mathUtils","../../../support/buffer/typedArrayUtil"],function(e,t,r,n,c,o){function a(e,t,a,f){void 0===f&&(f=h);var p=e.vertices.position,m=e.vertices.componentIndex,y=e.vertices.lineWidth,A=e.vertices.type,x=e.vertices.extensions,w=c.deg2rad(f.anglePlanar),V=c.deg2rad(f.angleSignificantEdge),b=Math.cos(V),I=Math.cos(w),N=u.edge,E=N.position0,M=N.position1,U=N.faceNormal0,W=N.faceNormal1,P=g(e),z=v(e),D=z.length/4,F=t.allocate(D),S=0,_=D,j=a.allocate(_),q=0,L=0,O=0,k=r.range(0,D),B=new Float32Array(D);o.forEach(B,function(e,t,r){p.getVec(z[4*t+0],E),p.getVec(z[4*t+1],M),r[t]=n.vec3d.dist(E,M)}),k.sort(function(e,t){return B[t]-B[e]});for(var C=new Array,G=new Array,H=0;H<D;H++){var J=k[H],K=B[J],Q=z[4*J+0],R=z[4*J+1],T=z[4*J+2],X=z[4*J+3],Y=X===l;if(p.getVec(Q,E),p.getVec(R,M),Y)n.vec3d.set3(P[3*T+0],P[3*T+1],P[3*T+2],U),n.vec3d.set(U,W),N.componentIndex=m.get(Q),N.cosAngle=n.vec3d.dot(U,W),N.lineWidth=y.get(Q),N.type=A.get(Q),N.extensions=x.get(Q);else if(n.vec3d.set3(P[3*T+0],P[3*T+1],P[3*T+2],U),n.vec3d.set3(P[3*X+0],P[3*X+1],P[3*X+2],W),N.componentIndex=m.get(Q),N.cosAngle=n.vec3d.dot(U,W),N.lineWidth=y.get(Q),N.type=A.get(Q),N.extensions=x.get(Q),s(N,I))continue;L+=K,O++,Y||i(N,b)?(t.write(F,S++,N),C.push(K)):d(N,w)&&(a.write(j,q++,N),G.push(K))}return{edge:{instancesData:t.trim(F,S),lodInfo:{lengths:C.reverse()}},silhouette:{instancesData:a.trim(j,q),lodInfo:{lengths:G.reverse()}},averageEdgeLength:L/O}}function i(e,t){return e.cosAngle<t}function s(e,t){return e.cosAngle>t}function d(e,t){var r=Math.acos(e.cosAngle),c=u.fwd,o=u.ortho;return n.vec3d.normalize(n.vec3d.direction(e.position0,e.position1,c)),r*(n.vec3d.dot(n.vec3d.cross(e.faceNormal0,e.faceNormal1,o),c)>0?-1:1)>t}function v(e){for(var t=e.faces.length/3,r=e.faces,n=e.neighbors,c=0,o=0;o<t;o++){var a=n[3*o+0],i=n[3*o+1],s=n[3*o+2],d=r[3*o+0],v=r[3*o+1],g=r[3*o+2];c+=-1===a||d<v?1:0,c+=-1===i||v<g?1:0,c+=-1===s||g<d?1:0}for(var l=new Uint32Array(4*c),f=0,o=0;o<t;o++){var a=n[3*o+0],i=n[3*o+1],s=n[3*o+2],d=r[3*o+0],v=r[3*o+1],g=r[3*o+2];(-1===a||d<v)&&(l[f++]=d,l[f++]=v,l[f++]=o,l[f++]=a),(-1===i||v<g)&&(l[f++]=v,l[f++]=g,l[f++]=o,l[f++]=i),(-1===s||g<d)&&(l[f++]=g,l[f++]=d,l[f++]=o,l[f++]=s)}return l}function g(e){for(var t=e.faces.length/3,r=e.vertices.position,c=e.faces,o=p.v0,a=p.v1,i=p.v2,s=new Float32Array(3*t),d=0;d<t;d++){var v=c[3*d+0],g=c[3*d+1],l=c[3*d+2];r.getVec(v,o),r.getVec(g,a),r.getVec(l,i),n.vec3d.subtract(a,o),n.vec3d.subtract(i,o),n.vec3d.normalize(n.vec3d.cross(a,i,o)),s[3*d+0]=o[0],s[3*d+1]=o[1],s[3*d+2]=o[2]}return s}Object.defineProperty(t,"__esModule",{value:!0});var l=4294967295;t.extractEdges=a;var f={position0:n.vec3d.create(),position1:n.vec3d.create(),faceNormal0:n.vec3d.create(),faceNormal1:n.vec3d.create(),componentIndex:0,cosAngle:0,lineWidth:0,type:0,extensions:0},u={edge:f,ortho:n.vec3d.create(),fwd:n.vec3d.create()},p={v0:n.vec3d.create(),v1:n.vec3d.create(),v2:n.vec3d.create()},h={anglePlanar:4,angleSignificantEdge:35}});