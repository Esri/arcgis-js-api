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

define(["require","exports","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../../../geometry/support/coordsUtils"],function(t,n,e,r,a){function i(t,n,e,r){if(null==r||t.hasZ||(r=void 0),"point"===t.type)return t.x+=n,t.y+=e,t.hasZ&&null!=r&&(t.z+=r),t;if("multipoint"===t.type){for(var i=t.points,o=0;o<i.length;o++)i[o]=x(i[o],n,e,r);return t}if("extent"===t.type)return t.xmin+=n,t.xmax+=n,t.ymin+=e,t.ymax+=e,null!=r&&(t.zmin+=r,t.zmax+=r),t;for(var s=a.geometryToCoordinates(t),m="polyline"===t.type?t.paths:t.rings,l=0;l<s.length;l++)for(var y=s[l],o=0;o<y.length;o++)y[o]=x(y[o],n,e,r);return"paths"in t?t.paths=m:t.rings=m,t}function o(t,n,e,r,o){var s=t.clone(),m=r.resolution;if("point"===s.type){if(o)i(s,n*m,-e*m);else{var l=r.state.transform,x=r.state.inverseTransform,u=l[0]*s.x+l[2]*s.y+l[4],p=l[1]*s.x+l[3]*s.y+l[5];s.x=x[0]*(u+n)+x[2]*(p+e)+x[4],s.y=x[1]*(u+n)+x[3]*(p+e)+x[5]}return s}if("multipoint"===s.type){if(o)i(s,n*m,-e*m);else for(var f=s.points,l=r.state.transform,x=r.state.inverseTransform,v=0;v<f.length;v++){var g=f[v],h=l[0]*g[0]+l[2]*g[1]+l[4],c=l[1]*g[0]+l[3]*g[1]+l[5],u=x[0]*(h+n)+x[2]*(c+e)+x[4],p=x[1]*(h+n)+x[3]*(c+e)+x[5];f[v]=y(g,u,p,void 0)}return s}if("extent"===s.type){if(o)i(s,n*m,-e*m);else{var l=r.state.transform,x=r.state.inverseTransform,d=l[0]*s.xmin+l[2]*s.ymin+l[4],M=l[1]*s.xmin+l[3]*s.ymin+l[5],T=l[0]*s.xmax+l[2]*s.ymax+l[4],P=l[1]*s.xmax+l[3]*s.ymax+l[5];s.xmin=x[0]*(d+n)+x[2]*(M+e)+x[4],s.ymin=x[1]*(d+n)+x[3]*(M+e)+x[5],s.xmax=x[0]*(T+n)+x[2]*(P+e)+x[4],s.ymax=x[1]*(T+n)+x[3]*(P+e)+x[5]}return s}if(o)i(s,n*m,-e*m);else{for(var R=a.geometryToCoordinates(s),f="polyline"===s.type?s.paths:s.rings,l=r.state.transform,x=r.state.inverseTransform,C=0;C<R.length;C++)for(var q=R[C],v=0;v<q.length;v++){var g=q[v],h=l[0]*g[0]+l[2]*g[1]+l[4],c=l[1]*g[0]+l[3]*g[1]+l[5],u=x[0]*(h+n)+x[2]*(c+e)+x[4],p=x[1]*(h+n)+x[3]*(c+e)+x[5];q[v]=y(g,u,p,void 0)}"paths"in s?s.paths=f:s.rings=f}return s}function s(t,n,i,o){if("point"===t.type){var s=t.x,m=t.y,l=o?o[0]:s,x=o?o[1]:m,u=t.clone(),p=(s-l)*n+l,f=(m-x)*i+x;return u.x=p,u.y=f,u}if("multipoint"===t.type){for(var v=a.geometryToCoordinates(t),g=e.create(),h=r.getRingsOrPathsBounds(g,[v]),c=h[0],d=h[1],M=h[2],T=h[3],P=o?o[0]:(c+M)/2,R=o?o[1]:(T+d)/2,C=t.clone(),q=C.points,z=0;z<q.length;z++){var B=q[z],s=B[0],m=B[1],p=(s-P)*n+P,f=(m-R)*i+R;q[z]=y(B,p,f,void 0)}return C}if("extent"===t.type){var O=t.xmin,b=t.xmax,I=t.ymin,U=t.ymax,Z=o?o[0]:(O+b)/2,_=o?o[1]:(U+I)/2,j=t.clone();if(j.xmin=(O-Z)*n+Z,j.ymax=(U-_)*i+_,j.xmax=(b-Z)*n+Z,j.ymin=(I-_)*i+_,j.xmin>j.xmax){var A=j.xmin,S=j.xmax;j.xmin=S,j.xmax=A}if(j.ymin>j.ymax){var k=j.ymin,w=j.ymax;j.ymin=w,j.ymax=k}return j}for(var D=a.geometryToCoordinates(t),E=e.create(),F=r.getRingsOrPathsBounds(E,D),G=F[0],H=F[1],J=F[2],K=F[3],L=o?o[0]:(G+J)/2,N=o?o[1]:(K+H)/2,Q=t.clone(),V="polyline"===Q.type?Q.paths:Q.rings,W=0;W<D.length;W++)for(var X=D[W],z=0;z<X.length;z++){var B=X[z],s=B[0],m=B[1],p=(s-L)*n+L,f=(m-N)*i+N;V[W][z]=y(B,p,f,void 0)}return"paths"in Q?Q.paths=V:Q.rings=V,Q}function m(t,n,e,r,a,i){var o=Math.sqrt((e-t)*(e-t)+(r-n)*(r-n));return Math.sqrt((a-t)*(a-t)+(i-n)*(i-n))/o}function l(t,n,e,r,a,i){var o=180*Math.atan2(n-r,t-e)/Math.PI;return 180*Math.atan2(n-i,t-a)/Math.PI-o}function x(t,n,e,r){return y(t,t[0]+n,t[1]+e,null!=t[2]&&null!=r?t[2]+r:void 0)}function y(t,n,e,r){var a=[n,e];return t.length>2&&a.push(null!=r?r:t[2]),t.length>3&&a.push(t[3]),a}Object.defineProperty(n,"__esModule",{value:!0}),n.move=i,n.cloneMove=o,n.scale=s,n.getScaleRatio=m,n.getRotationAngle=l});