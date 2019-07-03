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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(n,r){function t(n){return"r"in n&&"g"in n&&"b"in n}function a(n){return"h"in n&&"s"in n&&"v"in n}function u(n){return"l"in n&&"a"in n&&"b"in n}function o(n){return"l"in n&&"c"in n&&"h"in n}function e(n){return"x"in n&&"y"in n&&"z"in n}function i(n,r){var t,a,u=[];if(n[0].length!==r.length)throw"dimensions do not match";var o=n.length,e=n[0].length,i=0;for(t=0;t<o;t++){for(i=0,a=0;a<e;a++)i+=n[t][a]*r[a];u.push(i)}return u}function c(n){var r=[n.r/255,n.g/255,n.b/255].map(function(n){return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}),t=i(q,r);return{x:100*t[0],y:100*t[1],z:100*t[2]}}function h(n){var r=i(B,[n.x/100,n.y/100,n.z/100]),t=r.map(function(n){var r=n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055;return Math.min(1,Math.max(r,0))});return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function f(n){var r=[n.x/95.047,n.y/100,n.z/108.883].map(function(n){return n>Math.pow(6/29,3)?Math.pow(n,1/3):1/3*Math.pow(29/6,2)*n+4/29});return{l:116*r[1]-16,a:500*(r[0]-r[1]),b:200*(r[1]-r[2])}}function b(n){var r=n.l,t=n.a,a=n.b,u=[(r+16)/116+t/500,(r+16)/116,(r+16)/116-a/200].map(function(n){return n>6/29?Math.pow(n,3):3*Math.pow(6/29,2)*(n-4/29)});return{x:95.047*u[0],y:100*u[1],z:108.883*u[2]}}function M(n){var r=n.l,t=n.a,a=n.b,u=Math.sqrt(t*t+a*a),o=Math.atan2(a,t);return o=o>0?o:o+2*Math.PI,{l:r,c:u,h:o}}function s(n){var r=n.l,t=n.c,a=n.h;return{l:r,a:t*Math.cos(a),b:t*Math.sin(a)}}function g(n){return f(c(n))}function v(n){return h(b(n))}function l(n){return M(f(c(n)))}function p(n){return h(b(s(n)))}function d(n){var r,t,a,u=n.r,o=n.g,e=n.b,i=Math.max(u,o,e),c=Math.min(u,o,e),h=i-c;return a=i,0===h?r=0:i===u?r=(o-e)/h%6:i===o?r=(e-u)/h+2:i===e&&(r=(u-o)/h+4),t=0===h?0:h/a,r<0&&(r+=6),r*=60,t*=100,a*=100/255,{h:r,s:t,v:a}}function m(n){var r,t=(n.h+360)%360/60,a=n.s/100,u=n.v/100*255,o=u*a,e=o*(1-Math.abs(t%2-1));switch(Math.floor(t)){case 0:r={r:o,g:e,b:0};break;case 1:r={r:e,g:o,b:0};break;case 2:r={r:0,g:o,b:e};break;case 3:r={r:0,g:e,b:o};break;case 4:r={r:e,g:0,b:o};break;case 5:case 6:r={r:o,g:0,b:e};break;default:r={r:0,g:0,b:0}}return r.r=Math.round(r.r+u-o),r.g=Math.round(r.g+u-o),r.b=Math.round(r.b+u-o),r}function w(n){return t(n)?n:o(n)?p(n):u(n)?v(n):e(n)?h(n):a(n)?m(n):void 0}function x(n){return a(n)?n:d(w(n))}function k(n){return u(n)?n:g(w(n))}function y(n){return o(n)?n:l(w(n))}function z(n){return e(n)?n:c(w(n))}Object.defineProperty(r,"__esModule",{value:!0});var q=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],B=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];r.toRGB=w,r.toHSV=x,r.toLAB=k,r.toLCH=y,r.toXYZ=z});