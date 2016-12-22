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

define(["require","exports","./EventMatch","../../core/Logger"],function(e,n,t,i){var o=i.getLogger("esri.views.input"),r=function(){function e(e,n){this._manager=null,this._incoming={},this._outgoing={},this._incomingEventMatches=null,this._incomingEventTypes=null,this._outgoingEventTypes=null,this._name=e,this._hasSideEffects=n}return Object.defineProperty(e.prototype,"incomingEventMatches",{get:function(){if(!this._incomingEventMatches){this._incomingEventMatches=[];for(var e in this._incoming)for(var n=this._incoming[e],t=0,i=n;t<i.length;t++){var o=i[t];this._incomingEventMatches.push(o.match)}}return this._incomingEventMatches},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"incomingEventTypes",{get:function(){return this._incomingEventTypes||(this._incomingEventTypes=this.incomingEventMatches.map(function(e){return e.eventType})),this._incomingEventTypes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outgoingEventTypes",{get:function(){return this._outgoingEventTypes||(this._outgoingEventTypes=Object.keys(this._outgoing)),this._outgoingEventTypes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasSideEffects",{get:function(){return this._hasSideEffects},enumerable:!0,configurable:!0}),e.prototype.onInstall=function(e){var n=this;return this._manager?void o.error("This InputHandler has already been registered with an InputManager"):(e.setEventCallback(function(e,t){return n._handleEvent(e,t)}),e.setUninstallCallback(function(){return n._onUninstall()}),void(this._manager=e))},e.prototype.registerIncoming=function(e,n,i){var o,r=this;"function"==typeof n?(i=n,o=[]):o=n||[];var s="string"==typeof e?new t.EventMatch(e,o):e,u=function(){r._incomingEventTypes=null,r._incomingEventMatches=null},c=function(e){var n=r._incoming[e.match.eventType];if(n){var t=n.indexOf(e);n.splice(t,1),u(),r._manager&&r._manager.updateDependencies()}},h=new a(s,i,{onPause:c,onRemove:c,onResume:function(e){var n=r._incoming[e.match.eventType];n&&-1===n.indexOf(e)&&(n.push(e),u(),r._manager&&r._manager.updateDependencies())}}),g=this._incoming[s.eventType];return g||(g=[],this._incoming[s.eventType]=g),g.push(h),u(),this._manager&&this._manager.updateDependencies(),h},e.prototype.registerOutgoing=function(e){var n=this;if(this._outgoing[e])throw Error("There is already a callback registered for this outgoing InputEvent: "+e);var t=new s(e,{onEmit:function(e,t){n._manager.emit(e.eventType,t)},onRemove:function(e){delete n._outgoing[e.eventType],n._manager.updateDependencies()}});return this._outgoing[e]=t,this._outgoingEventTypes=null,this._manager&&this._manager.updateDependencies(),t},e.prototype.startCapturingPointer=function(e){this._manager.setPointerCapture(e,!0)},e.prototype.stopCapturingPointer=function(e){this._manager.setPointerCapture(e,!1)},e.prototype._onUninstall=function(){return this._manager?void(this._manager=null):void o.error("This InputHandler is not registered with an InputManager")},e.prototype._handleEvent=function(e,n){var t=this._incoming[e.type];if(t)for(var i=0,o=t;i<o.length;i++){var r=o[i];if(r.match.matches(e,n)&&(r.callback(e),e.shouldStopPropagation()))break}},e}();n.InputHandler=r;var a=function(){function e(e,n,t){this.match=e,this._callback=n,this._handler=t}return e.prototype.pause=function(){this._handler.onPause(this)},e.prototype.resume=function(){this._handler.onResume(this)},e.prototype.remove=function(){this._handler.onRemove(this)},Object.defineProperty(e.prototype,"callback",{get:function(){return this._callback},enumerable:!0,configurable:!0}),e}(),s=function(){function e(e,n){this.eventType=e,this._removed=!1,this._handler=n}return e.prototype.emit=function(e){this._removed||this._handler.onEmit(this,e)},e.prototype.remove=function(){this._removed=!0,this._handler.onRemove(this)},e}()});