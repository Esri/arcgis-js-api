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

define(["require","exports","../../../core/tsSupport/extendsHelper","../support/FeatureSet","../support/IdSet","../support/OrderbyClause","../../../core/promiseUtils"],function(e,t,r,n,i,u,a){var o=function(e){function t(t){var r=e.call(this,t)||this;return r._orderbyclause=null,r.declaredClass="esri.arcade.featureset.actions.OrderBy",r._maxProcessing=100,r._orderbyclause=t.orderbyclause,r._parent=t.parentfeatureset,r}return r(t,e),t.prototype._getSet=function(e){var t=this;return null===this._wset?this._ensureLoaded().then(function(){return t._getFilteredSet("",null,null,t._orderbyclause,e)}).then(function(r){return t._checkCancelled(e),t._wset=r,t._wset}):a.resolve(this._wset)},t.prototype.manualOrderSet=function(e,t){var r=this;return this.getIdColumnDictionary(e,[],-1,t).then(function(e){r._orderbyclause.order(e);for(var t=new i([],[],!0,null),n=0;n<e.length;n++)t._known.push(e[n].id);return t})},t.prototype.getIdColumnDictionary=function(e,t,r,n){var i=this;if(r<e._known.length-1){var u=this._maxQueryRate();return"GETPAGES"===e._known[r+1]?this._parent._expandPagedSet(e,u,0,0,n).then(function(u){return i.getIdColumnDictionary(e,t,r,n)}):this._parent._getFeature(e,e._known[r+1],n).then(function(u){return r+=1,i._checkCancelled(n),t.push({id:e._known[r],feature:u}),i.getIdColumnDictionary(e,t,r,n)})}return e._candidates.length>0?this._refineSetBlock(e,this._maxProcessingRate(),n).then(function(){return i._checkCancelled(n),i.getIdColumnDictionary(e,t,r,n)}):a.resolve(t)},t.prototype._isInFeatureSet=function(e){return this._parent._isInFeatureSet(e)},t.prototype._getFeatures=function(e,t,r,n){return this._parent._getFeatures(e,t,r,n)},t.prototype._featureFromCache=function(e){if(void 0===this._featureCache[e]){var t=this._parent._featureFromCache(e);if(void 0===t)return;return null===t?null:(this._featureCache[e]=t,t)}return this._featureCache[e]},t.prototype._fetchAndRefineFeatures=function(e,t,r){return a.reject(new Error("Fetch and Refine should not be called in this featureset"))},t.prototype._getFilteredSet=function(e,t,r,n,u){var a=this;return this._ensureLoaded().then(function(){return a._parent._getFilteredSet(e,t,r,null===n?a._orderbyclause:n,u)}).then(function(e){a._checkCancelled(u);var n;n=new i(e._candidates.slice(0),e._known.slice(0),e._ordered,a._clonePageDefinition(e.pagesDefinition));var o=!0;return e._candidates.length>0&&(o=!1),!1===n._ordered?a.manualOrderSet(n,u).then(function(e){return!1===o&&(null===t&&null===r||(e=new i(e._candidates.slice(0).concat(e._known.slice(0)),[],e._ordered,a._clonePageDefinition(e.pagesDefinition)))),e}):n})},t.prototype.arcadeScriptStep=function(e,t,r){var n=this.arcadeAssignNextScriptStepIdentifiers(r),i=this._orderbyclause.constructClause();return"var "+n.newFeatureSet+" = "+this.bigDataCachePipeline("orderby( "+n.currentFeatureSet+',"'+i+'")')+";"},t}(n);return n._featuresetFunctions.orderBy=function(e){return""===e?this:new o({parentfeatureset:this,orderbyclause:new u(e)})},o});