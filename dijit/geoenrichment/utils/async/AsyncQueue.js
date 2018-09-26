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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","dijit/Destroyable","../DelayUtil"],function(t,e,i,s,n,r){var o=t(n,{_lastPromise:null,_isFinished:!1,_isDestroyed:!1,_lastDfd:null,_lastResult:null,constructor:function(t){e.mixin(this,t)},add:function(t,e){function n(){if(!o._isDestroyed){var t;try{t=l()}catch(t){return(new i).reject(t)}return s(t,function(t){return void 0!==e.delayAfter?r.delay(function(){return t},e.delayAfter):t})}}e=e||{};var o=this;if(!this._isDestroyed){this._lastDfd||(this.onStarted(),this._lastDfd=new i),this._isFinished=!1;var l="function"==typeof t?t:function(){return t};if(void 0!==e.delayBefore){var a=l;l=function(){return r.delay(a,e.delayBefore)}}!this._lastPromise||this._lastPromise.isFulfilled()?this._lastPromise=s(n()):this._lastPromise=s(this._lastPromise).then(n);var d=this._lastPromise;return s(d,function(t){d===o._lastPromise&&(o._isDestroyed||o._isFinished||d&&!d.isFulfilled()||(o._isFinished=!0,o._lastDfd.resolve(t),o._lastResult=t,o._lastDfd=null,o.onFinished(t)))},this._lastDfd.reject),this._lastDfd&&this._lastDfd.promise}},getPromise:function(){return this._isDestroyed?null:this._lastDfd&&this._lastDfd.promise||this._lastResult},destroy:function(){this._isDestroyed=!0},isDestroyed:function(){return this._isDestroyed},onStarted:function(){},onFinished:function(t){}});return o.executeFunctions=function(t,e){var i=new o;return t.forEach(function(t,s){i.add(t,{delayBefore:0===s?void 0:e})}),i.getPromise()},o.processArrayInBatches=function(t,e){function s(){if(!t.length)return void n.resolve();for(var i=[],r=0;r<e.batchSize&&t.length;r++)i.push(t.shift());i.forEach(e.callback),setTimeout(s,e.timeout||0)}t=t.slice();var n=new i;return s(),n.promise},o});