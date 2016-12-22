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

define(["../../core/Accessor","dojo/_base/lang"],function(t,i){var e=t.createSubclass({declaredClass:"esri.layers.support.PixelBlock",normalizeCtorArgs:function(t){if(!t.width||Math.floor(t.width)!==t.width)throw"PixelBlock: incorrect width";if(!t.height||Math.floor(t.height)!==t.height)throw"PixelBlock: incorrect height";if(!t.pixels||!t.statistics)throw"PixelBlock: pixel data or statistics not present"},height:null,mask:null,pixels:[],pixelType:null,planes:null,statistics:[],width:null,getPlaneCount:function(){return this.pixels.length!==this.statistics.length?console.error("Inconsistent pixel data and statistics"):this.statistics.length},addData:function(t){if(!t.pixels||!t.statistics)throw"Pixel data or statistics are not present";if(t.pixels.length!==this.width*this.height)throw"Inconsistent pixel data size";this.statistics.push(t.statistics),this.pixels.push(t.pixels)},getAsRGBA:function(){var t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)},getAsRGBAFloat:function(){var t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t},clone:function(){var t=new this.constructor;t.width=this.width,t.height=this.height,t.pixelType=this.pixelType,this.mask&&(t.mask=new Uint8Array(this.mask));var e,s;if(this.pixels)for(t.pixels=[],s=this.pixels.length,e=0;s>e;e++)t.pixels[e]=new Float32Array(this.pixels[e]);if(this.statistics)for(t.statistics=[],s=this.statistics.length,e=0;s>e;e++)t.statistics[e]=i.clone(this.statistics[e]);return t},_fillFrom8Bit:function(t){var i=this.pixels,e=this.mask;if(!t||!i||!i.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");var s,l,r,h;s=l=r=i[0],i.length>=3&&(l=i[1],r=i[2]);var n=new Uint32Array(t),o=this.width*this.height;if(s.length!==o)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");if(e&&e.length===o)for(h=0;o>h;h++)e[h]&&(n[h]=255<<24|r[h]<<16|l[h]<<8|s[h]);else for(h=0;o>h;h++)n[h]=255<<24|r[h]<<16|l[h]<<8|s[h]},_fillFromNon8Bit:function(t){var i=this.pixels,e=this.mask,s=this.statistics;if(!t||!i||!i.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");var l=1,r=0;if(s&&s.length>0)r=s[0].minValue,l=255/(s[0].maxValue-s[0].minValue);else{var h=255;"s8"===this.pixelType?(r=-128,h=127):"u16"===this.pixelType?h=65535:"s16"===this.pixelType?(r=-32768,h=32767):"u32"===this.pixelType?h=4294967295:"s32"===this.pixelType?(r=-2147483648,h=2147483647):"f32"===this.pixelType?(r=-3.4e39,h=3.4e39):"f64"===this.pixelType&&(r=-Number.MAX_VALUE,h=Number.MAX_VALUE),l=255/(h-r)}var n,o,a,c,p,f=new Uint32Array(t),u=this.width*this.height;if(n=i[0],n.length!==u)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");if(i.length>=3)if(o=i[1],a=i[2],e&&e.length===u)for(c=0;u>c;c++)e[c]&&(f[c]=255<<24|(a[c]-r)*l<<16|(o[c]-r)*l<<8|(n[c]-r)*l);else for(c=0;u>c;c++)f[c]=255<<24|(a[c]-r)*l<<16|(o[c]-r)*l<<8|(n[c]-r)*l;else if(e&&e.length===u)for(c=0;u>c;c++)p=(n[c]-r)*l,e[c]&&(f[c]=255<<24|p<<16|p<<8|p);else for(c=0;u>c;c++)p=(n[c]-r)*l,f[c]=255<<24|p<<16|p<<8|p},_fillFrom32Bit:function(t){var i=this.pixels,e=this.mask;if(!t||!i||!i.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");var s,l,r,h;s=l=r=i[0],i.length>=3&&(l=i[1],r=i[2]);var n=this.width*this.height;if(s.length!==n)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");var o=0;if(e&&e.length===n)for(h=0;n>h;h++)t[o++]=s[h],t[o++]=l[h],t[o++]=r[h],t[o++]=e[h];else for(h=0;n>h;h++)t[o++]=s[h],t[o++]=l[h],t[o++]=r[h],t[o++]=255}});return e});