// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","exports","dojo/has"],(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.HANDSHAKE=0]="HANDSHAKE",e[e.CONFIGURE=1]="CONFIGURE",e[e.CONFIGURED=2]="CONFIGURED",e[e.OPEN=3]="OPEN",e[e.OPENED=4]="OPENED",e[e.RESPONSE=5]="RESPONSE",e[e.INVOKE=6]="INVOKE",e[e.CANCEL=7]="CANCEL",e[e.CLOSE=8]="CLOSE",e[e.OPEN_PORT=9]="OPEN_PORT"}(t.MessageType||(t.MessageType={}));var s=0;function n(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}t.newJobId=function(){return s++},t.isTranferableResult=n,t.toInvokeError=function(e){return e?e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details,stack:e.stack}):null},t.postMessage=function(e,t,s,a){2===arguments.length||void 0===s&&void 0===a?e.postMessage(t):(r("esri-workers-supports-transfer-arraybuffer")||(a?(a=a.filter((function(e){return!(e instanceof ArrayBuffer)}))).length||(a=null):n(s)&&s.transferList&&(s.transferList=s.transferList.filter((function(e){return!(e instanceof ArrayBuffer)})),s.transferList.length||(s.transferList=null))),a?(t.data=s,e.postMessage(t,a)):n(s)?(t.data=s.result,s.transferList?e.postMessage(t,s.transferList):e.postMessage(t)):(t.data=s,e.postMessage(t)))},t.receiveMessage=function(e){if(!e)return null;var t=e.data;return t?"string"==typeof t?JSON.parse(t):t:null}}));