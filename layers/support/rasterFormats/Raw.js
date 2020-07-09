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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(r,e){var t=function(r,e){var t=e.width*e.height,a=e.pixelType;return Math.floor(r.byteLength/(t*n(a)))},n=function(r){var e=1;switch(r){case Uint8Array:case Int8Array:e=1;break;case Uint16Array:case Int16Array:e=2;break;case Uint32Array:case Int32Array:case Float32Array:e=4;break;case Float64Array:e=8}return e};return function(){function r(){}return r.decode=function(r,e){var a,i,o,c,f,h=e.pixelType,s=[],u=e.width*e.height,y=t(r,e),l=e.bandIds,b=e.format,g=l&&l.length||t(r,e),A=r.byteLength-r.byteLength%(u*n(h)),p=new h(r,0,u*y);if("bip"===b)for(a=0;a<g;a++){for(c=new h(u),f=l?l[a]:a,i=0;i<u;i++)c[i]=p[i*y+f];s.push(c)}else if("bsq"===b)for(a=0;a<g;a++)f=l?l[a]:a,s.push(p.subarray(f*u,(f+1)*u));return A<r.byteLength-1&&(o=function(r,e){if(8*r.byteLength<e)return null;var t=new Uint8Array(r,0,Math.ceil(e/8)),n=new Uint8Array(e),a=0,i=0,o=0,c=0;for(o=0;o<t.length-1;o++)for(i=t[o],c=7;c>=0;c--)n[a++]=i>>c&1;for(c=7;a<e-1;)i=t[t.length-1],n[a++]=i>>c&1,c--;return n}(r.slice(A),u)),{pixels:s,mask:o}},r}()}));