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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../webgl-engine/lib/Util"],function(r,n,e){function t(r,n){for(var e=r.length/3,t=new Uint32Array(n+1),a=new Uint32Array(n+1),f=function(r,n){r<n?t[r+1]++:a[n+1]++},i=0;i<e;i++){var o=r[3*i],u=r[3*i+1],v=r[3*i+2];f(o,u),f(u,v),f(v,o)}for(var l=0,c=0,i=0;i<n;i++){var w=t[i+1],y=a[i+1];t[i+1]=l,a[i+1]=c,l+=w,c+=y}for(var d=new Uint32Array(6*e),b=t[n],h=function(r,n,e){if(r<n){var f=t[r+1]++;d[2*f]=n,d[2*f+1]=e}else{var f=a[n+1]++;d[2*b+2*f]=r,d[2*b+2*f+1]=e}},i=0;i<e;i++){var o=r[3*i],u=r[3*i+1],v=r[3*i+2];h(o,u,i),h(u,v,i),h(v,o,i)}for(var A=function(r,n){for(var e=2*r,t=n-r,a=1;a<t;a++){var f=d[e+2*a],i=d[e+2*a+1],o=a-1;for(o;o>=0&&d[e+2*o]>f;o--)d[e+2*o+2]=d[e+2*o],d[e+2*o+3]=d[e+2*o+1];d[e+2*o+2]=f,d[e+2*o+3]=i}},i=0;i<n;i++)A(t[i],t[i+1]),A(b+a[i],b+a[i+1]);for(var U=new Int32Array(3*e),g=function(n,e){return n===r[3*e]?0:n===r[3*e+1]?1:n===r[3*e+2]?2:-1},s=function(r,n){var e=g(r,n);U[3*n+e]=-1},i=0;i<n;i++){for(var p=t[i],M=t[i+1],q=a[i],x=a[i+1];p<M&&q<x;){var O=d[2*p],P=d[2*b+2*q];O===P?(!function(r,n,e,t){var a=g(r,n);U[3*n+a]=t;var f=g(e,t);U[3*t+f]=n}(i,d[2*p+1],P,d[2*b+2*q+1]),p++,q++):O<P?(s(i,d[2*p+1]),p++):(s(P,d[2*b+2*q+1]),q++)}for(;p<M;)s(i,d[2*p+1]),p++;for(;q<x;){var P=d[2*b+2*q];s(P,d[2*b+2*q+1]),q++}}return U}function a(r,n,t,a,v){void 0===t&&(t=0),void 0===a&&(a=0),void 0===v&&(v=r.byteLength/(4*n));var l=new Uint32Array(r,a,v*n),c=new Uint32Array(v),w=Math.floor(1.1*v)+1;(null==u||u.length<2*w)&&(u=new Uint32Array(e.nextHighestPowerOfTwo(2*w)));for(var y=0;y<2*w;y++)u[y]=0;for(var d=0,b=1.96,h=0!==t?Math.ceil(4*b*b/(t*t)*t*(1-t)):v,y=0;y<v;y++){if(y===h){var A=1-d/y;if(A+b*Math.sqrt(A*(1-A)/y)<t)return null;h*=2}for(var U=y*n,g=o(l,U,n),s=g%w,p=d;0!==u[2*s+1];){if(u[2*s]===g){var M=u[2*s+1]-1;if(f(l,U,M*n,n)){p=c[M];break}}s++,s>=w&&(s-=w)}p===d&&(u[2*s]=g,u[2*s+1]=y+1,d++),c[y]=p}if(0!==t&&1-d/v<t)return null;var q=new Uint32Array(n*d);d=0;for(var y=0;y<v;y++)c[y]===d&&(i(l,y*n,q,d*n,n),d++);return{buffer:q.buffer,indices:c,uniqueCount:d}}function f(r,n,e,t){for(var a=0;a<t;a++)if(r[n+a]!==r[e+a])return!1;return!0}function i(r,n,e,t,a){for(var f=0;f<a;f++)e[t+f]=r[n+f]}function o(r,n,e){for(var t=0,a=0;a<e;a++)t=r[n+a]+t|0,t=t+(t<<11)+(t>>>2)|0;return t>>>0}Object.defineProperty(n,"__esModule",{value:!0}),n.computeNeighbors=t;var u=null;n.deduplicate=a});