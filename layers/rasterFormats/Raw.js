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

define([],(function(){"use strict";return{decodeBIP:function(e,t){var n=t.pixelType,r=t.bandCount,a=[],i=t.width*t.height,h=this.getBandCount(e,t);r=r||h;var s,g,o,c,u=e.byteLength-e.byteLength%(i*this._getPixelLength(n)),y=new n(e,0,i*h);for(s=0;s<r;s++){for(c=new n(i),g=0;g<i;g++)c[g]=y[g*h+s];a.push(c)}return u<e.byteLength-1&&(o=this._decodeMask(e.slice(u),t)),{pixels:a,maskData:o}},decodeBSQ:function(e,t){var n=t.pixelType,r=t.bandCount;null==r&&(r=this.getBandCount(e,t));var a,i,h=[],s=t.width*t.height,g=s*r,o=e.byteLength-e.byteLength%(s*this._getPixelLength(n)),c=new n(e,0,g);for(a=0;a<r;a++)h.push(c.subarray(a*s,(a+1)*s));return o<e.byteLength-1&&(i=this._decodeMask(e.slice(o),t)),{pixels:h,maskData:i}},getBandCount:function(e,t){var n=t.width*t.height,r=t.pixelType;return Math.floor(e.byteLength/(n*this._getPixelLength(r)))},_getPixelLength:function(e){var t=1;switch(e){case Uint8Array:case Int8Array:case Uint8ClampedArray:t=1;break;case Uint16Array:case Int16Array:t=2;break;case Uint32Array:case Int32Array:case Float32Array:t=4;break;case Float64Array:t=8}return t},_decodeMask:function(e,t){var n=t.width*t.height;if(8*e.byteLength<n)return null;var r=new Uint8Array(e,0,Math.ceil(n/8)),a=new Uint8Array(t.width*t.height),i=0,h=0,s=0,g=0;for(s=0;s<r.length-1;s++)for(h=r[s],g=7;g>=0;g--)a[i++]=h>>g&1;for(g=7;i<n-1;)h=r[r.length-1],a[i++]=h>>g&1,g--;return a}}}));