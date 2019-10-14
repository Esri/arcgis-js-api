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

define(["require","exports","./coordsUtils"],function(n,e,r){function t(n){return n?n.hasZ?[n.xmax-n.xmin/2,n.ymax-n.ymin/2,n.zmax-n.zmin/2]:[n.xmax-n.xmin/2,n.ymax-n.ymin/2]:null}function l(n){return n?i(n.rings,n.hasZ):null}function i(n,e){if(!n||!n.length)return null;for(var r=[],t=[],l=e?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0],i=0,g=n.length;i<g;i++){var a=u(n[i],e,l);a&&t.push(a)}if(t.sort(function(n,r){var t=n[2]-r[2];return 0===t&&e&&(t=n[4]-r[4]),t}),t.length){var f=6*t[0][2];r[0]=t[0][0]/f,r[1]=t[0][1]/f,e&&(f=6*t[0][4],r[2]=0!==f?t[0][3]/f:0),(r[0]<l[0]||r[0]>l[1]||r[1]<l[2]||r[1]>l[3]||e&&(r[2]<l[4]||r[2]>l[5]))&&(r.length=0)}if(!r.length){var h=n[0]&&n[0].length?o(n[0],e):null;if(!h)return null;r[0]=h[0],r[1]=h[1],e&&h.length>2&&(r[2]=h[2])}return r}function u(n,e,r){for(var t=0,l=0,i=0,u=0,o=0,g=0,a=n.length-1;g<a;g++){var f=n[g],h=f[0],v=f[1],x=f[2],m=n[g+1],s=m[0],c=m[1],d=m[2],y=h*c-s*v;u+=y,t+=(h+s)*y,l+=(v+c)*y,e&&f.length>2&&m.length>2&&(y=h*d-s*x,i+=(x+d)*y,o+=y),h<r[0]&&(r[0]=h),h>r[1]&&(r[1]=h),v<r[2]&&(r[2]=v),v>r[3]&&(r[3]=v),e&&(x<r[4]&&(r[4]=x),x>r[5]&&(r[5]=x))}if(u>0&&(u*=-1),o>0&&(o*=-1),!u)return null;var p=[t,l,.5*u];return e&&(p[3]=i,p[4]=.5*o),p}function o(n,e){for(var t=e?[0,0,0]:[0,0],l=e?[0,0,0]:[0,0],i=0,u=0,o=0,g=0,a=0,f=n.length;a<f-1;a++){var h=n[a],v=n[a+1];if(h&&v){t[0]=h[0],t[1]=h[1],l[0]=v[0],l[1]=v[1],e&&h.length>2&&v.length>2&&(t[2]=h[2],l[2]=v[2]);var x=r.getLength(t,l);if(x){i+=x;var m=r.getMidpoint(h,v);u+=x*m[0],o+=x*m[1],e&&m.length>2&&(g+=x*m[2])}}}return i>0?e?[u/i,o/i,g/i]:[u/i,o/i]:n.length?n[0]:null}Object.defineProperty(e,"__esModule",{value:!0}),e.extentCentroid=t,e.polygonCentroid=l,e.ringsCentroid=i,e.lineCentroid=o});