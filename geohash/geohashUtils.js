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

define(["require","exports"],function(r,a){function e(r){return r<=57?r-48:r<=104?r-88:r<=107?r-89:r<=110?r-90:r-91}function t(r){return q[r]}function n(r){return(r[0]+r[1])/2}function o(r,a,e){return r[0]=a,r[1]=e,r}function h(r,a){var e=n(r),t=a,o=!a;r[0]=o*r[0]+t*e,r[1]=o*e+t*r[1]}function u(r,a){var e=n(r),t=a>e;return h(r,t),t}function c(r,a){for(var t=o(C,B,k),u=o(x,P,j),c=0;c<a.length;c++){var f=a.charCodeAt(c),i=e(f);c%2==0?(h(u,!!(Y&i)),h(u,!!(A&i)),h(u,!!(y&i)),h(t,!!(w&i)),h(t,!!(m&i))):(h(t,!!(Y&i)),h(t,!!(A&i)),h(t,!!(y&i)),h(u,!!(w&i)),h(u,!!(m&i)))}return r[0]=n(t),r[1]=n(u),r}function f(r,a){for(var t=0,n=0,o=30,h=30,u=0;u<a.length;u++){var c=a.charCodeAt(u),f=e(c),i=u%2==0,s=d(f,i),v=G(f,i);o-=i?3:2,h-=i?2:3,t|=s<<o,n|=v<<h}return{geohashX:t,geohashY:n}}function i(r,a){for(var e=-90,t=90,n=-180,o=180,h=0;h<a;h++){for(var u=Math.ceil((h+1)/2),c=Math.floor((h+1)/2),f=1-h%2,i=30-(3*u+2*c),s=30-(2*u+3*c),v=3*f+2*(1-f),l=2*f+3*(1-f),M=7*f+3*(1-f)<<i,g=3*f+7*(1-f)<<s,d=(M&r.geohashX)>>i,G=(g&r.geohashY)>>s,b=v-1;b>=0;b--){var p=(n+o)/2,X=d&1<<b?1:0;n=(1-X)*n+X*p,o=(1-X)*p+X*o}for(var b=l-1;b>=0;b--){var Y=(e+t)/2,w=G&1<<b?1:0;e=(1-w)*e+w*Y,t=(1-w)*Y+w*t}}return[n,e,o,t]}function s(r,a,e,t){t%2&&(t+=1);for(var n=0,o=0,h=-90,u=90,c=-180,f=180,i=0;i<t/2;i++){for(var s=0;s<5;s++){var v=(c+f)/2,l=e>v?1:0;n|=l<<29-(s+5*i),c=(1-l)*c+l*v,f=(1-l)*v+l*f}for(var s=0;s<5;s++){var M=(h+u)/2,g=a>M?1:0;o|=g<<29-(s+5*i),h=(1-g)*h+g*M,u=(1-g)*M+g*u}}r.geohashX=n,r.geohashY=o}function v(r,a,e){for(var n="",h=o(C,-90,90),c=o(x,-180,180),f=0;f<e;f++){var i=0;!(f%2)?(i|=u(c,a)<<4,i|=u(h,r)<<3,i|=u(c,a)<<2,i|=u(h,r)<<1,i|=u(c,a)<<0):(i|=u(h,r)<<4,i|=u(c,a)<<3,i|=u(h,r)<<2,i|=u(c,a)<<1,i|=u(h,r)<<0),n+=t(i)}return n}function l(r){var a=Math.floor(5*r/2);return(k-B)/Math.pow(2,a)}function M(r){var a=Math.ceil(5*r/2);return(j-P)/Math.pow(2,a)}function g(r,a,e){return e?r&y|(a&y)<<1|(r&m)<<1|(a&m)<<2|(r&A)<<2:a&y|(r&y)<<1|(a&m)<<1|(r&m)<<2|(a&A)<<2}function d(r,a){return a?y&r|(A&r)>>1|(Y&r)>>2:(m&r)>>1|(w&r)>>2}function G(r,a){return a?(m&r)>>1|(w&r)>>2:y&r|(A&r)>>1|(Y&r)>>2}function b(r,a,n){var o=!((r.length-1)%2),h=r.substring(0,r.length-1),u=e(r.charCodeAt(r.length-1)),c=0,f=0,i=0,s=0;o?(c=8,f=4,i=y&u|(A&u)>>1|(Y&u)>>2,s=(m&u)>>1|(w&u)>>2):(c=4,f=8,s=y&u|(A&u)>>1|(Y&u)>>2,i=(m&u)>>1|(w&u)>>2);var v=i+a,l=s+n,M=Math.floor(v/c),d=Math.floor(l/f),G=v-M*c,p=l-d*f,X=g(G,p,o),C=t(X);return r.length>1&&(M||d)?b(h,M,d)+C:h+C}function p(r,a,e,t,n){for(var o=Math.abs(e-r),h=Math.abs(t-a),u=l(n),c=M(n),f=Math.ceil(h/c),i=Math.ceil(o/u),s=v(r,a,n),g=new Array,d=0;d<f;d++)for(var G=0;G<i;G++)g.push(b(s,d,G));return g}function X(r,a,e,t,n,o){for(var h=Math.abs(e-r),u=Math.abs(t-a),f=l(n),i=M(n),s=Math.ceil(u/i),g=Math.ceil(h/f),d=v(r,a,n),G=0;G<s;G++)for(var p=0;p<g;p++){var X=b(d,G,p),Y=c([0,0],X),w=Y[0],A=Y[1],m=w-f/2,y=A-i/2,C=w+f/2,x=A+i/2,B=f*i,k=Math.max(r,m),P=Math.max(a,y),j=Math.min(e,C),q=Math.min(t,x),D=j-k,F=q-P,I=Math.abs(D*F),_=I/B;o(X,_)}}Object.defineProperty(a,"__esModule",{value:!0});var Y=16,w=8,A=4,m=2,y=1,C=new Float64Array(2),x=new Float64Array(2),B=-90,k=90,P=-180,j=180,q="0123456789bcdefghjkmnpqrstuvwxyz";a.decodeBase32Char=e,a.encodeBase32Char=t,a.decodeGeohash=c,a.convertGeohash32ToXY=f,a.decodeGeohashXY=i,a.setGeohashXY=s,a.encodeGeohash=v,a.latDistPerGeohash=l,a.lonDistPerGeohash=M,a.unpackXBits=d,a.unpackYBits=G,a.getRelativeGeohash=b,a.getIntersectingGeohashes=p,a.forEachIntersectingGeohash=X});