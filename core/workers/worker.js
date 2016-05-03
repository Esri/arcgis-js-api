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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

importScripts("../libs/requirejs/require.js");var connections={};onmessage=function(e){var n=e.data;if(n){var o=e.data.connection;if("<open-connection>"===n.type){var s=n.data.path,t=n.id;if(connections[o])return void self.postMessage({type:"<response>",id:t,connection:o});require({baseUrl:"../../../"},["esri/core/workers/WorkerConnection",s],function(e,n){connections[o]=new e(n,this,o),self.postMessage({type:"<response>",id:t,data:{connection:o},error:void 0})})}else if("<close-connection>"===n.type)connections[o]&&delete connections[o];else{var i=e.data.type;if(i){var r=connections[o];r&&r.proxy.message(e)}}}},postMessage({type:"<worker-init>"});