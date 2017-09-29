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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/io-query","dojo/Deferred","../../core/Accessor","../../core/Evented","../../core/Promise","../../core/promiseUtils","../../core/watchUtils","../../core/Error"],function(e,n,t,o,c,s,i,r,h){var a=o.createSubclass([c,s],{declareSubclass:"esri.layers.support.WebSocketConnector",initialize:function(){var e=null;if(this.socketUrls.length||(e=new Error("No urls passed to WebSocketConnector. No live connection possible")),"WebSocket"in window||(e=new Error("The browser does not support Web Sockets. No live connection possible")),e){var n=new t;this.addResolvingPromise(n.promise),n.reject(e)}this.queryParams&&this.queryParams.token&&this._set("tokenNeeded",!0)},_socket:null,_connectPromise:null,_disconnectPromise:null,properties:{currentSocketUrl:{value:null,readOnly:!0},queryParams:null,socketUrls:{value:[]},tokenNeeded:{value:!1},connectionError:{value:null,type:h,readOnly:!0},connectionStatus:{value:"disconnected",readOnly:!0}},connect:function(){var e=this.connectionStatus;return"connected"===e||"connecting"===e?this._connectPromise:"disconnected"===this.connectionStatus?(this._set("connectionStatus","connecting"),this._connect()):"disconnecting"===this.connectionStatus?(this._connectPromise=null,this._disconnectPromise||(this._disconnectPromise=r.once(this,"connectionStatus").then(function(e){return"disconnected"===e.value?this._connect():void 0}.bind(this))),this._disconnectPromise):void 0},disconnect:function(){var e=this.connectionStatus;"connected"===e?(this._set("connectionStatus","disconnecting"),this._socket?this._socket.close():this._set("connectionStatus","disconnected")):"connecting"===e&&this._connectPromise.then(function(){this.disconnect()}.bind(this))},send:function(e){this._socket&&("object"==typeof e&&(e=JSON.stringify(e)),this._socket.send(e))},_connect:function(){this._connectPromise&&(this._connectPromise=null);var n=new t;return this._connectPromise=n,this._getWebSocketToken().then(function(n){n&&(this.queryParams.token=n);var t=this._makeCurrentUrl(),o=new WebSocket(t);o.onopen=e.hitch(this,this._handleSocketOpen),o.onclose=e.hitch(this,this._handleSocketClose),o.onmessage=e.hitch(this,this._handleSocketMessage),this._socket=o}.bind(this)).otherwise(function(e){var n=new h("web-socket-connector:connect","Could not get websocket token for secured service",e);this._set("connectionError",n),this._connectPromise.reject(n)}.bind(this)),n.promise},_getWebSocketToken:function(){var e=this.queryParams,n=e&&e.token,t=this.tokenNeeded;return n?i.resolve(n):t?this.layerSource.getWebSocketToken():i.resolve()},_makeCurrentUrl:function(){var e,t,o,c=this.queryParams,s=this.socketUrls;return 1!==s.length&&this.currentSocketUrl?(e=s.indexOf(this.currentSocketUrl),t=e>=s.length-1?0:e+1,o=s[t]):o=s[0],this._set("currentSocketUrl",o),c&&(o+="?"+n.objectToQuery(c)),o},_handleSocketOpen:function(){this._set("connectionStatus","connected"),this._set("connectionError",null),this._disconnectPromise=null,this._connectPromise&&this._connectPromise.resolve()},_handleSocketClose:function(e){var n,t=null;this.queryParams&&(this.queryParams.token=null),(!e.wasClean||e.code)&&(1001===e.code?n="Service is going away.":4400===e.code?n=e.reason||"Invalid url parameters. Check filter properties.":4404===e.code?n="Service not found":4401===e.code||4403===e.code?n="Not authorized":e.wasClean||(n=e.reason||"Unknown reason"),n&&(t=new h("web-socket-connector:connection closed","Connection failed: "+n),this._set("connectionError",t),this._connectPromise&&this._connectPromise.reject(t))),this._connectPromise=null,this._set("connectionStatus","disconnected"),this._socket=null},_handleSocketMessage:function(e){this.emit("data-received",e.data)}});return a});