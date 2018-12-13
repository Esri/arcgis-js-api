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

define(["require","exports","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/boundsUtils","../../../../geometry/support/coordsUtils"],function(r,n,a,t,e){function i(r,n,a,t,i){if("point"===r.type){var o=r.clone();if(i){var s=t.resolution;o.x=r.x+n*s,o.y=r.y-a*s}else{var m=t.state.transform,x=t.state.inverseTransform,v=m[0]*r.x+m[2]*r.y+m[4],y=m[1]*r.x+m[3]*r.y+m[5];o.x=x[0]*(v+n)+x[2]*(y+a)+x[4],o.y=x[1]*(v+n)+x[3]*(y+a)+x[5]}return o}if("multipoint"===r.type){var f=r.clone(),u=f.points;if(i){var s=t.resolution;for(var p in u){var l=u[p],v=l[0],y=l[1];u[p]=[v+n*s,y-a*s]}}else{var m=t.state.transform,x=t.state.inverseTransform;for(var p in u){var c=u[p],g=m[0]*c[0]+m[2]*c[1]+m[4],h=m[1]*c[0]+m[3]*c[1]+m[5],v=x[0]*(g+n)+x[2]*(h+a)+x[4],y=x[1]*(g+n)+x[3]*(h+a)+x[5];u[p]=[v,y]}}return f}if("extent"===r.type){var d=r.clone();if(i){var s=t.resolution;d.xmin=r.xmin+n*s,d.xmax=r.xmax+n*s,d.ymin=r.ymin-a*s,d.ymax=r.ymax-a*s}else{var m=t.state.transform,x=t.state.inverseTransform,M=m[0]*r.xmin+m[2]*r.ymin+m[4],T=m[1]*r.xmin+m[3]*r.ymin+m[5],P=m[0]*r.xmax+m[2]*r.ymax+m[4],R=m[1]*r.xmax+m[3]*r.ymax+m[5];d.xmin=x[0]*(M+n)+x[2]*(T+a)+x[4],d.ymin=x[1]*(M+n)+x[3]*(T+a)+x[5],d.xmax=x[0]*(P+n)+x[2]*(R+a)+x[4],d.ymax=x[1]*(P+n)+x[3]*(R+a)+x[5]}return d}var q=r.clone(),B=e.geometryToCoordinates(r),C="polyline"===q.type?q.paths:q.rings;if(i){var s=t.resolution;for(var O in B){var b=B[O];for(var p in b){var I=b[p],v=I[0],y=I[1];C[O][p]=[v+n*s,y-a*s]}}}else{var m=t.state.transform,x=t.state.inverseTransform;for(var O in B){var b=B[O];for(var p in b){var c=b[p],g=m[0]*c[0]+m[2]*c[1]+m[4],h=m[1]*c[0]+m[3]*c[1]+m[5],v=x[0]*(g+n)+x[2]*(h+a)+x[4],y=x[1]*(g+n)+x[3]*(h+a)+x[5];C[O][p]=[v,y]}}}return"paths"in q?q.paths=C:q.rings=C,q}function o(r,n,i,o,s){if("point"===r.type){var m=r.x,x=r.y,v=s?s[0]:m,y=s?s[1]:x,f=r.clone(),u=(m-v)*n+v,p=(x-y)*i+y;return f.x=u,f.y=p,f}if("multipoint"===r.type){var l=e.geometryToCoordinates(r),c=a.create(),g=t.getRingsOrPathsBounds(c,[l]),h=g[0],d=g[1],M=g[2],T=g[3],P=s?s[0]:(h+M)/2,R=s?s[1]:(T+d)/2,q=r.clone(),B=q.points;for(var C in B){var O=B[C],m=O[0],x=O[1],u=(m-P)*n+P,p=(x-R)*i+R;B[C]=[u,p]}return q}if("extent"===r.type){var b=r.xmin,I=r.xmax,U=r.ymin,_=r.ymax,j=s?s[0]:(b+I)/2,A=s?s[1]:(_+U)/2,S=r.clone();if(S.xmin=(b-j)*n+j,S.ymax=(_-A)*i+A,S.xmax=(I-j)*n+j,S.ymin=(U-A)*i+A,S.xmin>S.xmax){var k=S.xmin,w=S.xmax;S.xmin=w,S.xmax=k}if(S.ymin>S.ymax){var z=S.ymin,D=S.ymax;S.ymin=D,S.ymax=z}return S}var E=e.geometryToCoordinates(r),F=a.create(),G=t.getRingsOrPathsBounds(F,E),H=G[0],J=G[1],K=G[2],L=G[3],N=s?s[0]:(H+K)/2,Q=s?s[1]:(L+J)/2,V=r.clone(),W="polyline"===V.type?V.paths:V.rings;for(var X in E){var Y=E[X];for(var C in Y){var Z=Y[C],m=Z[0],x=Z[1],u=(m-N)*n+N,p=(x-Q)*i+Q;W[X][C]=[u,p]}}return"paths"in V?V.paths=W:V.rings=W,V}function s(r,n,a,t,e,i){var o=Math.sqrt((a-r)*(a-r)+(t-n)*(t-n));return Math.sqrt((e-r)*(e-r)+(i-n)*(i-n))/o}function m(r,n,a,t,e,i){var o=180*Math.atan2(n-t,r-a)/Math.PI;return 180*Math.atan2(n-i,r-e)/Math.PI-o}Object.defineProperty(n,"__esModule",{value:!0}),n.move=i,n.scale=o,n.getScaleRatio=s,n.getRotationAngle=m});