// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dijit/Destroyable","../DelayUtil"],(function(e,t,i,s,n,r){var o=e(n,{_lastPromise:null,_isFinished:!1,_isDestroyed:!1,_lastDfd:null,_lastResult:null,constructor:function(e){t.mixin(this,e)},add:function(e,t){t=t||{};var n=this;if(!this._isDestroyed){this._lastDfd||(this.onStarted(),this._lastDfd=new i),this._isFinished=!1;var o=function(){var o=function(){if(!n._isDestroyed)try{return"function"==typeof e?e():e}catch(e){return(new i).reject(e)}},l=t.delayBefore>=0?function(){return r.delay(o,t.delayBefore)}:o;return(t.delayAfter>=0?function(){return s(l(),(function(e){return r.delay((function(){return e}),t.delayAfter)}))}:l)()};!this._lastPromise||this._lastPromise.isFulfilled()?this._lastPromise=s(o()):this._lastPromise=s(this._lastPromise).then(o);var l=this._lastPromise;return s(l,(function(e){l===n._lastPromise&&(n._isDestroyed||n._isFinished||l&&!l.isFulfilled()||(n._isFinished=!0,n._lastDfd.resolve(e),n._lastResult=e,n._lastDfd=null,n.onFinished(e)))}),this._lastDfd.reject),this.getPromise()}},getPromise:function(){return this._isDestroyed?null:this._lastDfd&&this._lastDfd.promise||this._lastResult},isFinished:function(){return this._isFinished},isDestroyed:function(){return this._isDestroyed},destroy:function(){this._isDestroyed=!0},onStarted:function(){},onFinished:function(e){}});return o.executeFunctions=function(e,t,i){i=i||{};var n=new o,r=[];return e.forEach((function(e,i){n.add((function(){return s(e(),(function(e){return r.push(e),e}))}),{delayBefore:0===i?void 0:t})})),i.onQueueReady&&i.onQueueReady(n),s(n.getPromise(),(function(e){return i.collectResults?r:e}))},o.processArrayInBatches=function(e,t){e=e.slice();var s=new i;return function i(){if(e.length){for(var n=[],r=0;r<t.batchSize&&e.length;r++)n.push(e.shift());t.processBatch?t.callback(n):n.forEach(t.callback),setTimeout(i,t.timeout||0)}else s.resolve()}(),s.promise},o}));