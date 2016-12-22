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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(t,i,e,s){var l=t([],{declaredClass:"esri.layers.PixelBlock",planes:null,width:null,height:null,pixelType:null,pixels:[],statistics:[],constructor:function(t){if(t){if(!t.width||Math.floor(t.width)!==t.width)throw"PixelBlock: incorrect width";if(!t.height||Math.floor(t.height)!==t.height)throw"PixelBlock: incorrect height";if(!t.pixels||!t.statistics)throw"PixelBlock: pixel data or statistics not present";this.width=t.width,this.height=t.height,this.pixels=t.pixels,this.pixelType=t.pixelType||null,this.statistics=t.statistics,this.mask=t.mask||null}},getPlaneCount:function(){return this.pixels.length!==this.statistics.length?console.error("Inconsistent pixel data and statistics"):this.statistics.length},addData:function(t){if(!t.pixels||!t.statistics)throw"Pixel data or statistics are not present";if(t.pixels.length!==this.width*this.height)throw"Inconsistent pixel data size";this.statistics.push(t.statistics),this.pixels.push(t.pixels)},getAsRGBA:function(){var t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"S8":case"S16":case"U16":case"S32":case"U32":case"F32":case"F64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)},getAsRGBAFloat:function(){var t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t},clone:function(){var t=new this.constructor;t.width=this.width,t.height=this.height,t.pixelType=this.pixelType,this.mask&&(t.mask=new Uint8Array(this.mask));var e,s;if(this.pixels)for(t.pixels=[],s=this.pixels.length,e=0;s>e;e++)t.pixels[e]=new Float32Array(this.pixels[e]);if(this.statistics)for(t.statistics=[],s=this.statistics.length,e=0;s>e;e++)t.statistics[e]=i.clone(this.statistics[e]);return t},_fillFrom8Bit:function(t){var i=this.pixels,e=this.mask;if(!t||!i||!i.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");var s,l,h,r;s=l=h=i[0],i.length>=3&&(l=i[1],h=i[2]);var n=new Uint32Array(t),o=this.width*this.height;if(s.length!==o)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");if(e&&e.length===o)for(r=0;o>r;r++)e[r]&&(n[r]=255<<24|h[r]<<16|l[r]<<8|s[r]);else for(r=0;o>r;r++)n[r]=255<<24|h[r]<<16|l[r]<<8|s[r]},_fillFromNon8Bit:function(t){var i=this.pixels,e=this.mask,s=this.statistics;if(!t||!i||!i.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");var l=1,h=0;if(s&&s.length>0)h=s[0].minValue,l=255/(s[0].maxValue-s[0].minValue);else{var r=255;"S8"===this.pixelType?(h=-128,r=127):"U16"===this.pixelType?r=65535:"S16"===this.pixelType?(h=-32768,r=32767):"U32"===this.pixelType?r=4294967295:"S32"===this.pixelType?(h=-2147483648,r=2147483647):"F32"===this.pixelType?(h=-3.4e39,r=3.4e39):"F64"===this.pixelType&&(h=-Number.MAX_VALUE,r=Number.MAX_VALUE),l=255/(r-h)}var n,o,a,c,p,f=new Uint32Array(t),x=this.width*this.height;if(n=i[0],n.length!==x)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");if(i.length>=3)if(o=i[1],a=i[2],e&&e.length===x)for(c=0;x>c;c++)e[c]&&(f[c]=255<<24|(a[c]-h)*l<<16|(o[c]-h)*l<<8|(n[c]-h)*l);else for(c=0;x>c;c++)f[c]=255<<24|(a[c]-h)*l<<16|(o[c]-h)*l<<8|(n[c]-h)*l;else if(e&&e.length===x)for(c=0;x>c;c++)p=(n[c]-h)*l,e[c]&&(f[c]=255<<24|p<<16|p<<8|p);else for(c=0;x>c;c++)p=(n[c]-h)*l,f[c]=255<<24|p<<16|p<<8|p},_fillFrom32Bit:function(t){var i=this.pixels,e=this.mask;if(!t||!i||!i.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");var s,l,h,r;s=l=h=i[0],i.length>=3&&(l=i[1],h=i[2]);var n=this.width*this.height;if(s.length!==n)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");var o=0;if(e&&e.length===n)for(r=0;n>r;r++)t[o++]=s[r],t[o++]=l[r],t[o++]=h[r],t[o++]=e[r];else for(r=0;n>r;r++)t[o++]=s[r],t[o++]=l[r],t[o++]=h[r],t[o++]=255}});return e("extend-esri")&&i.setObject("layers.PixelBlock",l,s),l});