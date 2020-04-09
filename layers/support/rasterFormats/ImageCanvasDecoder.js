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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../core/promiseUtils","./Zlib"],(function(e,t,a,r,n,i){return function(){function e(e){e&&(this.canvas=e.canvas,this.ctx=e.ctx||e.canvas&&e.canvas.getContext("2d"))}return e.getFormat=function(e){if(!e||e.byteLength<10)return"";var t=new Uint8Array(e,0,10),a="";return 255===t[0]&&216===t[1]?a="jpeg":137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&(a="png"),a},e.prototype.decode=function(t,i,c){var o=this;if(!t||t.byteLength<10)throw new a("imagecanvasdecoder: decode","required a valid encoded data as input.");var d=e.getFormat(t);if(""===d)throw new a("imagecanvasdecoder: decode","encoded data format is not a supported format (jpeg or png).");var s=i.width,g=i.height,h=i.applyJpegMask;if(h&&(!s||!g))throw new a("imagecanvasdecoder: decode","image width and height are needed to apply jpeg mask directly to canvas");return r.create((function(a,v){var l=null;"jpeg"===d&&h&&(l=e.getMask(t,i));var f,u=new Blob([new Uint8Array(t)],{type:"image/"+d}),w=URL.createObjectURL(u),p=new Image;p.src=w,p.onload=function(){if(URL.revokeObjectURL(w),r.isAborted(c))v(n.createAbortError());else{s=p.width,g=p.height,o.canvas?(o.canvas.width===s&&o.canvas.height===g||(o.canvas.width=s,o.canvas.height=g),o.ctx.clearRect(0,0,s,g)):(o.canvas=document.createElement("canvas"),o.canvas.width=s,o.canvas.height=g,o.ctx=o.canvas.getContext("2d")),o.ctx.drawImage(p,0,0);var e,t=o.ctx.getImageData(0,0,s,g);if(f=t.data,i.renderOnCanvas){if(l)for(e=0;e<l.length;e++)l[e]?f[4*e+3]=255:f[4*e+3]=0;return o.ctx.putImageData(t,0,0),void a(null)}var d=s*g,h=new Uint8Array(d),u=new Uint8Array(d),m=new Uint8Array(d);if(l)for(e=0;e<d;e++)h[e]=f[4*e],u[e]=f[4*e+1],m[e]=f[4*e+2];else for(l=new Uint8Array(d),e=0;e<d;e++)h[e]=f[4*e],u[e]=f[4*e+1],m[e]=f[4*e+2],l[e]=f[4*e+3];a({width:s,height:g,pixels:[h,u,m],mask:l,pixelType:"u8"})}},p.onerror=function(){URL.revokeObjectURL(w),v("cannot load image")}}))},e.getMask=function(e,t){var a=null;try{var r=new Uint8Array(e),n=Math.ceil(r.length/2),c=0,o=r.length-2;for(c=n;c<o&&(255!==r[c]||217!==r[c+1]);c++);if((c+=2)<r.length-1){var d=new i(r.subarray(c)).getBytes();a=new Uint8Array(t.width*t.height);for(var s=0,g=0;g<d.length;g++)for(var h=7;h>=0;h--)a[s++]=d[g]>>h&1}}catch(e){}return a},e}()}));