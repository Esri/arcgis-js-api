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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../../../geometry/support/coordsUtils"],(function(t,n,e,r,a){function i(t,n,e,r){if(null==r||t.hasZ||(r=void 0),"point"===t.type)return t.x+=n,t.y+=e,t.hasZ&&null!=r&&(t.z+=r),t;if("multipoint"===t.type){for(var i=t.points,s=0;s<i.length;s++)i[s]=o(i[s],n,e,r);return t}if("extent"===t.type)return t.xmin+=n,t.xmax+=n,t.ymin+=e,t.ymax+=e,null!=r&&(t.zmin+=r,t.zmax+=r),t;for(var m=a.geometryToCoordinates(t),l="polyline"===t.type?t.paths:t.rings,x=0;x<m.length;x++){var y=m[x];for(s=0;s<y.length;s++)y[s]=o(y[s],n,e,r)}return"paths"in t?t.paths=l:t.rings=l,t}function o(t,n,e,r){return s(t,t[0]+n,t[1]+e,null!=t[2]&&null!=r?t[2]+r:void 0)}function s(t,n,e,r){var a=[n,e];return t.length>2&&a.push(null!=r?r:t[2]),t.length>3&&a.push(t[3]),a}Object.defineProperty(n,"__esModule",{value:!0}),n.move=i,n.cloneMove=function(t,n,e,r,o){var m=t.clone(),l=r.resolution;if("point"===m.type){if(o)i(m,n*l,-e*l);else{var x=r.state.transform,y=r.state.inverseTransform,u=x[0]*m.x+x[2]*m.y+x[4],p=x[1]*m.x+x[3]*m.y+x[5];m.x=y[0]*(u+n)+y[2]*(p+e)+y[4],m.y=y[1]*(u+n)+y[3]*(p+e)+y[5]}return m}if("multipoint"===m.type){if(o)i(m,n*l,-e*l);else for(var f=m.points,v=(x=r.state.transform,y=r.state.inverseTransform,0);v<f.length;v++){var g=f[v],h=x[0]*g[0]+x[2]*g[1]+x[4],c=x[1]*g[0]+x[3]*g[1]+x[5];u=y[0]*(h+n)+y[2]*(c+e)+y[4],p=y[1]*(h+n)+y[3]*(c+e)+y[5];f[v]=s(g,u,p,void 0)}return m}if("extent"===m.type){if(o)i(m,n*l,-e*l);else{x=r.state.transform,y=r.state.inverseTransform;var d=x[0]*m.xmin+x[2]*m.ymin+x[4],M=x[1]*m.xmin+x[3]*m.ymin+x[5],T=x[0]*m.xmax+x[2]*m.ymax+x[4],P=x[1]*m.xmax+x[3]*m.ymax+x[5];m.xmin=y[0]*(d+n)+y[2]*(M+e)+y[4],m.ymin=y[1]*(d+n)+y[3]*(M+e)+y[5],m.xmax=y[0]*(T+n)+y[2]*(P+e)+y[4],m.ymax=y[1]*(T+n)+y[3]*(P+e)+y[5]}return m}if(o)i(m,n*l,-e*l);else{for(var R=a.geometryToCoordinates(m),C=(f="polyline"===m.type?m.paths:m.rings,x=r.state.transform,y=r.state.inverseTransform,0);C<R.length;C++){var q=R[C];for(v=0;v<q.length;v++){g=q[v],h=x[0]*g[0]+x[2]*g[1]+x[4],c=x[1]*g[0]+x[3]*g[1]+x[5],u=y[0]*(h+n)+y[2]*(c+e)+y[4],p=y[1]*(h+n)+y[3]*(c+e)+y[5];q[v]=s(g,u,p,void 0)}}"paths"in m?m.paths=f:m.rings=f}return m},n.scale=function(t,n,i,o){if("point"===t.type){var m=t.x,l=t.y,x=o?o[0]:m,y=o?o[1]:l,u=t.clone(),p=(m-x)*n+x,f=(l-y)*i+y;return u.x=p,u.y=f,u}if("multipoint"===t.type){for(var v=a.geometryToCoordinates(t),g=e.create(),h=r.getRingsOrPathsBounds(g,[v]),c=h[0],d=h[1],M=h[2],T=h[3],P=o?o[0]:(c+M)/2,R=o?o[1]:(T+d)/2,C=t.clone(),q=C.points,z=0;z<q.length;z++){p=((m=(X=q[z])[0])-P)*n+P,f=((l=X[1])-R)*i+R;q[z]=s(X,p,f,void 0)}return C}if("extent"===t.type){var B=t.xmin,O=t.xmax,b=t.ymin,I=t.ymax,U=o?o[0]:(B+O)/2,Z=o?o[1]:(I+b)/2,_=t.clone();if(_.xmin=(B-U)*n+U,_.ymax=(I-Z)*i+Z,_.xmax=(O-U)*n+U,_.ymin=(b-Z)*i+Z,_.xmin>_.xmax){var j=_.xmin,A=_.xmax;_.xmin=A,_.xmax=j}if(_.ymin>_.ymax){var S=_.ymin,k=_.ymax;_.ymin=k,_.ymax=S}return _}for(var w=a.geometryToCoordinates(t),D=e.create(),E=r.getRingsOrPathsBounds(D,w),F=E[0],G=E[1],H=E[2],J=E[3],K=o?o[0]:(F+H)/2,L=o?o[1]:(J+G)/2,N=t.clone(),Q="polyline"===N.type?N.paths:N.rings,V=0;V<w.length;V++){var W=w[V];for(z=0;z<W.length;z++){var X;p=((m=(X=W[z])[0])-K)*n+K,f=((l=X[1])-L)*i+L;Q[V][z]=s(X,p,f,void 0)}}return"paths"in N?N.paths=Q:N.rings=Q,N},n.getScaleRatio=function(t,n,e,r,a,i){var o=Math.sqrt((e-t)*(e-t)+(r-n)*(r-n));return Math.sqrt((a-t)*(a-t)+(i-n)*(i-n))/o},n.getRotationAngle=function(t,n,e,r,a,i){var o=180*Math.atan2(n-r,t-e)/Math.PI;return 180*Math.atan2(n-i,t-a)/Math.PI-o}}));