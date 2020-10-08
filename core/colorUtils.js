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

define(["require","exports"],(function(n,r){"use strict";function t(n){return"h"in n&&"s"in n&&"v"in n}function a(n){return"l"in n&&"a"in n&&"b"in n}function u(n){return"l"in n&&"c"in n&&"h"in n}function o(n){return"x"in n&&"y"in n&&"z"in n}Object.defineProperty(r,"__esModule",{value:!0}),r.darken=r.toXYZ=r.toLCH=r.toLAB=r.toHSV=r.toRGB=void 0;var e=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],i=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function c(n,r){var t,a,u=[];if(n[0].length!==r.length)throw"dimensions do not match";var o=n.length,e=n[0].length,i=0;for(t=0;t<o;t++){for(i=0,a=0;a<e;a++)i+=n[t][a]*r[a];u.push(i)}return u}function h(n){var r=[n.r/255,n.g/255,n.b/255].map((function(n){return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)})),t=c(e,r);return{x:100*t[0],y:100*t[1],z:100*t[2]}}function f(n){var r=c(i,[n.x/100,n.y/100,n.z/100]).map((function(n){var r=n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055;return Math.min(1,Math.max(r,0))}));return{r:Math.round(255*r[0]),g:Math.round(255*r[1]),b:Math.round(255*r[2])}}function b(n){var r=[n.x/95.047,n.y/100,n.z/108.883].map((function(n){return n>Math.pow(6/29,3)?Math.pow(n,1/3):1/3*Math.pow(29/6,2)*n+4/29}));return{l:116*r[1]-16,a:500*(r[0]-r[1]),b:200*(r[1]-r[2])}}function M(n){var r=n.l,t=[(r+16)/116+n.a/500,(r+16)/116,(r+16)/116-n.b/200].map((function(n){return n>6/29?Math.pow(n,3):3*Math.pow(6/29,2)*(n-4/29)}));return{x:95.047*t[0],y:100*t[1],z:108.883*t[2]}}function s(n){return b(h(n))}function v(n){return f(M(n))}function g(n){return function(n){var r=n.l,t=n.a,a=n.b,u=Math.sqrt(t*t+a*a),o=Math.atan2(a,t);return{l:r,c:u,h:o=o>0?o:o+2*Math.PI}}(b(h(n)))}function l(n){return f(M(function(n){var r=n.l,t=n.c,a=n.h;return{l:r,a:t*Math.cos(a),b:t*Math.sin(a)}}(n)))}function d(n){return function(n){return"r"in n&&"g"in n&&"b"in n}(n)?n:u(n)?l(n):a(n)?v(n):o(n)?f(n):t(n)?function(n){var r,t=(n.h+360)%360/60,a=n.s/100,u=n.v/100*255,o=u*a,e=o*(1-Math.abs(t%2-1));switch(Math.floor(t)){case 0:r={r:o,g:e,b:0};break;case 1:r={r:e,g:o,b:0};break;case 2:r={r:0,g:o,b:e};break;case 3:r={r:0,g:e,b:o};break;case 4:r={r:e,g:0,b:o};break;case 5:case 6:r={r:o,g:0,b:e};break;default:r={r:0,g:0,b:0}}return r.r=Math.round(r.r+u-o),r.g=Math.round(r.g+u-o),r.b=Math.round(r.b+u-o),r}(n):n}r.toRGB=d,r.toHSV=function(n){return t(n)?n:function(n){var r=n.r,t=n.g,a=n.b,u=Math.max(r,t,a),o=u-Math.min(r,t,a),e=u,i=0===o?0:u===r?(t-a)/o%6:u===t?(a-r)/o+2:(r-t)/o+4,c=0===o?0:o/e;return i<0&&(i+=6),{h:i*=60,s:c*=100,v:e*=100/255}}(d(n))},r.toLAB=function(n){return a(n)?n:s(d(n))},r.toLCH=function(n){return u(n)?n:g(d(n))},r.toXYZ=function(n){return o(n)?n:h(d(n))},r.darken=function(n,r){var t=s(n);return t.l*=1-r,v(t)}}));