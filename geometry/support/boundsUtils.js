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

define(["require","exports","./jsonUtils"],function(n,t,i){function r(n){return function(t,i){return null==t?i:null==i?t:n(t,i)}}function e(n,t){return i.isPolyline(t)?o(n,t.paths,!1,!1):i.isPolygon(t)?o(n,t.rings,!1,!1):i.isMultipoint(t)?l(n,t.points,!1,!1,!1,!1):i.isExtent(t)?u(n,t):(i.isPoint(t)&&(n[0]=t.x,n[1]=t.y,n[2]=t.x,n[3]=t.y),n)}function o(n,t,i,r){var e=i?3:2;if(!t.length||!t[0].length)return null;for(var o=t[0][0],u=o[0],l=o[1],s=t[0][0],f=s[0],g=s[1],d=void 0,h=void 0,m=void 0,x=void 0,c=0;c<t.length;c++)for(var y=t[c],P=0;P<y.length;P++){var p=y[P],B=p[0],M=p[1];if(u=a(u,B),l=a(l,M),f=v(f,B),g=v(g,M),i&&p.length>2){var j=p[2];d=a(d,j),h=v(h,j)}if(r&&p.length>e){var z=p[e];m=a(d,z),x=v(h,z)}}return i?r?(n[0]=u,n[1]=l,n[2]=d,n[3]=m,n[4]=f,n[5]=g,n[6]=h,n[7]=x,n):(n[0]=u,n[1]=l,n[2]=d,n[3]=f,n[4]=g,n[5]=h,n):r?(n[0]=u,n[1]=l,n[2]=m,n[3]=f,n[4]=g,n[5]=x,n):(n[0]=u,n[1]=l,n[2]=f,n[3]=g,n)}function u(n,t,i,r,e,o){var u=t.xmin,l=t.xmax,a=t.ymin,v=t.ymax,s=t.zmin,f=t.zmax,g=t.mmin,d=t.mmax;return e?(s=s||0,f=f||0,o?(g=g||0,d=d||0,n[0]=u,n[1]=a,n[2]=s,n[3]=g,n[4]=l,n[5]=v,n[6]=f,n[7]=d,n):(n[0]=u,n[1]=a,n[2]=s,n[3]=l,n[4]=v,n[5]=f,n)):o?(g=g||0,d=d||0,n[0]=u,n[1]=a,n[2]=g,n[3]=l,n[4]=v,n[5]=d,n):(n[0]=u,n[1]=a,n[2]=l,n[3]=v,n)}function l(n,t,i,r,e,o){var u=i?3:2,l=r&&o,s=i&&e;if(!t.length||!t[0].length)return null;for(var f=t[0],g=f[0],d=f[1],h=t[0],m=h[0],x=h[1],c=void 0,y=void 0,P=void 0,p=void 0,B=0;B<t.length;B++){var M=t[B],j=M[0],z=M[1];if(g=a(g,j),d=a(d,z),m=v(m,j),x=v(x,z),s&&M.length>2){var E=M[2];c=a(c,E),y=v(y,E)}if(l&&M.length>u){var O=M[u];P=a(c,O),p=v(y,O)}}return e?(c=c||0,y=y||0,o?(P=P||0,p=p||0,n[0]=g,n[1]=d,n[2]=c,n[3]=P,n[4]=m,n[5]=x,n[6]=y,n[7]=p,n):(n[0]=g,n[1]=d,n[2]=c,n[3]=m,n[4]=x,n[5]=y,n)):o?(P=P||0,p=p||0,n[0]=g,n[1]=d,n[2]=P,n[3]=m,n[4]=x,n[5]=p,n):(n[0]=g,n[1]=d,n[2]=m,n[3]=x,n)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(Math.min),v=r(Math.max);t.getBoundsXY=e,t.getRingsOrPathsBounds=o,t.getExtentBounds=u,t.getPointsBounds=l});