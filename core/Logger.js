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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./has","./string","@dojo/framework/shim/Promise"],(function(e,t,r,o){var n={info:0,warn:1,error:2},i=function(){function e(t){void 0===t&&(t={}),this._loggedMessages={error:new Map,warn:new Map,info:new Map},this.module=t.module||"",this.writer=t.writer||null,this.level=t.level||null,null!=t.enabled&&(this.enabled=!!t.enabled),e._loggers[this.module]=this;var r=this.module.lastIndexOf(".");-1!==r&&(this.parent=e.getLogger(this.module.slice(0,r)))}return e.prototype.log=function(t,r){for(var o=[],n=2;n<arguments.length;n++)o[n-2]=arguments[n];if(this._isEnabled()&&this._matchLevel(t)){if("always"!==r&&!e._throttlingDisabled){var i=this._argsToKey(o),l=this._loggedMessages[t].get(i);if("once"===r&&null!=l||"oncePerTick"===r&&l>=e._tickCounter)return;this._loggedMessages[t].set(i,e._tickCounter),e._scheduleTickCounterIncrement()}var c=this._inheritedWriter();c&&c.apply(void 0,[t,this.module].concat(o))}},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["error","always"].concat(e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["warn","always"].concat(e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["info","always"].concat(e))},e.prototype.errorOnce=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["error","once"].concat(e))},e.prototype.warnOnce=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["warn","once"].concat(e))},e.prototype.infoOnce=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["info","once"].concat(e))},e.prototype.errorOncePerTick=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["error","oncePerTick"].concat(e))},e.prototype.warnOncePerTick=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["warn","oncePerTick"].concat(e))},e.prototype.infoOncePerTick=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["info","oncePerTick"].concat(e))},e.prototype.getLogger=function(t){return e.getLogger(this.module+"."+t)},Object.defineProperty(e,"test",{get:function(){return{resetLoggers:function(t){void 0===t&&(t={});var r=e._loggers;return e._loggers=t,r},set throttlingDisabled(t){e._throttlingDisabled=t}}},enumerable:!0,configurable:!0}),e.getLogger=function(t){var r=e._loggers[t];return r||(r=new e({module:t})),r},e.prototype._parentWithMember=function(e,t){for(var r=this;r&&null==r[e];)r=r.parent;return r?r[e]:t},e.prototype._inheritedWriter=function(){return this._parentWithMember("writer",this._consoleWriter)},e.prototype._consoleWriter=function(e,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];console[e].apply(console,["["+t+"]"].concat(r))},e.prototype._matchLevel=function(e){return n[this._parentWithMember("level","error")]<=n[e]},e.prototype._isEnabled=function(){return this._parentWithMember("enabled",!0)},e.prototype._argsToKey=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=function(e,t){return"object"!=typeof t||Array.isArray(t)?t:"[Object]"};return o.numericHash(JSON.stringify(e,r))},e._scheduleTickCounterIncrement=function(){e._tickCounterScheduled||(e._tickCounterScheduled=!0,Promise.resolve().then((function(){e._tickCounter++,e._tickCounterScheduled=!1})))},e._loggers={},e._tickCounter=0,e._tickCounterScheduled=!1,e._throttlingDisabled=!1,e}(),l=i.getLogger("esri");return r("dojo-debug-messages")?l.level="info":l.level="warn",i}));