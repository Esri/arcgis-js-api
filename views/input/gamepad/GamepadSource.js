// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/scheduling","./GamepadInputDevice","./GamepadState"],(function(e,t,n,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GamepadSource=void 0;var s=function(){function e(e,t){var n=this;this.element=e,this.input=t,this._hasEventListeners=!1,this.onConnectGamepad=function(e){n.connectGamepad(e.gamepad)},this.onDisconnectGamepad=function(e){var t=e.gamepad,a=t.index,s=n.inputDevices[a];s&&(n.emitGamepadEvent(t,i.extractState(s),!1),n.inputDevices.splice(a,1),n.latestUpdate.splice(a,1),n.input.gamepad.devices.remove(s),n.ensurePollingState())},this.frameTask=null,this.latestUpdate=new Array,this.inputDevices=new Array,this.callback=null,this.supported="getGamepads"in window.navigator,this.supported&&(this.forEachGamepad(this.connectGamepad),window.addEventListener("gamepadconnected",this.onConnectGamepad),window.addEventListener("gamepaddisconnected",this.onDisconnectGamepad),this.ensurePollingState())}return e.prototype.destroy=function(){this.hasEventListeners=!1,this.supported&&(window.removeEventListener("gamepadconnected",this.onConnectGamepad),window.removeEventListener("gamepaddisconnected",this.onDisconnectGamepad))},Object.defineProperty(e.prototype,"hasEventListeners",{set:function(e){this._hasEventListeners!==e&&(this._hasEventListeners=e,this.ensurePollingState())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"eventsEnabled",{get:function(){return this.supported&&this.inputDevices.length>0&&this._hasEventListeners},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onEvent",{set:function(e){this.callback=e},enumerable:!1,configurable:!0}),e.prototype.connectGamepad=function(e){var t=new a(e);"unknown"!==t.deviceType&&(this.inputDevices[e.index]=t,this.input.gamepad.devices.add(t)),this.ensurePollingState()},e.prototype.ensurePollingState=function(){this.eventsEnabled?this.startPolling():this.stopPolling()},e.prototype.startPolling=function(){var e=this;null==this.frameTask&&(this.frameTask=n.addFrameTask({update:function(){return e.readGamepadState()}}))},e.prototype.stopPolling=function(){null!=this.frameTask&&(this.frameTask.remove(),this.frameTask=null,this.latestUpdate=new Array)},e.prototype.readGamepadState=function(){var e=this,t=document.hasFocus(),n=this.element.contains(document.activeElement),a="document"===this.input.gamepad.enabledFocusMode&&!t||"view"===this.input.gamepad.enabledFocusMode&&!n;this.forEachGamepad((function(t){var n=e.inputDevices[t.index];if(n){var s=e.latestUpdate[t.index],o=i.extractState(n),r=a||i.stateIdle(o);if(s){if(s.timestamp===t.timestamp)return;if(!s.active&&r)return;if(i.stateEqual(s.state,o))return}e.emitGamepadEvent(t,o,!r)}}))},e.prototype.forEachGamepad=function(e){for(var t=window.navigator.getGamepads(),n=0;n<t.length;n++){var a=t[n];this.validate(a)&&e(a)}},e.prototype.emitGamepadEvent=function(e,t,n){var a=this.latestUpdate[e.index],i=a&&a.active;if(i||n){var s=!i&&n?"start":i&&n?"update":"end";this.latestUpdate[e.index]={timestamp:e.timestamp,state:t,active:n},this.callback&&this.callback({device:this.inputDevices[e.index],state:t,action:s})}},e.prototype.validate=function(e){if(!e)return!1;if(!e.connected)return!1;for(var t=0;t<e.axes.length;t++)if(isNaN(e.axes[t]))return!1;return!0},e}();t.GamepadSource=s}));