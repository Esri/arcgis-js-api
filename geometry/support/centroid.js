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

define(["require","exports","./coordsUtils"],(function(n,e,t){"use strict";function r(n,e){if(!n||!n.length)return null;for(var t=[],r=[],o=e?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0],u=0,g=n.length;u<g;u++){var a=i(n[u],e,o);a&&r.push(a)}if(r.sort((function(n,t){var r=n[2]-t[2];return 0===r&&e&&(r=n[4]-t[4]),r})),r.length){var h=6*r[0][2];t[0]=r[0][0]/h,t[1]=r[0][1]/h,e&&(h=6*r[0][4],t[2]=0!==h?r[0][3]/h:0),(t[0]<o[0]||t[0]>o[1]||t[1]<o[2]||t[1]>o[3]||e&&(t[2]<o[4]||t[2]>o[5]))&&(t.length=0)}if(!t.length){var f=n[0]&&n[0].length?l(n[0],e):null;if(!f)return null;t[0]=f[0],t[1]=f[1],e&&f.length>2&&(t[2]=f[2])}return t}function i(n,e,t){for(var r=0,i=0,l=0,o=0,u=0,g=0;g<n.length;g++){var a=n[g],h=a[0],f=a[1],d=a[2],v=n[(g+1)%n.length],s=v[0],x=v[1],c=v[2],m=h*x-s*f;o+=m,r+=(h+s)*m,i+=(f+x)*m,e&&a.length>2&&v.length>2&&(l+=(d+c)*(m=h*c-s*d),u+=m),h<t[0]&&(t[0]=h),h>t[1]&&(t[1]=h),f<t[2]&&(t[2]=f),f>t[3]&&(t[3]=f),e&&(d<t[4]&&(t[4]=d),d>t[5]&&(t[5]=d))}if(o>0&&(o*=-1),u>0&&(u*=-1),!o)return null;var C=[r,i,.5*o];return e&&(C[3]=l,C[4]=.5*u),C}function l(n,e){for(var r=e?[0,0,0]:[0,0],i=e?[0,0,0]:[0,0],l=0,o=0,u=0,g=0,a=0,h=n.length;a<h-1;a++){var f=n[a],d=n[a+1];if(f&&d){r[0]=f[0],r[1]=f[1],i[0]=d[0],i[1]=d[1],e&&f.length>2&&d.length>2&&(r[2]=f[2],i[2]=d[2]);var v=t.getLength(r,i);if(v){l+=v;var s=t.getMidpoint(f,d);o+=v*s[0],u+=v*s[1],e&&s.length>2&&(g+=v*s[2])}}}return l>0?e?[o/l,u/l,g/l]:[o/l,u/l]:n.length?n[0]:null}Object.defineProperty(e,"__esModule",{value:!0}),e.lineCentroid=e.ringsCentroid=e.polygonCentroid=e.extentCentroid=void 0,e.extentCentroid=function(n){return n?n.hasZ?[n.xmax-n.xmin/2,n.ymax-n.ymin/2,n.zmax-n.zmin/2]:[n.xmax-n.xmin/2,n.ymax-n.ymin/2]:null},e.polygonCentroid=function(n){return n?r(n.rings,n.hasZ):null},e.ringsCentroid=r,e.lineCentroid=l}));