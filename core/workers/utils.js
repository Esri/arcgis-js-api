// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../has"],function(e,r,t){function n(){return E++}function s(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}function a(e){return e?e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details,stack:e.stack}):null}function u(e,r,t,n){if(r.type===O.OPEN_PORT)return void e.postMessage(r,[r.port]);if(r.type!==O.INVOKE&&r.type!==O.RESPONSE)return void e.postMessage(r);var a;s(t)?(a=o(t.transferList),r.data=t.result):(a=o(n),r.data=t),a?e.postMessage(r,a):e.postMessage(r)}function i(e){if(!e)return null;var r=e.data;return r?"string"==typeof r?JSON.parse(r):r:null}function o(e){if(!e||!e.length)return null;if(t("esri-workers-arraybuffer-transfer"))return e;var r=e.filter(function(e){return!f(e)});return r.length?r:null}function f(e){return e instanceof ArrayBuffer||e&&e.constructor&&"ArrayBuffer"===e.constructor.name}Object.defineProperty(r,"__esModule",{value:!0});var O;!function(e){e[e.HANDSHAKE=0]="HANDSHAKE",e[e.CONFIGURE=1]="CONFIGURE",e[e.CONFIGURED=2]="CONFIGURED",e[e.OPEN=3]="OPEN",e[e.OPENED=4]="OPENED",e[e.RESPONSE=5]="RESPONSE",e[e.INVOKE=6]="INVOKE",e[e.ABORT=7]="ABORT",e[e.CLOSE=8]="CLOSE",e[e.OPEN_PORT=9]="OPEN_PORT",e[e.ON=10]="ON"}(O=r.MessageType||(r.MessageType={}));var E=0;r.newJobId=n,r.isTranferableResult=s,r.toInvokeError=a,r.postMessage=u,r.receiveMessage=i});