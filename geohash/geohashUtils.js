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

define(["require","exports"],(function(r,a){Object.defineProperty(a,"__esModule",{value:!0});var e=new Float64Array(2),t=new Float64Array(2);function n(r){return r<=57?r-48:r<=104?r-88:r<=107?r-89:r<=110?r-90:r-91}function o(r){return"0123456789bcdefghjkmnpqrstuvwxyz"[r]}function h(r){return(r[0]+r[1])/2}function u(r,a,e){return r[0]=a,r[1]=e,r}function c(r,a){var e=h(r),t=a,n=!a;r[0]=n*r[0]+t*e,r[1]=n*e+t*r[1]}function f(r,a){var e=a>h(r);return c(r,e),e}function i(r,a){for(var o=u(e,-90,90),f=u(t,-180,180),i=0;i<a.length;i++){var s=n(a.charCodeAt(i));i%2==0?(c(f,!!(16&s)),c(f,!!(4&s)),c(f,!!(1&s)),c(o,!!(8&s)),c(o,!!(2&s))):(c(o,!!(16&s)),c(o,!!(4&s)),c(o,!!(1&s)),c(f,!!(8&s)),c(f,!!(2&s)))}return r[0]=h(o),r[1]=h(f),r}function s(r,a,n){for(var h="",c=u(e,-90,90),i=u(t,-180,180),s=0;s<n;s++){var v=0;!(s%2)?(v|=f(i,a)<<4,v|=f(c,r)<<3,v|=f(i,a)<<2,v|=f(c,r)<<1,v|=f(i,a)<<0):(v|=f(c,r)<<4,v|=f(i,a)<<3,v|=f(c,r)<<2,v|=f(i,a)<<1,v|=f(c,r)<<0),h+=o(v)}return h}function v(r){var a=Math.floor(5*r/2);return 180/Math.pow(2,a)}function l(r){var a=Math.ceil(5*r/2);return 360/Math.pow(2,a)}function M(r,a){return a?1&r|(4&r)>>1|(16&r)>>2:(2&r)>>1|(8&r)>>2}function g(r,a){return a?(2&r)>>1|(8&r)>>2:1&r|(4&r)>>1|(16&r)>>2}function d(r,a,e){var t=!((r.length-1)%2),h=r.substring(0,r.length-1),u=n(r.charCodeAt(r.length-1)),c=0,f=0,i=0,s=0;t?(c=8,f=4,i=1&u|(4&u)>>1|(16&u)>>2,s=(2&u)>>1|(8&u)>>2):(c=4,f=8,s=1&u|(4&u)>>1|(16&u)>>2,i=(2&u)>>1|(8&u)>>2);var v=i+a,l=s+e,M=Math.floor(v/c),g=Math.floor(l/f),G=o(function(r,a,e){return e?1&r|(1&a)<<1|(2&r)<<1|(2&a)<<2|(4&r)<<2:1&a|(1&r)<<1|(2&a)<<1|(2&r)<<2|(4&a)<<2}(v-M*c,l-g*f,t));return r.length>1&&(M||g)?d(h,M,g)+G:h+G}a.decodeBase32Char=n,a.encodeBase32Char=o,a.decodeGeohash=i,a.convertGeohash32ToXY=function(r,a){for(var e=0,t=0,o=30,h=30,u=0;u<a.length;u++){var c=n(a.charCodeAt(u)),f=u%2==0;e|=M(c,f)<<(o-=f?3:2),t|=g(c,f)<<(h-=f?2:3)}return{geohashX:e,geohashY:t}},a.decodeGeohashXY=function(r,a){for(var e=-90,t=90,n=-180,o=180,h=0;h<a;h++){for(var u=Math.ceil((h+1)/2),c=Math.floor((h+1)/2),f=1-h%2,i=30-(3*u+2*c),s=30-(2*u+3*c),v=3*f+2*(1-f),l=2*f+3*(1-f),M=3*f+7*(1-f)<<s,g=(7*f+3*(1-f)<<i&r.geohashX)>>i,d=(M&r.geohashY)>>s,G=v-1;G>=0;G--){var b=(n+o)/2,p=g&1<<G?1:0;n=(1-p)*n+p*b,o=(1-p)*b+p*o}for(G=l-1;G>=0;G--){var X=(e+t)/2,Y=d&1<<G?1:0;e=(1-Y)*e+Y*X,t=(1-Y)*X+Y*t}}return[n,e,o,t]},a.setGeohashXY=function(r,a,e,t){t%2&&(t+=1);for(var n=0,o=0,h=-90,u=90,c=-180,f=180,i=0;i<t/2;i++){for(var s=0;s<5;s++){var v=(c+f)/2,l=e>v?1:0;n|=l<<29-(s+5*i),c=(1-l)*c+l*v,f=(1-l)*v+l*f}for(s=0;s<5;s++){var M=(h+u)/2,g=a>M?1:0;o|=g<<29-(s+5*i),h=(1-g)*h+g*M,u=(1-g)*M+g*u}}r.geohashX=n,r.geohashY=o},a.encodeGeohash=s,a.latDistPerGeohash=v,a.lonDistPerGeohash=l,a.unpackXBits=M,a.unpackYBits=g,a.getRelativeGeohash=d,a.getIntersectingGeohashes=function(r,a,e,t,n){for(var o=Math.abs(e-r),h=Math.abs(t-a),u=v(n),c=l(n),f=Math.ceil(h/c),i=Math.ceil(o/u),M=s(r,a,n),g=new Array,G=0;G<f;G++)for(var b=0;b<i;b++)g.push(d(M,G,b));return g},a.forEachIntersectingGeohash=function(r,a,e,t,n,o){for(var h=Math.abs(e-r),u=Math.abs(t-a),c=v(n),f=l(n),M=Math.ceil(u/f),g=Math.ceil(h/c),G=s(r,a,n),b=0;b<M;b++)for(var p=0;p<g;p++){var X=d(G,b,p),Y=i([0,0],X),w=Y[0],A=Y[1],m=w-c/2,y=A-f/2,C=w+c/2,x=A+f/2,B=c*f,k=Math.max(r,m),P=Math.max(a,y),j=Math.min(e,C)-k,q=Math.min(t,x)-P;o(X,Math.abs(j*q)/B)}}}));