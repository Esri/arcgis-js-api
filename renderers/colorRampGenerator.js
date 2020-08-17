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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../renderers/colorUtils"],(function(r,t,o){"use strict";return{createAlgorithmicColorRamp:function(r,t){if(!r)return null;var a=r.fromColor,n=r.toColor;if(!a||!n)return null;void 0===a.r&&a.length>=3&&(a={r:a[0],g:a[1],b:a[2]}),void 0===n.r&&n.length>=3&&(n={r:n[0],g:n[1],b:n[2]});var e,l=r.size||256,i=r.algorithm||"cie-lab";if(i.toLowerCase().indexOf("hsv")>-1?e=function(r,t,a){a=a||256;var n=0===r.s,e=0===t.s,l=r.h,i=t.h;n&&!e?(r.h=i,l=i):e&&!n&&(t.h=l,i=l);var h,f=Math.abs(i-l);f<180?h=(i-l)/(a-1):(f=360-f,h=l>i?f/(a-1):-f/(a-1));var c,u,d=(t.s-r.s)/(a-1),s=(t.v-r.v)/(a-1),m=r.s,g=r.v,v=l,b=new Uint8Array(4*a);for(c=0;c<a-1;c++)u=o.toRGB({h:v,s:m,v:g}),b[4*c]=u.r,b[4*c+1]=u.g,b[4*c+2]=u.b,b[4*c+3]=255,m+=d,g+=s,(v+=h)>360?v-=360:v<0&&(v+=360);return u=o.toRGB(t),b[4*(a-1)]=u.r,b[4*(a-1)+1]=u.g,b[4*(a-1)+2]=u.b,b[4*(a-1)+3]=255,b}(o.toHSV(a),o.toHSV(n),l):i.toLowerCase().indexOf("lch")>-1?e=function(r,t,a){a=a||256;var n,e,l=(t.l-r.l)/(a-1),i=(t.c-r.c)/(a-1),h=(t.h-r.h)/(a-1),f=r.l,c=r.c,u=r.h,d=new Uint8Array(4*a);for(n=0;n<a-1;n++)e=o.toRGB({l:f,c:c,h:u}),d[4*n]=e.r,d[4*n+1]=e.g,d[4*n+2]=e.b,d[4*n+3]=255,f+=l,c+=i,u+=h;return e=o.toRGB(t),d[4*(a-1)]=e.r,d[4*(a-1)+1]=e.g,d[4*(a-1)+2]=e.b,d[4*(a-1)+3]=255,d}(o.toLCH(a),o.toLCH(n),l):i.toLowerCase().indexOf("lab")>-1&&(e=function(r,t,a){a=a||256;var n,e,l=(t.l-r.l)/(a-1),i=(t.a-r.a)/(a-1),h=(t.b-r.b)/(a-1),f=r.l,c=r.a,u=r.b,d=new Uint8Array(4*a);for(n=0;n<a-1;n++)e=o.toRGB({l:f,a:c,b:u}),d[4*n]=e.r,d[4*n+1]=e.g,d[4*n+2]=e.b,d[4*n+3]=255,f+=l,c+=i,u+=h;return e=o.toRGB(t),d[4*(a-1)]=e.r,d[4*(a-1)+1]=e.g,d[4*(a-1)+2]=e.b,d[4*(a-1)+3]=255,d}(o.toLAB(a),o.toLAB(n),l)),t&&!1===t.flattened){var h,f=e;for(e=[],h=0;h<e/4;h++)e[h]=f.slice(4*h,4*h+4)}return e},createMultiPartColorRamp:function(r,o){if(!r)return null;o=o&&t.clone(o)||{flattened:!0};var a=r.colorRamps;if(!a||0===a.length)return null;var n,e,l=r.size||256,i=Math.max(Math.floor(l/a.length),3),h=Math.max(i,l-(a.length-1)*i),f=!1!==o.flattened;o.flattened=!0,l=(a.length-1)*i+h;var c=new Uint8Array(4*l);for(n=0;n<a.length;n++)e={fromColor:a[n].fromColor,toColor:a[n].toColor,size:n===a.length-1?h:i},c instanceof Array?c.concat(this.createAlgorithmicColorRamp(e,o)):c.set(this.createAlgorithmicColorRamp(e,o),i*n*4);if(!f){var u=c;for(c=[],n=0;n<c/4;n++)c[n]=u.slice(4*n,4*n+4)}return c},createRandomColorRamp:function(r){var t,o,a=(r=r||{}).size||256,n=!1===r.flattened;for(o=n?new Uint8Array(4*a):[],t=0;t<a;t++)n?(o[4*t]=Math.round(255*Math.random()),o[4*t+1]=Math.round(255*Math.random()),o[4*t+2]=Math.round(255*Math.random()),o[4*t+3]=255):o[t]=[Math.round(255*Math.random()),Math.round(255*Math.random()),Math.round(255*Math.random()),255];return o}}}));
