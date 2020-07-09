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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/scheduling","./GamepadInputDevice","./GamepadState"],(function(e,t,n,a,i){Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=this;this.element=e,this.input=t,this._hasEventListeners=!1,this.frameTask=null,this.latestUpdate=new Array,this.inputDevices=new Array,this.callback=null,this.supported="getGamepads"in window.navigator,this.supported&&(this.forEachGamepad((function(e){return n.connectGamepad(e)})),window.addEventListener("gamepadconnected",(function(e){return n.connectGamepad(e.gamepad)})),window.addEventListener("gamepaddisconnected",(function(e){return n.disconnectGamepad(e.gamepad)})),this.ensurePollingState())}return e.prototype.destroy=function(){var e=this;this.ensurePollingState(),this.supported&&(window.removeEventListener("gamepadconnected",(function(t){return e.connectGamepad(t.gamepad)})),window.removeEventListener("gamepaddisconnected",(function(t){return e.disconnectGamepad(t.gamepad)})))},Object.defineProperty(e.prototype,"hasEventListeners",{set:function(e){this._hasEventListeners!==e&&(this._hasEventListeners=e,this.ensurePollingState())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"eventsEnabled",{get:function(){return this.supported&&this.inputDevices.length>0&&this._hasEventListeners},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onEvent",{set:function(e){this.callback=e},enumerable:!0,configurable:!0}),e.prototype.connectGamepad=function(e){var t=new a(e);"unknown"!==t.deviceType&&(this.inputDevices[e.index]=t,this.input.gamepad.devices.add(t)),this.ensurePollingState()},e.prototype.disconnectGamepad=function(e){var t=e.index,n=this.inputDevices[t];n&&(this.emitGamepadEvent(e,i.extractState(n),!1),this.inputDevices.splice(t,1),this.latestUpdate.splice(t,1),this.input.gamepad.devices.remove(n),this.ensurePollingState())},e.prototype.ensurePollingState=function(){this.eventsEnabled?this.startPolling():this.stopPolling()},e.prototype.startPolling=function(){var e=this;null==this.frameTask&&(this.frameTask=n.addFrameTask({update:function(){return e.readGamepadState()}}))},e.prototype.stopPolling=function(){null!=this.frameTask&&(this.frameTask.remove(),this.frameTask=null,this.latestUpdate=new Array)},e.prototype.readGamepadState=function(){var e=this,t=document.hasFocus(),n=this.element.contains(document.activeElement),a="document"===this.input.gamepad.enabledFocusMode&&!t||"view"===this.input.gamepad.enabledFocusMode&&!n;this.forEachGamepad((function(t){var n=e.inputDevices[t.index];if(n){var s=e.latestUpdate[t.index],r=i.extractState(n),o=a||i.stateIdle(r);if(s){if(s.timestamp===t.timestamp)return;if(!s.active&&o)return;if(i.stateEqual(s.state,r))return}e.emitGamepadEvent(t,r,!o)}}))},e.prototype.forEachGamepad=function(e){for(var t=window.navigator.getGamepads(),n=0;n<t.length;n++){var a=t[n];this.validate(a)&&e(a)}},e.prototype.emitGamepadEvent=function(e,t,n){var a=this.latestUpdate[e.index],i=a&&a.active;if(i||n){var s=!i&&n?"start":i&&n?"update":"end";this.latestUpdate[e.index]={timestamp:e.timestamp,state:t,active:n},this.callback&&this.callback({device:this.inputDevices[e.index],state:t,action:s})}},e.prototype.validate=function(e){if(!e)return!1;if(!e.connected)return!1;for(var t=0;t<e.axes.length;t++)if(isNaN(e.axes[t]))return!1;return!0},e}();t.GamepadSource=s}));