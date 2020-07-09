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

define(["require","exports","../has"],(function(e,r,t){var n;Object.defineProperty(r,"__esModule",{value:!0}),function(e){e[e.HANDSHAKE=0]="HANDSHAKE",e[e.CONFIGURE=1]="CONFIGURE",e[e.CONFIGURED=2]="CONFIGURED",e[e.OPEN=3]="OPEN",e[e.OPENED=4]="OPENED",e[e.RESPONSE=5]="RESPONSE",e[e.INVOKE=6]="INVOKE",e[e.ABORT=7]="ABORT",e[e.CLOSE=8]="CLOSE",e[e.OPEN_PORT=9]="OPEN_PORT",e[e.ON=10]="ON"}(n=r.MessageType||(r.MessageType={}));var s=0;function a(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}function i(e){if(!e||!e.length)return null;if(t("esri-workers-arraybuffer-transfer"))return e;var r=e.filter((function(e){return!((r=e)instanceof ArrayBuffer||r&&r.constructor&&"ArrayBuffer"===r.constructor.name);var r}));return r.length?r:null}r.newJobId=function(){return s++},r.isTranferableResult=a,r.toInvokeError=function(e){return e?"string"==typeof e?JSON.stringify({name:"message",message:e}):e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details,stack:e.stack}):null},r.postMessage=function(e,r,t,s){var u;r.type!==n.OPEN_PORT?r.type===n.INVOKE||r.type===n.RESPONSE?(a(t)?(u=i(t.transferList),r.data=t.result):(u=i(s),r.data=t),u?e.postMessage(r,u):e.postMessage(r)):e.postMessage(r):e.postMessage(r,[r.port])},r.receiveMessage=function(e){if(!e)return null;var r=e.data;return r?"string"==typeof r?JSON.parse(r):r:null}}));