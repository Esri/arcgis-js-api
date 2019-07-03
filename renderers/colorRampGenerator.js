// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../renderers/colorUtils"],function(r,t,o){"use strict";function a(r,t,a){a=a||256;var n=0===r.s,e=0===t.s,l=r.h,i=t.h;n&&!e?(r.h=i,l=i):e&&!n&&(t.h=l,i=l);var h,f=Math.abs(i-l);f<180?h=(i-l)/(a-1):(f=360-f,h=l>i?f/(a-1):-f/(a-1));var c,u,d=(t.s-r.s)/(a-1),s=(t.v-r.v)/(a-1),m=r.s,g=r.v,v=l,b=new Uint8Array(4*a);for(c=0;c<a-1;c++)u=o.toRGB({h:v,s:m,v:g}),b[4*c]=u.r,b[4*c+1]=u.g,b[4*c+2]=u.b,b[4*c+3]=255,v+=h,m+=d,g+=s,v>360?v-=360:v<0&&(v+=360);return u=o.toRGB(t),b[4*(a-1)]=u.r,b[4*(a-1)+1]=u.g,b[4*(a-1)+2]=u.b,b[4*(a-1)+3]=255,b}function n(r,t,a){a=a||256;var n,e,l=(t.l-r.l)/(a-1),i=(t.a-r.a)/(a-1),h=(t.b-r.b)/(a-1),f=r.l,c=r.a,u=r.b,d=new Uint8Array(4*a);for(n=0;n<a-1;n++)e=o.toRGB({l:f,a:c,b:u}),d[4*n]=e.r,d[4*n+1]=e.g,d[4*n+2]=e.b,d[4*n+3]=255,f+=l,c+=i,u+=h;return e=o.toRGB(t),d[4*(a-1)]=e.r,d[4*(a-1)+1]=e.g,d[4*(a-1)+2]=e.b,d[4*(a-1)+3]=255,d}function e(r,t,a){a=a||256;var n,e,l=(t.l-r.l)/(a-1),i=(t.c-r.c)/(a-1),h=(t.h-r.h)/(a-1),f=r.l,c=r.c,u=r.h,d=new Uint8Array(4*a);for(n=0;n<a-1;n++)e=o.toRGB({l:f,c:c,h:u}),d[4*n]=e.r,d[4*n+1]=e.g,d[4*n+2]=e.b,d[4*n+3]=255,f+=l,c+=i,u+=h;return e=o.toRGB(t),d[4*(a-1)]=e.r,d[4*(a-1)+1]=e.g,d[4*(a-1)+2]=e.b,d[4*(a-1)+3]=255,d}return{createAlgorithmicColorRamp:function(r,t){if(!r)return null;var l=r.fromColor,i=r.toColor;if(!l||!i)return null;void 0===l.r&&l.length>=3&&(l={r:l[0],g:l[1],b:l[2]}),void 0===i.r&&i.length>=3&&(i={r:i[0],g:i[1],b:i[2]});var h,f=r.size||256,c=r.algorithm||"cie-lab";if(c.toLowerCase().indexOf("hsv")>-1?h=a(o.toHSV(l),o.toHSV(i),f):c.toLowerCase().indexOf("lch")>-1?h=e(o.toLCH(l),o.toLCH(i),f):c.toLowerCase().indexOf("lab")>-1&&(h=n(o.toLAB(l),o.toLAB(i),f)),t&&!1===t.flattened){var u,d=h;for(h=[],u=0;u<h/4;u++)h[u]=d.slice(4*u,4*u+4)}return h},createMultiPartColorRamp:function(r,o){if(!r)return null;o=o&&t.clone(o)||{flattened:!0};var a=r.colorRamps;if(!a||0===a.length)return null;var n=r.size||256,e=Math.max(Math.floor(n/a.length),3),l=Math.max(e,n-(a.length-1)*e),i=!1!==o.flattened;o.flattened=!0,n=(a.length-1)*e+l;var h,f,c=new Uint8Array(4*n);for(h=0;h<a.length;h++)f={fromColor:a[h].fromColor,toColor:a[h].toColor,size:h===a.length-1?l:e},c instanceof Array?c.concat(this.createAlgorithmicColorRamp(f,o)):c.set(this.createAlgorithmicColorRamp(f,o),e*h*4);if(!i){var u=c;for(c=[],h=0;h<c/4;h++)c[h]=u.slice(4*h,4*h+4)}return c},createRandomColorRamp:function(r){r=r||{};var t,o,a=r.size||256,n=!1===r.flattened;for(o=n?new Uint8Array(4*a):[],t=0;t<a;t++)n?(o[4*t]=Math.round(255*Math.random()),o[4*t+1]=Math.round(255*Math.random()),o[4*t+2]=Math.round(255*Math.random()),o[4*t+3]=255):o[t]=[Math.round(255*Math.random()),Math.round(255*Math.random()),Math.round(255*Math.random()),255];return o}}});