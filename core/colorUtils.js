// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define([],function(){"use strict";var r={COEF_RGB2XYZ:[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],COEF_XYZ2RGB:[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],matrixProduct:function(r,t){var n,o,a=[];if(r[0].length!==t.length)throw"dimensions do not match";var i=r.length,h=r[0].length,b=0;for(n=0;i>n;n++){for(b=0,o=0;h>o;o++)b+=r[n][o]*t[o];a.push(b)}return a},rgb2xyz:function(r){var t=[r.r/255,r.g/255,r.b/255].map(function(r){return.04045>=r?r/12.92:Math.pow((r+.055)/1.055,2.4)}),n=this.matrixProduct(this.COEF_RGB2XYZ,t);return{x:100*n[0],y:100*n[1],z:100*n[2]}},xyz2rgb:function(r){var t=this.matrixProduct(this.COEF_XYZ2RGB,[r.x/100,r.y/100,r.z/100]),n=t.map(function(r){var t=.0031308>=r?12.92*r:1.055*Math.pow(r,1/2.4)-.055;return Math.min(1,Math.max(t,0))});return{r:Math.round(255*n[0]),g:Math.round(255*n[1]),b:Math.round(255*n[2])}},xyz2lab:function(r){var t=[r.x/95.047,r.y/100,r.z/108.883].map(function(r){return r>Math.pow(6/29,3)?Math.pow(r,1/3):1/3*Math.pow(29/6,2)*r+4/29}),n=116*t[1]-16,o=500*(t[0]-t[1]),a=200*(t[1]-t[2]);return{l:n,a:o,b:a}},lab2xyz:function(r){var t=r.l,n=r.a,o=r.b,a=[(t+16)/116+n/500,(t+16)/116,(t+16)/116-o/200].map(function(r){return r>6/29?Math.pow(r,3):3*Math.pow(6/29,2)*(r-4/29)});return{x:95.047*a[0],y:100*a[1],z:108.883*a[2]}},lab2lch:function(r){var t=r.l,n=r.a,o=r.b,a=Math.sqrt(n*n+o*o),i=Math.atan2(o,n);return i=i>0?i:i+2*Math.PI,{l:t,c:a,h:i}},lch2lab:function(r){var t=r.l,n=r.c,o=r.h,a=n*Math.cos(o),i=n*Math.sin(o);return{l:t,a:a,b:i}},rgb2lab:function(r){return this.xyz2lab(this.rgb2xyz(r))},lab2rgb:function(r){return this.xyz2rgb(this.lab2xyz(r))},rgb2lch:function(r){return this.lab2lch(this.xyz2lab(this.rgb2xyz(r)))},lch2rgb:function(r){return this.xyz2rgb(this.lab2xyz(this.lch2lab(r)))}},t={rgb2hsv:function(r){var t,n,o,a=r.r,i=r.g,h=r.b,b=Math.max(a,i,h),u=Math.min(a,i,h),c=b-u;return o=b,0===c?t=0:b===a?t=(i-h)/c%6:b===i?t=(h-a)/c+2:b===h&&(t=(a-i)/c+4),n=0===c?0:c/o,0>t&&(t+=6),t*=60,n*=100,o*=100/255,{h:t,s:n,v:o}},hsv2rgb:function(r){var t,n=r.h/60,o=r.s/100,a=r.v/100*255,i=a*o,h=i*(1-Math.abs(n%2-1));switch(Math.floor(n)){case 0:t={r:i,g:h,b:0};break;case 1:t={r:h,g:i,b:0};break;case 2:t={r:0,g:i,b:h};break;case 3:t={r:0,g:h,b:i};break;case 4:t={r:h,g:0,b:i};break;case 5:case 6:t={r:i,g:0,b:h}}return t.r=Math.round(t.r+a-i),t.g=Math.round(t.g+a-i),t.b=Math.round(t.b+a-i),t}},n={toRGB:function(n){var o;return void 0!==n.r&&void 0!==n.g&&void 0!==n.b?o=n:void 0!==n.l&&void 0!==n.c&&void 0!==n.h?o=r.lch2rgb(n):void 0!==n.l&&void 0!==n.a&&void 0!==n.b?o=r.lab2rgb(n):void 0!==n.x&&void 0!==n.y&&void 0!==n.z?o=r.xyz2rgb(n):void 0!==n.h&&void 0!==n.s&&void 0!==n.v&&(o=t.hsv2rgb(n)),o},toHSV:function(r){if(void 0!==r.h&&void 0!==r.s&&void 0!==r.v)return r;var n=this.toRGB(r);return t.rgb2hsv(n)},toLAB:function(t){return void 0!==t.l&&void 0!==t.a&&void 0!==t.b?t:r.rgb2lab(this.toRGB(t))},toLCH:function(t){return void 0!==t.l&&void 0!==t.c&&void 0!==t.h?t:r.rgb2lch(this.toRGB(t))},toXYZ:function(t){return void 0!==t.x&&void 0!==t.y&&void 0!==t.z?t:r.rgb2xyz(this.toRGB(t))}};return n});