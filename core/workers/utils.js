// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/has"],function(e,t,r){function s(){return o++}function n(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}function a(e){return e?e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details,stack:e.stack}):null}function i(e,t,s,a){if(2===arguments.length||void 0===s&&void 0===a)return void e.postMessage(t);r("esri-workers-supports-transfer-arraybuffer")||(a?(a=a.filter(function(e){return!(e instanceof ArrayBuffer)}),a.length||(a=null)):n(s)&&s.transferList&&(s.transferList=s.transferList.filter(function(e){return!(e instanceof ArrayBuffer)}),s.transferList.length||(s.transferList=null))),a?(t.data=s,e.postMessage(t,a)):n(s)?(t.data=s.result,s.transferList?e.postMessage(t,s.transferList):e.postMessage(t)):(t.data=s,e.postMessage(t))}function f(e){if(!e)return null;var t=e.data;return t?"string"==typeof t?JSON.parse(t):t:null}Object.defineProperty(t,"__esModule",{value:!0});!function(e){e[e.HANDSHAKE=0]="HANDSHAKE",e[e.CONFIGURE=1]="CONFIGURE",e[e.CONFIGURED=2]="CONFIGURED",e[e.OPEN=3]="OPEN",e[e.OPENED=4]="OPENED",e[e.RESPONSE=5]="RESPONSE",e[e.INVOKE=6]="INVOKE",e[e.CANCEL=7]="CANCEL",e[e.CLOSE=8]="CLOSE",e[e.OPEN_PORT=9]="OPEN_PORT"}(t.MessageType||(t.MessageType={}));var o=0;t.newJobId=s,t.isTranferableResult=n,t.toInvokeError=a,t.postMessage=i,t.receiveMessage=f});