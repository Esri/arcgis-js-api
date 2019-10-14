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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../../../geometry/support/coordsUtils"],function(t,e,n,r,a){function i(t,e,n){if("point"===t.type)return t.x=t.x+e,t.y=t.y+n,t;if("multipoint"===t.type){for(var r=t.points,i=0;i<r.length;i++){var o=r[i],s=o[0],m=o[1];r[i]=[s+e,m+n]}return t}if("extent"===t.type)return t.xmin=t.xmin+e,t.xmax=t.xmax+e,t.ymin=t.ymin+n,t.ymax=t.ymax+n,t;for(var x=a.geometryToCoordinates(t),y="polyline"===t.type?t.paths:t.rings,p=0;p<x.length;p++)for(var f=x[p],i=0;i<f.length;i++){var l=f[i],s=l[0],m=l[1];y[p][i]=[s+e,m+n]}return"paths"in t?t.paths=y:t.rings=y,t}function o(t,e,n,r,o){var s=t.clone(),m=r.resolution;if("point"===s.type){if(o)i(s,e*m,-n*m);else{var x=r.state.transform,y=r.state.inverseTransform,p=x[0]*s.x+x[2]*s.y+x[4],f=x[1]*s.x+x[3]*s.y+x[5];s.x=y[0]*(p+e)+y[2]*(f+n)+y[4],s.y=y[1]*(p+e)+y[3]*(f+n)+y[5]}return s}if("multipoint"===s.type){if(o)i(s,e*m,-n*m);else for(var l=s.points,x=r.state.transform,y=r.state.inverseTransform,u=0;u<l.length;u++){var v=l[u],g=x[0]*v[0]+x[2]*v[1]+x[4],h=x[1]*v[0]+x[3]*v[1]+x[5],p=y[0]*(g+e)+y[2]*(h+n)+y[4],f=y[1]*(g+e)+y[3]*(h+n)+y[5];l[u]=[p,f]}return s}if("extent"===s.type){if(o)i(s,e*m,-n*m);else{var x=r.state.transform,y=r.state.inverseTransform,c=x[0]*s.xmin+x[2]*s.ymin+x[4],d=x[1]*s.xmin+x[3]*s.ymin+x[5],M=x[0]*s.xmax+x[2]*s.ymax+x[4],T=x[1]*s.xmax+x[3]*s.ymax+x[5];s.xmin=y[0]*(c+e)+y[2]*(d+n)+y[4],s.ymin=y[1]*(c+e)+y[3]*(d+n)+y[5],s.xmax=y[0]*(M+e)+y[2]*(T+n)+y[4],s.ymax=y[1]*(M+e)+y[3]*(T+n)+y[5]}return s}if(o)i(s,e*m,-n*m);else{for(var P=a.geometryToCoordinates(s),l="polyline"===s.type?s.paths:s.rings,x=r.state.transform,y=r.state.inverseTransform,R=0;R<P.length;R++)for(var C=P[R],u=0;u<C.length;u++){var v=C[u],g=x[0]*v[0]+x[2]*v[1]+x[4],h=x[1]*v[0]+x[3]*v[1]+x[5],p=y[0]*(g+e)+y[2]*(h+n)+y[4],f=y[1]*(g+e)+y[3]*(h+n)+y[5];l[R][u]=[p,f]}"paths"in s?s.paths=l:s.rings=l}return s}function s(t,e,i,o,s){if("point"===t.type){var m=t.x,x=t.y,y=s?s[0]:m,p=s?s[1]:x,f=t.clone(),l=(m-y)*e+y,u=(x-p)*i+p;return f.x=l,f.y=u,f}if("multipoint"===t.type){for(var v=a.geometryToCoordinates(t),g=n.create(),h=r.getRingsOrPathsBounds(g,[v]),c=h[0],d=h[1],M=h[2],T=h[3],P=s?s[0]:(c+M)/2,R=s?s[1]:(T+d)/2,C=t.clone(),q=C.points,B=0;B<q.length;B++){var O=q[B],m=O[0],x=O[1],l=(m-P)*e+P,u=(x-R)*i+R;q[B]=[l,u]}return C}if("extent"===t.type){var b=t.xmin,I=t.xmax,U=t.ymin,_=t.ymax,j=s?s[0]:(b+I)/2,A=s?s[1]:(_+U)/2,S=t.clone();if(S.xmin=(b-j)*e+j,S.ymax=(_-A)*i+A,S.xmax=(I-j)*e+j,S.ymin=(U-A)*i+A,S.xmin>S.xmax){var k=S.xmin,w=S.xmax;S.xmin=w,S.xmax=k}if(S.ymin>S.ymax){var z=S.ymin,D=S.ymax;S.ymin=D,S.ymax=z}return S}for(var E=a.geometryToCoordinates(t),F=n.create(),G=r.getRingsOrPathsBounds(F,E),H=G[0],J=G[1],K=G[2],L=G[3],N=s?s[0]:(H+K)/2,Q=s?s[1]:(L+J)/2,V=t.clone(),W="polyline"===V.type?V.paths:V.rings,X=0;X<E.length;X++)for(var Y=E[X],B=0;B<Y.length;B++){var Z=Y[B],m=Z[0],x=Z[1],l=(m-N)*e+N,u=(x-Q)*i+Q;W[X][B]=[l,u]}return"paths"in V?V.paths=W:V.rings=W,V}function m(t,e,n,r,a,i){var o=Math.sqrt((n-t)*(n-t)+(r-e)*(r-e));return Math.sqrt((a-t)*(a-t)+(i-e)*(i-e))/o}function x(t,e,n,r,a,i){var o=180*Math.atan2(e-r,t-n)/Math.PI;return 180*Math.atan2(e-i,t-a)/Math.PI-o}Object.defineProperty(e,"__esModule",{value:!0}),e.move=i,e.cloneMove=o,e.scale=s,e.getScaleRatio=m,e.getRotationAngle=x});