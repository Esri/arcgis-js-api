// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/scheduling","./GamepadInputDevice","./GamepadState"],function(e,t,a,n,i,d){Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var a=this;this.element=e,this.input=t,this.handleGamepadConnectedEvent=function(e){a.handleGamepadConnected(e.gamepad)},this.handleGamepadDisconnectedEvent=function(e){var t=e.gamepad,n=a.inputDevices[t.index];n&&(a.emitGamepadEvent(t,d.extractState(n),!1),a.inputDevices[t.index]=void 0,a.latestUpdate[t.index]=void 0,a.input.gamepad.devices.remove(n))},this.frameTask=null,this.latestUpdate=new Array,this.inputDevices=new Array,this.callback=null,this.supported="getGamepads"in window.navigator,this.supported&&(this.forEachGamepad(function(e){return a.handleGamepadConnected(e)}),window.addEventListener("gamepadconnected",this.handleGamepadConnectedEvent),window.addEventListener("gamepaddisconnected",this.handleGamepadDisconnectedEvent))}return e.prototype.destroy=function(){this.pollingEnabled=!1,this.supported&&(window.removeEventListener("gamepadconnected",this.handleGamepadConnectedEvent),window.removeEventListener("gamepaddisconnected",this.handleGamepadDisconnectedEvent))},Object.defineProperty(e.prototype,"onEvent",{set:function(e){this.callback=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pollingEnabled",{set:function(e){this.supported&&(e?this.startPolling():this.stopPolling())},enumerable:!0,configurable:!0}),e.prototype.handleGamepadConnected=function(e){var t=new i(e);"unknown"!==t.deviceType&&(this.inputDevices[e.index]=t,this.input.gamepad.devices.add(t))},e.prototype.startPolling=function(){var e=this;null==this.frameTask&&(this.frameTask=n.addFrameTask({update:function(){return e.readGamepadState()}}))},e.prototype.stopPolling=function(){null!=this.frameTask&&(this.frameTask.remove(),this.frameTask=null,this.latestUpdate=new Array)},e.prototype.readGamepadState=function(){var e=this,t=document.hasFocus(),a=this.element.contains(document.activeElement),n="document"===this.input.gamepad.enabledFocusMode&&!t||"view"===this.input.gamepad.enabledFocusMode&&!a;this.forEachGamepad(function(t){var a=e.inputDevices[t.index];if(a){var i=e.latestUpdate[t.index],s=d.extractState(a),o=n||d.stateIdle(s);if(i){if(i.timestamp===t.timestamp)return;if(!i.active&&o)return;if(d.stateEqual(i.state,s))return}e.emitGamepadEvent(t,s,!o)}})},e.prototype.forEachGamepad=function(e){for(var t=window.navigator.getGamepads(),a=0;a<t.length;a++){var n=t[a];this.validate(n)&&e(n)}},e.prototype.emitGamepadEvent=function(e,t,a){var n=this.latestUpdate[e.index],i=n&&n.active;if(i||a){var d=!i&&a?"start":i&&a?"update":"end";this.latestUpdate[e.index]={timestamp:e.timestamp,state:t,active:a},this.callback&&this.callback({device:this.inputDevices[e.index],state:t,action:d})}},e.prototype.validate=function(e){if(!e)return!1;if(!e.connected)return!1;for(var t=0;t<e.axes.length;t++)if(isNaN(e.axes[t]))return!1;return!0},e}();t.GamepadSource=s});