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

define(["require","exports"],(function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.forEachIntersectingGeohash=r.getIntersectingGeohashes=r.getRelativeGeohash=r.unpackYBits=r.unpackXBits=r.lonDistPerGeohash=r.latDistPerGeohash=r.encodeGeohash=r.setGeohashBuf=r.setGeohashXY=r.decodeGeohashXY=r.convertGeohash32ToXY=r.decodeGeohash=r.encodeBase32Char=r.decodeBase32Char=void 0;var a=new Float64Array(2),t=new Float64Array(2);function o(e){return e<=57?e-48:e<=104?e-88:e<=107?e-89:e<=110?e-90:e-91}function h(e){return"0123456789bcdefghjkmnpqrstuvwxyz"[e]}function n(e){return(e[0]+e[1])/2}function s(e,r,a){return e[0]=r,e[1]=a,e}function c(e,r){var a=n(e),t=r,o=!r;e[0]=o*e[0]+t*a,e[1]=o*a+t*e[1]}function u(e,r){var a=r>n(e);return c(e,a),a}function i(e,r){for(var h=s(a,-90,90),u=s(t,-180,180),i=0;i<r.length;i++){var f=o(r.charCodeAt(i));i%2==0?(c(u,!!(16&f)),c(u,!!(4&f)),c(u,!!(1&f)),c(h,!!(8&f)),c(h,!!(2&f))):(c(h,!!(16&f)),c(h,!!(4&f)),c(h,!!(1&f)),c(u,!!(8&f)),c(u,!!(2&f)))}return e[0]=n(h),e[1]=n(u),e}function f(e,r,o){for(var n="",c=s(a,-90,90),i=s(t,-180,180),f=0;f<o;f++){var v=0;!(f%2)?(v|=u(i,r)<<4,v|=u(c,e)<<3,v|=u(i,r)<<2,v|=u(c,e)<<1,v|=u(i,r)<<0):(v|=u(c,e)<<4,v|=u(i,r)<<3,v|=u(c,e)<<2,v|=u(i,r)<<1,v|=u(c,e)<<0),n+=h(v)}return n}function v(e){var r=Math.floor(5*e/2);return 180/Math.pow(2,r)}function l(e){var r=Math.ceil(5*e/2);return 360/Math.pow(2,r)}function d(e,r){return r?1&e|(4&e)>>1|(16&e)>>2:(2&e)>>1|(8&e)>>2}function g(e,r){return r?(2&e)>>1|(8&e)>>2:1&e|(4&e)>>1|(16&e)>>2}function G(e,r,a){var t=!((e.length-1)%2),n=e.substring(0,e.length-1),s=o(e.charCodeAt(e.length-1)),c=0,u=0,i=0,f=0;t?(c=8,u=4,i=1&s|(4&s)>>1|(16&s)>>2,f=(2&s)>>1|(8&s)>>2):(c=4,u=8,f=1&s|(4&s)>>1|(16&s)>>2,i=(2&s)>>1|(8&s)>>2);var v=i+r,l=f+a,d=Math.floor(v/c),g=Math.floor(l/u),M=h(function(e,r,a){return a?1&e|(1&r)<<1|(2&e)<<1|(2&r)<<2|(4&e)<<2:1&r|(1&e)<<1|(2&r)<<1|(2&e)<<2|(4&r)<<2}(v-d*c,l-g*u,t));return e.length>1&&(d||g)?G(n,d,g)+M:n+M}r.decodeBase32Char=o,r.encodeBase32Char=h,r.decodeGeohash=i,r.convertGeohash32ToXY=function(e,r){for(var a=0,t=0,h=30,n=30,s=0;s<r.length;s++){var c=o(r.charCodeAt(s)),u=s%2==0;a|=d(c,u)<<(h-=u?3:2),t|=g(c,u)<<(n-=u?2:3)}return{geohashX:a,geohashY:t}},r.decodeGeohashXY=function(e,r){for(var a=-90,t=90,o=-180,h=180,n=0;n<r;n++){for(var s=Math.ceil((n+1)/2),c=Math.floor((n+1)/2),u=1-n%2,i=30-(3*s+2*c),f=30-(2*s+3*c),v=3*u+2*(1-u),l=2*u+3*(1-u),d=3*u+7*(1-u)<<f,g=(7*u+3*(1-u)<<i&e.geohashX)>>i,G=(d&e.geohashY)>>f,M=v-1;M>=0;M--){var X=(o+h)/2,Y=g&1<<M?1:0;o=(1-Y)*o+Y*X,h=(1-Y)*X+Y*h}for(M=l-1;M>=0;M--){var p=(a+t)/2,B=G&1<<M?1:0;a=(1-B)*a+B*p,t=(1-B)*p+B*t}}return[o,a,h,t]},r.setGeohashXY=function(e,r,a,t){t%2&&(t+=1);for(var o=0,h=0,n=-90,s=90,c=-180,u=180,i=0;i<t/2;i++){for(var f=0;f<5;f++){var v=(c+u)/2,l=a>v?1:0;o|=l<<29-(f+5*i),c=(1-l)*c+l*v,u=(1-l)*v+l*u}for(f=0;f<5;f++){var d=(n+s)/2,g=r>d?1:0;h|=g<<29-(f+5*i),n=(1-g)*n+g*d,s=(1-g)*d+g*s}}e.geohashX=o,e.geohashY=h},r.setGeohashBuf=function(e,r,a,t,o){o%2&&(o+=1);for(var h=0,n=0,s=-90,c=90,u=-180,i=180,f=0;f<o/2;f++){for(var v=0;v<5;v++){var l=(u+i)/2,d=t>l?1:0;h|=d<<29-(v+5*f),u=(1-d)*u+d*l,i=(1-d)*l+d*i}for(v=0;v<5;v++){var g=(s+c)/2,G=a>g?1:0;n|=G<<29-(v+5*f),s=(1-G)*s+G*g,c=(1-G)*g+G*c}}e[2*r]=h,e[2*r+1]=n},r.encodeGeohash=f,r.latDistPerGeohash=v,r.lonDistPerGeohash=l,r.unpackXBits=d,r.unpackYBits=g,r.getRelativeGeohash=G,r.getIntersectingGeohashes=function(e,r,a,t,o){for(var h=Math.abs(a-e),n=Math.abs(t-r),s=v(o),c=l(o),u=Math.ceil(n/c),i=Math.ceil(h/s),d=f(e,r,o),g=new Array,M=0;M<u;M++)for(var X=0;X<i;X++)g.push(G(d,M,X));return g},r.forEachIntersectingGeohash=function(e,r,a,t,o,h){for(var n=Math.abs(a-e),s=Math.abs(t-r),c=v(o),u=l(o),d=Math.ceil(s/u),g=Math.ceil(n/c),M=f(e,r,o),X=0;X<d;X++)for(var Y=0;Y<g;Y++){var p=G(M,X,Y),B=i([0,0],p),b=B[0],C=B[1],w=b-c/2,A=C-u/2,k=b+c/2,m=C+u/2,y=c*u,P=Math.max(e,w),x=Math.max(r,A),D=Math.min(a,k)-P,I=Math.min(t,m)-x;h(p,Math.abs(D*I)/y)}}}));