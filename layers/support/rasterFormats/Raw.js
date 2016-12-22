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

define([],function(){"use strict";var e={decodeBIP:function(e,t){var n=t.pixelType,r=t.bandCount,a=[],i=t.width*t.height,h=this.getBandCount(e,t);r=r||h;var s,o,g,c,u=e.byteLength-e.byteLength%(i*this._getPixelLength(n)),d=i*h,y=new n(e,0,d);for(s=0;r>s;s++){for(c=new n(i),o=0;i>o;o++)c[o]=y[o*h+s];a.push(c)}return u<e.byteLength-1&&(g=this._decodeMask(e.slice(u),t)),{pixels:a,mask:g}},decodeBSQ:function(e,t){var n=t.pixelType,r=t.bandCount;(void 0===r||null===r)&&(r=this.getBandCount(e,t));var a,i,h=[],s=t.width*t.height,o=s*r,g=e.byteLength-e.byteLength%(s*this._getPixelLength(n)),c=new n(e,0,o);for(a=0;r>a;a++)h.push(c.subarray(a*s,(a+1)*s));return g<e.byteLength-1&&(i=this._decodeMask(e.slice(g),t)),{pixels:h,mask:i}},getBandCount:function(e,t){var n=t.width*t.height,r=t.pixelType,a=Math.floor(e.byteLength/(n*this._getPixelLength(r)));return a},_getPixelLength:function(e){var t=1;switch(e){case Uint8Array:case Int8Array:case Uint8ClampedArray:t=1;break;case Uint16Array:case Int16Array:t=2;break;case Uint32Array:case Int32Array:case Float32Array:t=4;break;case Float64Array:t=8}return t},_decodeMask:function(e,t){var n=t.width*t.height;if(8*e.byteLength<n)return null;var r=new Uint8Array(e,0,Math.ceil(n/8)),a=new Uint8Array(t.width*t.height),i=0,h=0,s=0,o=0;for(s=0;s<r.length-1;s++)for(h=r[s],o=7;o>=0;o--)a[i++]=h>>o&1;for(o=7;n-1>i;)h=r[r.length-1],a[i++]=h>>o&1,o--;return a}};return e});