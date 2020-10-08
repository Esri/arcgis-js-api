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

define(["require","exports","../has"],(function(e,r,t){"use strict";var s;Object.defineProperty(r,"__esModule",{value:!0}),r.receiveMessage=r.postMessage=r.toInvokeError=r.isTranferableResult=r.newJobId=r.MessageType=void 0,function(e){e[e.HANDSHAKE=0]="HANDSHAKE",e[e.CONFIGURE=1]="CONFIGURE",e[e.CONFIGURED=2]="CONFIGURED",e[e.OPEN=3]="OPEN",e[e.OPENED=4]="OPENED",e[e.RESPONSE=5]="RESPONSE",e[e.INVOKE=6]="INVOKE",e[e.ABORT=7]="ABORT",e[e.CLOSE=8]="CLOSE",e[e.OPEN_PORT=9]="OPEN_PORT",e[e.ON=10]="ON"}(s=r.MessageType||(r.MessageType={}));var n=0;function a(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}function o(e){if(!e||!e.length)return null;if(t("esri-workers-arraybuffer-transfer"))return e;var r=e.filter((function(e){return!((r=e)instanceof ArrayBuffer||r&&r.constructor&&"ArrayBuffer"===r.constructor.name);var r}));return r.length?r:null}r.newJobId=function(){return n++},r.isTranferableResult=a,r.toInvokeError=function(e){return e?"string"==typeof e?JSON.stringify({name:"message",message:e}):e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details||{stack:e.stack}}):null},r.postMessage=function(e,r,t,n){var i;r.type!==s.OPEN_PORT?r.type===s.INVOKE||r.type===s.RESPONSE?(a(t)?(i=o(t.transferList),r.data=t.result):(i=o(n),r.data=t),i?e.postMessage(r,i):e.postMessage(r)):e.postMessage(r):e.postMessage(r,[r.port])},r.receiveMessage=function(e){if(!e)return null;var r=e.data;return r?"string"==typeof r?JSON.parse(r):r:null}}));