// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../languageUtils","../support/FeatureSet","../support/IdSet","../support/OrderbyClause","../../../core/promiseUtils"],function(e,t,n,r,i,u,o,a){var s=function(e){function t(t){var n=e.call(this,t)||this;return n._orderbyclause=null,n.declaredClass="esri.arcade.featureset.actions.OrderBy",n._maxProcessing=100,n._orderbyclause=t.orderbyclause,n._parent=t.parentfeatureset,n}return n(t,e),t.prototype._getSet=function(e){var t=this;return null===this._wset?this._ensureLoaded().then(function(){return t._getFilteredSet("",null,null,t._orderbyclause,e)}).then(function(n){return t._checkCancelled(e),t._wset=n,t._wset}):a.resolve(this._wset)},t.prototype.manualOrderSet=function(e,t){var n=this;return this.getIdColumnDictionary(e,[],-1,t).then(function(e){n._orderbyclause.order(e);for(var t=new u([],[],!0,null),r=0;r<e.length;r++)t._known.push(e[r].id);return t})},t.prototype.getIdColumnDictionary=function(e,t,n,i){var u=this;if(n<e._known.length-1){var o=this._maxQueryRate();if("GETPAGES"===e._known[n+1])return r.tick(this._parent._expandPagedSet(e,o,0,0,i)).then(function(r){return u.getIdColumnDictionary(e,t,n,i)});for(var s=n+1,c=[];s<e._known.length&&"GETPAGES"!==e._known[s];)c.push(e._known[s]),s++;return n+=c.length,r.tick(this._parent._getFeatureBatch(c,i)).then(function(r){u._checkCancelled(i);for(var o=0,a=r;o<a.length;o++){var s=a[o];t.push({id:s.attributes[u.objectIdField],feature:s})}return u.getIdColumnDictionary(e,t,n,i)})}return e._candidates.length>0?r.tick(this._refineSetBlock(e,this._maxProcessingRate(),i)).then(function(){return u._checkCancelled(i),u.getIdColumnDictionary(e,t,n,i)}):a.resolve(t)},t.prototype._isInFeatureSet=function(e){return this._parent._isInFeatureSet(e)},t.prototype._getFeatures=function(e,t,n,r){return this._parent._getFeatures(e,t,n,r)},t.prototype._featureFromCache=function(e){if(void 0===this._featureCache[e]){var t=this._parent._featureFromCache(e);if(void 0===t)return;return null===t?null:(this._featureCache[e]=t,t)}return this._featureCache[e]},t.prototype._fetchAndRefineFeatures=function(e,t,n){return a.reject(new Error("Fetch and Refine should not be called in this featureset"))},t.prototype._getFilteredSet=function(e,t,n,r,i){var o=this;return this._ensureLoaded().then(function(){return o._parent._getFilteredSet(e,t,n,null===r?o._orderbyclause:r,i)}).then(function(e){o._checkCancelled(i);var r;r=new u(e._candidates.slice(0),e._known.slice(0),e._ordered,o._clonePageDefinition(e.pagesDefinition));var a=!0;return e._candidates.length>0&&(a=!1),!1===r._ordered?o.manualOrderSet(r,i).then(function(e){return!1===a&&(null===t&&null===n||(e=new u(e._candidates.slice(0).concat(e._known.slice(0)),[],e._ordered,o._clonePageDefinition(e.pagesDefinition)))),e}):r})},t}(i);return i._featuresetFunctions.orderBy=function(e){return""===e?this:new s({parentfeatureset:this,orderbyclause:new o(e)})},s});