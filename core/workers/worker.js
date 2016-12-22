// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

function messageHandler(e){var o=e.data;if(o){var s=e.data.connection;if("<configure>"===o.type){var n=o.configure;isInitialized||(self.dojoConfig=n.dojoConfig,self.importScripts(n.loaderUrl),require(["dojo/_base/lang","esri/config"],function(e,o){e.mixin(o,n.esriConfig),self.postMessage({type:"<worker-configured>"})}))}else if("<open-connection>"===o.type){var i=o.data.path,t=o.id;if(connections[s])return void self.postMessage({type:"<response>",id:t,connection:s});require(["esri/core/workers/WorkerConnection",i],function(e,o){connections[s]=new e(o,this,s),self.postMessage({type:"<response>",id:t,data:{connection:s},error:void 0})})}else if("<close-connection>"===o.type)connections[s]&&delete connections[s];else if("<static-message>"===o.type){var r=o.id;if(outgoingStaticMessages[r]){var a=outgoingStaticMessages[r];delete outgoingStaticMessages[r],o.error?a.reject(o.error):a.resolve(o.data)}}else{var c=e.data.type;if(c){var g=connections[s];g&&g.proxy.message(e)}}}}var connections={},outgoingStaticMessages={},isInitialized=!1;self.addEventListener("message",messageHandler),self.postMessage({type:"<worker-loaded>"});