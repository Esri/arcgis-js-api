// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","dojo/has"],(function(e,t,r){var o={info:0,warn:1,error:2},n=function(){function e(t){void 0===t&&(t={}),this.module=t.module||"",this.writer=t.writer||null,this.level=t.level||null,null!=t.enabled&&(this.enabled=!!t.enabled),e._loggers[this.module]=this;var r=this.module.lastIndexOf(".");-1!==r&&(this.parent=e.getLogger(this.module.slice(0,r)))}return e.prototype.log=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(this._isEnabled()&&this._matchLevel(e)){var o=this._inheritedWriter();o&&o.apply(void 0,[e,this.module].concat(t))}},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["error"].concat(e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["warn"].concat(e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log.apply(this,["info"].concat(e))},e.prototype.getLogger=function(t){return e.getLogger(this.module+"."+t)},e.getLogger=function(t){var r=e._loggers[t];return r||(r=new e({module:t})),r},e.prototype._parentWithMember=function(e,t){for(var r=this;r&&null==r[e];)r=r.parent;return r?r[e]:t},e.prototype._inheritedWriter=function(){return this._parentWithMember("writer",this._consoleWriter)},e.prototype._consoleWriter=function(e,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];console[e].apply(console,["["+t+"]"].concat(r))},e.prototype._matchLevel=function(e){return o[this._parentWithMember("level","error")]<=o[e]},e.prototype._isEnabled=function(){return this._parentWithMember("enabled",!0)},e._loggers={},e}(),i=n.getLogger("esri");return r("dojo-debug-messages")?i.level="info":i.level="warn",n}));