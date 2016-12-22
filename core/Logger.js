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

define(["require","exports","dojo/has"],function(e,t,r){var n={info:0,warn:1,error:2},o=function(){function e(t){void 0===t&&(t={}),this.module=t.module||"",this.writer=t.writer||null,this.level=t.level||null,null!=t.enabled&&(this.enabled=!!t.enabled),e._loggers[this.module]=this;var r=this.module.lastIndexOf(".");-1!==r&&(this.parent=e.getLogger(this.module.slice(0,r)))}return e.prototype.log=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(this._isEnabled()&&this._matchLevel(e)){var n=this._inheritedWriter();n&&n.apply(void 0,[e,this.module].concat(t))}},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];this.log.apply(this,["error"].concat(e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];this.log.apply(this,["warn"].concat(e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];this.log.apply(this,["info"].concat(e))},e.prototype.getLogger=function(t){return e.getLogger(this.module+"."+t)},e.getLogger=function(t){var r=e._loggers[t];return r||(r=new e({module:t})),r},e.prototype._parentWithMember=function(e,t){for(var r=this;r&&null==r[e];)r=r.parent;return r?r[e]:t},e.prototype._inheritedWriter=function(){return this._parentWithMember("writer",this._consoleWriter)},e.prototype._consoleWriter=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];console[e].apply(console,["["+t+"]"].concat(r))},e.prototype._matchLevel=function(e){return n[this._parentWithMember("level","error")]<=n[e]},e.prototype._isEnabled=function(){return this._parentWithMember("enabled",!0)},e._loggers={},e}(),i=o.getLogger("esri");return r("dojo-debug-messages")?i.level="info":i.level="warn",o});