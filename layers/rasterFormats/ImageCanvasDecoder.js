// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/Deferred","dojo/sniff"],(function(t,e,r,a){"use strict";var n;return e(null,{constructor:function(t){this.ctx=t.ctx,this._loadRasterFormatModule()},decode:function(t,e){if(!e.width||!e.height)throw"Native decoding requires the image format, width and height";var a,n=new r,o=new Uint8Array(t),i=this._getFormat(t);if("error"===i)throw"invalid format";"jpeg"===i&&(a=this._getMask(o,e));var h,d,g="";for(h=0;h<o.length;h+=65535)d=o.subarray(h,h+65535>o.length-1?o.length-1:h+65535),g+=String.fromCharCode.apply(null,d);var c,l="data:image/"+i+";base64,"+window.btoa(g),u=new Image;u.src=l;var f=this;return u.onload=function(){f.ctx.clearRect(0,0,e.width,e.height),f.ctx.drawImage(u,0,0);var t=u.width,r=u.height,o=f.ctx.getImageData(0,0,t,r);if(c=o.data,a)for(h=0;h<a.length;h++)a[h]?c[4*h+3]=255:c[4*h+3]=0;f.ctx.putImageData(o,0,0),n.resolve(null)},u.onerror=function(){n.reject("cannot load image")},n},_getFormat:function(t){var e=new Uint8Array(t,0,10),r="error";return 255===e[0]&&216===e[1]?r="jpeg":137===e[0]&&80===e[1]&&78===e[2]&&71===e[3]&&(r="png"),r},_getMask:function(t,e){var r;try{if(!n)throw"The zlib decoder module is not loaded.";var a=0,o=0,i=Math.round(t.length/2);i%2==1&&(i+=1);var h=t.length-2;for(a=i;a<h&&(255!==t[a]||217!==t[a+1]);a++);var d=a+=2;if(d<t.length-1){var g=new n(t.subarray(d)).getBytes();r=new Uint8Array(e.width*e.height);var c=0;for(a=0;a<g.length;a++)for(o=7;o>=0;o--)r[c++]=g[a]>>o&1}}catch(t){}return r},_loadRasterFormatModule:function(){a("ie")<10||t(["./Zlib"],(function(t){n=t}))}})}));