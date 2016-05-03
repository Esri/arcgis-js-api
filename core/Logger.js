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

define(["require","exports"],function(){var e={info:0,warn:1,error:2},t=function(){function t(e){void 0===e&&(e={}),this.module=e.module||"",this.writer=e.writer||null,this.level=e.level||null,null!=e.enabled&&(this.enabled=!!e.enabled),t._loggers[this.module]=this;var r=this.module.lastIndexOf(".");-1!==r&&(this.parent=t.getLogger(this.module.slice(0,r)))}return t.prototype.log=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(this._isEnabled()&&this._matchLevel(e)){var n=this._inheritedWriter();n&&n.apply(void 0,[e,this.module].concat(t))}},t.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];this.log.apply(this,["error"].concat(e))},t.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];this.log.apply(this,["warn"].concat(e))},t.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];this.log.apply(this,["info"].concat(e))},t.prototype.getLogger=function(e){return t.getLogger(this.module+"."+e)},t.getLogger=function(e){var r=t._loggers[e];return r||(r=new t({module:e})),r},t.prototype._parentWithMember=function(e,t){for(var r=this;r&&null==r[e];)r=r.parent;return r?r[e]:t},t.prototype._inheritedWriter=function(){return this._parentWithMember("writer",this._consoleWriter)},t.prototype._consoleWriter=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];console[e].apply(console,["["+t+"]"].concat(r))},t.prototype._matchLevel=function(t){return e[this._parentWithMember("level","error")]<=e[t]},t.prototype._isEnabled=function(){return this._parentWithMember("enabled",!0)},t._loggers={},t}(),r=t.getLogger("esri");return r.level="error",t});