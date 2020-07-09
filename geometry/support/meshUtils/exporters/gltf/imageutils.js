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

define(["require","exports","tslib","../../../../../core/compilerUtils","../../../../../core/Error","../../../../../core/maybe","../../../../../core/promiseUtils"],(function(e,t,r,n,o,a,i){function u(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData?r.putImageData(e,e.width,e.height):n.neverReached(e),t}Object.defineProperty(t,"__esModule",{value:!0}),t.imageToDataURI=function(e){var t=u(e);return a.isSome(t)?t.toDataURL():""},t.imageToArrayBuffer=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,n,f=this;return r.__generator(this,(function(c){if(t=u(e),a.isNone(t))throw new o("imageToArrayBuffer","Unsupported image type");if(n=function(e){return r.__awaiter(f,void 0,void 0,(function(){var t,n;return r.__generator(this,(function(r){if(!e)throw new o("imageToArrayBuffer","Unable to convert image to PNG");return t=new FileReader,n=i.create((function(e){t.addEventListener("loadend",(function(){e(t.result)}))})),t.readAsArrayBuffer(e),[2,n]}))}))},t.toBlob)return[2,i.create((function(e,r){t.toBlob((function(t){n(t).then(e,r)}),"image/png")}))];if("msToBlob"in t)return[2,n(t.msToBlob())];throw new o("imageToArrayBuffer","Could not convert canvas to blob")}))}))},t.encodeBase64DataUri=function(e){for(var t=[],r=new Uint8Array(e),n=0;n<r.length;n++)t.push(String.fromCharCode(r[n]));return"data:application/octet-stream;base64,"+btoa(t.join(""))},t.isArrayBufferPNG=function(e){if(e.byteLength<8)return!1;var t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}}));