// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

function invokeStaticMessage(e,s){var t=require("dojo/Deferred"),o=staticMsgCount++,n=new t(function(s){postMessage({type:"<cancel>",staticMsg:e,id:o,data:{reason:s},connection:null}),delete outgoingStaticMessages[o]});return outgoingStaticMessages[o]=n,postMessage({type:"<static-message>",staticMsg:e,id:o,data:s,connection:null}),n.promise}function messageHandler(e){var s=e.data;if(s){var t=e.data.connection;if("<configure>"===s.type){var o=s.configure;isInitialized||(self.dojoConfig=o.dojoConfig,self.importScripts(o.loaderUrl),require(["dojo/_base/lang","esri/config"],function(e,s){e.mixin(s,o.esriConfig),self.postMessage({type:"<worker-configured>"})}))}else if("<open-connection>"===s.type){var n=s.data.path,i=s.id;if(connections[t])return void self.postMessage({type:"<response>",id:i,connection:t});require(["esri/layers/vectorTiles/core/workers/WorkerConnection",n],function(e,s){connections[t]=new e(s,this,t),self.postMessage({type:"<response>",id:i,data:{connection:t},error:void 0})})}else if("<close-connection>"===s.type)connections[t]&&delete connections[t];else if("<static-message>"===s.type){var a=s.id;if(outgoingStaticMessages[a]){var r=outgoingStaticMessages[a];delete outgoingStaticMessages[a],s.error?r.reject(s.error):r.resolve(s.data)}}else{var c=e.data.type;if(c){var g=connections[t];g&&g.proxy.message(e)}}}}var connections={},outgoingStaticMessages={},staticMsgCount=0,isInitialized=!1;self.addEventListener("message",messageHandler),self.postMessage({type:"<worker-loaded>"});