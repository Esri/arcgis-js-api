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

define(["require","exports","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../../../geometry/support/coordsUtils"],(function(t,e,n,r,a){"use strict";function i(t,e,n,r){if(null==r||t.hasZ||(r=void 0),"point"===t.type)return t.x+=e,t.y+=n,t.hasZ&&null!=r&&(t.z+=r),t;if("multipoint"===t.type){for(var i=t.points,s=0;s<i.length;s++)i[s]=o(i[s],e,n,r);return t}if("extent"===t.type)return t.xmin+=e,t.xmax+=e,t.ymin+=n,t.ymax+=n,null!=r&&(t.zmin+=r,t.zmax+=r),t;for(var m=a.geometryToCoordinates(t),l="polyline"===t.type?t.paths:t.rings,u=0;u<m.length;u++){var x=m[u];for(s=0;s<x.length;s++)x[s]=o(x[s],e,n,r)}return"paths"in t?t.paths=l:t.rings=l,t}function o(t,e,n,r){return s(t,t[0]+e,t[1]+n,null!=t[2]&&null!=r?t[2]+r:void 0)}function s(t,e,n,r){var a=[e,n];return t.length>2&&a.push(null!=r?r:t[2]),t.length>3&&a.push(t[3]),a}Object.defineProperty(e,"__esModule",{value:!0}),e.getRotationAngle=e.getScaleRatio=e.scale=e.cloneMove=e.move=void 0,e.move=i,e.cloneMove=function(t,e,n,r,o){var m=t.clone(),l=r.resolution;if("point"===m.type){if(o)i(m,e*l,-n*l);else{var u=r.state.transform,x=r.state.inverseTransform,y=u[0]*m.x+u[2]*m.y+u[4],p=u[1]*m.x+u[3]*m.y+u[5];m.x=x[0]*(y+e)+x[2]*(p+n)+x[4],m.y=x[1]*(y+e)+x[3]*(p+n)+x[5]}return m}if("multipoint"===m.type){if(o)i(m,e*l,-n*l);else for(var f=m.points,v=(u=r.state.transform,x=r.state.inverseTransform,0);v<f.length;v++){var g=f[v],h=u[0]*g[0]+u[2]*g[1]+u[4],c=u[1]*g[0]+u[3]*g[1]+u[5];y=x[0]*(h+e)+x[2]*(c+n)+x[4],p=x[1]*(h+e)+x[3]*(c+n)+x[5];f[v]=s(g,y,p,void 0)}return m}if("extent"===m.type){if(o)i(m,e*l,-n*l);else{u=r.state.transform,x=r.state.inverseTransform;var d=u[0]*m.xmin+u[2]*m.ymin+u[4],M=u[1]*m.xmin+u[3]*m.ymin+u[5],T=u[0]*m.xmax+u[2]*m.ymax+u[4],R=u[1]*m.xmax+u[3]*m.ymax+u[5];m.xmin=x[0]*(d+e)+x[2]*(M+n)+x[4],m.ymin=x[1]*(d+e)+x[3]*(M+n)+x[5],m.xmax=x[0]*(T+e)+x[2]*(R+n)+x[4],m.ymax=x[1]*(T+e)+x[3]*(R+n)+x[5]}return m}if(o)i(m,e*l,-n*l);else{for(var P=a.geometryToCoordinates(m),C=(f="polyline"===m.type?m.paths:m.rings,u=r.state.transform,x=r.state.inverseTransform,0);C<P.length;C++){var q=P[C];for(v=0;v<q.length;v++){g=q[v],h=u[0]*g[0]+u[2]*g[1]+u[4],c=u[1]*g[0]+u[3]*g[1]+u[5],y=x[0]*(h+e)+x[2]*(c+n)+x[4],p=x[1]*(h+e)+x[3]*(c+n)+x[5];q[v]=s(g,y,p,void 0)}}"paths"in m?m.paths=f:m.rings=f}return m},e.scale=function(t,e,i,o){if("point"===t.type){var m=t.x,l=t.y,u=o?o[0]:m,x=o?o[1]:l,y=t.clone(),p=(m-u)*e+u,f=(l-x)*i+x;return y.x=p,y.y=f,y}if("multipoint"===t.type){for(var v=a.geometryToCoordinates(t),g=n.create(),h=r.getRingsOrPathsBounds(g,[v]),c=h[0],d=h[1],M=h[2],T=h[3],R=o?o[0]:(c+M)/2,P=o?o[1]:(T+d)/2,C=t.clone(),q=C.points,z=0;z<q.length;z++){p=((m=(X=q[z])[0])-R)*e+R,f=((l=X[1])-P)*i+P;q[z]=s(X,p,f,void 0)}return C}if("extent"===t.type){var B=t.xmin,O=t.xmax,b=t.ymin,A=t.ymax,I=o?o[0]:(B+O)/2,S=o?o[1]:(A+b)/2,U=t.clone();if(U.xmin=(B-I)*e+I,U.ymax=(A-S)*i+S,U.xmax=(O-I)*e+I,U.ymin=(b-S)*i+S,U.xmin>U.xmax){var Z=U.xmin,_=U.xmax;U.xmin=_,U.xmax=Z}if(U.ymin>U.ymax){var j=U.ymin,k=U.ymax;U.ymin=k,U.ymax=j}return U}for(var w=a.geometryToCoordinates(t),D=n.create(),E=r.getRingsOrPathsBounds(D,w),F=E[0],G=E[1],H=E[2],J=E[3],K=o?o[0]:(F+H)/2,L=o?o[1]:(J+G)/2,N=t.clone(),Q="polyline"===N.type?N.paths:N.rings,V=0;V<w.length;V++){var W=w[V];for(z=0;z<W.length;z++){var X;p=((m=(X=W[z])[0])-K)*e+K,f=((l=X[1])-L)*i+L;Q[V][z]=s(X,p,f,void 0)}}return"paths"in N?N.paths=Q:N.rings=Q,N},e.getScaleRatio=function(t,e,n,r,a,i){var o=Math.sqrt((n-t)*(n-t)+(r-e)*(r-e));return Math.sqrt((a-t)*(a-t)+(i-e)*(i-e))/o},e.getRotationAngle=function(t,e,n,r,a,i){var o=180*Math.atan2(e-r,t-n)/Math.PI;return 180*Math.atan2(e-i,t-a)/Math.PI-o}}));