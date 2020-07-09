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

define(["require","exports","tslib","./has","./string","@dojo/framework/shim/Promise"],(function(e,r,t,o,n){var i={info:0,warn:1,error:2},s=function(){function e(r){void 0===r&&(r={}),this._loggedMessages={error:new Map,warn:new Map,info:new Map},this.module=r.module||"",this.writer=r.writer||null,this.level=r.level||null,null!=r.enabled&&(this.enabled=!!r.enabled),e._loggers[this.module]=this;var t=this.module.lastIndexOf(".");-1!==t&&(this.parent=e.getLogger(this.module.slice(0,t)))}return e.prototype.log=function(r,o){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(this._isEnabled()&&this._matchLevel(r)){if("always"!==o&&!e._throttlingDisabled){var s=this._argsToKey(n),a=this._loggedMessages[r].get(s);if("once"===o&&null!=a||"oncePerTick"===o&&a>=e._tickCounter)return;this._loggedMessages[r].set(s,e._tickCounter),e._scheduleTickCounterIncrement()}var l=this._inheritedWriter();l&&l.apply(void 0,t.__spreadArrays([r,this.module],n))}},e.prototype.error=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this.log.apply(this,t.__spreadArrays(["error","always"],e))},e.prototype.warn=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this.log.apply(this,t.__spreadArrays(["warn","always"],e))},e.prototype.info=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this.log.apply(this,t.__spreadArrays(["info","always"],e))},e.prototype.errorOnce=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this.log.apply(this,t.__spreadArrays(["error","once"],e))},e.prototype.warnOnce=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this.log.apply(this,t.__spreadArrays(["warn","once"],e))},e.prototype.infoOnce=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this.log.apply(this,t.__spreadArrays(["info","once"],e))},e.prototype.errorOncePerTick=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this.log.apply(this,t.__spreadArrays(["error","oncePerTick"],e))},e.prototype.warnOncePerTick=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this.log.apply(this,t.__spreadArrays(["warn","oncePerTick"],e))},e.prototype.infoOncePerTick=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this.log.apply(this,t.__spreadArrays(["info","oncePerTick"],e))},e.prototype.getLogger=function(r){return e.getLogger(this.module+"."+r)},Object.defineProperty(e,"test",{get:function(){return{resetLoggers:function(r){void 0===r&&(r={});var t=e._loggers;return e._loggers=r,t},set throttlingDisabled(r){e._throttlingDisabled=r}}},enumerable:!0,configurable:!0}),e.getLogger=function(r){var t=e._loggers[r];return t||(t=new e({module:r})),t},e.prototype._parentWithMember=function(e,r){for(var t=this;t&&null==t[e];)t=t.parent;return t?t[e]:r},e.prototype._inheritedWriter=function(){return this._parentWithMember("writer",this._consoleWriter)},e.prototype._consoleWriter=function(e,r){for(var o=[],n=2;n<arguments.length;n++)o[n-2]=arguments[n];console[e].apply(console,t.__spreadArrays(["["+r+"]"],o))},e.prototype._matchLevel=function(e){return i[this._parentWithMember("level","error")]<=i[e]},e.prototype._isEnabled=function(){return this._parentWithMember("enabled",!0)},e.prototype._argsToKey=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=function(e,r){return"object"!=typeof r||Array.isArray(r)?r:"[Object]"};return n.numericHash(JSON.stringify(e,t))},e._scheduleTickCounterIncrement=function(){e._tickCounterScheduled||(e._tickCounterScheduled=!0,Promise.resolve().then((function(){e._tickCounter++,e._tickCounterScheduled=!1})))},e._loggers={},e._tickCounter=0,e._tickCounterScheduled=!1,e._throttlingDisabled=!1,e}(),a=s.getLogger("esri");return o("esri-debug-messages")?a.level="info":a.level="warn",s}));