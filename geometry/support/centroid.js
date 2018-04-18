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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../support/coordsUtils"],function(n,t,e){function r(n){return n?n.hasZ?[n.xmax-n.xmin/2,n.ymax-n.ymin/2,n.zmax-n.zmin/2]:[n.xmax-n.xmin/2,n.ymax-n.ymin/2]:null}function l(n){return n?i(n.rings,n.hasZ):null}function i(n,t){if(!n||!n.length)return null;for(var e=[],r=[],l=t?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0],i=0,h=n.length;i<h;i++){var o=u(n[i],t,l);o&&r.push(o)}if(r.sort(function(n,e){var r=n[2]-e[2];return 0===r&&t&&(r=n[4]-e[4]),r}),r.length){var a=6*r[0][2];e[0]=r[0][0]/a,e[1]=r[0][1]/a,t&&(a=6*r[0][4],e[2]=0!==a?r[0][3]/a:0),(e[0]<l[0]||e[0]>l[1]||e[1]<l[2]||e[1]>l[3]||t&&(e[2]<l[4]||e[2]>l[5]))&&(e.length=0)}if(!e.length){var f=n[0]&&n[0].length?g(n[0],t):null;if(!f)return null;e[0]=f[0],e[1]=f[1],t&&f.length>2&&(e[2]=f[2])}return e}function u(n,t,e){for(var r=0,l=0,i=0,u=0,g=0,h=0,o=n.length-1;h<o;h++){var a=n[h],f=a[0],v=a[1],x=a[2],m=n[h+1],s=m[0],c=m[1],d=m[2],p=f*c-s*v;u+=p,r+=(f+s)*p,l+=(v+c)*p,t&&a.length>2&&m.length>2&&(p=f*d-s*x,i+=(x+d)*p,g+=p),f<e[0]&&(e[0]=f),f>e[1]&&(e[1]=f),v<e[2]&&(e[2]=v),v>e[3]&&(e[3]=v),t&&(x<e[4]&&(e[4]=x),x>e[5]&&(e[5]=x))}if(u>0&&(u*=-1),g>0&&(g*=-1),!u)return null;var y=[r,l,.5*u];return t&&(y[3]=i,y[4]=.5*g),y}function g(n,t){for(var r=t?[0,0,0]:[0,0],l=t?[0,0,0]:[0,0],i=0,u=0,g=0,h=0,o=0,a=n.length;o<a-1;o++){var f=n[o],v=n[o+1];if(f&&v&&(r[0]=f[0],r[1]=f[1],l[0]=v[0],l[1]=v[1],t&&f.length>2&&v.length>2&&(r[2]=f[2],l[2]=v[2]),length=e.getLength(r,l),length)){i+=length;var x=e.getMidpoint(f,v);u+=length*x[0],g+=length*x[1],t&&x.length>2&&(h+=length*x[2])}}return i>0?t?[u/i,g/i,h/i]:[u/i,g/i]:n.length?n[0]:null}Object.defineProperty(t,"__esModule",{value:!0}),t.extentCentroid=r,t.polygonCentroid=l,t.lineCentroid=g});