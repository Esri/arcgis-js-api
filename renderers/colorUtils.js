// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/_base/array"],(function(r,t){"use strict";var o={COEF_RGB2XYZ:[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],COEF_XYZ2RGB:[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],matrixProduct:function(r,t){var o,a,n=[];if(r[0].length!==t.length)throw"dimensions do not match";var i=r.length,h=r[0].length,u=0;for(o=0;o<i;o++){for(u=0,a=0;a<h;a++)u+=r[o][a]*t[a];n.push(u)}return n},rgb2xyz:function(r){var t=[r.r/255,r.g/255,r.b/255].map((function(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)})),o=this.matrixProduct(this.COEF_RGB2XYZ,t);return{x:100*o[0],y:100*o[1],z:100*o[2]}},xyz2rgb:function(r){var t=this.matrixProduct(this.COEF_XYZ2RGB,[r.x/100,r.y/100,r.z/100]).map((function(r){var t=r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}},xyz2lab:function(r){var t=[r.x/95.047,r.y/100,r.z/108.883].map((function(r){return r>Math.pow(6/29,3)?Math.pow(r,1/3):1/3*Math.pow(29/6,2)*r+4/29}));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}},lab2xyz:function(r){var t=r.l,o=[(t+16)/116+r.a/500,(t+16)/116,(t+16)/116-r.b/200].map((function(r){return r>6/29?Math.pow(r,3):3*Math.pow(6/29,2)*(r-4/29)}));return{x:95.047*o[0],y:100*o[1],z:108.883*o[2]}},lab2lch:function(r){var t=r.l,o=r.a,a=r.b,n=Math.sqrt(o*o+a*a),i=Math.atan2(a,o);return{l:t,c:n,h:i=i>0?i:i+2*Math.PI}},lch2lab:function(r){var t=r.l,o=r.c,a=r.h;return{l:t,a:o*Math.cos(a),b:o*Math.sin(a)}},rgb2lab:function(r){return this.xyz2lab(this.rgb2xyz(r))},lab2rgb:function(r){return this.xyz2rgb(this.lab2xyz(r))},rgb2lch:function(r){return this.lab2lch(this.xyz2lab(this.rgb2xyz(r)))},lch2rgb:function(r){return this.xyz2rgb(this.lab2xyz(this.lch2lab(r)))}},a=function(r){var t,o,a,n=r.r,i=r.g,h=r.b,u=Math.max(n,i,h),b=u-Math.min(n,i,h);return a=u,0===b?t=0:u===n?t=(i-h)/b%6:u===i?t=(h-n)/b+2:u===h&&(t=(n-i)/b+4),o=0===b?0:b/a,t<0&&(t+=6),{h:t*=60,s:o*=100,v:a*=100/255}},n=function(r){var t,o=(r.h+360)%360/60,a=r.s/100,n=r.v/100*255,i=n*a,h=i*(1-Math.abs(o%2-1));switch(Math.floor(o)){case 0:t={r:i,g:h,b:0};break;case 1:t={r:h,g:i,b:0};break;case 2:t={r:0,g:i,b:h};break;case 3:t={r:0,g:h,b:i};break;case 4:t={r:h,g:0,b:i};break;case 5:case 6:t={r:i,g:0,b:h};break;default:t={r:0,g:0,b:0}}return t.r=Math.round(t.r+n-i),t.g=Math.round(t.g+n-i),t.b=Math.round(t.b+n-i),t};return{toRGB:function(r){var t;return void 0!==r.r&&void 0!==r.g&&void 0!==r.b?t=r:void 0!==r.l&&void 0!==r.c&&void 0!==r.h?t=o.lch2rgb(r):void 0!==r.l&&void 0!==r.a&&void 0!==r.b?t=o.lab2rgb(r):void 0!==r.x&&void 0!==r.y&&void 0!==r.z?t=o.xyz2rgb(r):void 0!==r.h&&void 0!==r.s&&void 0!==r.v&&(t=n(r)),t},toHSV:function(r){if(void 0!==r.h&&void 0!==r.s&&void 0!==r.v)return r;var t=this.toRGB(r);return a(t)},toLAB:function(r){return void 0!==r.l&&void 0!==r.a&&void 0!==r.b?r:o.rgb2lab(this.toRGB(r))},toLCH:function(r){return void 0!==r.l&&void 0!==r.c&&void 0!==r.h?r:o.rgb2lch(this.toRGB(r))},toXYZ:function(r){return void 0!==r.x&&void 0!==r.y&&void 0!==r.z?r:o.rgb2xyz(this.toRGB(r))},getDojoColor:function(t){if(t)return Array.isArray(t)?r.fromArray(t):void 0!==t.r&&void 0!==t.g&&void 0!==t.b?t:void 0},correctRGBLimits:function(r){var o=[r.r,r.g,r.b];return t.forEach(o,(function(r,t){o[t]<0?o[t]=0:o[t]>255&&(o[t]=255),o[t]=Math.floor(o[t])})),{r:o[0],g:o[1],b:o[2],a:1}}}}));