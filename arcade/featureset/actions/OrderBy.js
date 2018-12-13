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

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();define(["require","exports","dojo/Deferred","../support/FeatureSet","../support/IdSet","../support/OrderbyClause","../support/shared"],function(e,t,r,n,a,o,c){"use strict";var i=function(e){function t(t){var r=e.call(this,t)||this;return r._orderbyclause=null,r.declaredClass="esri.arcade.featureset.actions.OrderBy",r._maxProcessing=100,r._orderbyclause=t.orderbyclause,r._parent=t.parentfeatureset,r}return __extends(t,e),t.prototype._getSet=function(e){var t=this,n=new r;return null===this._wset?this._ensureLoaded().then(c.callback(function(){t._getFilteredSet("",null,null,t._orderbyclause,e).then(c.callback(function(r){t._checkCancelled(e),t._wset=r,n.resolve(t._wset)},n),c.errback(n))},n),c.errback(n)):n.resolve(this._wset),n.promise},t.prototype.manualOrderSet=function(e,t){var n=this,o=new r;return this.getIdColumnDictionary(e,[],-1,t).then(c.callback(function(e){n._orderbyclause.order(e);for(var t=new a([],[],!0,null),r=0;r<e.length;r++)t._known.push(e[r].id);o.resolve(t)},o),c.errback(o)),o.promise},t.prototype.getIdColumnDictionary=function(e,t,n,a){var o=this,i=new r;if(n<e._known.length-1){var s=this._maxQueryRate();"GETPAGES"===e._known[n+1]?this._parent._expandPagedSet(e,s,0,0,a).then(c.callback(function(r){o.getIdColumnDictionary(e,t,n,a).then(c.callback(function(e){i.resolve(e)},i),c.errback(i))},i),c.errback(i)):this._parent._getFeature(e,e._known[n+1],a).then(c.callback(function(r){n+=1,o._checkCancelled(a),t.push({id:e._known[n],feature:r}),o.getIdColumnDictionary(e,t,n,a).then(c.callback(function(e){i.resolve(e)},i),c.errback(i))},i),c.errback(i))}else e._candidates.length>0?this._refineSetBlock(e,this._maxProcessingRate(),a).then(c.callback(function(){o._checkCancelled(a),o.getIdColumnDictionary(e,t,n,a).then(c.callback(function(e){i.resolve(e)},i),c.errback(i))},i),c.errback(i)):i.resolve(t);return i.promise},t.prototype._isInFeatureSet=function(e){return this._parent._isInFeatureSet(e)},t.prototype._getFeatures=function(e,t,r,n){return this._parent._getFeatures(e,t,r,n)},t.prototype._featureFromCache=function(e){if(void 0===this._featureCache[e]){var t=this._parent._featureFromCache(e);if(void 0===t)return;return null===t?null:(this._featureCache[e]=t,t)}return this._featureCache[e]},t.prototype._fetchAndRefineFeatures=function(e,t,n){var a=new r;return a.reject(new Error("Fetch and Refine should not be called in this featureset")),a.promise},t.prototype._getFilteredSet=function(e,t,n,o,i){var s=this,u=new r;return this._ensureLoaded().then(c.callback(function(){s._parent._getFilteredSet(e,t,n,null===o?s._orderbyclause:o,i).then(c.callback(function(e){s._checkCancelled(i);var r;r=new a(e._candidates.slice(0),e._known.slice(0),e._ordered,s._clonePageDefinition(e.pagesDefinition));var o=!0;e._candidates.length>0&&(o=!1),!1===r._ordered?s.manualOrderSet(r,i).then(c.callback(function(e){!1===o&&(null===t&&null===n||(e=new a(e._candidates.slice(0).concat(e._known.slice(0)),[],e._ordered,s._clonePageDefinition(e.pagesDefinition)))),u.resolve(e)},u),c.errback(u)):u.resolve(r)},u),c.errback(u))},u),c.errback(u)),u.promise},t.prototype.arcadeScriptStep=function(e,t,r){var n=this.arcadeAssignNextScriptStepIdentifiers(r),a=this._orderbyclause.constructClause();return"var "+n.newFeatureSet+" = "+this.bigDataCachePipeline("orderby( "+n.currentFeatureSet+',"'+a+'")')+";"},t}(n);return n._featuresetFunctions.orderBy=function(e){return""===e?this:new i({parentfeatureset:this,orderbyclause:new o(e)})},i});