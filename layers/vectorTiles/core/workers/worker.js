// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

function mapDelete(e,o){e.delete(o)}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o){var r=require("dojo/Deferred"),t=globalId++,a=new r(function(o){self.postMessage({type:CANCEL,methodName:e,jobId:t}),mapDelete(outgoing,t)});return outgoing.set(t,a),self.postMessage({type:INVOKE,methodName:e,jobId:t,data:o}),a.promise}function messageHandler(e){var o=receiveMessage(e);if(o){var r=o.jobId;switch(o.type){case CONFIGURE:var t=o.configure;if(configured)return;self.dojoConfig=t.loaderConfig,self.importScripts(t.loaderUrl),"function"==typeof require.config&&require.config(t.loaderConfig),require(["esri/config"],function(e){for(var o in t.esriConfig)Object.prototype.hasOwnProperty.call(t.esriConfig,o)&&(e[o]=t.esriConfig[o]);self.postMessage({type:CONFIGURED})});break;case OPEN:var a=o.modulePath;require(["esri/layers/vectorTiles/core/workers/RemoteClient",a],function(e,o){var t=e.connect(o);self.postMessage({type:OPENED,jobId:r,data:t},[t])});break;case RESPONSE:if(outgoing.has(r)){var s=outgoing.get(r);mapDelete(outgoing,r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}}var globalId=0,outgoing=new Map,configured=!1,HANDSHAKE=0,CONFIGURE=1,CONFIGURED=2,OPEN=3,OPENED=4,RESPONSE=5,INVOKE=6,CANCEL=7;self.addEventListener("message",messageHandler),self.postMessage({type:HANDSHAKE});