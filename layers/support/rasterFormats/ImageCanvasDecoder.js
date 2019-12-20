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

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../core/promiseUtils","./Zlib"],function(e,t,a,r,n,i){return function(){function e(e){e&&(this.canvas=e.canvas,this.ctx=e.ctx||e.canvas&&e.canvas.getContext("2d"))}return e.getFormat=function(e){if(!e||e.byteLength<10)return"";var t=new Uint8Array(e,0,10),a="";return 255===t[0]&&216===t[1]?a="jpeg":137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&(a="png"),a},e.prototype.decode=function(t,i,c){var o=this;if(!t||t.byteLength<10)throw new a("imagecanvasdecoder: decode","required a valid encoded data as input.");var d=e.getFormat(t);if(""===d)throw new a("imagecanvasdecoder: decode","encoded data format is not a supported format (jpeg or png).");var s=i.width,g=i.height,h=i.applyJpegMask;if(h&&(!s||!g))throw new a("imagecanvasdecoder: decode","image width and height are needed to apply jpeg mask directly to canvas");return r.create(function(a,v){var u=null;"jpeg"===d&&h&&(u=e.getMask(t,i));var f,l=new Blob([new Uint8Array(t)],{type:"image/"+d}),w=URL.createObjectURL(l),p=new Image;p.src=w,p.onload=function(){if(URL.revokeObjectURL(w),r.isAborted(c))return void v(n.createAbortError());s=p.width,g=p.height,o.canvas?(o.canvas.width===s&&o.canvas.height===g||(o.canvas.width=s,o.canvas.height=g),o.ctx.clearRect(0,0,s,g)):(o.canvas=document.createElement("canvas"),o.canvas.width=s,o.canvas.height=g,o.ctx=o.canvas.getContext("2d")),o.ctx.drawImage(p,0,0);var e=o.ctx.getImageData(0,0,s,g);f=e.data;var t;if(i.renderOnCanvas){if(u)for(t=0;t<u.length;t++)u[t]?f[4*t+3]=255:f[4*t+3]=0;return o.ctx.putImageData(e,0,0),void a(null)}var d=s*g,h=new Uint8Array(d),l=new Uint8Array(d),m=new Uint8Array(d);if(u)for(t=0;t<d;t++)h[t]=f[4*t],l[t]=f[4*t+1],m[t]=f[4*t+2];else for(u=new Uint8Array(d),t=0;t<d;t++)h[t]=f[4*t],l[t]=f[4*t+1],m[t]=f[4*t+2],u[t]=f[4*t+3];a({width:s,height:g,pixels:[h,l,m],mask:u,pixelType:"u8"})},p.onerror=function(){URL.revokeObjectURL(w),v("cannot load image")}})},e.getMask=function(e,t){var a=null;try{var r=new Uint8Array(e),n=Math.ceil(r.length/2),c=0,o=r.length-2;for(c=n;c<o&&(255!==r[c]||217!==r[c+1]);c++);if((c+=2)<r.length-1){var d=new i(r.subarray(c)),s=d.getBytes();a=new Uint8Array(t.width*t.height);for(var g=0,h=0;h<s.length;h++)for(var v=7;v>=0;v--)a[g++]=s[h]>>v&1}}catch(e){}return a},e}()});