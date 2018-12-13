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

define(["require","exports","./mathUtils"],function(r,n,e){function t(r,n){for(var e=r.length/3,t=new Uint32Array(n+1),a=new Uint32Array(n+1),f=function(r,n){r<n?t[r+1]++:a[n+1]++},o=0;o<e;o++){var i=r[3*o],u=r[3*o+1],v=r[3*o+2];f(i,u),f(u,v),f(v,i)}for(var c=0,l=0,o=0;o<n;o++){var w=t[o+1],y=a[o+1];t[o+1]=c,a[o+1]=l,c+=w,l+=y}for(var d=new Uint32Array(6*e),h=t[n],s=function(r,n,e){if(r<n){var f=t[r+1]++;d[2*f]=n,d[2*f+1]=e}else{var f=a[n+1]++;d[2*h+2*f]=r,d[2*h+2*f+1]=e}},o=0;o<e;o++){var i=r[3*o],u=r[3*o+1],v=r[3*o+2];s(i,u,o),s(u,v,o),s(v,i,o)}for(var A=function(r,n){for(var e=2*r,t=n-r,a=1;a<t;a++){var f=d[e+2*a],o=d[e+2*a+1],i=a-1;for(i;i>=0&&d[e+2*i]>f;i--)d[e+2*i+2]=d[e+2*i],d[e+2*i+3]=d[e+2*i+1];d[e+2*i+2]=f,d[e+2*i+3]=o}},o=0;o<n;o++)A(t[o],t[o+1]),A(h+a[o],h+a[o+1]);for(var U=new Int32Array(3*e),b=function(n,e){return n===r[3*e]?0:n===r[3*e+1]?1:n===r[3*e+2]?2:-1},g=function(r,n){var e=b(r,n);U[3*n+e]=-1},o=0;o<n;o++){for(var p=t[o],M=t[o+1],q=a[o],m=a[o+1];p<M&&q<m;){var x=d[2*p],O=d[2*h+2*q];x===O?(!function(r,n,e,t){var a=b(r,n);U[3*n+a]=t;var f=b(e,t);U[3*t+f]=n}(o,d[2*p+1],O,d[2*h+2*q+1]),p++,q++):x<O?(g(o,d[2*p+1]),p++):(g(O,d[2*h+2*q+1]),q++)}for(;p<M;)g(o,d[2*p+1]),p++;for(;q<m;){var O=d[2*h+2*q];g(O,d[2*h+2*q+1]),q++}}return U}function a(r,n,t,a,v){void 0===t&&(t=0),void 0===a&&(a=0),void 0===v&&(v=r.byteLength/(4*n));var c=new Uint32Array(r,a,v*n),l=new Uint32Array(v),w=Math.floor(1.1*v)+1;(null==u||u.length<2*w)&&(u=new Uint32Array(e.nextHighestPowerOfTwo(2*w)));for(var y=0;y<2*w;y++)u[y]=0;for(var d=0,h=1.96,s=0!==t?Math.ceil(4*h*h/(t*t)*t*(1-t)):v,y=0;y<v;y++){if(y===s){var A=1-d/y;if(A+h*Math.sqrt(A*(1-A)/y)<t)return null;s*=2}for(var U=y*n,b=i(c,U,n),g=b%w,p=d;0!==u[2*g+1];){if(u[2*g]===b){var M=u[2*g+1]-1;if(f(c,U,M*n,n)){p=l[M];break}}g++,g>=w&&(g-=w)}p===d&&(u[2*g]=b,u[2*g+1]=y+1,d++),l[y]=p}if(0!==t&&1-d/v<t)return null;var q=new Uint32Array(n*d);d=0;for(var y=0;y<v;y++)l[y]===d&&(o(c,y*n,q,d*n,n),d++);return{buffer:q.buffer,indices:l,uniqueCount:d}}function f(r,n,e,t){for(var a=0;a<t;a++)if(r[n+a]!==r[e+a])return!1;return!0}function o(r,n,e,t,a){for(var f=0;f<a;f++)e[t+f]=r[n+f]}function i(r,n,e){for(var t=0,a=0;a<e;a++)t=r[n+a]+t|0,t=t+(t<<11)+(t>>>2)|0;return t>>>0}Object.defineProperty(n,"__esModule",{value:!0}),n.computeNeighbors=t;var u=null;n.deduplicate=a});