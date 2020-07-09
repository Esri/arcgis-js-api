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

var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();define(["require","exports","../../languageUtils","../support/FeatureSet","../support/IdSet","../support/OrderbyClause","../../polyfill/promiseUtils"],(function(e,t,n,r,o,i,u){"use strict";var a=function(e){function t(t){var n=e.call(this,t)||this;return n._orderbyclause=null,n.declaredClass="esri.arcade.featureset.actions.OrderBy",n._maxProcessing=100,n._orderbyclause=t.orderbyclause,n._parent=t.parentfeatureset,n}return __extends(t,e),t.prototype._getSet=function(e){var t=this;return null===this._wset?this._ensureLoaded().then((function(){return t._getFilteredSet("",null,null,t._orderbyclause,e)})).then((function(n){return t._checkCancelled(e),t._wset=n,t._wset})):u.resolve(this._wset)},t.prototype.manualOrderSet=function(e,t){var n=this;return this.getIdColumnDictionary(e,[],-1,t).then((function(e){n._orderbyclause.order(e);for(var t=new o([],[],!0,null),r=0;r<e.length;r++)t._known.push(e[r].id);return t}))},t.prototype.getIdColumnDictionary=function(e,t,r,o){var i=this;if(r<e._known.length-1){var a=this._maxQueryRate();if("GETPAGES"===e._known[r+1])return n.tick(this._parent._expandPagedSet(e,a,0,0,o)).then((function(){return i.getIdColumnDictionary(e,t,r,o)}));for(var s=r+1,c=[];s<e._known.length&&"GETPAGES"!==e._known[s];)c.push(e._known[s]),s++;return r+=c.length,n.tick(this._parent._getFeatureBatch(c,o)).then((function(n){i._checkCancelled(o);for(var u=0,a=n;u<a.length;u++){var s=a[u];t.push({id:s.attributes[i.objectIdField],feature:s})}return i.getIdColumnDictionary(e,t,r,o)}))}return e._candidates.length>0?n.tick(this._refineSetBlock(e,this._maxProcessingRate(),o)).then((function(){return i._checkCancelled(o),i.getIdColumnDictionary(e,t,r,o)})):u.resolve(t)},t.prototype._isInFeatureSet=function(e){return this._parent._isInFeatureSet(e)},t.prototype._getFeatures=function(e,t,n,r){return this._parent._getFeatures(e,t,n,r)},t.prototype._featureFromCache=function(e){if(void 0===this._featureCache[e]){var t=this._parent._featureFromCache(e);if(void 0===t)return;return null===t?null:(this._featureCache[e]=t,t)}return this._featureCache[e]},t.prototype._fetchAndRefineFeatures=function(){return u.reject(new Error("Fetch and Refine should not be called in this featureset"))},t.prototype._getFilteredSet=function(e,t,n,r,i){var u=this;return this._ensureLoaded().then((function(){return u._parent._getFilteredSet(e,t,n,null===r?u._orderbyclause:r,i)})).then((function(e){var r;u._checkCancelled(i),r=new o(e._candidates.slice(0),e._known.slice(0),e._ordered,u._clonePageDefinition(e.pagesDefinition));var a=!0;return e._candidates.length>0&&(a=!1),!1===r._ordered?u.manualOrderSet(r,i).then((function(e){return!1===a&&(null===t&&null===n||(e=new o(e._candidates.slice(0).concat(e._known.slice(0)),[],e._ordered,u._clonePageDefinition(e.pagesDefinition)))),e})):r}))},t}(r);return r._featuresetFunctions.orderBy=function(e){return""===e?this:new a({parentfeatureset:this,orderbyclause:new i(e)})},a}));