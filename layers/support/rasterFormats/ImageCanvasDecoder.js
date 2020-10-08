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

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../core/promiseUtils","./Zlib"],(function(e,t,a,r,n,i){"use strict";return function(){function e(e){e&&(this.canvas=e.canvas,this.ctx=e.ctx||e.canvas&&e.canvas.getContext("2d"))}return e.prototype.decode=function(t,i,c){var o=this;if(!t||t.byteLength<10)throw new a("imagecanvasdecoder: decode","required a valid encoded data as input.");var s=i.width,d=i.height,h=i.format,g=i.applyJpegMask;if(g&&(!s||!d))throw new a("imagecanvasdecoder: decode","image width and height are needed to apply jpeg mask directly to canvas");return r.create((function(a,v){var l=null;"jpg"===h&&g&&(l=e.getMask(t,i));var u,f=new Blob([new Uint8Array(t)],{type:"image/"+h=="jpg"?"jpeg":h}),w=URL.createObjectURL(f),p=new Image;p.src=w,p.onload=function(){if(URL.revokeObjectURL(w),r.isAborted(c))v(n.createAbortError());else{s=p.width,d=p.height,o.canvas?(o.canvas.width===s&&o.canvas.height===d||(o.canvas.width=s,o.canvas.height=d),o.ctx.clearRect(0,0,s,d)):(o.canvas=document.createElement("canvas"),o.canvas.width=s,o.canvas.height=d,o.ctx=o.canvas.getContext("2d")),o.ctx.drawImage(p,0,0);var e,t=o.ctx.getImageData(0,0,s,d);if(u=t.data,i.renderOnCanvas){if(l)for(e=0;e<l.length;e++)l[e]?u[4*e+3]=255:u[4*e+3]=0;return o.ctx.putImageData(t,0,0),void a(null)}var h=s*d,g=new Uint8Array(h),f=new Uint8Array(h),y=new Uint8Array(h);if(l)for(e=0;e<h;e++)g[e]=u[4*e],f[e]=u[4*e+1],y[e]=u[4*e+2];else for(l=new Uint8Array(h),e=0;e<h;e++)g[e]=u[4*e],f[e]=u[4*e+1],y[e]=u[4*e+2],l[e]=u[4*e+3];a({width:s,height:d,pixels:[g,f,y],mask:l,pixelType:"u8"})}},p.onerror=function(){URL.revokeObjectURL(w),v("cannot load image")}}))},e.getMask=function(e,t){var a=null;try{var r=new Uint8Array(e),n=Math.ceil(r.length/2),c=0,o=r.length-2;for(c=n;c<o&&(255!==r[c]||217!==r[c+1]);c++);if((c+=2)<r.length-1){var s=new i(r.subarray(c)).getBytes();a=new Uint8Array(t.width*t.height);for(var d=0,h=0;h<s.length;h++)for(var g=7;g>=0;g--)a[d++]=s[h]>>g&1}}catch(e){}return a},e}()}));