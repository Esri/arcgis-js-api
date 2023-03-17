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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports"],(function(t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.XXH=void 0;function n(t){for(var r=[],n=0,e=t.length;n<e;n++){var i=t.charCodeAt(n);i<128?r.push(i):i<2048?r.push(192|i>>6,128|63&i):i<55296||i>=57344?r.push(224|i>>12,128|i>>6&63,128|63&i):(n++,i=65536+((1023&i)<<10|1023&t.charCodeAt(n)),r.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i))}return new Uint8Array(r)}var e=function(){function t(t){this._seed=t,this._totallen=0,this._bufs=[],this.init()}return t.prototype.init=function(){return this._bufs=[],this._totallen=0,this},t.prototype.updateFloatArray=function(t){for(var r=[],e=0,i=t;e<i.length;e++){var o=i[e];isNaN(o)?r.push("NaN"):o===1/0?r.push("Infinity"):o===-1/0?r.push("-Infinity"):0===o?r.push("0"):r.push(o.toString(16))}this.update(n(r.join("")))},t.prototype.updateIntArray=function(t){var r=Int32Array.from(t);this.update(new Uint8Array(r.buffer))},t.prototype.updateUint8Array=function(t){this.update(Uint8Array.from(t))},t.prototype.updateWithString=function(t){return this.update(n(t))},t.prototype.update=function(t){return this._bufs.push(t),this._totallen+=t.length,this},t.prototype.digest=function(){for(var t=new Uint8Array(this._totallen),r=0,n=0,e=this._bufs;n<e.length;n++){var i=e[n];t.set(i,r),r+=i.length}return this.init(),this._xxHash32(t,this._seed)},t.prototype._xxHash32=function(t,r){void 0===r&&(r=0);var n=t,e=r+374761393&4294967295,i=0;if(n.length>=16){var o=[r+2654435761+2246822519&4294967295,r+2246822519&4294967295,r+0&4294967295,r-2654435761&4294967295],u=t,h=u.length-16,s=0;for(i=0;(4294967280&i)<=h;i+=4){var a=2246822519*(u[(y=i)+0]+(u[y+1]<<8))+(2246822519*(u[y+2]+(u[y+3]<<8))<<16),p=o[s]+a&4294967295,f=65535&(p=p<<13|p>>>19),l=p>>>16;o[s]=2654435761*f+(2654435761*l<<16)&4294967295,s=s+1&3}e=(o[0]<<1|o[0]>>>31)+(o[1]<<7|o[1]>>>25)+(o[2]<<12|o[2]>>>20)+(o[3]<<18|o[3]>>>14)&4294967295}e=e+t.length&4294967295;for(var d=t.length-4;i<=d;i+=4){var y;e=668265263*(65535&(e=(e=e+(3266489917*(n[(y=i)+0]+(n[y+1]<<8))+(3266489917*(n[y+2]+(n[y+3]<<8))<<16))&4294967295)<<17|e>>>15))+(668265263*(e>>>16)<<16)&4294967295}for(;i<n.length;++i){e=2654435761*(65535&(e=(e+=374761393*(s=n[i]))<<11|e>>>21))+(2654435761*(e>>>16)<<16)&4294967295}return e=(2246822519*(65535&(e^=e>>>15))&4294967295)+(2246822519*(e>>>16)<<16),e=(3266489917*(65535&(e^=e>>>13))&4294967295)+(3266489917*(e>>>16)<<16),(e^=e>>>16)<0?e+4294967296:e},t}();r.XXH=e}));