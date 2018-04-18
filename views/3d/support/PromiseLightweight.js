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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

/*
 *  Copyright 2012-2013 (c) Pierre Duquesne <stackp@online.fr>
 *  Licensed under the New BSD License.
 *  https://github.com/stackp/promisejs
 */

!function(t){function e(t){this._callbacks=[],this._errbacks=[],this._cancelCallback=t,this._iscancelled=!1,this._isdone=!1,this._iserr=!1}function n(t){function n(t,e){return function(){e&&(l=!0),r+=1,c[t]=Array.prototype.slice.call(arguments),r===s&&(l?i.reject():i.done(c))}}for(var i=new e,s=t.length,r=0,c=[],l=!1,o=0;o<s;o++)t[o].then(n(o,!1),n(o,!0));return 0===t.length&&i.done(),i}function i(t,n){var s=new e;return 0===t.length?s.done.apply(s,n):t[0].apply(null,n).then(function(){t.splice(0,1),i(t,arguments).then(function(){s.done.apply(s,arguments)})}),s}e.prototype.cancel=function(t){this._callbacks=[],this._errbacks=[],this._iscancelled=!0,this._cancelCallback&&this._cancelCallback(t)},e.prototype.then=function(t,e,n){var i;if(!this._iscancelled)return this._isdone?i=t.apply(n,this.result):this._iserr&&e?i=e.apply(n,this.result):(this._callbacks.push(function(){return t.apply(n,arguments)}),e&&this._errbacks.push(function(){return e.apply(n,arguments)})),i},e.prototype.done=function(){this.result=arguments,this._isdone=!0;for(var t=0;t<this._callbacks.length;t++)this._callbacks[t].apply(null,arguments);this._callbacks=[],this._errbacks=[]},e.prototype.resolve=e.prototype.done,e.prototype.reject=function(){if(!this._iscancelled){this.result=arguments,this._iserr=!0;for(var t=0;t<this._errbacks.length;t++)this._errbacks[t].apply(null,arguments);this._callbacks=[],this._errbacks=[]}},e.prototype.isRejected=function(){return this._iserr},e.prototype.isFulfilled=function(){return this._isdone||this._iserr},e.prototype.isResolved=function(){return this._isdone},e.prototype.isCancelled=function(){return this._iscancelled};var s={Promise:e,join:n,chain:i};"function"==typeof define&&define.amd?define([],function(){return s}):t.promise=s}(this);