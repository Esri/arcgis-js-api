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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(i,s){Object.defineProperty(s,"__esModule",{value:!0});var t=function(){function i(i){void 0===i&&(i=null),this._cancelCallback=i,this._callbacks=[],this._errbacks=[],this._iscancelled=!1,this._isdone=!1,this._iserr=!1,this.result=null,this.error=null}return i.prototype.cancel=function(i){this._iscancelled||this._iserr||this._isdone||(this._callbacks=[],this._errbacks=[],this._iscancelled=!0,this._cancelCallback&&this._cancelCallback(i))},i.prototype.then=function(i,s,t){if(void 0===t&&(t=null),!this._iscancelled){if(this._isdone)return void i.call(t,this.result);if(this._iserr&&s)return void s.call(t,this.result);this._callbacks.push(t?i.bind(t):i),s&&this._errbacks.push(t?s.bind(t):s)}},i.prototype.resolve=function(i){if(void 0===i&&(i=null),!(this._iscancelled||this._iserr||this._isdone)){this.result=i,this._isdone=!0;for(var s=0,t=this._callbacks;s<t.length;s++){(0,t[s])(i)}this._callbacks=[],this._errbacks=[]}},i.prototype.reject=function(i){if(void 0===i&&(i=null),!(this._iscancelled||this._iserr||this._isdone)){this.error=i,this._iserr=!0;for(var s=0,t=this._errbacks;s<t.length;s++){(0,t[s])(i)}this._callbacks=[],this._errbacks=[]}},i.prototype.isRejected=function(){return this._iserr},i.prototype.isFulfilled=function(){return this._isdone||this._iserr},i.prototype.isResolved=function(){return this._isdone},i.prototype.isCancelled=function(){return this._iscancelled},i}();s.PromiseLightweight=t,s.default=t});