// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","../support/coordsUtils"],function(n,r,t){function e(n){return n?n.hasZ?[n.xmax-n.xmin/2,n.ymax-n.ymin/2,n.zmax-n.zmin/2]:[n.xmax-n.xmin/2,n.ymax-n.ymin/2]:null}function l(n){return n?i(n.rings,n.hasZ):null}function i(n,r){if(!n||!n.length)return null;for(var t=[],e=[],l=r?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0],i=0,g=n.length;i<g;i++){var a=u(n[i],r,l);a&&e.push(a)}if(e.sort(function(n,t){var e=n[2]-t[2];return 0===e&&r&&(e=n[4]-t[4]),e}),e.length){var f=6*e[0][2];t[0]=e[0][0]/f,t[1]=e[0][1]/f,r&&(f=6*e[0][4],t[2]=0!==f?e[0][3]/f:0),(t[0]<l[0]||t[0]>l[1]||t[1]<l[2]||t[1]>l[3]||r&&(t[2]<l[4]||t[2]>l[5]))&&(t.length=0)}if(!t.length){var h=n[0]&&n[0].length?o(n[0],r):null;if(!h)return null;t[0]=h[0],t[1]=h[1],r&&h.length>2&&(t[2]=h[2])}return t}function u(n,r,t){for(var e=0,l=0,i=0,u=0,o=0,g=0,a=n.length-1;g<a;g++){var f=n[g],h=f[0],v=f[1],s=f[2],x=n[g+1],m=x[0],c=x[1],d=x[2],p=h*c-m*v;u+=p,e+=(h+m)*p,l+=(v+c)*p,r&&f.length>2&&x.length>2&&(p=h*d-m*s,i+=(s+d)*p,o+=p),h<t[0]&&(t[0]=h),h>t[1]&&(t[1]=h),v<t[2]&&(t[2]=v),v>t[3]&&(t[3]=v),r&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(u>0&&(u*=-1),o>0&&(o*=-1),!u)return null;var y=[e,l,.5*u];return r&&(y[3]=i,y[4]=.5*o),y}function o(n,r){for(var e=r?[0,0,0]:[0,0],l=r?[0,0,0]:[0,0],i=0,u=0,o=0,g=0,a=0,f=n.length;a<f-1;a++){var h=n[a],v=n[a+1];if(h&&v){e[0]=h[0],e[1]=h[1],l[0]=v[0],l[1]=v[1],r&&h.length>2&&v.length>2&&(e[2]=h[2],l[2]=v[2]);var s=t.getLength(e,l);if(s){i+=s;var x=t.getMidpoint(h,v);u+=s*x[0],o+=s*x[1],r&&x.length>2&&(g+=s*x[2])}}}return i>0?r?[u/i,o/i,g/i]:[u/i,o/i]:n.length?n[0]:null}Object.defineProperty(r,"__esModule",{value:!0}),r.extentCentroid=e,r.polygonCentroid=l,r.ringsCentroid=i,r.lineCentroid=o});