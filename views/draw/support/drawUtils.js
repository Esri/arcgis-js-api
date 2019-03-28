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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../../../geometry/support/coordsUtils"],function(r,t,n,e,a){function i(r,t,n){if("point"===r.type)return r.x=r.x+t,r.y=r.y+n,r;if("multipoint"===r.type){var e=r.points;for(var i in e){var o=e[i],s=o[0],m=o[1];e[i]=[s+t,m+n]}return r}if("extent"===r.type)return r.xmin=r.xmin+t,r.xmax=r.xmax+t,r.ymin=r.ymin+n,r.ymax=r.ymax+n,r;var x=a.geometryToCoordinates(r),y="polyline"===r.type?r.paths:r.rings;for(var p in x){var f=x[p];for(var i in f){var v=f[i],s=v[0],m=v[1];y[p][i]=[s+t,m+n]}}return"paths"in r?r.paths=y:r.rings=y,r}function o(r,t,n,e,o){var s=r.clone(),m=e.resolution;if("point"===s.type){if(o)i(s,t*m,-n*m);else{var x=e.state.transform,y=e.state.inverseTransform,p=x[0]*s.x+x[2]*s.y+x[4],f=x[1]*s.x+x[3]*s.y+x[5];s.x=y[0]*(p+t)+y[2]*(f+n)+y[4],s.y=y[1]*(p+t)+y[3]*(f+n)+y[5]}return s}if("multipoint"===s.type){if(o)i(s,t*m,-n*m);else{var v=s.points,x=e.state.transform,y=e.state.inverseTransform;for(var u in v){var l=v[u],g=x[0]*l[0]+x[2]*l[1]+x[4],c=x[1]*l[0]+x[3]*l[1]+x[5],p=y[0]*(g+t)+y[2]*(c+n)+y[4],f=y[1]*(g+t)+y[3]*(c+n)+y[5];v[u]=[p,f]}}return s}if("extent"===s.type){if(o)i(s,t*m,-n*m);else{var x=e.state.transform,y=e.state.inverseTransform,h=x[0]*s.xmin+x[2]*s.ymin+x[4],d=x[1]*s.xmin+x[3]*s.ymin+x[5],M=x[0]*s.xmax+x[2]*s.ymax+x[4],T=x[1]*s.xmax+x[3]*s.ymax+x[5];s.xmin=y[0]*(h+t)+y[2]*(d+n)+y[4],s.ymin=y[1]*(h+t)+y[3]*(d+n)+y[5],s.xmax=y[0]*(M+t)+y[2]*(T+n)+y[4],s.ymax=y[1]*(M+t)+y[3]*(T+n)+y[5]}return s}if(o)i(s,t*m,-n*m);else{var P=a.geometryToCoordinates(s),v="polyline"===s.type?s.paths:s.rings,x=e.state.transform,y=e.state.inverseTransform;for(var R in P){var C=P[R];for(var u in C){var l=C[u],g=x[0]*l[0]+x[2]*l[1]+x[4],c=x[1]*l[0]+x[3]*l[1]+x[5],p=y[0]*(g+t)+y[2]*(c+n)+y[4],f=y[1]*(g+t)+y[3]*(c+n)+y[5];v[R][u]=[p,f]}}"paths"in s?s.paths=v:s.rings=v}return s}function s(r,t,i,o,s){if("point"===r.type){var m=r.x,x=r.y,y=s?s[0]:m,p=s?s[1]:x,f=r.clone(),v=(m-y)*t+y,u=(x-p)*i+p;return f.x=v,f.y=u,f}if("multipoint"===r.type){var l=a.geometryToCoordinates(r),g=n.create(),c=e.getRingsOrPathsBounds(g,[l]),h=c[0],d=c[1],M=c[2],T=c[3],P=s?s[0]:(h+M)/2,R=s?s[1]:(T+d)/2,C=r.clone(),q=C.points;for(var B in q){var O=q[B],m=O[0],x=O[1],v=(m-P)*t+P,u=(x-R)*i+R;q[B]=[v,u]}return C}if("extent"===r.type){var b=r.xmin,I=r.xmax,U=r.ymin,_=r.ymax,j=s?s[0]:(b+I)/2,A=s?s[1]:(_+U)/2,S=r.clone();if(S.xmin=(b-j)*t+j,S.ymax=(_-A)*i+A,S.xmax=(I-j)*t+j,S.ymin=(U-A)*i+A,S.xmin>S.xmax){var k=S.xmin,w=S.xmax;S.xmin=w,S.xmax=k}if(S.ymin>S.ymax){var z=S.ymin,D=S.ymax;S.ymin=D,S.ymax=z}return S}var E=a.geometryToCoordinates(r),F=n.create(),G=e.getRingsOrPathsBounds(F,E),H=G[0],J=G[1],K=G[2],L=G[3],N=s?s[0]:(H+K)/2,Q=s?s[1]:(L+J)/2,V=r.clone(),W="polyline"===V.type?V.paths:V.rings;for(var X in E){var Y=E[X];for(var B in Y){var Z=Y[B],m=Z[0],x=Z[1],v=(m-N)*t+N,u=(x-Q)*i+Q;W[X][B]=[v,u]}}return"paths"in V?V.paths=W:V.rings=W,V}function m(r,t,n,e,a,i){var o=Math.sqrt((n-r)*(n-r)+(e-t)*(e-t));return Math.sqrt((a-r)*(a-r)+(i-t)*(i-t))/o}function x(r,t,n,e,a,i){var o=180*Math.atan2(t-e,r-n)/Math.PI;return 180*Math.atan2(t-i,r-a)/Math.PI-o}Object.defineProperty(t,"__esModule",{value:!0}),t.move=i,t.cloneMove=o,t.scale=s,t.getScaleRatio=m,t.getRotationAngle=x});