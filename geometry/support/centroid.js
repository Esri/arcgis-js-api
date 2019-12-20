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

define(["require","exports","./coordsUtils"],function(n,e,t){function r(n){return n?n.hasZ?[n.xmax-n.xmin/2,n.ymax-n.ymin/2,n.zmax-n.zmin/2]:[n.xmax-n.xmin/2,n.ymax-n.ymin/2]:null}function l(n){return n?i(n.rings,n.hasZ):null}function i(n,e){if(!n||!n.length)return null;for(var t=[],r=[],l=e?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0],i=0,g=n.length;i<g;i++){var a=u(n[i],e,l);a&&r.push(a)}if(r.sort(function(n,t){var r=n[2]-t[2];return 0===r&&e&&(r=n[4]-t[4]),r}),r.length){var h=6*r[0][2];t[0]=r[0][0]/h,t[1]=r[0][1]/h,e&&(h=6*r[0][4],t[2]=0!==h?r[0][3]/h:0),(t[0]<l[0]||t[0]>l[1]||t[1]<l[2]||t[1]>l[3]||e&&(t[2]<l[4]||t[2]>l[5]))&&(t.length=0)}if(!t.length){var f=n[0]&&n[0].length?o(n[0],e):null;if(!f)return null;t[0]=f[0],t[1]=f[1],e&&f.length>2&&(t[2]=f[2])}return t}function u(n,e,t){for(var r=0,l=0,i=0,u=0,o=0,g=0;g<n.length;g++){var a=n[g],h=a[0],f=a[1],v=a[2],x=n[(g+1)%n.length],m=x[0],s=x[1],c=x[2],d=h*s-m*f;u+=d,r+=(h+m)*d,l+=(f+s)*d,e&&a.length>2&&x.length>2&&(d=h*c-m*v,i+=(v+c)*d,o+=d),h<t[0]&&(t[0]=h),h>t[1]&&(t[1]=h),f<t[2]&&(t[2]=f),f>t[3]&&(t[3]=f),e&&(v<t[4]&&(t[4]=v),v>t[5]&&(t[5]=v))}if(u>0&&(u*=-1),o>0&&(o*=-1),!u)return null;var y=[r,l,.5*u];return e&&(y[3]=i,y[4]=.5*o),y}function o(n,e){for(var r=e?[0,0,0]:[0,0],l=e?[0,0,0]:[0,0],i=0,u=0,o=0,g=0,a=0,h=n.length;a<h-1;a++){var f=n[a],v=n[a+1];if(f&&v){r[0]=f[0],r[1]=f[1],l[0]=v[0],l[1]=v[1],e&&f.length>2&&v.length>2&&(r[2]=f[2],l[2]=v[2]);var x=t.getLength(r,l);if(x){i+=x;var m=t.getMidpoint(f,v);u+=x*m[0],o+=x*m[1],e&&m.length>2&&(g+=x*m[2])}}}return i>0?e?[u/i,o/i,g/i]:[u/i,o/i]:n.length?n[0]:null}Object.defineProperty(e,"__esModule",{value:!0}),e.extentCentroid=r,e.polygonCentroid=l,e.ringsCentroid=i,e.lineCentroid=o});