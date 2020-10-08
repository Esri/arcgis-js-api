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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/compilerUtils","../../../../../core/Error","../../../../../core/maybe","../../../../../core/promiseUtils"],(function(e,r,t,n,a,i,o){"use strict";function u(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;var r=document.createElement("canvas");r.width=e.width,r.height=e.height;var t=r.getContext("2d");return e instanceof HTMLImageElement?t.drawImage(e,0,0,e.width,e.height):e instanceof ImageData?t.putImageData(e,e.width,e.height):n.neverReached(e),r}Object.defineProperty(r,"__esModule",{value:!0}),r.isArrayBufferPNG=r.encodeBase64DataUri=r.imageToArrayBuffer=r.imageToDataURI=void 0,r.imageToDataURI=function(e){var r=u(e);return i.isSome(r)?r.toDataURL():""},r.imageToArrayBuffer=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,n,f=this;return t.__generator(this,(function(c){if(r=u(e),i.isNone(r))throw new a("imageToArrayBuffer","Unsupported image type");if(n=function(e){return t.__awaiter(f,void 0,void 0,(function(){var r,n;return t.__generator(this,(function(t){if(!e)throw new a("imageToArrayBuffer","Unable to convert image to PNG");return r=new FileReader,n=o.create((function(e){r.addEventListener("loadend",(function(){e(r.result)}))})),r.readAsArrayBuffer(e),[2,n]}))}))},r.toBlob)return[2,o.create((function(e,t){r.toBlob((function(r){n(r).then(e,t)}),"image/png")}))];if("msToBlob"in r)return[2,n(r.msToBlob())];throw new a("imageToArrayBuffer","Could not convert canvas to blob")}))}))},r.encodeBase64DataUri=function(e){for(var r=[],t=new Uint8Array(e),n=0;n<t.length;n++)r.push(String.fromCharCode(t[n]));return"data:application/octet-stream;base64,"+btoa(r.join(""))},r.isArrayBufferPNG=function(e){if(e.byteLength<8)return!1;var r=new Uint8Array(e);return 137===r[0]&&80===r[1]&&78===r[2]&&71===r[3]&&13===r[4]&&10===r[5]&&26===r[6]&&10===r[7]}}));