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

define(["dojo/Deferred","dojo/promise/all","../promiseUtils","./Connection","./JobProxy"],function(o,n,e,t,r){var i=function(){var o=navigator.hardwareConcurrency||2,n=Math.max(o-1,2);this.ready=!1,this._jobProxies=[],this._jobProxyReady=[],this._currentWorkerId=0,this._connectionIndex=0,this._connections={},this._connectionPromises={};for(var e=this._workerInitHandler.bind(this),t=0;n>t;++t){var i=new r(this._connections,t,e);this._jobProxies.push(i),this._jobProxyReady.push(!1)}};return i.prototype.open=function(o,n){return this._openConnection(o).then(function(o){return this._loadModule(n,o.id).then(function(){return o}).otherwise(function(o){return e.reject(o)})}.bind(this))},i.prototype.terminate=function(){for(var o=0;o<this._jobProxies.length;o++)this._jobProxies[o].terminate();this._jobProxies=[]},i.prototype.closeConnection=function(o){if(o)if(this._connections[o.id]&&delete this._connections[o.id],this.ready)for(var n=0;n<this._jobProxies.length;n++)this._jobProxies[n].closeConnection(o.id);else{var e=this._connectionPromises[o.id];e&&(e.cancel(),delete this._connectionPromises[o.id])}},i.prototype.invoke=function(o,n,t,r,i){var s=null;if(r&&(s=r.id),null===s&&(s=this._currentWorkerId=(this._currentWorkerId+1)%this._jobProxies.length,!this._jobProxyReady[s]&&!this._jobProxies.some(function(o,n,e){return s=(s+1)%e.length,this._jobProxyReady[s]}.bind(this))))return e.reject(new Error("No worker available"));var c=this._jobProxies[s].invoke(o,n,t,i);return r&&(r.id=s),c},i.prototype.broadcast=function(o,n,e,t){for(var r=[],i=0;i<this._jobProxies.length;i++)this._jobProxyReady[i]&&r.push(this._jobProxies[i].invoke(o,n,e,t));return r},i.prototype._loadModule=function(o,t){for(var r=[],i=0;i<this._jobProxies.length;i++)r.push(this._jobProxies[i].openConnection(o,t));return n(r).then(function(o){for(var n in o)if(n.error)return e.reject(new Error("failed to load module onto connection #"+n.connection+". Error: "+n.error))})},i.prototype._workerInitHandler=function(o){if(this._jobProxyReady[o]=!0,!this.ready){var n=this._jobProxyReady.every(function(o){return o});if(n){for(var e in this._connectionPromises){var t=this._connections[e];t&&this._connectionPromises[e].resolve(t)}this._connectionPromises={},this.ready=!0}}},i.prototype._openConnection=function(n){var e=this._connectionIndex++,r=new t(n,e,this);this._connections[e]=r;var i=new o;return this.ready?i.resolve(r):this._connectionPromises[e]=i,i.promise},new i});