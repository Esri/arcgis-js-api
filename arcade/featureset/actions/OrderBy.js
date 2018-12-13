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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","dojo/Deferred","../support/FeatureSet","../support/IdSet","../support/OrderbyClause","../support/shared"],function(e,t,r,n,a,c,o,i){var s=function(e){function t(t){var r=e.call(this,t)||this;return r._orderbyclause=null,r.declaredClass="esri.arcade.featureset.actions.OrderBy",r._maxProcessing=100,r._orderbyclause=t.orderbyclause,r._parent=t.parentfeatureset,r}return r(t,e),t.prototype._getSet=function(e){var t=this,r=new n;return null===this._wset?this._ensureLoaded().then(i.callback(function(){t._getFilteredSet("",null,null,t._orderbyclause,e).then(i.callback(function(n){t._checkCancelled(e),t._wset=n,r.resolve(t._wset)},r),i.errback(r))},r),i.errback(r)):r.resolve(this._wset),r.promise},t.prototype.manualOrderSet=function(e,t){var r=this,a=new n;return this.getIdColumnDictionary(e,[],-1,t).then(i.callback(function(e){r._orderbyclause.order(e);for(var t=new c([],[],!0,null),n=0;n<e.length;n++)t._known.push(e[n].id);a.resolve(t)},a),i.errback(a)),a.promise},t.prototype.getIdColumnDictionary=function(e,t,r,a){var c=this,o=new n;if(r<e._known.length-1){var s=this._maxQueryRate();"GETPAGES"===e._known[r+1]?this._parent._expandPagedSet(e,s,0,0,a).then(i.callback(function(n){c.getIdColumnDictionary(e,t,r,a).then(i.callback(function(e){o.resolve(e)},o),i.errback(o))},o),i.errback(o)):this._parent._getFeature(e,e._known[r+1],a).then(i.callback(function(n){r+=1,c._checkCancelled(a),t.push({id:e._known[r],feature:n}),c.getIdColumnDictionary(e,t,r,a).then(i.callback(function(e){o.resolve(e)},o),i.errback(o))},o),i.errback(o))}else e._candidates.length>0?this._refineSetBlock(e,this._maxProcessingRate(),a).then(i.callback(function(){c._checkCancelled(a),c.getIdColumnDictionary(e,t,r,a).then(i.callback(function(e){o.resolve(e)},o),i.errback(o))},o),i.errback(o)):o.resolve(t);return o.promise},t.prototype._isInFeatureSet=function(e){return this._parent._isInFeatureSet(e)},t.prototype._getFeatures=function(e,t,r,n){return this._parent._getFeatures(e,t,r,n)},t.prototype._featureFromCache=function(e){if(void 0===this._featureCache[e]){var t=this._parent._featureFromCache(e);if(void 0===t)return;return null===t?null:(this._featureCache[e]=t,t)}return this._featureCache[e]},t.prototype._fetchAndRefineFeatures=function(e,t,r){var a=new n;return a.reject(new Error("Fetch and Refine should not be called in this featureset")),a.promise},t.prototype._getFilteredSet=function(e,t,r,a,o){var s=this,l=new n;return this._ensureLoaded().then(i.callback(function(){s._parent._getFilteredSet(e,t,r,null===a?s._orderbyclause:a,o).then(i.callback(function(e){s._checkCancelled(o);var n;n=new c(e._candidates.slice(0),e._known.slice(0),e._ordered,s._clonePageDefinition(e.pagesDefinition));var a=!0;e._candidates.length>0&&(a=!1),!1===n._ordered?s.manualOrderSet(n,o).then(i.callback(function(e){!1===a&&(null===t&&null===r||(e=new c(e._candidates.slice(0).concat(e._known.slice(0)),[],e._ordered,s._clonePageDefinition(e.pagesDefinition)))),l.resolve(e)},l),i.errback(l)):l.resolve(n)},l),i.errback(l))},l),i.errback(l)),l.promise},t.prototype.arcadeScriptStep=function(e,t,r){var n=this.arcadeAssignNextScriptStepIdentifiers(r),a=this._orderbyclause.constructClause();return"var "+n.newFeatureSet+" = "+this.bigDataCachePipeline("orderby( "+n.currentFeatureSet+',"'+a+'")')+";"},t}(a);return a._featuresetFunctions.orderBy=function(e){return""===e?this:new s({parentfeatureset:this,orderbyclause:new o(e)})},s});